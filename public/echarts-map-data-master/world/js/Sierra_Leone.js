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
  echarts.registerMap('塞拉利昂', {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'Eastern Province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@bRx@rY¾\\a~phB@ÄOTHWĺpf¾f dV¾Rz\\zUtZ®wxTGdu\\A{~Z\\KÂZb\\_hNt´fzaQ­bÍE]d£EwRhtGmmu£UeDmeomOsËK¡Pe\\uhJÆgl{x\\Zv \\@fkLKaN_]agrÅ·Ío`W_APWoaWy©{OBɟKgcU]yKcq[eyDakSq{m_TýÙi¡ÇPz}L«[´WnvhJvOxuzE¦×ã[{[QVfÒ¡¢ªjDNgPL|^lEl¢YU\\D lrTÎ¨hU¢AÌe@~rcxY¤UZ©b@jevNeTq',
          ],
          encodeOffsets: [[-11880, 8701]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Northern Province' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@ZnzqyUYZ'],
            [
              '@@ybe³Ms`ga[ÁY[L}Y|[BcvHwSx­sYVyy[½QcUe½oeXĹSGP@ÃgA}ob½[qZ@waQDOLwB]¡QMw^iA£luG­¡m_rWElwËPyj»mbcCWEm_V­]¹luyPkduWmF[gyX{§kk½igqmAlu¸Et©BSoL_~«tG^Ü¦Phtt¦XxtÕ¤KW{DuoUFwOx{SzNÀMlE²i^TnH©LUXDUvxÔjdXºOT|Fp¬xVi VTf®yxÔGl\\^tHSJh\\ºrOzxR~Cb´L^LtèEptNzvøXLVİ|Jq¤w¤QǴÊXºͨ@ʖ@IegNuPÉtYFbtÃFq QN«|Uj½aqiV«qUsêUpkHUX[Q¯YL]Ë~EN W mOg',
            ],
          ],
          encodeOffsets: [[[-13556, 9114]], [[-10835, 9249]]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Southern Province' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@¨TObhvG¢^ÞIz^ÄDMdiQiTgUo\\yQ±JuqIÌđħſ'],
            ['@@cY[g'],
            [
              '@@pd~RnBhrjl¾¨l|zW\\hnEvXlczOvºk®^`UnFXdDa¼nziÌOxkXFqn`¢®vH¤kjBx]NR¢A^xKPCrfSMfu@iªaVYZ£wdq@}fBËV¡gÍ§qSkCV[Z¡Fk]kK{OMhiC©¢¡eÑU\\R\\|ØäF¥vyPwIuugXm\\³¬~KyÈOF]ycWÍaLëąhuCJSaLuiewcK^uaGĝ¸o~~Ûí÷Ǚäȱþē~P`r°LÎ}VO{~|¨jj VlBS®Ñ¶J^xXBÑ«F»jyOtaxiJ|yXg~È°_ÌF´]R}¾£¦D~',
            ],
          ],
          encodeOffsets: [[[-13269, 7755]], [[-12856, 7840]], [[-13300, 8435]]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Western Area' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@ TªAFsv·k}QocÕDmIwJaÔUBo¬uP}c°D^ºW¯¨aXyK'],
          encodeOffsets: [[-13354, 8578]],
        },
      },
    ],
    UTF8Encoding: true,
  });
});