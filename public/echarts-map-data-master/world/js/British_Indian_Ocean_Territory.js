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
  echarts.registerMap('英属印度洋领地', {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'British Indian Ocean Territory' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@kwUmOGOBELE\\ ItSTYLyx[NOVdTNGEc|izYIQH]CQcC_J{TITtT^dX'],
            ['@@VCRJH]oX'],
          ],
          encodeOffsets: [[[74212, -7567]], [[73083, -6842]]],
        },
      },
    ],
    UTF8Encoding: true,
  });
});
