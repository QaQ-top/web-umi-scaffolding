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
  echarts.registerMap('皮特凱恩群島', {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'Pitcairn Islands' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@TGHGNGKEAGU@MNQF@FLFDDJB'],
            ['@@KNEPQVEPATHTLJFVHDRCR@TFXLIW@MNqDOHOA]F[ACMGMHML_DMH'],
          ],
          encodeOffsets: [[[-133232, -25661]], [[-131415, -24993]]],
        },
      },
    ],
    UTF8Encoding: true,
  });
});
