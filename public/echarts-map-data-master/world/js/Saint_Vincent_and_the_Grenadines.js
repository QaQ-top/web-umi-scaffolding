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
  echarts.registerMap('圣文森特和格林纳丁斯', {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'Charlotte' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@NJEh\\lbHGrNJ@PIJBRGRDbGVRAHTMNDVIPf@HIjKEMRiP[DoDWGaFaCGFcQOOyKOGWCaZIRKFQPKV',
          ],
          encodeOffsets: [[-62674, 13528]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Grenadines' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@XRIVdHFQhADKKKeBWQYL'],
            ['@@DTRTLIa]'],
            ['@@\\I`NE\\GL@XZKRFF_WAEgkKUX'],
            ['@@RTGHPTVFLUSGMoYX'],
            ['@@FDRYMCIZ'],
            ['@@lNbANJLTYD@LXL^ZPBHPLBI_[UPUGQ[QI@KM{N[C'],
          ],
          encodeOffsets: [
            [[-62935, 12893]],
            [[-62873, 12932]],
            [[-62827, 13010]],
            [[-62664, 13179]],
            [[-62616, 13267]],
            [[-62757, 13302]],
          ],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Saint Andrew' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@\\B\\P`HZ\\^LFgMI@UkgEWMK@KS@BREJSJSPBNIZ'],
          encodeOffsets: [[-62742, 13520]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Saint David' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@PXhNFJCZPNNdLJRvVHRRVDJOCUNMGSQBHUCaHQAQJI@OMIHqaGQNK@SKaCWRmV',
          ],
          encodeOffsets: [[-62733, 13594]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Saint George' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@LUROLEJQYAYIMUIUigJo\\_ALROPK@@LNLFXlh@V'],
          encodeOffsets: [[-62674, 13528]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Saint Patrick' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@nUXQbDTLL@RM[k]KY[_G[O[AMLJlETH`ZXEP'],
          encodeOffsets: [[-62733, 13594]],
        },
      },
    ],
    UTF8Encoding: true,
  });
});