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
  echarts.registerMap('马尔代夫', {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'Dhekunu Province' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@nQGM]BKRDL'],
            ['@@Q[bmDeS\\]|@L^L'],
            ['@@E[KKKd^D'],
            ['@@ANNLXaX[MImn'],
          ],
          encodeOffsets: [
            [[74901, -701]],
            [[74845, -592]],
            [[74996, -592]],
            [[75174, -296]],
          ],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Mathi-Dhekunu Province' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [['@@LTXGSOOD'], ['@@APFV`Bcg'], ['@@G^PHD]KG']],
          encodeOffsets: [[[75023, 228]], [[75189, 271]], [[74745, 490]]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Mathi-Uthuru Province' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@MPRHLMOI'],
            ['@@OXTHC_'],
            ['@@OfVEE_'],
            ['@@G^TA@QKI'],
            ['@@N^CZPJBWSeGC'],
            ['@@@TLdTH_'],
            ['@@d@WSKT'],
            ['@@BRIZJLPQQe'],
            ['@@Z_MIKj'],
          ],
          encodeOffsets: [
            [[74732, 6695]],
            [[74808, 6719]],
            [[74826, 6771]],
            [[74836, 6813]],
            [[74866, 6838]],
            [[74925, 6902]],
            [[74957, 6981]],
            [[74971, 7105]],
            [[74743, 7195]],
          ],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Medhu-Dhekunu Province' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@GRjLRHFI]MSSGF'],
            ['@@CcKBPb'],
            ['@@P_[yOuQDPTNjFJD'],
          ],
          encodeOffsets: [[[75321, 2160]], [[75289, 1915]], [[75310, 1990]]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Medhu-Uthuru Province' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [['@@^\\FYcA'], ['@@SJVLAU'], ['@@BTPVLIKWQG']],
          encodeOffsets: [[[74574, 3553]], [[74715, 4537]], [[75220, 5066]]],
        },
      },
    ],
    UTF8Encoding: true,
  });
});
