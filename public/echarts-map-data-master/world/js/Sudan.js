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
  echarts.registerMap('苏丹', {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'al-Jazeera' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@Ţ¶͢ĀȨèìâĎçŚƑǜĢǰ̏ĂĹÅƯȗˍ±ŻvçßGƵÞ­aōéÃĕsħİſĒēeāŃęåUŁɱYÉeaƪĊŃƎáƺ|ĔĀČFŀżĬxƾUĐµÞbĄ«Ƃ',
          ],
          encodeOffsets: [[33358, 15582]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'al-Khartum' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@ĜòĂnǎĹĊħê©Ζ@ƒŢË˾̒ŗƪĉŢZˈüŨ˝ïġǅTȣěOȓūéĕëáȧç͡ÿšµɩFÇĖwŦǇʔđƬ½ƎǶƿʈ',
          ],
          encodeOffsets: [[32387, 16997]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'al-Qadarif' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@êĖȔŬĜPȤǆS͊ųTŋǚśŰƃĈǫϤEDēƨGƑ±ƵƍˏMƓĔ©ľzɬcİɈƁ{œűǙĭύ¡sƝőhʳ·ʟ¬Ł¢āöǃĜɷȬę¢ɇǚ­ÐBļŉĆǯɆuè²żȘˎÆưāĺǯ̐ġǛřƒčè',
          ],
          encodeOffsets: [[34234, 15902]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'an-Nil al-Abyad' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@ɪE¬Ɓaă¶ÝVďwƽŻīEĿÿċ{ēâƹńƍĉbƩÊfɲZm̕ƶȹĕĉʗĆɣİÝҿdxȇ[Áձ@ƁƄØŧx®ɆĊpƦłlÈǎŶƲìGŴzĶąděĨǉʪÅ¦ÑƘq˴xºǰƈȮ̶Ì®ɤĊ',
          ],
          encodeOffsets: [[33081, 15585]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'An-Nil al-azraq' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@̔ǲɾƸʈôɆżļĺŎQŚßõǖԇ®MnƍĳɉęÓǽûƫũǟƚŻēūə°ɳsŇûñoŁÉū¯ǣl«ȕAxȘºÞ~ɌùĞčƐœĚŵǚɩŖr¦Ë;ÃǢȦ',
          ],
          encodeOffsets: [[33967, 11955]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Central Darfur' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@žǺ¿ƞòǬÆČĘŊʊìĞŚÌĠǰİŲxȢěéĜOĐ÷ŴCÌæƌ´ȚE`ÃĭƏƙÑăōů˫ïĹùͭñMųÂHƩ¹ĕ~ȕOŅŏƣġëͿΩvŗǸĊʴǘŝ[_¼ő®õƀ¾˨²',
          ],
          encodeOffsets: [[23126, 12350]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'East Darfur State' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@ǊÝ˜ȯLÙĝWkĿØŨťĴƕƪxĄöŉɺoˬPêĥ^íA˥AùĒʽʄ؏Ś˗îŋÔƳŽKɁb̛FıoˑĩʷÚùĂõɐćìáľė°EǦcĬǓɐ}ÌVǢƏüCĨœĔßĚ¥ŀpɲVʨĈúJɬĜoĸFǮ',
          ],
          encodeOffsets: [[26034, 13258]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Kassala' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@ĦǾÊòࠢWǴǖÈæL΄θŃˢFѬØl¡KȧýōUƏªÉPƍƁΓÅ¯Žѥċíæڇjēćʯį¹ŗɇƂįɫdĽyēªNƔƎː²ƶHƒƧCĔϣFćǬůƄǙŜSŌ͉ŴðĢŧ˞',
          ],
          encodeOffsets: [[35082, 16526]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'North Darfur State' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@ƈľÀŀ_ƤÍäǊȄʊcžÐɒaǂ¯@ц@ݲ@Ԏ@۪@҄B޼̔KլHᐜDV᫇ӳ[Ă޽þԯ¦ǿîţþȽvŵŚ˥ɓêǓĿƷŋåőƳȉC̝Åąĺ®ÃdĿ˫OɹpõŊăƩwĳƖŧŦ×lŀĞXKÚ˛ȰǉÞ˹÷VȁŠǧČĮƐ_ÄșFƋ³ËåųDďøěPêȡĜűwǯįµĺzŴÉöBÔĲŸƎç¸iâũ¦ŁȘUÀ°ȊÕŞ',
          ],
          encodeOffsets: [[23328, 15352]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Northern State' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@Ùٍć߽ħߣ͕Ɣś˜Ƶ¯ƕoǹĊʑɭ̽ԿܝāměñÿDҵ؍ؑfͣѡxवMU᫈ᐛCDؒBݮG̀઒@ߞ@ࣘ@੒@ۺ@ݲ@¾ŰŊěƻ०@',
          ],
          encodeOffsets: [[33324, 22528]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Red Sea' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@}ΦèȢي@੠@ڀ@[w¨ͅŚȧŢřÿ_vǩıPƗ¸ť¥ț|ɏìǝȭ®ŁĖχjůĄŧȜmÆýŬ»Ɣũ¥êĹȜåhƔñE©ıđóǣɽƏűěĕxïȧÉpËő½ÙįpűƏ®ѫ×ˡEηń×ÖħȡłĹłŵʞċƊϥ˸ǋhėĵƆƭ̴¿Ǆū̮ȒOļ«ǼiȀ¬Ř@ŬŕɮđƟǎ~Ƹ®Ŝcń¯ôɠǺ',
          ],
          encodeOffsets: [[34335, 22276]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'River Nile' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@Հܞɮ̾ĉʒpǺ°Ɩ˛ƶƓŜ͖ĨߤĈ߾ÚَՒ@̔ȷɟǹ°ódŃ­ś}ƷƠǍĒŖɭ@ū«ŗjǿ¬ǻPĻȑṶ̆ÀǃƮ̳ĶƅĘǌgϦ˷ČƉŶʝĺŁȢŁĨØÕK΃ÇåǳǕࠡXÉñĥǽˇûšYƩĊ̑Ř˽ šÌƑΕ@éªĉĨǍĺ',
          ],
          encodeOffsets: [[32594, 17109]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Sennar' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@VłĚæńfĂĔƀđĨįĖtêÄbŎ®ƶÝàHǰɅŊąAĻ®ÏɈǙĚ¡ɸȫǄěĂõł¡ʠ«ˁеōĵţĭ¥ŭ­NǕԈöřàōRĹĻɅŻʇóɽƷ̓ǱêЌÐįÞąɤĊʘĖƵȺn̖',
          ],
          encodeOffsets: [[33765, 13889]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Shamal Kurdufan' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@शNѢwͤؒe؎ҶĀCǀʇǵ¾ƍĒƫǈʓxťÈĕɣĉË­ȭ̵ǯƇw¹r˳ÒƗÆ¥ǊʩĜħĆcyĵHųƱëǍŵkÇŁoƥęɭ»ǹPƉǻšĩƽ¶½ŔɑhǧE@ƬçĂÕ@ĻķóǉɋǍʡȠLƧǇĝǇ]ķċÑƍuŃºǣ]ĩȯȿʵąƇ_ƫ¨B˦]îéĦcŀ­Äk̂ÆĆD̞ƴȊæŒŌŀƸéǔɔř˦uŶýȾíŤ¥Ȁý԰ā޾Ӵ\\',
          ],
          encodeOffsets: [[28154, 17086]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'South Darfur State' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@΀ΪĢìŐƤPņ}ȖºĖGƪÁNŴòͮĺúˬðŎŰĄƚÒǨċȂşøU˺EǭpķěIɫćùUʧoɱ¦ĿàęŔēDħƐûUǡ~ËǔɏdīÿΕȡËíKÉų¢Ûĝƻơĩã »ůĉ£ƱQī©[»ͻPuǒ̥ӺȿǮ',
          ],
          encodeOffsets: [[23611, 10925]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'South Kordofan' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@Ƭ§ƈ`ĆɀʶĪȰǤ^ń¹ƎvČÒ^ĸĞǈƨǈKʢȟǎǊɌôļĸÖ@èā@ƫǨFɒg¾œƾµĪǼŢƊǺOɮ¼ĚĉɅ­Ũw×Ƃƃʜȳ@ѳâřˑʱƇóűɩЋӁé³ϋQGʯȾѽ˞·@͹ǥ@˧Λ@ıÛ@вও@@̹íŌř˘ʃؐđʾBú',
          ],
          encodeOffsets: [[27880, 11652]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'West Darfur State' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@Öŝ¯ȉV¿łȗŪ¥jáè·ƍıŷAÓÊõyų¶ĹğřËëĝŉʉċėÅñǫÀƝŽǹė}pŮīɸæƖō¤ĥÞµÙǁÙñňłȲöĀŊ ĠŌȸýĒ¥ĠŲǀˌżFĤÝZÐCƴ}ĄÈȜ¾Ƣþjì',
          ],
          encodeOffsets: [[23328, 15352]],
        },
      },
    ],
    UTF8Encoding: true,
  });
});