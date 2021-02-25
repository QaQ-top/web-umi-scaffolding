(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'echarts'], factory);
  } else if (
    typeof exports === 'object' &&
    typeof exports.nodeName !== 'string'
  ) {
    factory(exports, require('echarts'));
  } else {
    factory({}, root.echarts);
  }
})(this, function(exports, echarts) {
  var log = function(msg) {
    if (typeof console !== 'undefined') {
      console && console.error && console.error(msg);
    }
  };
  if (!echarts) {
    log('ECharts is not Loaded');
    return;
  }
  if (!echarts.registerMap) {
    log('ECharts Map is not loaded');
    return;
  }
  echarts.registerMap('蒙特塞拉特', {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'Saint Anthony' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@Oj]zGJ]_g@cZizCh'],
          encodeOffsets: [[-63726, 17139]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Saint Georges' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@FhXtXRjuDyHi^'],
          encodeOffsets: [[-63691, 17131]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Saint Peter' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@WQWsEgPCZX\\F`^rBdpIA_Tc'],
          encodeOffsets: [[-63664, 17186]],
        },
      },
    ],
    UTF8Encoding: true,
  });
});
