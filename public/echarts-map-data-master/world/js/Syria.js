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
  echarts.registerMap('叙利亚', {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'Aleppo' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@ŹǓ»ÃƃáǕgç}ÛćFÉĲėmµãï¯ųF±ǨƵΏCĻ\\ŉÈȁWō¤ŁÔĄ¢ÿ¢ıżM¾ō¼qĤøÇĤĕIÇ±Ő¢ìcÖðÔæ̐÷_ÍÄŌɊ®¬ƨÎÞOȮÞdǦÂŲmƈ³â¿',
          ],
          encodeOffsets: [[39559, 37666]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Al-Hasakah' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@͆º̪ĸǒĎĠXȠĈżLǚĐØfȌEäxǔpȬ®ŲĖƆ³mōЁΗÇ¡ΓÁĝƅʯĪǻZǽ·Ñ͋pƽ¶۱֜īƄªŕěVÝŀ',
          ],
          encodeOffsets: [[40386, 37578]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Ar-Raqqah' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@ĮÛɬHǆȖxÞĿĜUŖ©Ǘα̧ڃįȏ¨̿¨ȅKÇ®ǧƶE²°Ŵäðn¶ıĘEÊÜĈè~ǖhƄâ¼Äǔź'],
          encodeOffsets: [[39559, 37666]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'As-Suwayda' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@ȲÖúķņ¹ŊhÙǢƍőŏŹEšŇđXåęm˙VŔ{ØāXĒëfDŘkĢê®ĠD¾SĒĀ|'],
          encodeOffsets: [[37449, 33992]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Daraa' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@êļ¾FĤČgÞªwǘ nÊĚóƖþÀďÿ{Tđ ½ğCé­lġCŗìeđĂW|×UœęjǙŤŅM©Š¹R²ř',
          ],
          encodeOffsets: [[36658, 33540]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Deir ez-Zor' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@̨ڄǘβĬƃ۲֛ƾµ͌o½ĉZÏċqŹT̓ėĿėǥ¥˳éБȩƋǢӉ֞TâéŨıÚ'],
          encodeOffsets: [[40184, 36096]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Hama' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@©ǦpƪwÖ¶ÞæWâ»eÏRŋń×ńeƊxâ·ĢĪv´ŜŪŎ£ȂXŊÇļ[ΐDÈ­Cő«éGßű«ğŕōĨÜá~ƏÙ§HÁď^ǥȓÅ±ðZǹÅĕUµ×ååUeéĸ´]Ŧ',
          ],
          encodeOffsets: [[37123, 36069]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Homs' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@fæVØæ¶ĖVǺÆ Y²ïȔÆǦĐ]GÂÚ¨Ɛâ}ÛŎħĠŖŲ¬Hà¬êDŒȆL̀§Ȑ§İĲÙêŧSáӊ֝ƌǡܝλҝʅã£̙ƽЧ˚ãfĝÆûŘȱǂÅĆ¥CŹÚÝĘćČé{ƅFt»Űb¨Ɨâ|ĖĥpƵCB~ĊŒĊĖ',
          ],
          encodeOffsets: [[37185, 35740]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Idlib' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@xĦļÞ¤EƖƈÊúÐ{äĖJÈģģ÷rŎ»N½ĲŻĀ¡¡ăłÓśũ³ĩuġá¸ƉwŃfŃØQŌfÐá¼åX`ķX',
          ],
          encodeOffsets: [[37017, 36669]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Latakia' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@ĸW_µÝxÕoƩªǥhƽqógƌƳŦªÐaÞæsâæüÚdn¯Īm«'],
          encodeOffsets: [[37017, 36669]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Quneitra' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@øĝhÝċEģ½¦Ê¤ƈtUŔ'],
          encodeOffsets: [[36733, 34113]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Rif Dimashq' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@¨úÞ`SÄÕpnàĊĠưÜu¢Ó¼ĦæQŰźƆEê|ĈċÞėźÙ¦DÆąȲǁüŗĞÅäeШ˙Ώȇ÷P£wyĭȁwqǡƎgÚŉºŅùĸÕȱ¿ĐƕýęômÉǗ©x÷Ğ|Ŋ',
          ],
          encodeOffsets: [[36763, 34246]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Tartus' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@ôƾrg^ť³êķĉĕĉőA}ś@Ū¹ĶzĢUúÄøcÊ'],
          encodeOffsets: [[36797, 36104]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'United Nations Disengagement Observer Force' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@{ŉVœsƇ£¥ÉéĻÖȒwƾÑƘ®ÎØ'],
          encodeOffsets: [[36763, 34246]],
        },
      },
    ],
    UTF8Encoding: true,
  });
});
