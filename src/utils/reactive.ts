import { useRef, useState, useEffect } from 'react';

export function creation<T>(factory: () => T, deps: any[]) {
  const { current } = useRef({
    deps,
    obj: undefined as undefined | T,
    initialized: false,
  });
  if (current.initialized === false || !depsAreSame(current.deps, deps)) {
    current.deps = deps;
    current.obj = factory();
    current.initialized = true;
  }
  return current.obj as T;
}

function depsAreSame(oldDeps: any[], deps: any[]): boolean {
  if (oldDeps === deps) return true;
  for (const i in oldDeps) {
    if (oldDeps[i] !== deps[i]) return false;
  }
  return true;
}

// k:v 原对象:代理过的对象
const proxyMap = new WeakMap();
// k:v 代理过的对象:原对象
const rawMap = new WeakMap();

function isObject(val: object): boolean {
  return typeof val === 'object' && val !== null;
}

function isFunction(val: object): boolean {
  return typeof val === 'function' && val !== null;
}

function observer<T extends object>(initialVal: T, cb: () => void): T {
  const existingProxy = proxyMap.get(initialVal);

  // 添加缓存 防止重新构建proxy
  if (existingProxy) {
    return existingProxy;
  }

  // 防止代理已经代理过的对象
  if (rawMap.has(initialVal)) {
    return initialVal;
  }

  const proxy = new Proxy<T>(initialVal, {
    get(target, key, receiver) {
      const res = Reflect.get(target, key, receiver);
      if (isObject(res)) {
        observer(res, cb);
      } else if (isFunction(res)) {
        return (Reflect.get(target, key) as Function).bind(receiver);
      } else {
        return Reflect.get(target, key);
      }
    },
    set(target, key, val) {
      const ret = Reflect.set(target, key, val);
      cb();
      return ret;
    },
  });

  proxyMap.set(initialVal, proxy);
  rawMap.set(proxy, initialVal);

  return proxy;
}

function reactive<S extends object>(initialState: S): S {
  const [, setFlag] = useState(Object.create(null));
  const stateRef = useRef<S>(initialState);

  const state = creation(() => {
    return observer(stateRef.current, () => {
      setFlag(Object.create(null));
    });
  }, []);

  return state;
}
export default reactive;
