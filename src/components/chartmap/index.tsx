import React, { useState } from 'react';
import * as G2Chart from '@antv/g2';
import Chart from '@/components/chart';
import { View } from '@antv/data-set/lib/view';
import DataSet from '@antv/data-set';
import { getMap } from '@/services/map';
import { Button } from 'antd';
import Styles from './style.less';

interface Props {
  autoFit?: boolean;
  width?: number;
  height?: number;
}

// 图例 分类
const trends = ['0-100', '100-500', '500-1000'];

function InitChart(chart: G2Chart.Chart) {
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
}

// 创建地图
function CreateMap(
  chart: G2Chart.Chart,
  dataSet: DataSet,
  mapData: any,
): [G2Chart.View, View] {
  // 生成地图数据
  const worldDataSet = dataSet.createView().source(mapData, {
    type: 'GeoJSON',
  });
  // 生成地图
  const worldView = chart.createView();
  worldView.data(worldDataSet.rows);
  worldView.tooltip(false);
  worldView
    .polygon() // 多边形
    .position('longitude*latitude')
    // .label('name', {
    //   style: {
    //     fill: '#000', // 字体颜色
    //     fontSize: 10,
    //   },
    // })
    .style({
      fill: '#fff', // 地图区域背景
      stroke: '#ccc', // 地图区域描边颜色
      lineWidth: 1, // 描边粗细
      color: '#000',
    });
  return [worldView, worldDataSet];
}

// 创建数据 关联地图
function CreateUserData(
  chart: G2Chart.Chart,
  dataSet: DataSet,
  mapDataSet: View,
  data: any,
): [G2Chart.View, View] {
  // 用户数据
  const userDateSet = dataSet
    .createView()
    .source(data)
    .transform({
      // 数据 转成对应的 地图数据
      geoDataView: mapDataSet,
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
            object.trend = trends[0];
            break;
          case 100 < object.value && object.value <= 500:
            object.trend = trends[1];
            break;
          case 500 < object.value && object.value <= 1000:
            object.trend = trends[2];
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
      fillOpacity: 0.8,
    });
  return [userView, userDateSet];
}

// 设置交互
function setInteraction(chart: G2Chart.Chart) {
  chart.removeInteraction('legend-filter'); // 地图问题 建议 移除这个数据过滤
  chart.interaction('element-active').interaction('legend-highlight');
}

// 提示语
function Tips(chart: G2Chart.View, text: string) {
  chart.annotation().text({
    position: ['50%', '50%'], // 位置
    content: text, // 内容
    style: {
      // 样式
      fontSize: 24,
      fill: '#8c8c8c',
      textAlign: 'center',
    },
    // offsetY: -20, // 偏移
  });
  chart.render();
  return chart;
}

const ChartMap: React.FC<Props> = ({ autoFit, width, height }) => {
  const [state, setState] = useState(1);
  return (
    <div className={Styles.map}>
      {state === 1 && (
        <Chart
          container="chart_global"
          autoFit={autoFit}
          width={width}
          height={height}
          padding={[40, 40, 40, 40]}
          init={async (chart, dataSet) => {
            // NOT GO 获取地图数据
            const mapData = await getMap();
            const map = await (
              await fetch('/echarts-map-data-master/world/world-mapping.json')
            ).json();

            console.log(mapData);

            // 初始化
            InitChart(chart);
            // 创建地图
            const [mapView, mapDataSet] = CreateMap(chart, dataSet, mapData);

            // NOT GO 获取展示数据
            let data = [];
            for (let i = 0; i < mapData.features.length; i++) {
              let name = mapData.features[i].properties.name;
              data.push({
                name: name,
                value: Math.round(Math.random() * 1000),
              });
            }
            console.log(data.sort((a, b) => a.value - b.value));
            if (data.length == 0) return chart.render();

            // 展示数据 关联地图
            const [userView, userDataSet] = CreateUserData(
              chart,
              dataSet,
              mapDataSet,
              data,
            );

            // 点击进入下一级
            chart.on('element:click', async (ev: any) => {
              console.log(ev.data.data.name);
              console.log((window.target = map[ev.data.data.name]));
              setState(2);
            });
            setInteraction(chart);
            console.time('渲染时间');
            chart.render();
            console.timeEnd('渲染时间');
          }}
        />
      )}
      {state === 2 && (
        <div key={'2'} className={Styles.map_two_level}>
          <Chart
            container="chart_global_next_level"
            autoFit={autoFit}
            width={width}
            height={height}
            padding={[40, 40, 40, 40]}
            init={async (chart, dataSet) => {
              // NOT GO 获取地图数据
              const mapLoading = Tips(chart.createView(), '地图数据加载中...');
              console.log(window.target.mapFileName);
              const mapData = window.target.mapFileName
                ? await (
                    await fetch(
                      `/echarts-map-data-master/world/geojson/${window.target.mapFileName}.json`,
                    )
                  ).json()
                : null;
              if (!mapData) {
                mapLoading.changeVisible(false);
                Tips(chart.createView(), '暂无该地区地图数据');
                chart.render();
                return;
              }

              // NOT GO 获取展示数据
              let data = [];
              for (let i = 0; i < mapData.features.length; i++) {
                let name = mapData.features[i].properties.name;
                data.push({
                  name: name,
                  value: Math.round(Math.random() * 1000),
                });
              }
              console.log(data.sort((a, b) => a.value - b.value));
              if (data.length == 0) {
                mapLoading.changeVisible(false);
                Tips(chart.createView(), '该地区暂无资源');
                chart.render();
                return;
              }

              // 初始化
              InitChart(chart);
              // 创建地图
              const [mapView, mapDataSet] = CreateMap(chart, dataSet, mapData);

              // 展示数据 关联地图
              const [userView, userDataSet] = CreateUserData(
                chart,
                dataSet,
                mapDataSet,
                data,
              );
              setInteraction(chart);
              console.time('渲染时间');
              chart.render(true);
              mapLoading.changeVisible(false);
              console.timeEnd('渲染时间');
            }}
          />
          <Button type="link" onClick={() => setState(1)}>
            返回
          </Button>
        </div>
      )}
    </div>
  );
};

export default ChartMap;
