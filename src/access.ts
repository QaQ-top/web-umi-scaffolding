export interface Access {
  canReadFoo: boolean;
  canDeleteFoo: (value: any) => void;
  [k: string]: any;
}

export default function(initialState: InitInfo): Access {
  console.log(initialState);
  // const { initialState, loading, error, refresh, setInitialState } = useModel("@@initialState");
  // console.log(initialState)
  return {
    canReadFoo: true,
    // canUpdateFoo: initialState?.role === 44,
    canDeleteFoo: (foo: any) => {
      // return foo.ownerId === initialState?.userId;
    },
  };
}
