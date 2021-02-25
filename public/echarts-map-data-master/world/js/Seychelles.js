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
  echarts.registerMap('塞舌尔', {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'Mahé' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@XIIZn\\PAfFPLH¢fCTSHQSWHQCcRWFWbMdaJFreWcFySgTm@]RIJYk@]RCROFUt_KGJJdNC\\DDRWTHXILOG[bBL]TMCYNCJaNIRQJOG[HCN',
          ],
          encodeOffsets: [[56696, -4750]],
        },
      },
    ],
    UTF8Encoding: true,
  });
});
