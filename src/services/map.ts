import Http from '@/utils/http';

export function getMap() {
  return Http.get('/echarts-map-data-master/world.geo.json');
}
