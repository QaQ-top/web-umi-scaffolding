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
  echarts.registerMap('乌兹别克斯坦', {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'Andijan Province' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@ÜĠƼǲyźĜɐ~ŚƇȮWƄùʡƗo×ǋzÅųƿìMî̇¨ʥŸ'],
          encodeOffsets: [[73287, 41752]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Bukhara Province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@ȢǮFĚǇƐȘêɑ̲̐ŰƱň³ĸǡÖRΖė̤ǵĮǚŀFDĿ̎lèɄhǘƑ˄}ƠUƗĻaăǋɩ|FǭțƁ«çǊƻǘ¥Ĝțɋƥğ͡ĥķėǙZЅɞƓƆ̳ǆֵ͆śФųä',
          ],
          encodeOffsets: [[63692, 41491]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Fergana Province' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@ƺʎũʦƄʦŷ̈§NíЧ˓ǹÄűúƓxȳ¹ÿÃȝÝƬƧĬŀʪǸ'],
          encodeOffsets: [[72496, 41704]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Jizzakh Province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@Ԟ[̲²ȜfĽĖčģÿɬſ§ď^ŹÿÓIĵȺEʔ®WğMý͎ÞťʑȧW_ǷėęӕÌũ¶˱éiÙřôEüĎĤŰ̻ºŁÆĮÍÌiȘɥbƼɬŀōÀkƈŰx',
          ],
          encodeOffsets: [[68359, 42129]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Khorezm Province' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@ĜĖʤÍŨȻ͘ȱǜÕİŏƇÅȯĈ˃^ǩ͏ǊâǴćĐÐŨ'],
            ['@@ǈƏEęȡǭïàŃȮ]ƴïôɑƄǿFĄôˤˮʩÞW'],
          ],
          encodeOffsets: [[[61589, 42878]], [[63740, 41983]]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Namangan Province' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@ȆÄƆȗɄñȨfüŐĈIƾƌƸƃŃ˔ĝY½ŹěǱzƻÛğʥƃʍŪƹ˗ˆµɢäö'],
          encodeOffsets: [[72187, 42391]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Navoiy province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@ȨZचŐђ©֪yͮƒÐiƶȁ̾ǥʈγɆäC̹ÿǣEΣ҆¹Ø͑Č̑¦@ůwlƇŎ¿Ŀƻɫčŀą­ƏÅăUȭçǽɉ́ŐíɃʃuĄƓħÂÿųěȜǗ¦ǉƼ¬èȜƂEǮɪ{ĄǌļbVƘƟ˃~ǗƒɃgkç̍CŀĿEĭỤ̈̌ǶΕĘÕQķǢŇ´ůƲ̱ɯʺűǞʘźćƼ°̬ςԚ˫ÈŧƸ',
          ],
          encodeOffsets: [[63493, 44550]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Qashqadaryo Province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@ĸĘ͢ĦĠɌƦŴͨWǆtŐƕĶiʂêŀÃŨöȄepĉȄȒMË̂ûdŋƱÉ¢ƧůɇȉġƫğɁǧsğɭÈŻĸʏòͣ¢ͣǶőĔǯÖʭƆũĞ',
          ],
          encodeOffsets: [[65923, 39882]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Republic of Karakalpakstan' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@ŨƷˬÇρԙ¯̫ĈƻʗŹŲǝɰʹɒ̏ȗéÝX˭ʪˣăóMµįŐǛÖ͗ȲŧȼʣÎěĕđŦuǐǁĂɗyɕêŕƖɓǹƨȃíƧvȭ΃TZǱýÓǝcĊɏĖƽűēʍíįÚғ࢓¾EᎮ@਺஺ˬॼɌƷŗşǃ΁ìǫÍƷưƦŰ_İðļËĺĔǮ£ŦĖȄ̊ƷϺǅfȻΊĴ࠾ӹĮ©œܮ؃',
          ],
          encodeOffsets: [[63493, 44550]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Samarkand Province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@ɦajȗÎËĭłÅ̼¹ůčģFûŚóªĵųÕȑȃoĊȃfŧõĿÄʁéĵjŏƖǅsͧXÁĀĨăƔʄvîɄ̂ŏɊèǾVȮÆĄƐĆ®ĎĿ',
          ],
          encodeOffsets: [[68219, 41467]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Sirdarya Province' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@ɈăĞE̊¾hÈíǂ÷ǎƥzƕĝĂěőbͩ¹XĠʓ­ȹFJĶĀÔ]ź¨Đ'],
          encodeOffsets: [[69887, 41652]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Surxondaryo Province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@tĠɂǨƬĠĢɈȊŰ¡ƨƲÊͶRĐëĩʉUĳðƅȺƧuĩŷŷíDčƿƯǙ­˷Ȼ`ɓçǳǔ̏oŻȈTǲľƦ',
          ],
          encodeOffsets: [[68273, 38878]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Tashkent' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@¬ĆŨlàĵǏ×ãÜ'],
          encodeOffsets: [[70781, 42256]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Tashkent Province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@ƐƞȢŞDĢɔÔˈȌ˸ÒǚĬƌǀƀÔƄÿƐǊȐîȴăȫŇƏ[UĥǃƗƿʃĝʀǵãõ¶ɡčťʭţɱ­ĽÉĳńƿLgƿÑûʗŕdāĜĞyƖǍƦǁøÇî',
            '@@äÛǐØßĶŧk«ą',
          ],
          encodeOffsets: [
            [70288, 41928],
            [70781, 42256],
          ],
        },
      },
    ],
    UTF8Encoding: true,
  });
});