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
  echarts.registerMap('圣赫勒拿-阿森松和特里斯坦-达库尼亚', {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'Ascension' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@FLVNHXCHFHVTPCFJRANKJBRIAEVURDFIPKJYVGFGJ@HICKKCGHGAEYKGGBaQKKQHUKSBMGOAKEMFONKRJPGTGLCR@N',
          ],
          encodeOffsets: [[-14766, -8125]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Saint Helena' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@NPR\\NJDVJT^RNDTVVJPJAJJFDJLDDGTKRBJENJTAJQCIHICIFIN@BIJEGUF_O@KEAMKIM@WYQAKGWJMAOMUGOIQOOFINANIHWBCHYH',
          ],
          encodeOffsets: [[-5928, -16380]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Tristan da Cunha' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            [
              '@@PLBHTTARNHTAZFTCJFJERAXFPGJUVWJYNUdOFYGEUgQDU@GDYBFJENQBYJYNALYV[FMHO@OJOB',
            ],
            ['@@DHTBJHNGDOKGIDSGIR'],
            ['@@@VPDRJJNP@XMDEZAROGGMAQKeM_BUV'],
            [
              '@@FPHFDZFBNZPDJJBRHFzALDLAVBRKNE^SVaNaW[GCWWUGGOSI@KGGWC[ROFWEMNIPafKR',
            ],
          ],
          encodeOffsets: [
            [[-10259, -41278]],
            [[-12794, -38321]],
            [[-13010, -38200]],
            [[-12646, -38009]],
          ],
        },
      },
    ],
    UTF8Encoding: true,
  });
});
