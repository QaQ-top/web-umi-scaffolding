import React, { useEffect, useRef } from 'react';
import { connect, ConnectRC, HomeModelState, Dispatch, Loading } from 'umi';
import Styles from './style.less';
import Chart, { ChartRef } from '@components/chart';

interface Props {
  home: HomeModelState;
  dispatch: Dispatch;
  loading: Loading;
}

const Home: ConnectRC<Props> = ({ home, dispatch }) => {
  const {} = home;
  const chart1 = useRef<ChartRef>(null);
  useEffect(() => {
    setTimeout(() => {
      chart1.current?.update({
        data: [
          { year: '1991', value: 30 },
          { year: '1992', value: 40 },
          { year: '1993', value: 3.5 },
          { year: '1994', value: 50 },
          { year: '1995', value: 4.9 },
          { year: '1996', value: 60 },
          { year: '1997', value: 70 },
          { year: '1998', value: 90 },
          { year: '1999', value: 130 },
        ],
        callback: () => {
          console.log('FFFFFF');
        },
      });
    });
  }, []);
  return (
    <div>
      <Chart
        container="chart1"
        width={500}
        height={500}
        padding={[40, 40, 40, 40]}
        init={async chart => {
          const data = await Promise.resolve([
            { year: '1991', value: 3 },
            { year: '1992', value: 4 },
            { year: '1993', value: 3.5 },
            { year: '1994', value: 5 },
            { year: '1995', value: 4.9 },
            { year: '1996', value: 6 },
            { year: '1997', value: 7 },
            { year: '1998', value: 9 },
            { year: '1999', value: 13 },
          ]);
          chart.data(data);
          // 量度
          chart.scale({
            year: {
              range: [0, 1],
            },
            value: {
              min: 0,
              nice: true,
            },
          });
          // 提示
          chart.tooltip({
            showCrosshairs: true, // 辅助线
            shared: true,
          });
          // 轴线信息
          chart.axis('year', {
            label: {
              formatter(value) {
                return value + '年';
              },
            },
          });
          chart.axis('value', {
            label: {
              formatter(value) {
                return value + '人';
              },
            },
          });
          // 绘制图形
          chart
            .line()
            .position(['year', 'value'])
            .label('value');
          chart.point().position('year*value');
          chart.render();
        }}
      />
      <Chart
        container="chart2"
        // ref={chart1}
        width={700}
        height={500}
        padding={[40, 40, 40, 40]}
        init={async chart => {
          const data = await Promise.resolve([
            { year: '1991', value: 3, name: '电影院一' },
            { year: '1992', value: 4, name: '电影院一' },
            { year: '1993', value: 3.5, name: '电影院一' },
            { year: '1994', value: 5, name: '电影院一' },
            { year: '1995', value: 4.9, name: '电影院一' },
            { year: '1996', value: 6, name: '电影院一' },
            { year: '1997', value: 7, name: '电影院一' },
            { year: '1998', value: 9, name: '电影院一' },
            { year: '1999', value: 13, name: '电影院一' },

            { year: '1991', value: 8, name: '电影院二' },
            { year: '1992', value: 9, name: '电影院二' },
            { year: '1993', value: 3.7, name: '电影院二' },
            { year: '1994', value: 9, name: '电影院二' },
            { year: '1995', value: 4.78, name: '电影院二' },
            { year: '1996', value: 7, name: '电影院二' },
            { year: '1997', value: 9, name: '电影院二' },
            { year: '1998', value: 13, name: '电影院二' },
            { year: '1999', value: 19, name: '电影院二' },
          ]);
          chart.data(data);
          // 量度
          chart.scale({
            year: {
              type: 'cat',
            },

            value: {
              min: 0,
              nice: true,
            },
          });
          // 提示
          chart.tooltip({
            // showCrosshairs: false, // 辅助线
            // shared: true,
            showMarkers: false, // 改变鼠标悬浮 显示 聚焦点
          });
          // 轴线信息
          chart.axis('year', {
            label: {
              formatter(value) {
                return value + '年';
              },
            },
          });

          chart.axis('value', {
            label: {
              formatter(value) {
                return value + '人';
              },
            },
          });
          // 内置交互
          chart.interaction('active-region'); // active-region 鼠标移动到图例选项时，图例项高亮，对应的图形高亮
          chart.interaction('element-highlight-by-x');

          // 绘制图形
          chart
            .interval()
            .position('year*value')
            .adjust([
              {
                type: 'dodge',
                marginRatio: 0.1,
              },
            ]) // 分组必须
            .color('name') // 分组必须
            .label('value');
          chart.render();
        }}
      />
      <Chart
        container="chart3"
        // ref={chart1}
        width={700}
        height={500}
        padding={[40, 40, 40, 40]}
        init={async chart => {
          // NOT GO
          const data = [
            { item: '事例一', count: 40, percent: 0.4 },
            { item: '事例二', count: 21, percent: 0.21 },
            { item: '事例三', count: 17, percent: 0.17 },
            { item: '事例四', count: 13, percent: 0.13 },
            { item: '事例五', count: 9, percent: 0.09 },
          ];

          chart.coordinate('theta', {
            radius: 0.75,
          });

          chart.data(data);

          chart.scale('percent', {
            formatter: val => {
              val = val * 100 + '%';
              return val;
            },
          });

          chart.tooltip({
            showTitle: false,
            showMarkers: false,
          });

          chart
            .interval()
            .position('percent')
            .color('item')
            .label('percent', {
              content: data => {
                return `${data.item}: ${data.percent * 100}%`;
              },
            })
            .adjust('stack');

          chart.interaction('element-active');

          chart.render();
        }}
      />
    </div>
  );
};

export default connect(
  ({ home, loading }: { home: HomeModelState; loading: Loading }) => {
    return { home, loading };
  },
)(Home);
