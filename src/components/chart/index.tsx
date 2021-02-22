import React, {
  useLayoutEffect,
  useImperativeHandle,
  forwardRef,
  useRef,
} from 'react';
import { Chart } from '@antv/g2';

type Update = (params: { data: any[]; callback?: () => void }) => void;

export interface ChartRef {
  update: Update;
}

interface Props {
  className?: string;
  container: string;
  autoFit?: boolean;
  width?: number;
  height: number;
  padding: number[];
  init: (chart: Chart) => void;
}

const ChartComponents = forwardRef<ChartRef, Props>(
  ({ className, container, autoFit, width, height, padding, init }, ref) => {
    const ChartInt = useRef({} as Chart);
    // 更新数据
    const update: Update = async ({ data, callback }) => {
      console.log(ChartInt.current);
      await ChartInt.current.changeData(data);
      callback?.();
    };

    useImperativeHandle(ref, () => ({
      update,
    }));

    // 绘制
    useLayoutEffect(() => {
      if (!(ChartInt.current instanceof Chart)) {
        const chart = new Chart({
          container,
          autoFit,
          width,
          height,
          padding,
        });
        ChartInt.current = chart;
        init(chart);
      }
    }, []);
    return <div id={container} className={className ?? ''}></div>;
  },
);

export default ChartComponents;
