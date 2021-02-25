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
  echarts.registerMap('史瓦济兰', {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'Sifundza seHhohho' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@Â®Ŷɼ\\¾ŘĤ¬ÊĎp̊ǻćaVǯőiËǣ¿ÓA×ßKĩxuũà'],
          encodeOffsets: [[31640, -26947]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Sifundza seLubombo' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@UǰĈbĒÁĜ ¡æQdŷ}ŧFċ¶ķAˁÛ]iĕiȯÓDřņÃQƉØ«Â¸ÒÃÆúîHȀêþKƆ'],
          encodeOffsets: [[32439, -26791]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Sifundza seManzini' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@ŪßvĪwàLBØÔǤÀÌŒjLƅéýGǿíùbűÛÏlŁ­òƅUÝµmŎ^ȸþŴ'],
          encodeOffsets: [[31640, -26947]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Sifundza seShiselweni' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@ƆV ñł®ÐkŲÜaÄÅ·Ñ¬ÁƊ×ÄRŚŅÔCFŵПF˽ĨǉǮ^êÑ´WÆ'],
          encodeOffsets: [[31632, -27429]],
        },
      },
    ],
    UTF8Encoding: true,
  });
});