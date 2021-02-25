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
  echarts.registerMap('塞内加尔', {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'Dakar Region' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@lNp­eŗO]g¡ïLe]¯¹¬MâjĢŰØ'],
          encodeOffsets: [[-17584, 15246]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Diourbel Region' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@°ȸDºã }tËß¯Yė¯©¿mćQğf³Ý^ÇSufăNåO¥CV¬AØn©ĆʎâcL¾X}¤G¼',
          ],
          encodeOffsets: [[-16507, 15337]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Fatick Region' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@hAvlSz|ÜbâfªR¤¢ºX~QæPĄMveÈTÞ]´ĠeĈRÀn°ªZĘ°ÌàtPæ@iÈLzWVçvwėáyãGùÏÙÝk¥A÷īCwcµoõpMvbgzKòr ŧgk[©ÅUaċÎD²v©aPû@Æ§TkM·uͳCªy^kª^´[lé]vDðgƮuÌ',
          ],
          encodeOffsets: [[-17205, 14471]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Kaffrine Region' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@xdD ĬBøl¦ÚÞúÐäHâzĘĬË¨eƾZô®V®¯vYƎnYAyȣ¨¡PīURěeõ±m«ÝAy­¯¯X¡Wå¹eeg»¹[]y\\³Q¬ÙHÇ³ã¼VÞYhíÀO²¹I',
          ],
          encodeOffsets: [[-16245, 14464]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Kaolack Region' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@JºP±î¿ZgUÝä»´ÈÚG«Ïs÷ŇNғBvN¸SlÅ¨@Oübuª±ÍCbČVªÆl\\ŨhqLñhyaNuöo¶p',
          ],
          encodeOffsets: [[-16245, 14464]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Kédougou Region' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@d|Br¢r\\sÆL}J§qn}aupÛ¢¹Ufğ°BN§OQßxTÕ­EDÅfÏ_uR{¬yN¿{|¿fSŻackëmlU±²ËG¥·gawu×MĝGx¨éhSy½ÎHāM\\f±R¥ºaE½ĭRIhªI¦@b\\fqÖBºPexiF¾ÐL¤wĈdØÂp\\zJZÀĒjgÜ^R¦J¸y¶I¨jM^¬WpqOds°{zPR­T¢´f',
          ],
          encodeOffsets: [[-12170, 13705]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Kolda Region' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@NÐ¬Ģ²¬¨dÃªČ¦Eu®A°w¼A`¼«¶Kl{âÈBt`ÖcÄ`vB^¤FfæA¨`tD¸{`EZSm³J°kX¿ÌXZczkN{zGb]Ç¡Dy{¾ƹ]un³WqÃìVBś`ѫFˋAӵDǭP°äDÜ¨EÈËJv{Ò@~ÝrgfGbzAÄ',
          ],
          encodeOffsets: [[-15707, 13681]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Louga Region' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@´øŊǊ ðŌôJæGÈl¢ò¼zǴĈ²²¤zȮɋDÎά@ʌBĢ¹ƈOǄˁ]ÓC­xÉi­½QUcǙ@®Ã¶gtér©¬áA·ÿYÁµ¡Ľ{BmZƍ uZ­°Uó­Yƽ§fīÌuxUèyXÇKjå@sOs~¹äȷC¯¹s¾{eªHm®¹ez­D§¥£ËĳmiwhqŅÆ',
          ],
          encodeOffsets: [[-17210, 15702]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Matam Region' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@öD|SRr¢ȔȐŰżRhĎrüĂ®K|¡dsÎGÕqlėAî×zdĈHug¯m@¶nfó@¡dqKgdµZs¸N@£¤y°QeöŅ^£ÃǇÅÿÉƑwélǯ~ɻǣ˛BŻÚɥî¹I´¸ĀB«âqªsêµh­Ä@ǚVd¾Rj®wÊ',
          ],
          encodeOffsets: [[-14768, 15865]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Saint-Louis Region' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@dĘMJRļ´lEĂrC¶[¨DfNL¬ÀäK~|NX}¤ja¤zDNe¨ZæivaàpNÚ_|XD¶vvnU¦r²`ÚkÀWv}~bpKl¤X`¨]L¨Gðh²mĐlVÊLr`¤sújèCK¿ĪuhałķRk¼acsÒė¦iS}ªPz]qûčQgůŻȓȏq¡QT{õCD®^Ôǃ˂ƇPġºʋAΫ@CÍȭɌ£y±±ǳćyñ»¡ÇkåHóI',
          ],
          encodeOffsets: [[-16924, 16213]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Sédhiou Region' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@üACƢÒT¨j®aÔLÀĬHBÃayHheÞq@}|ÑIuÌFÇ§CÛã¯½GŹË¹ƗÑïǧtypOs`a¢T~I|âWUprOĊf°|¦x¨',
          ],
          encodeOffsets: [[-16276, 13485]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Tambacounda Region' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@z®ÞBn¬ö²f QĜVOĬ§¢zȤľ|¢Â¶ZJ³ºɦíżÙ˜AɼǤǰ}êkƒxÊÆĀÄǈ]¤õņRftt®qäy~}Põ¶§È_ ­Sv¹|QOÁwGG»~Ue¼YXÑÊiõ^U[·J½LÜ½aħÛÉm«DBi¡rO¾±cÙ³e¡SQ®yO¯|ctPorX]«N§iJµ·zIQ¥Û]ihđY¿I[yÁo×ćc£xÏKE½jwfOA¹rÕe[³EwXħK[\\AëUÄXrm´^v½ƺ|Cz¢^ÈayHM|yldYËWWÀ¯lIn´TYFir£\\µwN«wQ¡omsąqñ¡YÄ§ªÛN©W¯Õ[Ào',
          ],
          encodeOffsets: [[-15184, 14087]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Thiès Region' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@p²ĮňÎðĔŶņÅrgxnjÌĴ¦¤¨®Cfyºn­Gf©|t½º»£HW~½KdʍáªąmB×U«¦DRW}¡¹£©Qeaá{ÛTyukBgÅ®Y²£IÊu¥Vw¼P^fŘo®M k',
          ],
          encodeOffsets: [[-17584, 15246]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Ziguinchor Region' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@§w{¥e¯PĉoqVX{áJ}Sb¡t_PzoÁOí|ĽmXÉ{ė³śsVÁ[{Z©AwgexiàÀŶV[x\\ŦTÞUX¦fpϐE˶F',
          ],
          encodeOffsets: [[-16276, 13485]],
        },
      },
    ],
    UTF8Encoding: true,
  });
});