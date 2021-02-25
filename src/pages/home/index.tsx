import React, { useEffect, useRef } from 'react';
import { connect, ConnectRC, HomeModelState, Dispatch, Loading } from 'umi';
import Styles from './style.less';
import Chart, { ChartRef } from '@components/chart';
import { getMap } from '@/services/map';

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
        ref={chart1}
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
            // 配置坐标系
            radius: 0.8, // 坐标系大小
          });

          chart.data(data);

          chart.scale({
            // 坐标轴 axis、图例 legend、tooltip 上的
            percent: {
              formatter: val => {
                val = val * 100 + '%';
                return val;
              },
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
            .tooltip('item*percent', (name, value) => {
              // 自定义 tooltip 提示
              return {
                name,
                value: value * 100 + '%',
              };
            })
            .label('item*percent', {
              layout: { type: 'pie-spider' }, // 蜘蛛标签

              // labelHeight: 20, // 标签高度
              // labelLine: {
              //   style: {
              //     lineWidth: 0.5, // 线的粗细
              //   },
              // },
              offset: '-20', // label 标签 偏移 可以让 标签移入饼图内部 与 蜘蛛标签不兼容
              content: data => {
                return `${data.item}: ${data.percent * 100}%`;
              },
            })
            .adjust('stack');

          chart.interaction('element-active');

          chart.render();
        }}
      />
      <Chart
        container="chart4"
        // ref={chart1}
        width={700}
        height={500}
        padding={[40, 40, 40, 40]}
        init={async (chart, dataSet) => {
          const mapData = await getMap();
          console.log(mapData);
          // 浮动弹窗
          chart.tooltip({
            showTitle: false,
            showMarkers: false,
            shared: true,
          });

          // 一定要 量度 同化
          chart.scale({
            longitude: {
              sync: true,
            },
            latitude: {
              sync: true,
            },
          });

          chart.axis(false); // 生成地图 前才能去除 坐标系

          // 生成地图数据
          const worldDataSet = dataSet.createView('back').source(mapData, {
            type: 'GeoJSON',
          });

          // 生成地图
          const worldView = chart.createView();
          worldView
            .polygon() // 多边形
            .tooltip(false)
            .position('longitude*latitude')
            .label('name', {
              style: {
                fill: '#000', // 字体颜色
                fontSize: 10,
              },
            })
            .style({
              fill: '#fff', // 地图区域背景
              stroke: '#ccc', // 地图区域描边颜色
              lineWidth: 1, // 描边粗细
              color: '#000',
            });
          worldView.data(worldDataSet.rows);

          let data = []; // 可视化数据

          for (let i = 0; i < mapData.features.length; i++) {
            let name = mapData.features[i].properties.name;
            data.push({
              name: name,
              value: Math.round(Math.random() * 1000),
            });
          }
          console.log(data.sort((a, b) => a.value - b.value));
          if (data.length == 0) return;
          // 用户数据
          const userDateSet = dataSet
            .createView()
            .source(data)
            .transform({
              // 数据 转成对应的 地图数据
              geoDataView: worldDataSet,
              field: 'name',
              type: 'geo.region',
              as: ['longitude', 'latitude'],
            })
            .transform({
              // 在原来对象上扩展 新属性
              type: 'map',
              callback: (object: any) => {
                switch (true) {
                  case object.value <= 100:
                    object.trend = '0-100';
                    break;
                  case 100 < object.value && object.value <= 500:
                    object.trend = '100-500';
                    break;
                  case 500 < object.value && object.value <= 1000:
                    object.trend = '500-1000';
                    break;
                }
                return object;
              },
            });

          const userView = chart.createView();
          userView.data(userDateSet.rows);

          userView
            .polygon()
            .position('longitude*latitude')
            .color('trend', '#BAE7FF-#69C0FF-#40A9FF') // 太多不同会以滑块的方式展开
            .tooltip('name*value', (name, value) => {
              return {
                name,
                value: value + '票',
              };
            })
            .style({
              fillOpacity: 0.85,
            });
          // .animate({
          //   leave: {
          //     animation: 'fade-out',
          //   },
          // });
          userView.interaction('element-active');

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
