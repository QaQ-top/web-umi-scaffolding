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
  echarts.registerMap('丹麦', {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'Albertslund Municipality' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@bNP@NRXAURWCUQDKMWCNOSIo[YRYfLRU`'],
          encodeOffsets: [[12607, 57031]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Allerød Municipality' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@FNn@nXBX~`XAJLGZN^CTSNWlOSICUkYVGSOMQZYkNkDGEcCOF_@RVVZP',
          ],
          encodeOffsets: [[12525, 57187]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Ballerup Municipality' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@ÀS\\FHJ\\EAM\\kdUBU_BSGWBAQVWBeP@`TDCP]CSTeBgICTPFbCRL',
          ],
          encodeOffsets: [[12596, 57102]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Bornholms Regionskommune' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@HP^JA^RVEzDHIb@^TtXbf^`tKPZRrObShs¨_POY`MrLPGXcgZAhY\\I~M`KhBNEVcOEIODQXiKQ[MBU[G@K]OFMRMEWUIiceGsNoBÅVkRS@kPYP¡XQCZiA`STcHaR@TYI',
          ],
          encodeOffsets: [[15034, 56418]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Brøndby Municipality' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@AVTfDTMPaIFWPIBKHKFIBECJK@aBm@HLor_ZTJ'],
          encodeOffsets: [[12672, 56997]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Copenhagen Municipality' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@lbdT`l`V`JLNF\\b@RMXe[GVcLIiIyEKIAUmM@UC'],
            [
              '@@LJ^DVLjIR@PPjGhAFRZENMZEVJRGbJPEeEOJIS]wYBGciuCUEMLobARSbGjUJAJ',
            ],
          ],
          encodeOffsets: [[[12814, 56949]], [[12752, 57050]]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Dragør Municipality' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@vJhGJHRpRJCPeaMwG]UyWsHQ`NB'],
          encodeOffsets: [[12866, 56910]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Egedal Municipality' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@DTRBL\\TXMRTH^CjJ`QfTQ`@PEdDHFlClMNEDOIMuCZKQS[DAONOQKaDOEDShJfATS^DDOSC@_fOMQO@aM»^QLYFQPWLfRQPYH[I_DeAORUBuVGN',
          ],
          encodeOffsets: [[12400, 57114]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Fredensborg Municipality' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@XZhEbO¤F@kbHRIXFXIdAPGM[]i@MS_LMWO¡MEGoD[O[DWGST]DlXqbGZUDSNbJI^TFA\\Vb',
          ],
          encodeOffsets: [[12675, 57346]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Frederiksberg Municipality' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@ZRZF`NHMjQCOOWF]AIV'],
          encodeOffsets: [[12792, 57016]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Frederikssund Municipality' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            [
              '@@NALRJ^H@\\`DfJRGZBTJ^nDNahSFILDXSVg`J``BKf]jBjODMqeGeZOhIN[AcNOCYbCI]^_WSPIBiaBiISOSFCXgBIKoJkT}YaJoBUJDRUJ',
            ],
            [
              '@@p`LQ`ILSPILRLZBrWNipAYOUUeS_RiI]DSGNQSWK[QACSyPMHJZUVIfMPYRHZdF@f',
            ],
            ['@@`JFOMGWN'],
          ],
          encodeOffsets: [[[12131, 57095]], [[12355, 57221]], [[12358, 57073]]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Furesø Municipality' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@YZRPNHTUFOpINS[_HKEgtBkMAaU@WJ[FGI[E¿TMPBP\\CRTYLvDJNCPMF',
          ],
          encodeOffsets: [[12623, 57152]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Gentofte Municipality' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@nJbTrE|RNiUUOcDQMNYFEQgBiHG`aH@X'],
          encodeOffsets: [[12801, 57098]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Gladsaxe Municipality' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@BblNhGbFZEOYjA@WbGH_OOQ@iJUK]CYpBR}H'],
          encodeOffsets: [[12715, 57092]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Glostrup Municipality' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@BRXATH`AFABaFCQ_BGUSBMPXDLNRCDVQX'],
          encodeOffsets: [[12685, 57035]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Gribskov Municipality' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@hTf^J²n¦nxJPPMvEz_XGjAPEOeHKYQKJGWOBIWYDA@FIWSMFcC]JWCIW[CMKwGHD^uRWLoQAL]JBhP',
          ],
          encodeOffsets: [[12297, 57376]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Halsnæs Municipality' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@OAg^IBKpRXKvQC]cYYCSQBYMETUdAPMDQyUo_QLS^D^SbadEV]BMNOC]D{UKIkEyMWFo@GVMNRZ~TX\\lL^',
          ],
          encodeOffsets: [[12297, 57376]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Helsingør Municipality' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@xEXDGYix[NAFWME[c]K]QcgOHcBWJWEQJaG@l£EaPgFAJXPIHLZRGLPf',
          ],
          encodeOffsets: [[12716, 57443]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Herlev Municipality' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@XIV@~GAQZoKIeBKKEBAVcV[lBN'],
          encodeOffsets: [[12692, 57097]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Hillerød Municipality' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@GxHNL\\DJXXD^IdDNEXTEJ@BCUaB[SEJ]aITMVCHYrakWYMKHIWB}_AWmWm@EMoBMjqXYAQKKOJKT_JKRzVCRONcBSVNFAZTRZDdZ',
          ],
          encodeOffsets: [[12417, 57316]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Høje-Taastrup Municipality' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@¼]V_KQZeZQJI³AQCAaF[IA[KYHeHNlS@DTV@L\\BFJxAl'],
          encodeOffsets: [[12545, 57046]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Hørsholm Municipality' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@XH\\C\\PpCFH¢NXPZ_Zi\\]uAoHYACTQDeCSMgC]DkPMX'],
          encodeOffsets: [[12696, 57229]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Hvidovre Municipality' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@tBBQpaHGYaJIO]HCFAFEJGLALOJEXJOb'],
          encodeOffsets: [[12752, 57001]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Ishøj Municipality' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@qPOwUGNPYBXyOwHB\\\\JbEBRD´B'],
          encodeOffsets: [[12643, 56973]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Lyngby-Taarbæk Municipality' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@\\Hp@fFNGzD\\HNCHLF\\ALIP]CQ{QqFaSmIiBPZYFaEgHsAFh'],
          encodeOffsets: [[12715, 57135]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Rødovre Municipality' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@LLfABIVIHiTasASNeCAHR`EDAb'],
          encodeOffsets: [[12727, 57045]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Rudersdal Municipality' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@lZDVTJ^ChDTNfDRCDSZBpGvBZgD}JI[BKEGMD[GyCMHeEo@[GGL\\`MToJEP',
          ],
          encodeOffsets: [[12691, 57180]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Tårnby Kommune' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@VD@nNBVLJzFjJTOpS@]UMDQIQoIGgHuIgEUBebKbHN'],
            ['@@DVTddVTENOD}HYRK[I_@MVeJKT'],
          ],
          encodeOffsets: [[[12814, 56949]], [[13039, 56968]]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Vallensbæk Municipality' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@p\\`YpqGKa@rIJ'],
          encodeOffsets: [[12638, 56978]],
        },
      },
    ],
    UTF8Encoding: true,
  });
});
