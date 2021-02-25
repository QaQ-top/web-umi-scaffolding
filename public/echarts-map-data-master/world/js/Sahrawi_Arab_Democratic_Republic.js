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
  echarts.registerMap('撒拉威阿拉伯民主共和国', {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'Sahrawi Arab Democratic Republic' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            [
              '@@ÞnŰZĐ¼ĞİÂ îZÐmɘ¶¬¬ÒĬĢĴƦƆ@ǬŎàjkì^Ô²ĲlòĚɔ@vªĂ´pxªĤ| pºUÜªĸ¦EĠÂy~¤XŮâNì¤öxĂĖÖ~àÔ¼òöÜªm¸âJ¨`j¸Ʀǜ¾ĤAø¹ÈÜļBͱAϻBͳAҁ@͇ŽǭćǥwΩɡęōŕÆȃϛªع̟DҥD̓@͵G̓A',
            ],
            [
              '@@ôǜj`dŒÄÄIĈƦĮðBxËÈEøĖlȔhØkĐT¾[ČRÎYĎ§JĨwlŬBŨ¥Ċ^¨MĖ¼¸ÞŰàâAİvŬ_ H\\ŞBƦmÄGô°XȔaľĶŤ@@̏Dң@ٟ٣Aп@ڣ@̳@ӏA',
            ],
          ],
          encodeOffsets: [[[-15401, 21850]], [[-11952, 26623]]],
        },
      },
    ],
    UTF8Encoding: true,
  });
});
