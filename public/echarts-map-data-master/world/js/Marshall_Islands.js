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
  echarts.registerMap('马绍尔群岛', {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'Ailinglaplap' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@Q|BVLDC]Hw'],
          encodeOffsets: [[172600, 7585]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Ailuk' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@FHbPpPfTbfrVXldBvDdNzZ~lhllfffPvPtJdBvAOxS|_`Whc^_h{lb¡HiJDÃAcNJ}DyA}EcO}I[WqUaW_kke]gcMO]CwAcBNmPuBLkPoV[Pg^uvQX»ĢQE',
          ],
          encodeOffsets: [[173727, 10541]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Arno' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@KXIJ[PMTLRL_PQV]BG'],
          encodeOffsets: [[175696, 7201]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Ebon' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@W\\NNJi'],
          encodeOffsets: [[172705, 4736]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Enewetak' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@ULPJFU'],
          encodeOffsets: [[166138, 11939]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Jabat' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@FHfNp^~hx\\^jbzf|XnLHxA^COhOt[zmhiduTgRqJiFCqK}[͛È@t',
          ],
          encodeOffsets: [[172823, 7938]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Kili' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@CVYRXDLOE['],
          encodeOffsets: [[169525, 11890]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Kwajalein' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [['@@J]OUOHTPB\\'], ['@@[LJJRU'], ['@@dEDO[HKN']],
          encodeOffsets: [[[171764, 8954]], [[170838, 9545]], [[171485, 9628]]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Lae' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@HJjNdVnj|ddXTh^brR^HtHrBG|OehW|ibaZ[tXgVuLgJAyKWO_eu]aogm][MWOCB]DsL}Vo\\]Tid]bi~Y~OzEhC®',
          ],
          encodeOffsets: [[169998, 9173]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Lib' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@QLDNVCGU'],
          encodeOffsets: [[171399, 8506]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Likiep' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@GSOVXA'],
          encodeOffsets: [[173058, 10288]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Majuro' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@ViX[`SNBRPFHaV_fYTCpS'],
          encodeOffsets: [[175211, 7270]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Maloelap' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [['@@UKCVPFJO'], ['@@Q[ODL`VG']],
          encodeOffsets: [[[175347, 8914]], [[174951, 9113]]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Mejit' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@UFJ\\CRRLHOKUBY'],
          encodeOffsets: [[174975, 10516]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Mili' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@YFqDF^RIPSRARG'],
          encodeOffsets: [[175886, 6219]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Namdrik' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@`EMMQT'],
          encodeOffsets: [[172122, 5775]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Ujae' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@YA@NZK'],
          encodeOffsets: [[169746, 9145]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Utirik' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@N\\RS_G'],
          encodeOffsets: [[173916, 11488]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Wotho' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [['@@WHRPFW'], ['@@KZRPDaIG']],
          encodeOffsets: [[[170012, 10256]], [[169998, 10398]]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Wotje' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@V@FKG[Sh'],
          encodeOffsets: [[174317, 9693]],
        },
      },
    ],
    UTF8Encoding: true,
  });
});
