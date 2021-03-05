import React, {
  useLayoutEffect,
  useImperativeHandle,
  forwardRef,
  useRef,
} from 'react';
import { useModel } from 'umi';
import { Chart } from '@antv/g2';
import { ChartCfg } from '@antv/g2/lib/interface';
import DataSet from '@antv/data-set';
import Styles from './style.less';

type Update = (params: {
  data?: any[];
  changeRender?: (chart: Chart, DataSet: DataSet) => void;
  callback?: () => void;
}) => void;

export interface ChartRef {
  update: Update;
}

interface Props extends ChartCfg {
  className?: string;
  container: string;
  init: (chart: Chart, DataSet: DataSet) => void;
}

const ChartComponents = forwardRef<ChartRef, Props>(
  ({ className, container, autoFit, width, height, padding, init }, ref) => {
    const ChartInt = useRef({} as Chart);
    const DataSetInt = useRef({} as DataSet);
    const { onResize } = useModel('global');
    /**
     * 更新数据 / 重新渲染
     * @description
     * @param {*} { data, callback, changeRender }
     * 使用 data 会直接更新渲染，不要同时使用 data 与 changeRender
     */
    const update: Update = async ({ data, callback, changeRender }) => {
      data && (await ChartInt.current.changeData(data));
      if (changeRender && !data)
        await changeRender(ChartInt.current, DataSetInt.current);
      callback?.();
    };

    useImperativeHandle(ref, () => ({
      update,
    }));

    // 绘制
    useLayoutEffect(() => {
      if (!(ChartInt.current instanceof Chart)) {
        DataSetInt.current = new DataSet();
        ChartInt.current = new Chart({
          renderer: 'canvas',
          container,
          autoFit,
          width,
          height,
          padding,
        });
        init(ChartInt.current, DataSetInt.current);
        autoFit && onResize();
      }
    }, []);
    return (
      <div
        id={container}
        className={`${Styles.container} ${className ?? ''}`}
      ></div>
    );
  },
);

export default ChartComponents;
