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
  echarts.registerMap('俄罗斯联邦', {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'Central Federal District' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            [
              '@@Fhtrô[¦dTÚE_tFnc\\ÒBĖaj^W}oªD_rsXYyrPvglpm^Il`jx¶jCTrxDbz]juXBtej¶rKv\\L¼¨¢ŧCYh¹CÕhDÊ£x©DbğtN@ÌF¤ċR_W¯DD^Ph`tÈ¤]LpKQXzªZp oĔVTÈ[xB¼{^P~öOÜ\\NjĀX°bxKeirOĠHl¾Rlz¬EÚThR[¬Jbg]¶HN~îtÐG¤\\Q`ĶlöUljteDenZLp¤A¶iz¨VF\\A¸ftI¶snJhzRðSNCjâMdvx\\zc²¦p¦A_²`·JA¯]ƘĂRdÚSkĨrpTGNiìhElX¬sŶo¨]NaLqÞHÄtG¦bTªeTrjôz]ÞM~PMgUvfApv®P¾xCz¤`´^@\\ÔEĀF\\lbňZeOĆIL[Îh®¾MènO¶\\¤KZ`KÂOlb¢Y°}Hdv´F@pKB~xjÈAÈzOf^DtÈĤOÖdb¨S`eOháQAqah«¢PrMxlaÂoKx´[qpPvmT^®¬CÌNgJ¾Ä°F}ræn|AˌCÐw´xdİwƘBLWÚCCh¦lxn»[bJZwðT^Z¨iº]ČV¶¨PXaD¦OZ^`ĞÉÐBÒ·bwìLzeGXz[Ki´FEEya@poOJ®ctj¤[¦GtZElhBdðRÎMfNØcÖ@ÊPQZÂT\\tn¤EbZEp¬tTx×ÀÈbmzºSMªuKVM^nL~@¤İtTx¤FrĊ`^vĆK¬kÐIkpjc¶jMnPRĀÏOÝhVjrĤ¢°DgüE[å|wQgǂdPÀA[^yShNY~VOÂdBb¨AúZ{ÈR¦¢N¾r\\¸XC¸PK¤ST{ÜXtlDj°x¬@R|sĂE ŤtæHWc±ĔABcChc vǀMƾ[ɠabÞɸ]N՜ŸŤSFǠWżHĲ͌sP~ːqËȕǖauÿYĂ\\[¨WèJakToÚGssÄµGsªUqTåiJbïXiqrKMDb[cgÃIYUÅEeXÍq[­FMw`ÓŉW»e¹Gě[©aNg±­nqEµÃIÁDM[aIñjuHS]Q}uHyctiC_ƇAķGşAg[½PMUi£L]_^gKu½µMjÅbab@¬ǹFBhÕBDǵFA]µRçQe]Lqo\\sS­oq«kSGuÍAkkėELs½gOsTe¯{ç­«_ÉJeu£i{FgáU]WåFk[LwS}`Ùp{nV¶åPs}Pu[w{ßMm«}Df[Ĺēe¹w{_@}Z¬ÇÀ§buhµ^§YYíhU³EN¹c«AO±ws~oI[eT`sX§Óa¢MzēCţ@xuÅixCªkN_gByl[[Cy¶·Ð@Z\\[lO­B¡i¡@Õa[[QCOTk[[ioÁvE«ecć_aMs£cW©JW[fyQmHqSBq¹eoR_¾mVmáNY¥OJ©ms@opqcmN{©DOc}gbgDDb_|LÌAklcYkRiÀcªBĪizjZnGhCjaAeo¢¹§qCµbg½n_Wc~QEgªyn\\gA\\f²yYco~OM_~qurËgE`@¿¬Ru­U¡JU{Ñ]e}§Cu³Z`Sohw[]¶}ªKTSz¢`kX~F²rEÒêkE[·TwZ·~WjÕ[åó_GÁ~qW¬Qx]@«Ik]sMëi§@s]­Hb©EsiP@QTeKëdA{«¬bVMcD|_zH`stMJsW]iNsH\\_Ø{VRÇêÂ«·W¡äL^aÈ©²}Ů³EgefmĆÉZ@Úï°åyBĝÉ­UQy¸sëetdQ^uaM}QÍVnqeu}M¡uBÓmoFSeëF§mX}asH¯}]caŅÑe©`D{tehÆMĴBWØçC_·^k }gKU»ouXĕOV»{«ÅOı@Y`ŅoåDEñXÁnNO\\¡FÏoQ]eW{AùeÓqËSSsNmIwTÁiƉĚuÒĐėÎFn©UÉÅÜßtµĕĵ_fq¿L¥´eBYuQkĕQġËÝLµUO_éçĿBc·CéPk{kuJMñRąÅD©ZsuÏcOPėSao_©LK±÷dkhs´mxh`ÝN¯`F±iýblm~A¦¥wgomNåsk@inL]\\«Iq\\H^i~}POxlrIej{B±eJgLcgÇtBzcpGvyDs[ćLP³§cOfËg£`°fqDÇ~K«²f{vHXytZrA¬cpUipNjepA¨hHLnÿuÃLoUasQ×{CQÉEċBÃWsÃWGSÑmYiÃhq\\\\r¥X§vÇEmÉHmVZïÄwRSnýhýSSPcaXiCo¯ğ@F¬TÏOdpĂzwf\\QTrJvRcBp]j¯XOXvvihÔ~Dr}huIhocLcoPs FtuP_v\\´`GyWw^·IYacL}LÇBnG ­N{cf©Qf¿X«oC¿tM|¨~¢§RxoxVUbªtA¨BEvgry`wE]¤E¥n¢pEªbjKĖbºDdBwdL­·xy@q|r[zA_}CHi~Pz\\kdAt¯\\D`ÁnPtC\\`Ze|¡JÃ[Dm_§KiGU¯HqTfLjHK·f{e¿JådE@J³kTÁB×yEz§JÏmÕ@IVÛGwvù@sIu^«Q`«ryÏoj}eII_G{ĉCko¹U^ÇFEbz§\\WZMØýRlhuÂmC^|vN`¾K~gJJhtkXFxr´\\«dL¯Wl²P[¢§nc`hrµJjÍªNhoá|lhPKpJH¦´JHhuxtZrapĊM[J`UČke^|u´HSZkêPÞ]àXHb¸\\fZ¢G~bNxjKp~®¨Q¬ĜDL`avfZCld¦çJCtÏr»HgrP©¸p|\\B\\ìb@t^CbđcCfÑyUJW|±DWXDgWùBikL¹M±pBd¤hI`AxVxIbZÝNWeZLnD§Wc|ÅBd»V]fz«JHhÍ`GVZCi¡ZfhIv¹PÃdqf\\l\\`rTQqXÛQíZs\\`K\\P_fµVÁåjÆc|dXØ@¤rNXFhU^I|VWxunNi°wt«CGXfbtprJVj}GzªlZyà',
            ],
            ['@@rRScEk'],
          ],
          encodeOffsets: [[[31668, 56958]], [[43452, 56109]]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Far Eastern Federal District' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@Õd¡BmXP´Q@Úw'],
            ['@@wkWØYÎOGsPTwtm°H JB{xIózOldz£^At}|Xqh«`ģÖM@¢s'],
            ['@@gidPpK'],
            [
              '@@À¬\\x`z¶CrxJzÎPQÊ¬G Y´G|`r]XouÚCðW@_q©NiekÁEdÃSm¡¹Lo_Uuo_³a£IioQ_zgA£üiJaqBm¢¢[BÛqquÑyom}Ahà',
            ],
            ['@@]Sµ\\BPªìnrĚvPX¶h®àAØXt[¹oSY~csCÁNwMcqH[GUcTacfo'],
            [
              '@@\\`yh³pŇtĖhªIÆqÆ[łETygEsí²ó®kC_V¥ø^YAKm²sTÃf@ùf½nUzãl|R·BT±ypLlDWjJk^u¼¹k|^PGv]r©n',
            ],
            ['@@XvÔDjUcñj'],
            [
              '@@øzĖlhĐzl¢OTMD§°£Y¹Ry±ÓAS©N[ÿ[c[¯kßR]igĉgC§{Oµ@¯{skģ¯Eg¥w]~C}lLXTĚZ¾¶f fp¬¤ÎLÜĈèÔ]rÔTĬx',
            ],
            ['@@Ĭ|^FvðaPoÇo{mç£MóJn'],
            ['@@®\\a¡CmHeMglÐhT|V'],
            ['@@]©£G}bx´J'],
            ['@@bj|nr@qS'],
            ['@@²VKzc¡JřBIl­FdlŬO'],
            ['@@¥J¦¬òÆ¢LÂlOìEò}ĒoIeš_ĭŝIYËD'],
            [
              '@@@φ@͘@ٲ@Ɉ@ɲ@͒@̾@ΰ@ǎ@ΜxEŤĈgĜQâJ¸f¤WĄúwʠÁÖ[¾mȸĩĬ¥UΰŁƂ¯ƺÍ©CoabkìUne¬F`ªNbÎIǠÍÌ_͈ĝńļŦƢņyĀasȜËɾÛ¼Y©_`®yLsƸëŬÞw­ûaumBiQFăwl]Y{O]ì·Îg]x}NzÍ[o¹F_{}A±oj¸muĮCL¼IäcºkÎQpW`±QcÕpo¦U§eCÜcØ^@¢ÄÜ\\hbŸ`®[IÃwUqÛkQ§­evÞ`ö´Rd×VfÚTnWzxir£`§FoÅTÅEs\\ãBfÅR^rlŎzĴjhUpKÞÜ¯TrkÿVÓj@²ÙEé]ćDĚvēBđ{¿LHf¼ZļJʼJ̸QÂL^@hĈeƪgʦyȆ_ÆBŊ_HcĠMɆ{ƺU¢QƄxVUÈULĮ[}ÅyXkÜþwĤw@xm«wcƬÉ\\SłiàciĮÆwê«P]úgȌ¬Yo²«łqȾ}Äip­ey£đDÍÇ@ŉmÿgWmcƃŝ¿if©uEvaWZãGĽPV«BOlXƫ÷XÇ¸ƍ´¥nWk¡ĂoMuÊ©ðMĎm~IP_«·ÙfBobÇlFƝYŏCŽYadÏJŕArÍVëod»GĕƉpûYQ`µZ]³l[¬KªPæ_ÚwmĂ¥V[īNgWy¶e²BÎX¼dhOÉAocÏ`xwÜ±]ùÅ«½_ËyĿcŽqe¿g\\«DÁ^@·_Íuzo_áO´eÐ`°PªvĖ¥Ês½DNqscFíS×iJkÈh¨E`Ì]ÛGcÏyKºLÌF²OdkÞ@}ÂESÎC\\Î¥ĄMKĵHïI]ė]ķvBzHÍ@řQY_WTwŖj¼O^uy£n[»¡D£|fBg³E_ñAíaÓP`Ƈ@lä´BnïOZjj~[¢Ód~Jw}swJ]eű­¥FU×rñ^Ǘ¨RTavT{dƏ¬c²ĉgù~Ǖtāhi`ţpĹsĿZaOę\\GĉrÊjStāKUǛ´ėZBzĕvôpfvW|fe|»á¶C`j`vn}¶µjßbȑ~ʳÆʅ¦ÓR\\¦a²TƋ` ^@\\ËKI]Ó}ñkéç±ĥcƑKơ]¡bÏWɋ\\ĭ]ƛ\\lÑZf~Z^clT\\¸jDd«ÅH­[ËnËSU±±brtPH|wrljòWzp¨dQzv¢âC¸r|l|rT±~ `TäUVUD}ûWde¥£cPeÃ]±kGÅL­nXX£\\zQxHªqnqVq©¯\\ÕZómQJĈÒ·WeÝğ_ŁAwN\\`ÙKVoç¡YoXËI{f­¼Õy]¤_Ć³ÆwŠĴq«WoÆãœË_arkeõĭÙywP¿]©ŕ§K',
            ],
            ['@@aSīFGTÈ^j]¤E'],
            ['@@p_BQ'],
            ['@@Kf©jbrKEHo@SW[WKkG­AWG'],
            ['@@cÍy'],
            ['@@jouÍWÙDÊÐZTp'],
            ['@@Fb`nd|S@iI'],
            ['@@s¤JdoqUCg'],
            ['@@ofyVYb OIj¦EQuoH]eR['],
            ['@@sGMvhDEre}}'],
            ['@@|@pq±LFf'],
            ['@@qDDhCgg'],
            ['@@_ÌnadM[Éo'],
            ['@@gv^xCè`CR¨~®M`lÜ³Uc·KskCEigQÅK[yc{Ol'],
            [
              '@@bHb lnV^ªnTnKp°~bNhv~¤zªn°¤v¦¦zJÌ}^wĘ¨JØC´VvAk{{lA[¡©±ùOwDµOq_U{A§k]igII{EqaeëW¿»E¿U§K³i@R^fTù[]~N`cÜ\\`n`¢dZZ',
            ],
            [
              '@@wSykaQ¯s@y_E[±]¯umowQyk[©§S¡PeI£mi×^[ZbjjxLmpHx{xHxtG°O\\a²^¤jKÃPmfKp`SmZ|Âº`¾~²¤jREdf¼IpN`g²U®jRxOZ`lr bªTZS|bZx_\\L_pOx¦ob­\\ch¯zmÊSĘNò\\\\Rb\\¤~Îr\\jFx`Z|ÒL|TôKafeEu³qGpOpB]CiW^ëAëg{m]Wo¹G{aó]o§e}oCÙÅ«¥±yK}ÁA¿a{XwlBlyHW',
            ],
            ['@@shpP~Uya'],
            [
              '@@N~æ¬®zWô]Sa_`]km§mD{bmoqP]s_ayA{U³oA]{[iTAWsPK{G¡Q¥MGp»tBÍUerjj|ÈM¼f]ph¤FÊk|AzÀdXGªVAtgRÒ®bJX¢@fr°',
            ],
            ['@@V_bPN¨°H¾|\\F¨`b{RáwiNeÓIKMËhh'],
            ['@@°sLmY]ÕovMatvVÄY'],
            ['@@w`KÐ¸²Nv°ÎZ^H|@L[¨US][½gEkmKLp@c}M¡c©G}T'],
            ['@@SW¥jIvT|\\O\\si[e'],
            ['@@G` vJpmW¯yoMgNZ'],
            ['@@Uoxn~ÄPf`Z|L´ÜdªiiaKowaaDmIows'],
            ['@@lBjP²iNgS@'],
            ['@@^GL]jwJS¢X¤y'],
            ['@@ġhIbHO'],
            ['@@I­«GéNrsZ¶TČYzUJ'],
            ['@@^YdcE]ª'],
            ['@@Hbðx¨HWmí[W'],
            ['@@T¦FFWçW[V'],
            ['@@Ptz\\nM·'],
            ['@@QRvKvIN'],
            ['@@bJ^xVcC'],
            [
              '@@PnÐÖI `NU^ÔT tÈBmÊN_mWU[owQ»}wÕ[sI¡mGsmcC­­JmJY¥W£y[q{w[sÕ]¥u§@bzjVbjzT¦¬jbZpDfMVÖ°V~¤d',
            ],
            ['@@c}Wept~E'],
            ['@@hXC'],
            ['@@AZplz Xl®jVx¢j|¸ÐJìpLcmoď³AymO}éM}iq­PqdQcZ^\\þF|Q|Z'],
            ['@@xItgEkYÙA_bI dC'],
            [
              '@@Ú[ÆZZY~PÄ®`ÈĢ\\DzÞX´|HzQbHsÀ[f§DdzúKŎFbXtClz`fZl®BĂàhmÈFtS~I@Ô_z@¸OvÙĠėĨ²£ÖUºYTvº¦xNzkvLjjBªl\\U°pJxtk~@èzæ~Bt\\HÆETrHI¼\\¼}öRZUªnr@p]`~vCøI[Hs~v|I§º¯þGPbLÎhÆbhIhP°Stf^ZàØ¦lÊKôgr}À^TMyh½ÀM`bwşêP¤ez¡¨£ªV^jLpOb|N¯dÀDs¦BhipFzx^YltQnz²EbTÂÚĔPobn~gn¢od~¤G ZÊCvL|WáüK¢¨Cp\\xIxÊplʬĀTiid_cvz_Djl¨U¤R¦²Î¦YtDAzyCù´_aFsHOÎ_zºhvSÒhÃTtp°yĈ_jNwÉOÍ]ÂÔÞHÔŷĪ±~[mz··tZ\\°qSÊDRôrbkÑ@[ix\\oIZ_p{ÈM¨^jIL}dÂ©°r·e¡Ï_GÑ{L}mÆGlÅ²ăoD¶ëHmoBqrMTvqv¯eXo¨Kzafrv©āb­|ũºMnTÑ¬Ncz^pUHRo`AfBoWµkM[m~QMydu\\£KulYjuypyWAklekce\\r] _|rTTBl@çMƙ_Ïg¿±±URfvz¤rErRx¨A`~±[YícUWhgÇUJg@PrnGmwa½E½jFÏl±_Qv}fFWcQ{OeT` Ï¯J@yG±oM`w{GtKª^|ahFbcHjR®ĥŉFu_y@¡ªeOanomonSn`ðɋZ±tÛfčnµS_P©tāýõt£¾čĮŧSzÉ²ĉ¤ÅJ{Wshé´Ë¦¡sgP½lC]z¿V¹ºíh¡«SWÞƎûtqe{V{jgoUO¯Ka}W@ilNM×Ă±²±]jtÕpat¥z¬»wěĉlŉfǏlċAċOĳeœËÍ³«o¯GPyzqNOįŧ§¹GaÍq·cÇÏW]SËƥek]¥HgoGÉ]}`ĵtÙñ¯ÀÍ´¡¶{K}rIiNoDZaFVaEosF]vë^eQmyQVk°}äw¬KªJlTLYdmHr©Ua@lQh}@R|Co¤«s@}I_]W¯@ýskUYSWÒ\\|I|^bBàÆixS¢X^Gp£pÁ|O­AZCóháe@AbkcÒjikµC¡SËy¯Ñ¹řµ·ĳKLwWÁyé·isw@}Y£|YpsreN²kĂ]¨SÖö',
            ],
            ['@@|¼ÐTċiEqoÇS{]u^Äp|'],
            ['@@q\\W¾dxw³±quZB`'],
            ['@@p´NlyK_DK¡W»`I`'],
            ['@@JO¢·Z_|Ĵrcm'],
            ['@@ÂxŅ¬ƭvBRoXRTCNkhZm@|ºE^ATVlG`KROIU`ĊoĬmesb]­ÈÑt_HÕ[[åe^n'],
            ['@@Þuuo_BYLTmh\\'],
            ['@@]`çÕpEklHRxRfA'],
            ['@@X_²kyoóPÉªRbôAh]'],
            ['@@k¢Ku'],
            ['@@L®Qß«C'],
            ['@@n_{¹UN}¦«ÊYMs±qV}EĉrYHPGL[NÅ¦Wzh[|JÎZr\\Üd´tÞdom'],
            ['@@ībðpŠ\\dUwsÛsh'],
            ['@@wl¯¢\\rÒôKæBmëqkK[ċ_ËMò¶'],
            ['@@i^TZ`òwY'],
            ['@@õy­DuzÄnºY@nw'],
            ['@@S®C'],
            [
              '@@ȃĹx±NýtċbpqơďZl®ĚÀż¾Ăjɠ|¸IĤò]æo¾ĊLâMìyĐEWƐsdkH­ĵL[t]^¡ß¥ƅXħQƇd',
            ],
            ['@@ÿAfzÚw'],
            ['@@ÖW©QBÉM]PELĘZ'],
            ['@@GV§VÂRXQik'],
            ['@@þY ­Ưz'],
            ['@@­JãKë`ÂªŰD{è_'],
            [
              '@@@ѓ@£ǗqƋ£ýZÉC_[ßNčCƟmćiĳáKJ³òÉ¤yEÈ¶zÊlr TÈÀǞĘtöl|Ĵª¼DņpÞEpzĐZnæd',
            ],
            ['@@psaqXVR\\'],
            ['@@dQ­Ç^ÆvD'],
            ['@@SeûfĿRjðKĜo'],
            ['@@ċ]gjèR]'],
            ['@@ÀXĪĕCÓp'],
            ['@@ûZMTœpŲJĜYo'],
            ['@@ÑDKdĮAe'],
            ['@@³@Ofĺ\\¾ĨcµWûRén'],
            ['@@ÎKĂ{}Wő '],
            ['@@¨Dz®OŮ@Ķhqwūs£oZãKóFxh'],
            ['@@ÑvoªCŎ©ĂiåMđR'],
            ['@@ƚ[ÒoûWŏ_\\'],
            ['@@ŎWLeə¨bØc'],
            ['@@q\\ŠDeoćP'],
            ['@@ÉPj¢Goq'],
            ['@@ÛWÝ^Ä¢TâOÊuėW'],
            [
              '@@@ҸĢ]êr¦DtjèOÎJUƺCÄqZĂLnºaªfbːWǔgǨxÔS`eĒTþwcksÀSƠéĶ²@Öw²G}ãM¿KĥÁMħɇ]ōkē@ƅkťIūkùQƳƩHƁKDWȅÆėRŷj»E',
            ],
            ['@@mÙ]âD'],
            ['@@ąTŏpÆbĮ\\ȌFtYä@`ĂBŢi¦]©gÇŹ{ģ]Ù@íR'],
            ['@@dLAsāwcZDnfZ'],
            ['@@k\\ª¢eiMmaio'],
            ['@@ÚwõE\\~'],
            ['@@~RĠKW[ŅV'],
            ['@@ÒmÕIDx'],
            ['@@oı]éTƜz'],
            ['@@¡D­gï\\ÌfņBQ_'],
            ['@@`p®I@o·U'],
            ['@@GTĪJO@@K\\CZFXI¹i¡L^£CJ'],
            ['@@ªCÔFEOXUŏd'],
            ['@@EQĳgıR\\ĠLØRĈQ'],
            ['@@ıOPhĢW'],
            ['@@¬cÞBvUáe£@ÃX·DĂ'],
            ['@@ÂaÀZĘ]ÅcďHÕdR^'],
            ['@@fG¼dÈĵPsZ'],
            ['@@úFvkï@f'],
            ['@@sĥNÕdVĈS'],
            ['@@ćGgj RÐs'],
            ['@@ŪovUÛSÝR½vR'],
            ['@@Hx¦jàVàYrgYe\\UMQLYFÅNĭK'],
            ['@@İNæaÃ_őt'],
            ['@@«JÁxAƊĢSŦBø_àEC]ōs»EµcRsďMïk'],
            ['@@÷lIZêRĘ£]P'],
            ['@@z`ì]TùRl'],
            ['@@»\\ßF÷r}fî`ňYøEǸux[Ş@TGUã\\±Bĩ[dóR'],
            ['@@Įv¦OöŅ]«p×T'],
            ['@@ɥD`ƀGÖPäUEU'],
            ['@@p`êCZYŇkTj'],
            ['@@­]ėfħZ¸^Ƕ'],
            ['@@ÇAğfù¡xÍnjrĐUôŎYČwWqe'],
            ['@@ÆDZkĻNĽfÈP\\^SIU|OhB'],
            ['@@ĻIċxĨJÞSc'],
            ['@@RðOzUąuXīBĀp'],
            ['@@¯f¢PŰyšD'],
            ['@@¥Rnŀ[c'],
            ['@@kOŃ\\»ÜUúJ¨SÞBĔa§kśD'],
            ['@@kÅK±X¹SjV|ĬP²'],
            ['@@ÊR´[PĹVSx'],
            ['@@ŁË­å¡qÂYýõoŷUãP½MÃhDøâÈ@²¸æ|^¢®N¦»¨qfuĐŐĎ]'],
            [
              '@@edrĂzÔÔy¤àHƠÀowÑcCèBk°mŀmĎOĬAƜz^ªĀxúOĴlǚeŌuŬGɬTǔyPÁyYmūQÛat]ȖH¾_üKƚZâKZjŔL¼dƖbɶcÊWȒiǶKĬeì¡¾oǖņdªh{^ÐTĒC¶cī±¡ĉy}a}{ÍċCƳqʁcÕ_țmÏeƻSÝQǻOMǍBģTſCûX̭rşlĕ¹ŕŃ¤ķ`țXǱvıʥÆūtȏvǏ¸gbĎJØtY°un',
            ],
            ['@@æLGÝme×CǑ¤îŌB'],
            ['@@Ʌ[ǉG^zŔbƆɈNĠTŶKċ±ËċhĻB'],
            ['@@ĹSkrîZ¸w'],
            [
              '@@ĐNºUĎegá[«gÝQȻA½SĵG_fÅDqīdóG»·ĕoÁGřbɗÆĽ¨ĔRĒaÐĎZƱOŅ]ǱNýuĹWĕѫǇ[ʟ̗íCÙFŃÑN³nőduIAìy³Ïñ·ïŃáOŇLȓ®űpȃbɕpƭâŁĐŏ×xŅdŭš®ĉ¼ƫìE¢ƄvÌôcĈBðTªzKjÝrěBËe§Úd¨xep»pkêǁyeUäaEuĭƤ´pMÃXNzĨîDÞaŐ`v¡ķ°At¤Ǝ¨ĶRÒGļNºGþRÔ¨[~øƂdƞļfļRȂImŘËÆcƺeôqòɼiľkÅsÝKuâIàƢŤDƄ[tsĕS¤]§P»ŞYĺAküTWňQ°`ƶdZÝpï¸zÁ r³âäÌŲLǨbƆQüwºXœJrŉ¸c ƄǂaȔÏ¨oǶ¥Į²ƆǆkńgƜcÊ@Ŵbĸ|ŲPĮMƖeƤsŴ¸mŪĪMĨ@ļolgľwȚŘ{İ­ÏYōI÷qȓÇWq¼ßĆoāaÉg¡ïÿkƋå}ēEŉ_ÑiŻpQbş`ŻBĩ[şGƥ¬ĥPctåAëk©JíF^ăTñj|pOx¾¤jĪfTlĸâTĚrâN²¥\\bfĵhĝ@³VȥWħ\\ÑwøecsčQǋRŖsykÿQŅPoÎRÚ[¡³KnÜDo] ­ºDo¶Wühuà¦SjuOjĶȂKÒKĢmĘUĶ}A',
            ],
            [
              '@@ɐUˢAƢgŪ¶¡Ñ©D}ÃoĽõƁS¿]ĩõaǹZŅrƩX±^§MĵāƉrŻNŷ¢KðvĴN²MÐĔZdjêJhÈGj¹FUªL ĂH͞}',
            ],
            [
              '@@u`PjÃ´WAnd£fæMxDjdz¡ÎY|Z¥a¡¤Vid\\j¦xÐL|\\XnwVFbyr®mTm|Rf±fRh~HzlBØaHUÖZbÄRCbolûu×PR¼WlH¤¸BxXCkXÍaa]ÑMY{yOXP`¾ærH^¨xNv°JªiªXzT\\¢p¾P¡|\\^cBrqNncZTjAPApt[²§QÍlc©A«¥BUwuDÇ[R[u§C~JT^¬RZY¸]Hb|\\Mz¡fEjhn¼onÄ¯JiwJO»m}Z]kHÏMUóYFqÃRMU¯LIF×[ÁR`lQbXçAHQñ¯wjZ\\rTcVZh·N¢ÜHdjzŌGIjâ^ Qêhdo¥IďzxgT¥EvVftVsf}_ĕh}hÁWÛHTp«ZÕTnhLrdihëCGãAt@frT|ĚrtpGr{~[¢VÏIX£~ErkrzblNnqzoTYtV^]z¡ {h@³tLZsr^xmrx ^h``¦mTKidçAËoFauoc£IUwrvRLxOoNéB]¶Ì_vH®rXHÎjZXrO|\\ybÎp®kVcz¸tÆUzç^mEqŅ`Ff÷`kdVbApCd~mª³£nYhnDQnfÒg\\ĝ@cNhpGÎÀÌhIQXc`Í`^v_j\\oPŋd­d[^Zď`{X_öufãNãSV__ÓHWTmý|_gZc}¦YÀÇ@Óc½ZuuGÓ^|kFýW¡\\£YzLfunãvjUpºx}^fjgjne\\zÝO§F¥Vh~¦t²RjMŜCRdrRéOES×Wën}ln|N_rXvµR³©ZW~ÏTKXhrI~{­Pǹ_QpVï]aïxËTÙYHRxħCPjÏP³_DćmDe¡IËnõqA{Ã_§lxWsT]iHkiQwkSgá`D±MËaLoûqe£¥YI[IãoFŇµKÁcW«iGµ`©oÛ§QwRO«u¯\\īJc~_gaP}­ić¿­ècZcÅroS_wKÉ{Nk¯HtE§©b}mÁE^¥cÛW±Dć@uSrtr[b×c}g¥£ExJ¼^bu^tjqrxG~apf¨¨¶dhNP½X­hU£NK±såPbg~wRÄªG\\¥Ihhl¥J©qk{K±]Qåbe{¡n¯Y­Pş×¿^uG­jMx¥TÍGëU{g§¯ċ`q§¹KB\\dȕïNyÇ[uk²qY@gi`]ÇÛVåOaeoRåec^¯N¿AnÉG¹aB¯InsyDgVGdjlQFWfËPYXJLh«OiVóBb~d~ĔAtA¡t¤TKlÔDbÌfJ°CT·dOÖjTnÀTnYzy\\@hBP¢æEtBYpjiPDplUp¨LphCmX\\d¬^MC®xUxdÔ|ª²ÄP_rHvLJ°MP]°jTpWZjxE~~~r¢dFjLtfd_d`jdF|ofl\\g¥\\ýPqĻQd@bf}´ÿng^õF§E\\·FbndY^Dxt¦B¬pyĉhMdµL[v¡XEnlrGxÈZXClül´CbdÌzBjpKjl xlbXr¿T\\pRajëR»KµFOĩhqMvDp\\CÅbZl_ÈR¶ARÄ®H`[j^x_P¤¦FĜbXpÙJDfhAv|Tp~u\\\\htNeFFEl¹|ZmfLŁJjKdÕK§x±fCVÁSŁfùrM©HobġHĽkęCSãBg®¨j¦SZhJvpQhEĎÖr´kâap\\ªAZu~@¨jfjªPGjñp\\|ºsxŁ_|hÒÛhBlÀnÃTT`utAbU\\i¡uą\\ĳU³cLsñKWlËMC¡jÇRd\\upµ`ãDÅWm·G[×pDtCÛPjµPérQbÃh·gñDaZ_hY×ZoucĭKÓB­a±PÝñVajRb~¡Tq|`MÉċC«]ahnMpAKlR¢P môNSzff|iR¼p|eÀLcvĜfB|[Tø[bPù_|lHpõf{bCrÚvÖDÀtzļZDlĖ¾¸g¢TąxC ZvÔlĺPĠ@SBÞ||ɝUdx~kbÉFßRóbJjizdy`p¢Xx|eÞznItzlēºbl±TOv{|ōAāTb^q¤j^rrl|¨ l¶JÞ{nllx«bKxf\\Fxnv×dqpBNvv÷@c¹L`Ğ¶[ȍ`Sj»JïU½hÿX`dŊRzYĄbĜ@ø`ĖÔD¤ŶJ²xÈD^´¤ÔXƢqrĠ¸HèZðƒMäFô`êBè\\TŊTâGŨ@ôSǘAƢͣʔ̵ɔĪdªfH~rfĬ°ņm^ĪNĨWĊnĨVĐ|Ȉ|ǴîLŸhĞa¼dlor\\wtþCpläjxtŤG¬QÐDWôN¢SĬDĐXcaiz¨H¸OÈDä]ŀH®HNªpbZtMvÄz¾Jh\\ñHÍ\\·ZBÆŸTĴc hðjèCŀjĞB®l¦_Ą\\ŚIlnĥbÓhQlPb¾L¡¤bkvàpĜXrtƠ`YzrrĒjCìbĢcdŚRVƈhŌIĚt ¢ĀZÆEôÚYÈhâDlh~dÐPÂyhgÆWxâvĨB~¼M|\\÷¨Xbżr®»VorHïcBst¹J£ëj`³Aƍr@ɠ@ϨVÕMÓ\\hãJexěîwÅv³JáYıJ`ƃx©A·vÄnxĀN~^ŊtTvĹŷJÍdS¥~ŭ`a t|^pÚRA|£L¸ĪRĨƋnpøx°D¤µ^Ed­bþ|XzŻITƹ]Ł`\\üZƪA\\ý¤ZbōH÷p½AĻr\\`üEǀfĐfĔMPxfļ|`u|ÆbĺOâjǞýlF~ƵjdĹj° þ ÆVƬCG`ô`ƖµƄɄ͸uƺFˢ\\ðbì`đĊaH£ÆndŮÙƴ«ÂÕèÃcôÝN}gýOÅ_£Ës°u®YNcàÀ[èC¨y·Ñ{¬{a¾kìÃOÖ^®r²¦¸@n­tŇvÓvÕ`vbĞPĂ^ƆRðVŌǼ\\ÔSƒOʀbæ@öRjfÊpSĬMfĐTWÒdǚE°_¨VʸgƆqþGǆbŐIOƾcŐkǄ[ńyöMȴBʂETƢEüSÌDˈKƶqŔyÑD¥`åuL]@WAMGGIŗbÇÉS½`[Ø[íÇlgKĚ¡ĎSƘ}ƠcŰĤ[ƘWŶmĎÆ_ĠD¦nŢMƎeǀDĦaØJƎSĎcǘoŘGƶbĢhǖPĜCl_ŔaƸƌoȰeƚihånK~ŔC¼gfsǐnhƹÿN`ģt|l®TĬLxiƶXŬY|{ĚIÜlĤÈfXÔ|fpŠRÇkvĪNjď^Jhċ`ehíÚxç¦ĒUkīz¨dfSØCInúdnhĪl¾ A~o÷Dm{]Î[uiúinjÚBgĔZÊGÊ`YfĀFĪĊîBImĈúZÂW¼TMÆQÂv´SlkwaĊzI©ÄTĺDPi]iáHZ~ÒKĄJ¾Z¦möJÄqo_u©aåGMo°GwsäOnlërĆhÄ@Út|^Ĕ~hpİWĄT¢jĎjkäwjAÅwónãJÙfV°AnĄö[dfØF²YÀMĒHmfª¢ÂTIXSrĨV]hbkz²`ȞGÜ[W¡ìIlŌvgǠEos©qwŎT¬`ǆNuqóuŠh¸Fx`ĀXĆQÎ]āWágtSęo}ƺF`ÂH¤hǀTľE]g¾MĲqùyÏōK{ŰCÇƙŭUïkƉESgń@ĞVo}ÆYÁk³E]m}mÅKeƯR[ćI«cáYË^ǫGõwĕoÑKħ¡±aƛaŅe§¢oe]´[ÄLnŌZðBǦO¦HĠUĘuŒYòFž_¬«ăFBcÌQºNº_dgČU~ìgîQcXĨg²cRwY±à½ÚYá[Ŧ]d]ƂhônÀvpï¨w´lXļ±Æ¡esæqªţ^ęQ¹[ąUŗFíyS_c®[üdöG¾\\Uf{OpogfªO¡R®ßºsŶ¼m~wF}¬WS¬ŐTdsUºvQ¾He[myÔ]iêAâZ·¼KøJÞh¾Q¸ihw_¡ngĨɈbǔèJXüPâØĊs°ºPQÄëF]TĀǲjĳd±`àĈĈƂrĨĺ²ðªĲĀŐÂò`^ýta»yhÈiĨKÌ­YºƜËǪ·Ǽ˂ˊcèHǌFĪªLćÔEvYÜJïx~ƠªńlŔxǦ~ǂĶVǄ@UĆCj[ƈ[°cŘEjQĐFbUb±ľpŊEæ£L_Ă[ÚǎUĎsÀOuuôEyx®D[äcĀ«}Ao_¬HWlÚP¨[[gÞG®xÃÉv×VıMu|XÔBjcņaì|¶F¾QN·TÙEĭbìpÐAĂZɑNW|§Bj²vĎÂÂwdjļeĆZĴElµÐJĐu¢ŒfØDĸ}c®JÆalÃ]ªcĆJĦn~¾zDȜ_¾oÌPÊEÞ\\ªfZhŁ¨[bÁrirqºh¬cZF¬ÊXË`y^ĽfĘV´zPpÈújTÞkúaðXżĲj¤Kàz¹tímsoƃk«ćAñ¬ćqM]íOħPĻIǳ×ėvăBUĘ¤®XƂ^êCÈZȑfZƪÜ¸RļJɌGȨiǾGÜFȚ~òjUäôbǎhāFť³R}zL©é^DvLi\\ǚKÀYƘIƒWĎmvoŮŨoƼeȢUԺ]ɀIϜIȌeSƊH̄aƞYǼw̲ʚiȦoÆUŪ]Ǽyʲ¥ňYĎqĆQƘo]eȉTǱMȩNƏIǱJIť`ƁE­ µL{tĵÓ|ĉJŹsĩ±ŏù©{Ļ³TUÎ§ĖmŪ@ľpêƾVɊÒIŌJŲVɨNʜ`ʄRøN̜CàJha±āóÃïƕÑÓgÇ{ěmƓßYxr¢UTn°ČPòfbÆFÌzc~ñ`^dÕHeýNt©\\qq©M½~³RďģqiÄM¤lSh[ãO¥yOyQÁŞ@pqQmj¡÷}`ĩ@ğÏ@§_åñvŗhOCèĴÛGuëJ½I[s~iJw¸SĂ^SŤlHuŚL®brpňpgÊBƖ|BŦ ǈörÒdŔÔô¤jöÒìƀ¬¢ƲhĀ@ĜT¬IÖNƠGǞSļTǜKÔDźcɀȦqǞsƾŲƎ£ǞÙô§ìÇP¥uĻeȽ»×X[uNyčXOoÑ{¹GËomćYýÙdãGĐĺF®päküd¢møiüMǊ^x[ŒfĊeC¯j£ks¢CĴ\\UɼEUÐHú[lĕIcĝ±EUñOó§FQ«ŧDÕoµf½ŦGnĂVâCÀhĔkø|ńÄĂ¬SÃGycxW¾lò¤ƌpŊ\\q¸@ƘyüKÂYLeÞI°ºkY_oĶ½Kg [[WĄmt_Jŧ_×PƟL»XUĳWÀW`GLHF@ÌNàk°MǖM¾UØƨǰuÂGĘHbMƈCʈb̼¶MzUlBFeVVºjôFtV˖ Ȭ~׾ÀĄJ˶n¾YxnȐnɄNʚSĲDòO\\̨BņKɲeÆSĐCȚ]԰ÇńqÀKèeɚ¡Ȍ­ŲȚÕ¼wƀéÖ¥Ö¿Ēį®ďßµÇąZāEr]ĺiÌGÏg±ũÛsÀ¯¨[|¢CĨk¸s¾_ŴEİ{WgĦan¶[ĒRżg¦uExlX\\sWgÏ¸[]¡sZÑ¿kcOEOpgejh_PG¤]en]ŰeŖ©ÌYh§c£sĳī_kjyaZÄKZt`B|DRHbVJb£v·Gh¢lIZĊr@ôfØ¢Wxñ¤Lp\\F©h¤wpzùx¤VÊ@tdÁ`zĶ\\ĀÆÖjpŨHÖlHôz¾@vZc¼SÜPÄpČ@À\\¢KÂiÎSĨDbƚfĶzĬJƦ}ƜGľNņÜŜC o^qäǖµôgŎYƲWôBǶjÈTȆǧ@ÞSǆƌeǸQľFê|ücĮCƺ¢Ên´RpjŮ²ɌĘðÄLüU¼V]ÈQV]o±suqĲØk¼OÂg_yNw«éGiVåÁÖƦMĺFÒGŖIÄqĤ{°oĚUĄLÞj}pß«Di§ńMĮ@ŌRŒ^ŎJȮv|U\\uĈZmjÛX^j NŚÄJGhĨhŲ¸NMjdĉrÊE ¹Ï\\T]·jCq«¯`čFßIÁYĝA³XXĎĆjÌGź­´NÐ¡zv²Bi ĩVVrĒH]ØMúg¾CŒRɨǂIƌwĈOƈoź]ɖUŊkŖQäLŬl®y_e²iĺ}¼gè[ĞCs¿pcĞ`ôI²RªtXÉčrBƀ`~EŖ©¬´u|lunxVîy´`Ƽnƶ]ÈLîeͪYƒJĴE̸xʞ\\ŲYŌVØKêĶ¯ĪĲq˔¿ʪǶCĢ_ʤßŜ{ŠiĖIƔPàGƬqŚuƾɎÏƮ»VYô{ȐċÒoƺásGĳ¢ĕ½»XggZkĞqJĲsƴK@W@y@I@_@̟@@Ɓ@ί@̽@͑@ȩ@_@g@ɇ@ٱ@C@»@˗@q@S@·@G@m@{@K@[@ɭťéyuōÇčÅ³FƟ[ëg¹Kħŉ³ėékcĥ}o`ZMƦ¨hÅríGÙ]șk¯bŅZÃCñqJhjÇHĕIģVRHfX~ÕD~r«hQRX`¼Bj\\h¢`ƋI³PDÀ³ÓL¥fĹ|£Bśu«mĝ_e|¿Nn½DLw¼WG]²}ĂKŜ\\Ĝjx\\ĂJzÆ}ļ~qAe»fk¶[Ƒ}NÅWl½AGµbÛ_c^±X×Në{©wÃDƏ³KvµUjÎ§®o_³kąM¡aèmªEòr äDþyârQä@jÔ®j¶bĀQ²VĪÚWæBtK¥eF}uOíNÆÍÎ}Î^Fø¬ØĲ{èTN]æ]fXfèlĜ¬ŸƝĒč ~ÒƓvÕhĵnãj£êãâÃ¾ê¬CĖwÐZ³uUÛ`µm@ ÁeŪQÈF§]VmQq^iËßMÇTgQwgŽ\\½w}F[º}}}}·W}nwVéRćbZėZ£ZƧx¿`£H¹`ħlÕǉXŕXƓLȗGȯ_ƥoŅ{ɹÑţ·»¿q§SāQŷqƉĽ{Ņŷ£Ņ³³ƱáSůóSgţĳ[s\\±CÏYąQågĉÓI][rĩ~µÃA½]{ahyDwYvP§msR±@³e_[|swk÷ďYÓvyzFyp»KïowŌPW¼[deR{kOÏX©]@UÇc{eÅCÛR±lW\\±XUxAcÖiaaUÖ»¡MX}UBĩ¸FÅrsUņviA³LgksG{¤£IOincyWÉYÑP]fAUOiGkoĕAÃuµQy«G¡_å½YN£YÏsFcBa±¯DkaéLccI¾CRWcWÁI«wÁmÛGRWomeÉyměgZsjéVta`Ïrąf}vS©UÈûBr`uv³nípÏZãUdTƝxƟXįHƣBÕYBilBahçDſKǃqāg­mėiFQh{JiszkwaVÃ}ùe¯B¿o}ROYy½F]kßm{@Íh¡n_algÕEkuÛ£qQ¿¡»Í¹wÝŅµÁ×ÏţU½Df¼SXÀêd\\artU\\xJÀ\\®{¤Vf]zTgxNd´L°CbÏ¡TQ½kŷiUwqXgïc{wuĻyăŗ}ěko£eyb¡PlN¯\\[~}ÒbCkmF[As}iBawgK{Ù§ī]sEgKvwrRz{Úrkď~ãÛH¥iQghuF{õSÁmRêgsS}\\ÑGsz²l¬ºh^[ñp]hU¡RáFyhAoe¥ZáU°]Da¾Ku¯sõXç]ýÇ§IªÛ_{gāI½gon«EÐ£ho^ÝSĭAÇOÁ[aYIPĤkYl³đntęrK©òóeQ}aOo_Re­U·³JÛ]JwÀ_āUãã§įč«©ğĳ¥Ïw¹ÇgY¹FkyQYYe^r®@h©ÀĘôgĖSLW_£{Oc´J¢lXxZ]`Iº_t`~Jf´LO¾PeÆg²KöøÐGâJ°dO©{Iifm¿UÝcų¥gwy{QQGÓJßrwn¯U£}­Cyo¿OÏ¬¦mÊW¸pTv`°_Ĕ\\Ey¡@{uwn»eax{z·doo\\Á^Us³G£Wi©µ­@ãZó×ÄBh½grvHµM¡[ÿYůõ¯u}oo}xqc@k¯Qmy{EğĹÏiÃYéFóV»ráÙÀõÊy¼Å¦DjgàD_I[jSJÛimKe{ŭÍï±ġVÉQ­NùcoFÛ[N¯FtYĹR­Eć_©c¯Kó}eDƛßğ³á©WÃoBumCU___yhYIËďqßY­EN±dw[Dip[g^a@Wq¿\\iWPpaVdauk@ÓÅ¢clhBWOKpgkuBs¡VçzƍÊ\\lÚ¦£Iip·\\G£e§Ikk{m©fąeŻ¹oĻµÓ·¥«^La|cPYvX£E_sY©MkSbyxJ@ym@Eyv{ÄO|N@b@TlM@YYÍMÓDGĂ{U³gmW«bnoSu]YfiqSJkUoL{Âp{sg½o^[ N`WQ}qkíEV[wwy@[}xOFi{wJc[kxwseDcyB©ayYOioa·wqeo¡{YOuuUOeÿÁ©mqPÿy¹w§]NaURY­sWg§SQoGčÏµkÁ¡qW}}kf UtF¬olTj°YÅª¡F`mvGªOPE¾grmÞ`ŎFÀCĤiǶgİƀ»ŐWZÄîÉĪ±ľcÄoƺcĚqĶŚuņgĤŖŤùȾ©ŎmÊµǸeðÓʨcöcŎFĪZætĀƨ\\ĎJŶp¬ÊĂhðd¨¨üÜǄ~¤âø|tÀOPd¬öxļ¦¨¦¤pWĎiz[ºRQd^r®¨ĬŌìĤd¤WÞo²¹ì³fQj~npHVlJdbòphUÄaĈ]°EâJôfö¬°TlK`´d~ÈGZaĞ[ì@Ş`æxj@nðôºŤÌČ¶Î~ØpȎþ¦r|ðüĮ¨îÆÂr¦¶RtM\\pÒOjT¶¼²àÊtxtŌÐÊ@ÂlÞd¦ÈņXâxîDÂZ¢fhvQf¦L´Ôfzrx¼h¢¨n@frÒNÖ¢Z¤r X®t`hÊpnRzOvxhKn´F`¬Ì\\xà`ņH|ĦtSÒM¶Zb\\°b¢¦bzEh¤LÎdÞs®RLjªvÂWņPŸl@âp¬[\\`~z`ùludčrijPpnbAnVZW`zDØƘfnOvºp_vËpH±Mai^G¼¶¾dÀÞ^ÊCplüWÊ LrgjXdgtW¨i~`ZhmjhBº^\\jân¨DZ^Ê^R¦FzÚJ\\¢G¬HÖg°KÔkÊOâVo·lJålURċ^[KÝHf{~jy|©KqRăR»@áy}GąH¹WĝUÙµJy`×BĭqµDÅkÓ]Nĕa­W{_jU_¹Yni\\ÊOÐs]¹A£SSA]É`SU¢HwOXkèQciWDoYFUswe«WrqƊæM²W´meO@å]©_×UpIXuÕ«b¦ñ°bTxodÑ|ğe_SāqMªPKyÉBt¹dŵ|SBqµ©«_EU£[B}ûkLmcBaEÏ¿ËJqK^qYMĩg_c­wDeïVgy·W¬qASÑ[{iÑS±Koĕ{¥iÍWFs£uç¥DqlµAq·Ted½ù@|BKo¥IiaGuÑw½OUZh¶MdÂE]¦Yª¹È~FjvlXÆG|xIP®n[x~féJßcùf±UÝs]k]@mCue½Z|ZLnX]X¨\\\\[p­p§vAuqRItJAjà@¦mªfÕJYp¬nYÖF¼XzzªhGTĈZÎ¢xlkb®jRl¥xò¨iPhwdHÂµHÍs«¥@W[ëi}©guÇwX_ã\\koÁ[svefJO ZÕe§RÁ¢RC}VƓ~Hƹ@t_UÇJ©EGďl÷MÍAĽ|ĉFKeIUaÕgV§DO^řvŅEĿXùMđ¯J}ĵMÛišqmNU­­»s»aśR{W§[WU©vmhD³sV½FUăW¯yÉ¡mGĻ«ėÍ£sGyCWS`­YRS\\¥KMkÇS[±DY]]MS{¡ěOQuI«»W«iÛaĵÏÉ»ď©ïÝùWçuEyvSalwA±V¿OLíUc\\WBSPµþć·xB|neOkVy}}ySIiBcDgH_SĺU®Xxtx}}gYg^iĂETvRxMt¦þà@´rò©ºuTO¤Nvp|Ca\\gniÖW¦{scHgsAY]Xu¯Q©RyQħX¿MoPWGñDçp~ñr­I­i¿C`Í¹±ZÏG¿}¹a_TçZ¡e|ë^ŅRpód¯AYR³Oa}_ÇV}a¥EoPŷWé]qkQwcióTÍgÑĩVl»Z{~O|ãBĩk_B¯i_«_ýUěCuJÙ]]UÙS§FÝdăCc³QNf@d¥xCv§nspc¤YHz^ÀDÄl@^¨nƆ]¶`¤m²YZ¬D¸[ÄRhX°OÄL¦^ÜLIT·fm`čÁ{§AaU¹XgdZuMHßGOhn¯ª¤¥ÁrBmõÈAcWFŃj×Aīq{PoakiE¡­LUÅKKrVufñVå[«\\Ĕdņ`fTUlï@ëmō¦WvÅDÁtőR»Nũěpûbş`đDéUĽuƷÃkIÁ[e gÎI`sgfąHç{ÃGfajl~P¥lwS{W»L×^aØaXdY_}¤HMv¨@V_gygIuesNkt^¯OUy­KDvoFĕaiU«P³A«Pt`Cl}hX~sÿtċJĝK·UƁO³aqXakA[±N~§TÅSeDÁR·pyvÇbul¥Dû]}rXCbĩEQcV¥DmVËVLrg^½^ėdÃEßy³Q[j@kqdcCuSHemeXñ\\ĵu¹PDá{@©rlDr¢`JXlI\\x«fo·XG@ObûtďJđSģmµxçGƓÓSáBùLRǧISŁ@Ûh£SūbśPſIßUƭēmsNÙA»ùA@t¥UYYģá[ĽƇsŭwĻś±œ¿ÇħçÕÃ¥quµŝĻřáāŏ½MÙ{Bģ{ÿé¥íÉÃ¡½}Éys½óE½aqg§a{mçGcãG»_ÁyÃ­«m{¥RµSßmuÓuK{wTÕ}ōOÅ¹uėgLuM±i}cDQ`ñugH«ui{q¹Vã{N^¬ÏJOPm¿©Mi±³y¿SokIvk¶MKAb÷IUYXuwgÏI©WO}sAy¹]ueEaSćMSÓ{mCwkp½MïsuwMUÓPßuomã©YwQfùÇDeµD»cgk£oi}D]QsYDmyMSkÏE{}Õ]KccUc_RįËwRK»k}GÛ_uý½e{¡c¥£M¡âÙŊļkĎq~R´mOmlWtHàOĤJLĖ~Gè`|kªNSÚHÈQĒlÄ¬Vi[_p[èJrzSV_]e OlgËDwjS{MJ]_bgY{|KOi«OEm¬¡®DokY\\kÍkiFkkBh¥Kal@iYgXb®nTvÀV^^¬WÌFL{Q¦lxj`À¦ÂÎyT×gDC|nO~}LzÜrT^¸NtkXÄnExbFlKr\\¤GZ[ªGXOxlÊEqmñ§KgýÁO_SYuK\\ {RÍMU¿beOzNIªĈ¥ Nº@âYÐP­GwaÉ[ak][gFIS·@k»FÕMáwÇ­pmÖ{¸EîfƒD´EÜZüHĒbxzdðbZZÎdxÌ||X~Cdvd¢¸|¬bpÎn\\eiA¡`sM¿ÁēËãÇpa_goSH¸UÂCÎbxX²ÜÞ¬lîv®YrEÂ¨\\pQ¼XkT_Ez¤Ubª|d¸g¬YÀqÌeŞ}ê[¾KàC|XòJÐxÌTºlphÂp²GL}_^e¸krC¼äĒqàqhOm¬qÊegyoGy@m®ÅsÖ{Àic[o`q¢{Đ¼}ĀĶI@zb^uhQĒ[um¦c´¬WLSJªWÒHEuk¥ON_kYhoĵGK©aťqCYê­H§mymJe¥}·@sA\\cIy¨[¡¾W|¤{øIxN~ciB±eÍWÁXÈ{sFå}I[oOykS«±ÇHuÓB³YÕ}GAtÉSwYV{F|Ca@u[RÁYK|Aemd¯q«pa`£EcYY{b_Qu»[­HW{ed­qeºëaÉV¼¥^ù}@ZeWP`wvkĘqxHgm[ē{k[[O{wEmo®ÍcCIsB\\hi\\³LmQ¥¥gy`ek½`]«q{mr§rS£Y{qo[ywUy²bDZ¤Z[¥Å¥m][Lqoqm_ãV}OaZmydWHqÁu§s§ãa_w[qūëWsw[C÷ÉGiĿ¹§e£ysgJkë÷Y{eLUK©y_L}³D©awûûċ¿y]_]SÁSg½c]S×JwYVO¥qÁigksYmuQuÁSWYR£ÙÕcGw]g½©āÙy¡_KKu}[eIssEi½{µcImc[IuIa³y]óyw¿O·{mq¥[ew_I[KRwqgYQ}}]wq^uAiuDzEDkcagOi¡Ag`QAa³eg[uP]c£QwWGykOLË»aeU_XayYDu[@[kÇ^J¯YqnI|VQ{k@_ua{O]qS½{s`NtMN³S}oJmW}gWFmUc¥I±ggeNWwg{M¹o{kG]¯AoO}MSeÇMï¹gGwsE}uTc_wAsQ_ymOueEo¯OusYiHSxAUCUÉAiaW«ZsuJ[c^Ge[KiiÁ]UX¯BG_·MçÇÑNYY¤qxdEtN¥KgytImmJWta@@GZpmfqB}qPWskËNkgpAidRtZiC}hQ©wn]_ÇvLfAÌlYZĸ_vGn]xGohJ^rBr[VT@ygy­[iÓs±{][¿Fr^rrbG|rÈnDMt¬rVrOfCgf½PÅoOtxXÓhgq`{aQJµc_MIWÈEZcgcKGsnIµu[c}q[{Zq[Iy\\{yBgxoQ@wetk_UmoAs¯JikÏHssI[`×Bc`OrylU¢_Dm{Eo\\A¡ooH«`jQ{h\\F~ĕBE@eh§{a{¢ABY|SVYAHºQIZyGyDYiçSmÃ~Otpbºh@hI\\lzEr[cTQtsj`Á_S^ZC`®È^~zHÀzİKBrbZH°{ºpgÀJKrgv``~U¬C|FnNH|_hnzEd¢FOrjpSbXpcXJ¤\\xI` hoT|}\\Q`bqfb´BXJRi`G¤`Re¶VNK^VR`ZXuz`tJ¢Zħ͈ïʈobJdPAvoXgGIfX¸H´tYzf\\pGzZUTcÔJ|h\\ltnY|Rte¶@Sv¾zjnÊ~¼¦IvLvÄ¬PlWIM´ªEZ§¸c^c]^gF|ziaozk¶@n_BejwNaNgmq¥uQ{nOWv]j@Čoc[BqG]©à¬Sd^ÔWr^CyBmYLD^Ŕ°ÐNrGYdÒ¤ņżc²WÊ\\\\C^tpÎSTfY|{j`p[hX^T¬p\\LÎpb@f¢NxdJrVfZS~VRtnRM`bz[`AnzlDApN{^rhT]p\\d¼DJ¼ÆAp{lodtHpPxDpiT°jc¾}XPrÈfFjYhxCC~ÚÎ~V~OlVfv{~DlbZB¢Wd@hv~¬JrVNvG¬cnp_jhÆtpRr`Lz¦P´IVGt~JbbDz²~FV¤IxÌ¸vJrk|÷²ETh_f¡L[¥BrhPf¨XzpRS`T¬n¨à±qRÉLKÍbC½ÓQÇ@¡NE¡ęLgYMmQmHÓkM_§GËKÁdUW«]·YÕ^QaKuTµNŏGgmkāu§m³S½«K]g~§CYå¿Q\\}±wÁBq^@jÙLu]IksWL§WġE{^w[KO|c¯K£`l«CoW¯R]bIuTăN¹aģP]qïY¿JPrK~@ÄQfáĒĻÎSnZal@jk\\Zx^¶Er`Vu^î|Cl^µkCcZCÔsp³VGf°ĘxLjd}GÓuJskX}@åae©OcJÓÉz}mVÍZetf`KjoXDSzV^cv·AzB¢gJ«OY\\UhC¢SvÏdmAmE{X[soJ¡P©W¡«HojUmXBhZÇcHejRb°Al«niKEiÇDjÇXýYÑBmMSiQf»@oCZāNol©hcQJfa|s`£^i^cHs|û\\}zEfºS~rSZjx¦¬C´đbı~¯¨BnBST»ZK\\dlNdZu«¢MjzSf·h´½è{r¹p»¼t}VMêaÂ¬@wJÅYYWwZi_a³PFx^ªI~pQxefÁHPsp~¦|IXÛt£R~hbRTgt`rYj@[bg|ofÀyfctuNWtLrkf@l^KFfppBnhjUb±pF¡j§H§hGd¦¨dOp£C{x|vNzyhq|ÓOQZj¬ñkmC~WlnÐFZfyp`HIj¡nIk¡DihQ| ÏA]]EacRCZdT`XGtTn½`xM~qbQ}eNDxcXP­jåd©~ýxÙ@ěOā}hcsTsÕEXLãjïK¯D[Z§@yJ£Þb¡ÉSimAnS~«A}ĉ¨qN·C§VKoPirnAaNpbGb{ZsOYknei[y»F¥PbB¡W©SÝRŃugIďN£KđN¹W³J§]¿sxćÙPgM',
            ],
            ['@@ĘNêmáKíDqh'],
            ['@@Û[ĝnČhbfÒVºAÓTq'],
            ['@@TîWôiªs{gç^{pĵ|'],
            ['@@¬ƾNƢkysåqõQīj'],
            [
              '@@ĄEĆxàKĞsĈWĞIâ}þqÊEƊNæÑşW½Dũ~ù_ăB£PčFKoHEf]Jk@WIõQiÑ@ũR½xƉp^ÂvðBbMfĔI¾T',
            ],
            ['@@ü@miÍj'],
            ['@@İLQB}måKĝN~Ĭr'],
            ['@@Ihd OJq'],
            ['@@õg»ĩFDćPǕDkxȖ_ĘTøSŘ\\'],
            ['@@@^Ohc}]'],
            ['@@CÓnîFpo'],
            ['@@Ý_gQRgõ@X¢VİK'],
            ['@@±×K{XȊbń±]ŕM'],
            ['@@ðaķMċLBfŒA'],
            ['@@b[ÛmĉPĪrH'],
            ['@@³Fa^ävxO¡o\\Y'],
            ['@@haēDýbnłFæOHg'],
            ['@@UTæð]gĻ['],
            ['@@Ġ}ůU]Õl¤tĔR'],
            ['@@ƨUlPƬU»_ŋRĿIīPÏSÿpÞVĂO¤B'],
            ['@@àUoµD\\'],
            ['@@¨dìAh[ÃĿCoZ¸d'],
            ['@@ƒD~_śB³Z'],
            ['@@xEnF\\ZJ`ArFx\\ÚEÅŁmơQñZ\\bņnn[¤E'],
            ['@@ÂWDVfIgUSE©C[Eu]HDupÜP'],
            ['@@äArĝ]śAxČr'],
            ['@@ÌLĨQºFfeóFÕmĵ@gMŧFŜ¨ Q'],
            ['@@Ðz sãa\\'],
            ['@@Xl¦DƊ}kWǛf'],
            ['@@ëQĥF£|àXÊpÂ{{'],
            ['@@|nńO·sćV'],
            ['@@oãAÃ\\ČV'],
            ['@@D½hıPl\\ǆBÆQNw»O'],
            ['@@|]éO_ĉACäHĚQ'],
            ['@@ľfÐF|oeăCd«J'],
            ['@@²HreŪi\\uźyĕWĝLę~čGÉv|Ŋ\\'],
            ['@@êIWŀFikėBģn]X'],
            ['@@²@ŌrƆSLWß{aÙCɅLQVĂz'],
            ['@@ïJY^¼RŢIueÝI'],
            ['@@ÐGĦPVWıSĳEj'],
            ['@@ęF®´IĚD²XzKŔWSaÙgåVÉMăL'],
            ['@@įP|Xôg'],
            ['@@ĪĦ_cƱB'],
            ['@@Lg¯BI«OœDpð`ļBxĆC'],
            ['@@ţIyZƖPH_'],
            ['@@ďNZjÚW\\_'],
            ['@@¡gśT¦XŘC'],
            ['@@U]Ë[dļV'],
            ['@@rf¾SqÙIj'],
            ['@@©KÝ`ĆTg'],
            ['@@iqĝ\\sjĮAQ'],
            ['@@ñsćXĿCĎrŢ]ÊL'],
            ['@@rXâDmÓR'],
            ['@@Û`ǖJmiċ@'],
            ['@@Raē[ÑTxöLY'],
            ['@@Ř_íWÏ`fX'],
            ['@@sÓXĮ\\'],
            ['@@D`ĶøHȤ}țEÙişQ'],
            ['@@ĒVÚQK_Ɵ\\'],
            ['@@ġ_ãDodÆ`Űg'],
            ['@@TRĴV_cħC'],
            ['@@k~ÖCXIÁo'],
            ['@@êOMS~·D¡À'],
            ['@@¸ÆJQė_S^'],
            ['@@þIcÛPj^'],
            ['@@¡]ģThhÜHÂe'],
            ['@@¨sÍMf'],
            ['@@è{mSï`vp'],
            ['@@bwčm`'],
            ['@@K¬wQÉ'],
            ['@@¶VxcÁakp'],
            ['@@Qf´Rh}ÉF'],
            ['@@Yp¦dƪcBqƇW¯Z'],
            ['@@`ĳXĔn'],
            ['@@~ÂH^¬KqBoŁ}'],
            ['@@ÔĖ_ÝyċN'],
            ['@@VZêr¾Cwyė_mR'],
            ['@@ƅeÎ æT¢K'],
            ['@@jĢ|²S{ùU'],
            ['@@Ŧ¾V]Ý}Ýa'],
            ['@@fÆe{£Hot'],
            ['@@pÒ_Q£ĩCajnn'],
            ['@@íOOVZHCNrFMtS'],
            [
              '@@ʝlˋƵʛ´ŧ`ŹLĉEŽ[ÛWÁoĹWşkķFÓ¦ìJĠGȒZUÀPǘ¬Ţ¶ĄÊ¤ÈTj¸Ð¦L¾Ú`ĀkºIĦXƆɚtȊNîsŒŎMĄUĦqǆÙĢsŠ§ňwǸçĐ»SÑVÃ¨ÓÄwģDŏmĹQʍrșpÍBťUŗrˡd',
            ],
            ['@@`{ĆcwSćCw^dÝ°¶Arw'],
            ['@@~ûYcâP'],
            ['@@{×vǝªÕÐÛnĵTtf¨iżcƀ¹ˊć¦ÚuÒ][m]L}ėĽDV'],
            ['@@ĉHůdmï³²G|ĄðŐhɶ\\ƨCĢ[ú{Iy»©µ¹uŝUËiċIoUŹqņ['],
            ['@@f´OtŒFĞ]¡£ËDoeǏX|'],
            ['@@MUïq©^Ũj'],
            ['@@ÜZ¤EĈZØJ|NcgŇ}ħGĽWÙPvTl`îC'],
            ['@@ĝB¶lĤM»_'],
            ['@@³YįQ»QZXnĢrĬKŒPy¡E'],
            ['@@|oą_ġR®dľZ'],
            ['@@ª_KoÙV|z'],
            ['@@Îr]đS'],
            ['@@´Âªĝu'],
            ['@@HŧcWħHdJvÒRlbļNÊTÔec¥H'],
            ['@@¾QºmOqÃsśWįTvÎzĎz'],
          ],
          encodeOffsets: [
            [[139681, 55945]],
            [[171541, 56158]],
            [[141562, 56032]],
            [[140563, 56160]],
            [[140061, 56212]],
            [[169969, 56520]],
            [[141643, 56387]],
            [[168055, 60480]],
            [[154147, 60481]],
            [[152641, 60619]],
            [[-173093, 67394]],
            [[-178886, 68624]],
            [[-176710, 66188]],
            [[-176733, 66240]],
            [[-184319, 66600]],
            [[166554, 63050]],
            [[165293, 70459]],
            [[165223, 70326]],
            [[165191, 70466]],
            [[165466, 70561]],
            [[135517, 43755]],
            [[134895, 43960]],
            [[135001, 43986]],
            [[135603, 43866]],
            [[149401, 44492]],
            [[149845, 44666]],
            [[149625, 44502]],
            [[150125, 44815]],
            [[149040, 44990]],
            [[151201, 46075]],
            [[158704, 51391]],
            [[159596, 51841]],
            [[159981, 51882]],
            [[158253, 50336]],
            [[158358, 50457]],
            [[158161, 50933]],
            [[156644, 48881]],
            [[157736, 49900]],
            [[157632, 50096]],
            [[156927, 49250]],
            [[144830, 54592]],
            [[159400, 52082]],
            [[146583, 53285]],
            [[145711, 54833]],
            [[145133, 54692]],
            [[146633, 53680]],
            [[144642, 47350]],
            [[154446, 47558]],
            [[153584, 47134]],
            [[154525, 47659]],
            [[154359, 47824]],
            [[155520, 47987]],
            [[156145, 48514]],
            [[145260, 47520]],
            [[141120, 55732]],
            [[140851, 55717]],
            [[164881, 70748]],
            [[165296, 70579]],
            [[165316, 70561]],
            [[164881, 70842]],
            [[164880, 70928]],
            [[165434, 70977]],
            [[164934, 70933]],
            [[165384, 71076]],
            [[165290, 71143]],
            [[174182, 71396]],
            [[165330, 71119]],
            [[164881, 71229]],
            [[165791, 71232]],
            [[165646, 71263]],
            [[172801, 71244]],
            [[165399, 72592]],
            [[155244, 72687]],
            [[157336, 72534]],
            [[165414, 72515]],
            [[164576, 72497]],
            [[184320, 73252]],
            [[140993, 72967]],
            [[154081, 73022]],
            [[155032, 73076]],
            [[154507, 73100]],
            [[140401, 73174]],
            [[140761, 73137]],
            [[140401, 73200]],
            [[140400, 73232]],
            [[142201, 73524]],
            [[141840, 73396]],
            [[131761, 73661]],
            [[131760, 73736]],
            [[131931, 73751]],
            [[132121, 73815]],
            [[131880, 73800]],
            [[141840, 73570]],
            [[-184319, 72680]],
            [[139949, 73303]],
            [[140761, 73199]],
            [[153678, 73324]],
            [[153633, 73286]],
            [[149393, 73926]],
            [[132120, 73898]],
            [[131761, 73923]],
            [[132480, 73923]],
            [[132121, 73908]],
            [[132375, 73965]],
            [[131761, 73972]],
            [[131630, 73980]],
            [[132481, 73935]],
            [[132320, 73938]],
            [[132480, 73978]],
            [[131760, 73945]],
            [[131911, 73950]],
            [[131760, 73961]],
            [[131581, 73969]],
            [[131581, 73991]],
            [[131581, 74024]],
            [[131760, 73982]],
            [[131581, 74029]],
            [[132120, 73936]],
            [[130518, 74111]],
            [[130650, 74136]],
            [[131400, 74050]],
            [[131761, 74081]],
            [[132481, 74073]],
            [[132121, 74108]],
            [[131761, 74093]],
            [[131400, 73982]],
            [[131400, 74132]],
            [[132481, 73813]],
            [[132481, 73867]],
            [[132028, 73801]],
            [[131849, 73855]],
            [[132120, 73843]],
            [[131760, 73875]],
            [[113756, 76094]],
            [[139504, 77439]],
            [[149761, 77156]],
            [[156430, 78010]],
            [[152552, 78493]],
            [[160396, 78935]],
            [[146881, 76796]],
            [[115200, 76307]],
            [[125043, 54714]],
            [[130059, 74191]],
            [[130681, 74176]],
            [[130718, 74160]],
            [[132121, 74146]],
            [[131041, 74271]],
            [[131761, 74228]],
            [[130320, 74242]],
            [[130623, 74229]],
            [[130320, 74257]],
            [[130840, 74233]],
            [[130681, 74249]],
            [[130874, 74289]],
            [[131760, 74248]],
            [[131760, 74492]],
            [[130875, 74439]],
            [[131400, 74392]],
            [[132063, 74415]],
            [[131401, 74395]],
            [[131040, 74480]],
            [[131761, 74468]],
            [[131041, 74361]],
            [[130837, 74363]],
            [[132300, 74373]],
            [[130320, 74287]],
            [[130321, 74324]],
            [[130680, 74343]],
            [[131041, 74317]],
            [[131400, 74304]],
            [[131760, 74315]],
            [[131760, 74309]],
            [[130789, 74308]],
            [[130517, 74347]],
            [[131401, 74329]],
            [[130680, 74421]],
            [[131400, 74373]],
            [[131761, 74420]],
            [[132121, 74412]],
            [[131041, 74437]],
            [[131761, 74537]],
            [[132121, 74575]],
            [[131761, 74569]],
            [[132120, 74597]],
            [[131401, 74609]],
            [[131760, 74626]],
            [[132120, 74632]],
            [[125928, 74639]],
            [[132300, 74659]],
            [[132120, 74676]],
            [[125479, 74709]],
            [[132480, 74689]],
            [[125772, 74686]],
            [[131761, 74687]],
            [[132481, 74710]],
            [[131542, 74703]],
            [[131353, 74496]],
            [[131072, 74523]],
            [[131468, 74521]],
            [[131400, 74464]],
            [[132081, 74520]],
            [[132480, 74532]],
            [[131748, 74521]],
            [[122591, 74794]],
            [[122484, 74839]],
            [[122724, 74804]],
            [[125701, 74828]],
            [[122459, 74837]],
            [[123242, 74838]],
            [[122573, 74881]],
            [[131912, 74881]],
            [[122611, 74881]],
            [[122848, 74881]],
            [[122768, 74881]],
            [[130695, 75249]],
            [[128794, 75350]],
            [[126720, 75370]],
            [[131338, 74985]],
            [[131425, 75041]],
            [[131040, 75228]],
            [[121550, 75072]],
            [[131041, 75097]],
            [[121529, 75167]],
            [[129600, 75183]],
            [[121658, 75208]],
            [[145441, 75020]],
            [[126976, 75518]],
            [[127047, 75565]],
            [[139336, 75695]],
            [[144000, 75670]],
            [[127333, 75640]],
            [[132096, 74939]],
            [[131761, 74717]],
            [[132300, 74730]],
            [[132120, 74759]],
            [[123110, 74808]],
            [[125330, 74812]],
            [[132301, 74784]],
            [[131803, 74772]],
            [[123167, 74808]],
            [[132175, 74881]],
          ],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'North Caucasus federal district' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            [
              '@@Zi¡½yC¿³_ă@Q£`suºSLVFL^IX^ZñºtD~bzI`cõ^w¦±mßf¯a_{o²SjØjÈRzSQq±½o{åPysÙ]ÏIá`Xv@O±uÃ]åL©Ăyx_W^Rŋ\\pan@¨WRÃºÑwÊ³´Õ«{ÉZ[^¡Zi¬Þ[kJiYEgŅĻ]Áw{E¥aÃGeQ¯My­QD£¯}ZuCsfWOegGH}¯N@\\uh¥E\\¯yNlFGcbiO·N§|mLWb^ZZ_HCbhzJcV`~lu©³^~Sf\\_pgPNr}nYK\\¥xPr[]Le§LI¥u}hGnuOwX|[fQm\\cabiKpT¿sWdWyRErS§tksPQ¢qxNOeTe[tAfÛo@upYr´hO\\fMfcÐ¦NfS§[yTUlK§Xe|±@SÙdm_]gLO}Vc~wb©M`¡GoPaYM¯\\·GcmAu]mcAYLosGzk´P^x^UµAwlW[ijmDçfÅQV_]¯wo¥DyuX_ÉUeq{gaZ»d£lu@Uu~ydf¸Lt{hÍdktK¥­Al·FoN¥SmtáT­^KfVUb^j¨zd£zËT@rJpYnwAÉaOµ~VDlRq\\K~wNw[{FauõME\\F[[NYHuaBeh§K¯\\onmIeQ·mJowhs_Zu^ahPLYlHl\\£}CUlRg\\ĳfuY¹SX­[ktXH\\k`J½`m^ZZbb²id_¢L`|zn®X[~i^`¤^D`ZjjtCt\\ K^P|FjLGÞy|@peÊpf{¾BLxSc@iiLc\\PdslEdd¢@J ®E^hC¤`L¾®|Ü`j«Æĉ~LVFI|ÆFZzLDn`£QY£QĐi]Oe¬^aĀdZOlLStVpn^@Z@DäǓD¨Ifif`DŎ±@ei[@csQǑB]VpamL\\vazUµrBÐÝ@DƪĬ@`h~Ag@cĪADîĒ@B_no^|t]pñAAÔȜB@à@ÐWÞMÔFĴEþUnLƂOBÌVfƖì`ÚTSÿCÓȪĬèÄ@łô_hVxf@|wƎ®aA¬i¦µĢ@¶SzPĀO´@°iAÔ[^¤OgfkN{d£`MT¦³®S MðKbRUrLlw[ügfS¨KR¦`cȮåǒßfSȪýGGŊŁUeàQThô@ôM\\PĎiDW@p^ŔrN [hJ¾Sºk\\c¨{Ab[ÞeQ}|QsIQZ',
            ],
            ['@@}[Jją{mb\\|vL¢E¼iXu'],
            ['@@XJW©R'],
          ],
          encodeOffsets: [[[48021, 45888]], [[48942, 45005]], [[48623, 45519]]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Northwestern Federal District' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@ƜĮaë'],
            [
              '@@aWyq_Am³gïÇ½uqosINňMhK¨H¢XeroDĚ_ǨxjXnR\\WWÔeÒĂJV¢ªh¢d{¶ÆZlS°MÆFU[¼OvcĮqbR°BIujsÆIxŔVŖUSîlH\\³{zH°qnsÈuo]spMZmEgÇemW}BrWYy³nsw^wN«S|±hoęGKħIęAƋOHóOŅ@GƣAĳIƳEĭNėCŋ\\ŕXǁLŁZÏCNūVėZəl¿Dǟftt`¦Nr^d xrxCuÎrvČjrZU¨ăR×fG]^ÃBmMLyBwVld®l F~}ÆA ´YĚIð^ÀJzgÐKÞ^¬búø¬¼ǂźrr',
            ],
            ['@@_¥SRt'],
            ['@@oE¦ÍOe'],
            ['@@§RUb­´|WV{o]'],
            ['@@Xfq{m{'],
            ['@@RoY[×z'],
            ['@@ĺWkÑO»_SfzT'],
            ['@@]bú\\QKoóGyL'],
            ['@@­S¹wkdi®ZÃAX¯SlLrm\\|xîH¦]tiOx¡§RLxiR~iLeL'],
            ['@@¶RyŸBKaõ@_¯ZïLt'],
            ['@@D¹^dZÀ@êc·W'],
            ['@@bpÔOf¦Pņ_©cëJŃríK'],
            ['@@WoŇûUZt@Āecl­'],
            ['@@`Îu¹Kb'],
            ['@@¾CV£ùxCÊj'],
            ['@@ĝRTVĤ\\êiVyę`'],
            ['@@ǖKw§FùcóJÏO[ŏ@Cg±]§HtþæjĀ\\ĚD'],
            ['@@ĕJzhÀ@\\q'],
            ['@@Qe­^Rv®m'],
            ['@@gT}{WyxP'],
            ['@@¶QÒ@uÅP³tgdD'],
            ['@@~}M§¼F'],
            ['@@ncFs~uuM¨Jt'],
            ['@@aèeWi­H'],
            ['@@mXb²m'],
            ['@@V¸§Ónmd'],
            ['@@ ggā|üT'],
            ['@@êfŜCmsđKą^'],
            ['@@HVǨhRi̝jhĲ`'],
            ['@@»U¡jƵaiJƢÆňCƪ`Ć[ǫ¯{'],
            ['@@Ĵ[ëuƧD§bǈl'],
            ['@@ĂOGaŻ@Âr'],
            ['@@nuðƎQ­kīI×V_võXȳNŚ`ƶz'],
            ['@@Y¯é@hvÆNVl'],
            [
              '@@Ñ^ěHïX`húxpȎÈŔR¬`ÌAÐkĞaƈDĆ}ØZÊyƆÜ@j`ăJď`f±PefſRYŏf¡^ǵlÛCpƆLƚbĺM´XzwC¾tupŇ~Ņ^ƙJÌ H^ŨIŘz̺Hǀ`ǃ^¡PǩHďQlÙlng|Ô\\ľDÒ{ÖKÒfǘr~Mƞdtažmb¾_ĬlìCvëCÑkšb±Ý|ų±SˋUćfvÒFǈȈzàOnjý`C^÷DøXhÅ\\í@ÛYÅBÛ}ŵPòèŉf[ÈĊzĎoòyİĺ»³¦lİAl»V¢ĲdpÊDƸ»f·O¥tġLO|ĔǺȆiŜHWaŐàIʂFlƧEcVz¾bċZ{rzŪpŒTĒlǈHƦ¡vǇSŏhł|MƔZävǌdĔ\\øG¦ëzŪ¤ÎPǊeÜÈAØ\\z~ƂRÆYŸUĈz¢GŐPtüRņSļVMę^ƵN@dÖdôT¬hȶ~żWĮCǫ³č@SžUǂZm^fÚIƶZx^xĶ©lǏEf~¤ÄvĠFȴtżIúfîsŎ@C]ƊSĞJºOŊVøU¡·ôy¼Dł|âPtĂKgþMTwêLÄQŔlĚôKǼ~WfìV¾nɐGàliǢ\\jpǺlvĜgŖ_º\\śŀ¦|üjľBSɌl¦hbzĲdUǖcƺyĎ@ĉÀxǧºò¢Ķ´CǐĚbóÉb¾XĞC`^z¼PĒYŘd±rX\\ƨbĮD¥tĎvÐBì[Ð@ĜƤlĢ@ĒVºOłHƀOqǈGƘSDyņQŸ¥wńĸS­qàÍħk¹sUÌeĉ«½YOïŗCWjËW¿}ćOwsļmĳIő]½Břo¯_÷SŻ¹CƷ¹mŃeˑŻU¥WśW{aÙKćZWɫ]D{ŵ{ğBő[«cģg§eƑqsođRƽ_Q]şMĝ{ƗWɡWąqãĩE·gYkáFÒčbypùãmLcű{ƁiǫB÷qſ}Ɂ¹eą]Ës¹dʓ@y]řÉZgu©W]u¯ť§ßJ|Ò_tĝIªcģy§CK½iċG]ĝGûuÀIq¸m·©ïCßlrz_ËSesĝw¦mYɇyƋn[ƾʺKľL¶ÅµUăBçOǍN¤oFsĊ]WycųeƽOÕXǉNpkÌC`sð]|am¯Em¡MŃRŉ[XſºÃ@¯lcz½WDg²ÔYGoÝUgÁăÌǡLűzO`ĝ\\śxŭ^ùtå]ziĆMf[ŲMXmèoqø­¯{¢ođÙ³WqoŻLÓYªu@Ó@|ûd±_ [qMàmqíA@eŹNƑz»nÛLQv§ ě¼őteðw}£}oɨđâ·ùKA_ÜIW¬¿ƇÏSÑÈBY~ōpȯVûPǷHÓOnÓUâs²EĶTvUƺQUńEĨ²Y­|Qè¹á]ďCQiqŇPŗfǹºkrÿAªĆkőGº_ÒHĔøSŞpùg©©ŏ­đUÑ]£W}\\mǧ`ƧhȁQáRSÕS\\£oi¥BíĝZāE[Ņ@ŧvStfǍ|ŭd£WĻQčõLã}ǃ×Jšú~ØIňjÔP`ěcþ¸Ɗ~þnÊABjĒjªKÞRƖŔAlĭAǅqÕJĿOĝTãSÏmďķWÍZßQ×`HdÅVǵ^Ŧ[ĐLül¬x[bƊ°t`ŘpĶVĀEÀfĬJ¬V',
            ],
            ['@@[ơãŁIÏVťQɋdŰ~ƤPƆMƆFĶ\\'],
            ['@@óoZ}ȭfÂhǰNR'],
            ['@@ÌNŀouƱRf'],
            ['@@ vĢgƁM'],
            ['@@üCŞu«°aiȟ[¢ý^RrÖ'],
            ['@@¦ròKŠRÙ`²jűVȶä[ɶR¤aÓi@sǒiȆƸwƅĕ|ßCĉe»]ķHćpʣUǕXÙZɽNƋoĸTĸOƸV'],
            ['@@ĥNÎlĐTȶIdɇ­ƍSƱrZrĮQŮp'],
            ['@@öBŖwƑUŝxäT'],
            ['@@ĪmƫCÂr'],
            ['@@čQȁrťLYbĂhŸKĮgŒQio'],
            ['@@rqēYģVǆv'],
            ['@@¶uŧIadčvƌGòv'],
            ['@@Ƽ§Saģiś]ƵXàbvŸ'],
            ['@@ĬCŌ[ºcqėQɡ¹vŴ^'],
            ['@@̼geđCmʈQ^®uÛcK}ïEƏɷJ¾jDnĜlƛÎ'],
            [
              '@@RrȼJÜTɜ^ǐGΐrŊxŬVƬxȬ`ľŲ^xü^ĦAŌp͘òe͒dǊkæŽGFYĸs{ƀoÇƯHÁrĕPċMşRçxHťW\\ãhǙCÝ[x_śWŀ©áKǑ\\Kż±©SőNě`ǻ§aƧgá^Ý]tuƝIñÞUƏaťHoÒxKùTˍUÑĽGñɡVƇn',
            ],
            ['@@ðBɊw{ũsīMl{ŕFƋù\\İvËtnr¹xƜbÌ`'],
            ['@@ŰJŲ[§y÷OƁP@'],
            ['@@àNƘgƅkƻJĊ|'],
            ['@@ĵAǭpʻZlbĴRоUĒ[ď'],
            ['@@Z[ĺaļ·ćeȻ[ʓ`Ƴ~°ȆƪVĜG'],
            ['@@²_gĹ]ɓVĦ^G^ɞT'],
            ['@@ɨaĦcW_ŻaƵh³zpf'],
            ['@@nƄX̄U̢lˀEŮ]ŖuqÅ}ũkǹSͻRɟjíƷCƣh'],
            ['@@ҿC˗ǩxDĺvǕ|ŬbżLȔM̨ΖGĄg^¹cRǙm'],
            ['@@ʵnptƮvá`ƆTǾUƂǮHàUFmĮʞWƨYƮ{{ɯs̩Cʷƅ\\ɭD'],
            [
              '@@ȌvȾtǖK̦CľPĠ®¹¶î¢pŊrƎ\\ȨIǴ_ȞîÔÙǑþSĀƕ±Ưëwǥsǳi³YǥYăH̩ukXΙ{ǅkɻÜãvȷNdȈ´ńb',
            ],
            ['@@˼bƴ[ǓY{ßίIßLɷöVƐClĬdŴN'],
            ['@@ŨDθWĴqŷQͅjƛCFr'],
            [
              '@@ĿiƝMŃ]ÅVǧRÆ²ƣTĦzíhŒNŐ_̺qĠNĞwȊSvƭvàlLnćd§ȬR̘gɪuƄk¬u̪I¶aǫağLŇWțOɅğKsǹyĵCq·tó@',
            ],
            ['@@ƤfĦAiqĊGĔưAņ}RqƪVĨkɺkö]ĳYīDǏOɣiXŹMaeƅKÁdśdÀɗDÕKƽJƗXcrĴlƈdǆ]'],
            ['@@ĥS»cǙHɇXdźhfʋKTƂbŠEƞɌNĺGÄ\\żDŀkɄaĦ£Ë]U{ȕ]ƻFm_ǿ'],
            [
              '@@ƎOþ»Ok¶cNqǓ«Ā_gʽoǵ{þŅmĻǽuΏrʅÄŝCÓkǍwǱQñ^ƭéXĀlß°~DÎĺÆĂd±værȌ^ĔbłDŮS·eȪqƼj՚nǔbȞƀ@',
            ],
            ['@@Ǽo|qF«ņŕŕlå¢Ħ¢ǩpò`_^'],
            ['@@ǊXƪDŢ]È±¡ÑUŗ@ƟđMŝPÛdʡR÷V_nǜ^Ĳľ^ŘA'],
            [
              '@@ě@Ó_Ż`ơtƜv¥XŽQĽPƕ¢ŧRōsȯLËjj|ŅVŗ]ƑN£Ǹ©pü\\ĢOÐgǤQ¶]ļCNmȈǜJŀZʠAƒ_®]Ȣuɼ¿Ğ­ȈRɄYȒĠǕ³̿ƣ\\ǡldvɃtƱCûp',
            ],
            ['@@űlƀHǚWŚTźIŸĞSƠ@ɆQż[EsƀaɊ©ƖNƂssYƻYǗ±ɅOƱfǍø^Ɵ®ƁEérT~çLƵƉLʙz'],
            ['@@ʂ˜@Ǿeř{Ņȃ¡¯kõSȍSȧLɋfŇxğHĉdŸbƖƜjĈHŶvêF'],
            ['@@ć`OdƣjOlƲENxæ^ϖ»ĴuwŋȳJś'],
            ['@@È~ȔfÜĐawĀOiqßlaƊaŲ{ōWɓ@ˁ`˹@ÿ|ɘf'],
            ['@@ȂrƴVǄMƨw°cŃáĕkȁSÅkĭ\\bjɛzčzěVɢ '],
            ['@@ÒEǜiqǧW³SïĈª'],
            ['@@ƈJƖOĎʳ©¿¥SŧF÷|sxēLgbƉrĊxˠ'],
            ['@@{K͛\\`ɠ¸Øv»PÙRzĻĦ^ȜNĞUĔVöwņ^{nɨZTgǒSkĕ}r©´oĹUJÏMÁɵOOȧXǿG'],
            [
              '@@Ĕ{âK¢sšAȩWʥneřAÍeƣaŧƨMȦuÕqʵ^ı\\Óx×ǜMyȷPǣ~ıLŧp¹ SĶ\\»¨ťĳn͎`ȊQʬ`ƒ@øSľDŲW̰gƄkĺ',
            ],
            [
              '@@łzĔg¸zŖTÌ}ĤL@xƔNľoyĬAȖ{ɓ­ĕQÕmǓCµÿŏcȷOăLǛEǓWŧošIǽi\\kĔUeÑƱgǛBƧlȱEÇ\\Ŀ[¸õMũLŁQkgĦsƲGĺTİcvũcŖuČJtkğ[éVćyơr¿şGyYìmħă¬Ɨ@āWqq¶g˩aizƄ¶pnĺ@ð`ŒFYbȡIñ\\Ȍl`śLǵcŇTŕMĕHãaƌyÅ]ŧTĥƷjhŊvɣ¤ÕlÚżPÚǢdäSroë]­qľWŲ~ČWÎmİdĀWǆCďlȬjгtÏƞTȌGòVưQyrčPpϟNǓ_īPȎŎTƘƦR´WǔpƸs§gƂ@êmĴJAĺAƖYØjªȮXƯŠbȈE¾nćztΕiSxŇMĭrƂTjŻTόƢvŒj͜ÎCŐuƑIǗ_äŐtĈ@Ƞ`ƎvĠxƎùƑ[ƗEȡÍǍWÜoŦWèb',
            ],
            ['@@|MJw©Fd'],
            ['@@¨STdfrô¥wĳX@p'],
            [
              '@@aàFPbĜSÊYJåŞ¡ĢA[iQK¥zkēoqyfmØ§ęQP¥dkÉlû\\bXªÏ\\q²·pûTĻYÅFpá^]l~ÜfÒAÈn¾I´TJd',
            ],
            ['@@«^ìTâoFiħh'],
            ['@@lƀS{òBÎµ¨sƍ[ÿft'],
            ['@@ĈaKWàe¾B~]q]ûjOUgĻx¹|rVĦm'],
            ['@@yÁQėfjĐHŪK'],
            ['@@Á¼Rþ÷J'],
            [
              '@@Ĝ«ĈŖaľĪ@uÌg¾ÇaK·ci©áMɏ¤ĝZaéNlÇBĂČmľMÒR uĴyUÙZµKƫÕ@ĩEĵ¢ĝSl¼ìNÍhùUeÏMýnÉCYÜWaŃ[ŋbN[íIû|_Üo¨učC·Zsb³OßďvNƜÅÈEé²B\\ę±HY·Gś_½KįDtć[ŊsŚaJouÚ­G¡uƟ¼p£CpO¹jÛE¯@Çx¿GDqÉYRWĀOh{Ĕo©W×vRvçFjÿb»BñYďZfkęZ­ýD±VMÿ¥Ké^{yć¶¬\\Ð]¬rIþ³y¼`°|Éĳ¢hČVHbɀÇLdµÊVäBĬMølnÃmţ²V^l´D³FoÍmķxd{k_đj|VǛ~zőæfpd·ÜX~°B@TØý@éUki¡Q[\\}MÉÚÉFikÔučUkvhánmGy«dÃT³®B­lkđH\\¯A¥z²ćI_üőBiģVûMū²œb©dxõææ{^O´|ÐAp¸Ďê|Ƅ®xkÆHd{ÜAĔbX¾UsþAltµjOG`ÐJnk¨ÀöMĜRFìrlyVĚĥFlƖr¬¼ƀdŊuÖPǭ~ŇGí[č¡RÀ®±DApŔJ~`­lwbȉAah¿z½Vâz`¬fǂƒlĚU¨Dƾ{İDĈQTląAğf[^ć@÷b{jâDVÊ_ĊB\\`ĕTIvŃr@°ú¢Ŏ¦®^ĬSöbĎƞZaÂJ´gĄH OĶlh¸RjŊńL¤rŸjŪcƒfwª]żiÊTÎKĚPĂEĂ¡èIcŤYöBŲWØkúU£­@șućgīJa[ØQƞJŶ{õcsaŷHʹéMÓPéażGLäaňHâtĐDÂQ£`mWċ¥SYÝQVóMLěiÉF\\ùJġaTSŦP¬gǊY°nǁ@»Nn»Ûaxs»u·bóaĸe_«ūSäl}uÅmĚieO_Ö·ħOwvcWogL®ÚPă~Wj×_Q[æ©FmúHoÆ±IĤûJ[ľąĺ§AĈĐsØ{àeè',
            ],
            ['@@ǳdĽNpZȶmÌ]'],
            [
              '@@¥CoƟ{»ámQÃaoÙUi¥æat{Õmr]eyĈAĒU]bÈJĒ[ªg¼@¾ńJĀYüsoÄ\\^I`¾UÂy@cúMfgUoÇs`s·KgE}Ñ¹oQY£Fykgst£xU{ëÅØĤnƀGÂOĒ°JĎw²L´qQkÉ[p}Kc«köyĮyrgu_I·CÕvËC_e±Z·B»s¨£}Ð^àNÞjZ~uDgéïñGȋqEe¤yáQO}±JIùiTñ_aeķQQmcuÝIm|NzsMwƗ¡H¿{ƙGLg±UėGAWoï]ÃP³oY¯OQ]ïLŗaÁCqyÍu}CY{]ƧiYqaûRñ«¡Á§cBa{ş}Sew»gF][P]sNc}±iÇÔåoÄsičBãS¯DãM]k¿[«EiCsăKÇoEÏÓO«gC¡iY©[qcH¿i{U·ÍwÁVÄFJ{s@Cq]ßR³EqA]qã_Ogĉ^G_«q[ĳIalÝjwx¯b\\~}|½KÇbï@sFoaÅQnÅµJ¯WG{oO­`ēÕy}CgitaqmÂQjWgyÏH¡yD[­EMwĢLOk]lyqNk~SuuOuãX{¤S[a¶B_ÄYrN¼Q[gnwÉ[³Ëāk_Aohm]¥L³uGm_JÇUocL}ku³Å¼iiIdx_}aIiE]eAk£yuh¦Aªª@ÐobskaBS¥gg­O¦O|kKgy{ÆEcØAHmiKgmUOy¡]dekWFyocF©SOdnip¡U¯J_UW¸_es¡E}­O±yûFs×»ŇIÙ[@oԥFȟDŋ@ٱDWuΫ¤_@Õƿp±ġU\\S§ċϱ°åŵϥ®ÛƁűdÕű̷ǉpҍ¸½ŵų`ʷ¸Ŷƻj̛ÃŷŹ^ȅpÏūϿª·Ž½ū͌yÝȘumÝI¯ŇɁæûyīûýđčµ³µ¡ëu£ny²åfŉōcŕĝWAsm¥GVɕÑHĥi·ɻI±ĊcS£HaĩE½ƛØMĩE§ų£VmǝdXdyZp`ŌÓFŽ\\d¤SNŕTÅOke³B¾ưȋhƽZƕZUÒYȲ_LCÄSjÀƾâDLþVĕ¢GUũVhO·\\rqZÄ¹ŊçƀḎ­HA¬S´Xab»Qb©BRASbVŝeɩtUX]ĵą³~k[¤_g@}g¹Euaámb{A{­giãg}îM£lw«ÁŃ|ëEcH¯dcåCOÆmE¡ªskøB°KRUè]T_®hzYæSŊ\\OtnĪFwąqÃ»ǙȘY]õiÃˏrO}͋tıGŻǟXEţTŷ՛Mɷ^aÝɟbƽ\\ƿNugdDAdēBd²XåGţsāF{tQ«@¯wCiskÛWS|T£L·OD·Wq[½¡M¥ÇQ|ùY§BaAÁcP}UZgMzT]\\¿BOǁchR{x\\æûFh¯C¡qģUiÞgÐPQÿONmµidiloÏJ«ląL]uĉ_q£ESwįs£@}K]mNUvLN©¹TnyÇaØ¿Sw«sFoaY£Fm[sÁSRYÉOÕ@×deMÍNïQcAkgFsY¥H£\\si­dIPop@bFzF³ELjy\\WHyfëKaxÑ¸ÏAĝÊ]_Y¥PCWb§OµċU¹^§j]YïSxYI\\a¼wm¥kgDÙDKXƗAįxc³wÏxˋD{Båm~q¯E½ÃIhËM«D]­nSuoOr³\\wLÁpkbwqN¡Og¬bBrRgâP_f§TaÕcģPÇCs]PeÇyÇBiwA}L@o³Ecu~G¯¡ZkaPÁLY_£Lµ[mPç½N­ÍgK\\ąJPfŇYa[kÿEÓF@[³]_y£D½w­OouBueVhN}OÝNy^óqifSS©¥asHÃÝGKrbM§^ŵp«tkWFëgMjHoSħqlÙTQcƗā°^B¸I_`±¥B¥od±[ywcuáNDiMTïyQIgtmµsJeB·[E§Uyµj£BKomYfCsfkiõVĵkR_£[HÏísM}µG^ahI\\«gQÙS«Fky½QGkğqPfjwL¯aÿWiMÛ[õPO}]»|wAÇ\\SēUpo©YWyRLKo^Ç£sg_OC]°C`XČQE£Ë@sMĠaªC¤wCÉÖgºDZgŨD§¡K»[LuµqfiAsvW^iaywCqDSµiiw_Jkn]kohOuzqZtW`q©C~pXi]ĕbÑA[mdsE`ÙFcS\\¥ósqEg©Paso©HB^u¬GqeNej`½HbdwZEÝFen«GYPÿiYeÏTQVÛfgVu¿¡yKrŏyy_MqÃNáL@znpèÈdé®C«jčT£t±OW^ÛOQ[§Bi©GysÍJXm hg~dXgMÏb¥WBWfM_lcae³AnH@v¡xHCxpTJnp~aqZl|PýÆSlhNneVÑDªDlÝ¸lnpBAtVMpÇY{°ě]ęyZ¾\\hªJJt­J\\K¨ºVbrOtfp^F~¡BEnkVÛhUl¡Ng\\@X~h²Un±FícZya¼îy°ĦVHkRnp\\Ø`ÒEjN]LvF¿FÍ~wx}V§HSvlċĚCâÄÀǑΞ̾Ƽ^XApLJthXIlld@j² Az°üjî@g~£d³JK`zbF¤Sb·AtqdQn|HÆIrY\\diWeaÀ@´]ÆZC¤bEàZl[æ[Æ¼P¬E¨vìLÖttKjLCfîrĪBĶMÞ_è@ Q²i PòS~cĲoAÒqĬBĆªIZdxfpÕH»R{E©`OÀ\\n^sŭƥb±EčŉCǥR¥Z@{JnqLvI«vonKtÏg¯lÑZrHfc|»§ÄR¡ÄwÌVSkzyhf~wr~`Sq`Ē`ivFl`£sÛuħq§Cm_Iuµ`wEokRyÇ^]aÏFiYµR@_çR÷U\\LtjŢÞĶ¸HxɨŮ¢KîAvz|ÆĂªVtŞ~xlfŔÌ~pÎÂƘĚK~ĒNö®¬l\\|¦^j¤xƞê¬îĲÜVOh `ÒƮĴM^zjÂ@ĪÈÐG@vǐĠtHT¤bļŢxTP¸ĄŮļëô­T\\dhJ{pÇnylqĎß|_`ŉH¢éZ»ėhǙĉàŉSjƓð]`ý¤žŔvÂøĸÐæÊtªBn£¤fwÿNyZPfå|álć^Ã\\¤ªH¬¼xÈXfnåÂ[zfũBƃG©|Vf©~ºPg`fV ĜĈBÈZÝÖ¤nă\\ŇD|Ũòe°JÐltĠÀğ¤zʜºpSĈeeê©ŦÂujOÅĚǷŢ¦¤ěľ§¬ěâ]lșƂ·ªyÔP̈́ȬÄX~®dŘÆŞĄÖòŴ̗Ŋxʣȴ֭ĸŷȲ½ĎɰǌĀŘŝbǋA©~à^κĺņƼĈGr¬l¢rLĖxƶEĺ|tªRþvĐaØlÐJ¶pV|¥Þ«^ÈXÔaǌ¿Ċ¥Ű@źWĸ`ÒnR±GffĞMvYʚºyØcz[~LˊyËÏ`AnVKp^þcĄÐOLëtRqtÉ\\jLĚSŬ{¢{êCîsp]æWecĮi®bƖg´D_ŠegÅlgūÏŉ_Í^GȑzÅzmaǋT^Fg\\ï±ý@Ō­äNøgŠKW§ĚSKyÕKG_őyÄKĎtBnŞJUêXSŰE^eþVÈGkg§WÏy¯_Äa¦ĊrŮxŐPĐAÆWubmĜŐAĀKäB hŖ_PĸWÊNŪƘ]UĨSfWĘ@BoČ\\ńSFö¶B[j§N¿pŰHäqÄJþO¢q´NÎK¬eRÀOÌŘ]O_ĄEŀaWi¦gǚÔMsèUOc¸G®}ĮgeÌ]DWŊg¦²Cºq®UrkŒcXgÚWÚàazmĐ¬]E|Ú]Ĥ¯BÊî¬MKvĪa|rŚ·ĘKzÊuèk~dIre[ö¼_ĸ£ªa´@häyĶRãØcØoqĴįºIèÊKÎôQEãDE]êømÆzeĂH´ÄaDeOêdhgGÚÕÇOk\\ymp]Ê[UęyÄĞcT°_­¯ÚeT[©j¹Yq÷Q~iiąû«YaýuIÁ{IÙAYĥeLēw{oEy÷õ{¥Bßgiĉĭ¯ÓKï_§aǝqīQ]œcóeć}šLëIģ}ñMȱAŽOīhÏBéPóCűtGŹz­rƱ Ǐ˵ßFȡ@ţ\\¡Vş\\RĵV·VĻFgTćNNĹLƱħF`E^ídm^đ§tƅP»[}ïMÇW©LÇi¬\\Á|ğDc`ŁS\\ŗBkzÍ@eûl{tÏUÛ^°YyyĕEȿòõd­ÓxÁVĭÈËºXċćnōEÁ\\snNĉĎ}orUäAĈqmXCLoKg¹ÆJļ«hwòsèLĠñAKÆYŜOĶ@`UöeY}ĳq[÷G¯ZñEhoĔBºc²JC{ēBsSÖaĔRÈVòÈ[Ųa~ÞIÏeĬÍ]ËAQŜP_ȣUĉ]LmĠfO¾`ĜKIqńMĲ{ bØKÊX¬e~{ qĈ[ÌńĬåÊ]j[«qwôFi«Ohr«ÊDukiñHljÉE¸r@B·NIZÍf½t£YtEgEiÏ¦wGms­GTwoKemR}qS·AgTÛD{[YucÃTYgĝGW_Ì@Ěcx[ooX«®@JÊWqMml¡ªeÊAG¹bW{måĀCÄº_cc¸coř«AguXqÎc`w´gÇÉaË¥ÂOilXEV[a]qNyaúJb[LÐi¦XðUWFzY¬JXbèl [|qÎkE¨ÒI¨gywÆyIc¼Klr¾]¨qboGaygWtw¼WNe_utTĈcNkĺWSHmOòIt\\ oCR¶[ŤDèW¿®[úU²AêPænddD¦üd¦]þH lônW\\ÐcrV¤­ OÅZJzR~dċzfXõJf^ªQ^čBaÉ½tč@ğHƃ`irÉĉ°Sf©^u»ŅZ¡A\\jÍxaAìLÜJ°Ğ`n`i|Xrô^h¼G¤`üLĨkAİĜ_ĔÎcÄO]`ma}°{Ś¡ČeÊiðSȈFo¿F¯o×ToUëQ[E{QĐÁ_nÔH¸fÈRÞU bµhwºQČqÈIĮeŶUňĪńS¾YÀÌeÒ{\\ØÆÄǲłǪɖÃw¨»ji|Ù¢Y^ı²oðXÐ²|~Č¨ŔrŨ¦h¶ĀpĸÂÆ Ĵ®Ȕdǘ|ŤrĔ|ú¨à~ĲºòÜ²dà¸È²ÞjäN¢Kǀ¥ĊawokĢDMłJɰjĆAÒ|Ÿoúe¬xwĉIçq@c±i{«CN|IpNpÂźtĎvĮN¨_Ďsj]­x«ÈyV¡§C¹Ôhf¥dd¬jAÆj£Ö@â|v¨¬ÄJMr`¶ dþBátõ¸sbXÈRvHknpËqåkù{tĿĩ@OÓh©pAÔäĪŲĆð~h¼ÆÄL¬r`´Àèy¤T°BvöOkƇÐŭ¦Ób×zǋ´±jģ¨\\ÓXĦDŜk¸iĆ]ŊƀÜQϢdŨDȮ@̘WǮaȶÎa²Ē£ÆWoĂcê§Īµ¶[Jł£f[§gÇNYYĮLK§tÊ¥¤eqc~ec³KNģ@ŵZƩuĕSÉJŗőGƁF¿MŏëEjcU£såR­UƻÝ­©gÃI¥´_Ɩ½ŎɈ²_gfOÐVkÌÅĂêYsŮAŌPŘzĖLOCàKŬjîNUúnÈI~\\ƼxânâJİuŦàlÚQÞÑl¼`xx}lUzXØ¶vvVgthF}JM¦VĠ¢G¼znǮ¦¦kÂSò`XTĘ¤KÒ¾Kâl\\ŀYĞ@Ē`Ɋ´ǒ¦ɢÚƖ°EûYÏessÔEDh¸ZX`ÊZTÐ|Ƹº̠ňÊÊlj]îM²NĺJp^èbĚFİÄMØFZa\\Ë\\²tðDńTƢpĊfƔE]­kGqħ@RĜp|YĦ\\ygc÷]mLgÎw¼YrRäHŮ¨ú\\¨J|Ózād«NnryN±mEă\\ǆº̮ĊцļČlŖnʔǠfɌTǜEyYµJʉUáSÕg§^©KÝXûu¡A{î{F|¶S²JSŸeáBLk¥³Íiaü±ºc¤hWyZc¿O_sSđ u[@©»ƗP£sÉFÏy®]Ø@ŲtÞIªUÈRWªLŊìN¶`ftÒÀ\\RZĨLQ[ľqHaôËJwÐiƈ_p@|mT®hthµ^ô´¸Şƈ¾ĄxĜVĈUÊ@¼fØZt`ĤrR\\ÆTÒGÄaÆuĢWĄC®NÐjÜVƘm¾ÔiÞKĦcńHĔRƊ¼Fòº¦ÈRÚAªRÚAĶ\\NnŀvȜδðæXƲPŬ@ YėcăGŭŊcÔBÂ]¬uÆkÊ§YaeĆ©öYmyĻFXď]J]a©M«Ð§¹T¤aþWňSŘÐEø_ØĚP `]£V£ ĎÂO°eR¾GȌXİhĮØ°ph¼XôQgì@lÞrÍNÓGkP»Ä©l©JmI¯Z¥K|TÒÏ´ù ½ªĿºNj©ZU±vzpkh\\lĬ¦LôaǎP²fojnnÄN­îªnņpĜ]¬[ÀF´cĪHÞĶWżMĈNĆkńAüW͠MʀUɺmČU̲¥ʊ̈́ÁǦˠćǶÓ¢¹ŨH',
            ],
            ['@@ďi_XnĐRim'],
            ['@@ñLnv b¼JĦUŞªOk±Rĉ[@ğp'],
            ['@@ÚYĮ~g»yűŹjË\\¾cŮm'],
            ['@@Ák\\UÅEƏSVÙAċY¥kěJÌjǈjɜpĦj`i'],
            ['@@űjJlÖOÒ'],
            [
              '@@yÁHÛtxǯÖ}bªRĕrYXĨzøèŖªÚîǘØȨŬLĮEúQĔʄëǺ·ĮuČĂ¯§HÇiW]ĥJYÓSiUqAgPuQñ¯sÁs©G}aŵ}ȫ×EėgűgĭOFh',
            ],
            [
              '@@GjĖmŎªfrhfŢDÂp¶BƂ¿ƚ£EeĒð¯\\e´MŮJ¸C°qĊMƒÛĦƚzy[z¦g¡Uts¥Y±^gw±DgcëS©hŃp_NµJįvQĭjÕd|^«dhºNZ`ĝ°ŁQůJÙS³b¡]ĮNqğHYd«dUr\\Ɓpąµ s`OB{~ģä^²_JÚwÔ_üP|ËJutƣ ',
            ],
          ],
          encodeOffsets: [
            [[20121, 55761]],
            [[21457, 56608]],
            [[27841, 61302]],
            [[27612, 61500]],
            [[36848, 65854]],
            [[36090, 65936]],
            [[36361, 66236]],
            [[35730, 66314]],
            [[36759, 66585]],
            [[36721, 66552]],
            [[36823, 66740]],
            [[34725, 67843]],
            [[33887, 68157]],
            [[43697, 68286]],
            [[33120, 68706]],
            [[55219, 70010]],
            [[47380, 69966]],
            [[52499, 70133]],
            [[34561, 67891]],
            [[28508, 61943]],
            [[29251, 62085]],
            [[29227, 61800]],
            [[29161, 61817]],
            [[29161, 61898]],
            [[30412, 61432]],
            [[28536, 61446]],
            [[29251, 61960]],
            [[60730, 76213]],
            [[60481, 77706]],
            [[60480, 77750]],
            [[61669, 77917]],
            [[51433, 81904]],
            [[61290, 81840]],
            [[60059, 81907]],
            [[60481, 76175]],
            [[56160, 75742]],
            [[59427, 82565]],
            [[60261, 82554]],
            [[61462, 82113]],
            [[60481, 82045]],
            [[55490, 82240]],
            [[53909, 82196]],
            [[56545, 82208]],
            [[53578, 82284]],
            [[57928, 82430]],
            [[57600, 82288]],
            [[56107, 82318]],
            [[56575, 82370]],
            [[55961, 82410]],
            [[56076, 82463]],
            [[55206, 82536]],
            [[46080, 82523]],
            [[51841, 83128]],
            [[59909, 83044]],
            [[59732, 83089]],
            [[61928, 83199]],
            [[60480, 83373]],
            [[60054, 83590]],
            [[63360, 83548]],
            [[63718, 83622]],
            [[60481, 83692]],
            [[58505, 83390]],
            [[64380, 82813]],
            [[58888, 83157]],
            [[60480, 83164]],
            [[57600, 83173]],
            [[55807, 82791]],
            [[57600, 82568]],
            [[63361, 82808]],
            [[54446, 82580]],
            [[59820, 82806]],
            [[57600, 82763]],
            [[57600, 83015]],
            [[62281, 83031]],
            [[59559, 82921]],
            [[51841, 81933]],
            [[60480, 81979]],
            [[50595, 82008]],
            [[51156, 82140]],
            [[57600, 81988]],
            [[60481, 82311]],
            [[51745, 82678]],
            [[55198, 72822]],
            [[54783, 72832]],
            [[53857, 73100]],
            [[57411, 72303]],
            [[57601, 72306]],
            [[58320, 72258]],
            [[57961, 72253]],
            [[54565, 73004]],
            [[58205, 72647]],
            [[50259, 70315]],
            [[66646, 70922]],
            [[33896, 71059]],
            [[34871, 70999]],
            [[60480, 70960]],
            [[59347, 70432]],
            [[55684, 70437]],
            [[49906, 70376]],
            [[59953, 72000]],
          ],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Siberian Federal District' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@nI_s@}h'],
            ['@@L¬ICs@µr'],
            ['@@~hB^ÈAA_yÅI_'],
            ['@@ÁZ[f®Pp'],
            ['@@íwÉ@ÂöO'],
            ['@@LçgOìb'],
            ['@@¤ GO}ßY'],
            ['@@ɚĊÈô SĜÆebmĦ½i¢]W³~mUwTÉáBÛeƙjƟ@÷`×@YlZĽZóVt´Ö~'],
            ['@@ðeƝB\\Ä~ľM³g'],
            ['@@ĢYy]ñVJb'],
            ['@@DztàKÐÙQŋTS`'],
            [
              '@@ó_H_ƫDÅUýĳHğpÓùAħsćƟnƉYµLȡký²ÒP`ƢnĊp´|¤Ü|ŴZǚLȠkĤcƶ`WĔi¾BÔ` ÜxĖ^ŜLŘCsu]ūK£eĽ`»À',
            ],
            ['@@ÔkȓYđzƔAþN'],
            ['@@O]ŏAĿtčRěDen®PĜcƆEäPþyAS'],
            ['@@Łz^ŚW¥'],
            ['@@ÞvøhƐ`ǀOĸuWíHÏUÓJǥ³@Ï_'],
            ['@@Ŏ}ñyç[¥RĳB\\[xĊĐTºs'],
            ['@@Ãnǲ_{ŗIíHzp'],
            ['@@ïJSb¤VÀM_s'],
            ['@@ÔĝJ³vVrè['],
            ['@@ǣfÑ^ŖKjƀUQ»kg}q'],
            ['@@dĤJcq±D'],
            ['@@ȅ`ĺ`ŐGŸW[ŹC'],
            ['@@çGğTĿ_ƒcÔƣf©@ŇfO\\Śp`Ƕ^Őcïi'],
            ['@@][íUïDPm½}řR_dćDhtR|xĒ®QƢDª}ĈU'],
            ['@@UpõXÜfAĂļXĬgmĜWta½Sky¯@sŁZæqYħJŕ'],
            ['@@đGkoóD¡tPÑ]õG±dÈ\\ĔDòXĤr_äP§'],
            ['@@vÂEEiñe'],
            [
              '@@ h¨Ugi©ɧĂŃÉªÁtWªfÂ®ÊRxbŎ| bƆrƨRèAmõMklÌ]X{ÈÅŻab¡Słi½]§ƿjõznµºŇqÚ©½eŮČÀl',
            ],
            ['@@®mēKÙHĖKÖmĶCM]ÑiĕJ'],
            ['@@~²A¹ƟB¨b'],
            [
              '@@ċH^ƓO÷r^²Ƅkd[ƄLdįVljUƆBWuČTrZŮRøCbqĊKW{±{ōOċJxŇQAWÜg¼ĮZYkāWyzĥK·J',
            ],
            ['@@\\ĠXReëM'],
            ['@@Ó\\ŲbJçD'],
            ['@@¯OíPĘhg'],
            ['@@OaħH^lĐNJ_'],
            ['@@ǁVĩtŹ`Ė´ļBŊUĺ]ɲ[JsɫB'],
            ['@@̳HovÆ\\ňCĚlìFƞmɖAǊ_|]umǵ]Ƶ@kǛW'],
            ['@@©EıbŲ°O}Xi'],
            ['@@AyćGs}ǑbïBťQjxČGV\\Ȳ_f^Ķf`'],
            ['@@thD©\\[ªƎoi£kÓQ¤©õF'],
            ['@@tTŀR`ČWēyÍOœAĽiçGxʒ¬'],
            ['@@Ñ\\ñzĲF}G]'],
            [
              '@@ǑrÇ¬ƜXymƀ]\\¦D¾pŞH¾DjƄDhY§ĤlM`¤ŨT¸oñw^ĻIzaìA^gºIOÁIďLĿnÏcŗPşCŋhnĝH',
            ],
            ['@@ʍrÙjĖVƬJĦhȸcĜNɾzǔ{aaĝ¡ƁikzķBɍVįVĕC'],
            ['@@ČiTc¯]ûj'],
            ['@@ĤI²dr¤ƄdØkòD~ȗK×cmʵ¡śl¢ŀ@'],
            [
              '@@kZ¼ÒĨTǪBhXVøBĠfºaĈāɌ¾N|W³lòƐ^lcƢQª]ƨUŴÅĞDÆWœAƥ×]ÍûO[¡Ueyčk©į£Ţ_Ūäö\\Üp´¢eǺCȌ¢İTèÚĘEèmʲcB¡­þ[ĐNŌSľ¨{©{ļ{ĳeƜk@wĒT~ĜjǖyƆ~­Oþuz¿ÎwTm£ùęĵ³Ǘ³ƓTǁ[ƇJāQϏ»§FơWşBǍ}ĕ\\ç@ƋoMśm¡¸ǹLÏWƇFǗwÏ^ƷNĵ[œNƁEƉSďiÉsį]åmƛ[˷»ŵqƥëMȉDõ_ĉIÏrqÝzî¢ĸÂêdżÞĶzrtİxÙdph©lĒLĎ¾DÌł¦pRkĨÌƲÔĀAĶyǪYþ]ĄX̧yµtô ĬĠư@ɂvœǃbYXî¨ƂXÃ\\',
            ],
            ['@@ĚĥFtb'],
            ['@@n`ŔUÑÿGP~'],
            ['@@Ɲ`țcõo kŃAķ\\ĶȞZȈDǶqľKFgő]ķFãvĤd'],
            ['@@îVŪĖSȐCèeƖ[ňsȈuĂeƊW¤caةL~˫ÅHƃóEn'],
            ['@@ĺbƔHƚkɆYČS¸qãƏ÷OʕWϫ@ƧRăzì²Ś|ĎVƔH'],
            ['@@æR̰øuÂǳ·ŏ_ǅSʑ@΅Ɖpç´vŜ`ɄbϠP'],
            ['@@żFªVϘcO̥ŋOŧJ'],
            [
              '@@ä]ĦfÊYźPĲOŞXiɸdƂJņMɴ¸ŢGŖNǴEØǎ{sĚWÃ{]ÛuYƕaĕäaǎYĊZǾOºHÈJdĆxqZ~³ƊªžyĔMƤnƬKƸe}ƐUmź{ö}SiŦ{x¬miƥiÂwJĝfeå¿M°¿i_p£eZãɛbȑŏ]ļ~gɰ½Ökğa_ȠcĎkDyÇø}igÒoIcģqƋgƙm}ÃMƥVǧ]СNÉyŁSùŇEkfƫmëEÝzŷQĥPnķa¯XwxǇRčĥ`Iɡ`ƿWùP¸tǧIïsĝKȭ^ğCAfĻd^ıNƍãOƛǋdȷÒQn¨̉¼jăf}pdĦT·ºÌpjpµf͛f°kąL·hĕTɖȕ@fôÛFȍÓŏoǑķhǄiȹC¦\\ǮE|jƖŜ^zlün¨ǶÆƤbɈLĘMĺɇŋOrÜZ źUv\\ƎJĈ|ƾfÍdMhƚ_iĦQŴyØrVvÔnŎR',
            ],
            ['@@äsńG¦_˟in¤r'],
            ['@@ЈQɔoÊƝqſGıhǧjįt}z'],
            [
              '@@ħa͇GʧnbÒ~ưRŎ@µīVbǙKǿ`đGΡpÙ~`ŖLÐn¿pƩjŜhDőQ`ʐUĀZɮNżT_˰yȎGǴWǾPƨkƸWɘ­ǀ]äeƁßĻcƻ¥ëK×{ěqˣe',
            ],
            ['@@ŭ{ĵJnĐfĺa'],
            ['@@ĺdÌkÛSĩ\\'],
            [
              '@@ƯTŗB˭xƸb̤Q̅²[hùbɹFĻU˧RØtĸFÞ^̰lŊOŸJWƄIÐlΝ`ŹdĞŐPÞdΰJn^ØˎĀǬZļdç\\ŵm[Ɠ[ͭanĊƌÌt©X˪¨ËNnpǔNĢתîlŪbϊp¢tƨrư¢ƔBȄh̡Lœnǔpʆ\\îCƚ}Ðm»WniŜFĎČ[ȼÃnĜ}Ť]Ï[@Ā{ŖAƔtkð[˰ɖwÂ³ËYȘwõ_ũEȧk¥mɍGŁIÒµĴsÿu¦eÅeʤcñMÙ{șoɝCĵQރDǳcťsĥBğ_ǟYǗEñoƙOŗǗĉBȇʻDƱƱvə ƁZ',
            ],
            [
              '@@UŉROJ«Uë{LeëuƉ}ëL§}DWÃHiO~]¹AL_S¥G¹[@wù{JuScåoÝwqYq_}IOÍky{FuÅUBc§Ó^]DÆQĆĠMn~Jf[êEpgIlc@LeWZ}g_HN_}QHzq[ZqM[}BiuyD½]g{]uuKÛ[{ABqDULoái©MasC_g{[§KRPek£`{{_EijowmM¹QµiHsU]@y_b_wYhc¹g|c£iQVuYBs³EIaci«`cKeehygVQ³ÓÉmmßw`{MHsQu©PÈd^ eblpg¸Z`oOñlsCe}wsqKgqH«QmLëY^au@õiqHo[ïFa£Q}kC_eWNsgmÛuacKsBkQWiEGÅT}s«AUß¹pyeƃƍ¾ǕHǱ²̋ƀ÷öā`Ʒ¤½h£jěW«S÷ŝe¿i¿AÓ\\ēNÙnÏVÇhÏ|āÌ½B^½°fŏ«Hß^ëFđaJŇ¤Ƈï}o_AƗßÉYËc}·YŁ[]ãuƧÑ±³K{yc[Iksw{]iFñwÏ}SC¥Jm[TGNçNëiGá]éÇ_ķćcýAyRéDMĻ«}Gşć¡ƉMŝ£ĵġWqBÿfÇ@¡X½vSjsC©¡ď§B±hõNŅj¥Gāf×LĿIÓnWpLgvñ~ĵjFħ}đn@[UåRcQ¥NyMÅZg{H½Qz­lNlWhÏ^KmqTBloZGfF}lá¤Wk`YpFZkpPDjLPsj Pv]NÑULgnyÁ¦g]§QmVIhSŋ@¿E]Y§CyhmDyA£¤KtA\\ƣþÅ^§JÛbAÙVWo»EqPĭqCßāMg@pýháGÕr@ÃWÇTMb«T[µDg\\­báU@eÏqE­eħE`ÅReKe{ËE¯tq@c{ċ{TœMus]³oMoßw§}ĿN½bYZ©B«V}¯F»`C|JlVFŃoqRZmVpK\\x¡XkÁN§UµEJj³PUdËnOfmPOTO°ËJmb½XsDC\\ábGnjYxÅzB¶tbElmrfc\\w¤§hfxDªnRq¢uhR¬@bV}Ñ~ENQ`Ti[±bkKer^şSbtÓRcdHWoAXHZÉmA}k}PACuj{]§DBr{fDuQÙx»zízih`@y^©GwZûkáVÁC_T«Q`ÑSu[¿R}fčZ¶áÜyLɅber§AčLVKv¥R¡U±Gm·N£[mDFÉ{a_Ó©uo_L©g][CWË×FqOD{Q©Ûwe[¥jYDo¯·B\\ÛiA]YG§§R·kYJM}«Ic_UwG]`@ô¡Wsy·y|qOnoHwnIWq¤z@ºkVT®[WWtKSw·¿cshI«_sZwkIVcmOLA£_GcoL}W@exqYNeeHWÑeûqJi[IwbeCoeMg¹EuqÇGO¯\\AnĩbW\\ETĕH^ÇNmTç{@U_¹Î}Hgeku}aAÁ[BdQfÇN³BÉtG½¿pC~¯lÏSi`}ėIgYñO±V|ıDıNįEÑn_°NěRïBÕ]éKW~mvlºx¥FM¼ǜWv¥fǭTP³i­XĻC¯QH`Ç@yUchÓfĉkáAi¿Z_ÃY§²DT¸PjI[`ÉFïXËE{LOcwUãUJs`tzLSFbqtBr|©SdyVćmčUēnë\\F½_Á{Ç¡@­ĵIwoOIY_gZq÷juCő£Ç`ĽMÇiP±yFmUTqycXÑsrÍµ{qV}AhÛQmq{[ÁG}{}WÝOJĉqÃ{Fmto[c·eÛgWL©MíG¥S¯gBekzeHu]U qNTe@[c]ÑcF³g@oy§qk»x·©YVyOc}K[]ÕcBkayKq^AlwdEt{bwUPÏ{bÃDaQ·^|Lą{¥@lSTmVC³hwÅuJgSCVoYmo¯@J]_{DWC§NcSwVëGqokDÉ[õCZiCsąaQV©`]Ebb®Ur|DÏh·KīVeZUrwZCjrVe½^r|xRfótµCaQVa\\n`Nll¸DVNs dlR~O£lJÁOfu±m»yOk£]±LaIwiW}u{wZ]zbÙCI[Ák¤jjÇVgs@]hVÁ[a[¥xKpZ}gÁHďÉÁEE@MrXa¤¡|K|@pLw^m¤l\\U`®t[¨£N{|kGX}WrW~¡SÅªÁlC[WRR©H`×¾PVR²uh@stYvXfct¯VªuJt¹ÄVBbrbWl­^Á[n÷\\Ary±I±VsWYz©@OzP£KÇDÅOqOud¯@O­«SuÍpsSj@oR@_ul§eIgą{éGY\\ķhi^¡RąJåûPiRõM[Hiwkũc­RáJXrl[@]flVOk@AĻCoYDYŋEìN|fÀHh¦@Y±TŃ|lA±dƩ­A³šEJSAµQ@š»K§SáBAg©BA£MoďBggXÑƩȪ±ÈģŮWvƿȾĽŲÍþŇƐ´½ØsÃÐ¿¼ïøğİǻȮU`ƃƤÓÜŧŢēĘ·À¹¸ʅŶʃŸѕɈʓŴKÁªLŢeHzy¨n¼^MlbtB¤Z\\`e¸ábĀj¾dMíc£iÅA@_w_}{QÏFWËSĽbāryksu_ɥÓ˭õÍ`Źº»L}Y@cÅ£Ɲë¿hSVó@{G¿Lå÷X}éSEƥlćÆoÁçĉ\\vLf©RPfãZ_āVhÀƝláÓ×zåNk»§L[šíÛrlV©XBTĝrÒmDCÎDf^¢[n¸J¢\\g`@tpzĴOĴY¸Şf¸ËIHbÕJxq¡L¹UF`gwO©t­^AēCďvōbJWVåR`¤ƍ@KnďFī\\H_«I{ÕŦBO£[Eŗr¿ÛÁV¯b´LRrNNp°GLdÈMXzÛJ¯\\Ý~|´HPajçǁb~y@aB¨{ms]³Úg g«ÕpTrTWjġa_ģZË\\{ÉēMOdĹcBºđNA`÷Hič±¥R}DLlfBÐ×BA¼ĨAA[öUC|AN¬BH²}ACĮÞIJÄ«ACjy`ĥCB\\Á¼obXMtwRxZYnV~CYb`čL¡bßöXfĭAÙūnaZtZX¾a`ĆÐ~`ÐJO ÎrErbÅAçvTxxVVîRªU¨täRÑjáYÙIc]»f«TTfAĊJȔOººĘHocK±KtuB´dÂĆFiXa`n¥PM`µks±PÆxĀTM¶PzvÔ|ĎčjN²PĘOXeØMnbSƠQnJd\\C TĮªóȁĢËöjÏP}|T²LX¶JÏxsyĕXCmoX]ÁwÌowscbiU¡EuTELfTmO£^¿Gï E¤ƈRfr¬\\H~}JyWŠãbEé\\¸GªKq^d®ZȪ˚øŀĀł¼DgST QPqoÐ¤YAxaS±qǷzcwgJk¨CÜnªFZYÂ@rT¨@ψ¾Wc^ÀƆMΜOÆG²JäÌƲðŐKǾKˀIάEȤĘňPTphŨÄĜlBzZ@lǾĦZË͜ǐĬ®Æ²x óǒǜÌ¶ĶĀgVZƤŘȨ^òAƌxVdofbàÔvɼ_V^Äµ¤ÜDlTRryH^Ø^W^zŠ~XTÈDp\\Oe|dpĕ\\êÊ²XbpU|neTjðE´a®Bøu¬GŐVĺAƺæĲ²ĚLŜ[źqƂ¬®RlyUh^DĈłKp\\®P´AzaKly[xYcufs[H]¨ĤĘJ\\tKɨUFǪDǢÚȠjÆɼyÌg^µ±̖łʜDʎĽǺìvPĊʒĶϜƼ^ːRЈǗ˂v͈ŔþbɠÞɼâΖĨH¹¨ƂòƖLXp_Àĳ¤ŉkȁïÎÅ@Á[¡t±TÝĕbÕjßaėhµ`py³n~GRlBÈÊM~¨jæìŀøt\\ÀZŘºhlDhÀ¤NôvªLÀzzÖv\\fÆĦJ^R¦iĈfh¡xr`ÁnKryz|Zcnaf¦hp¬XcãP¥CÙcÁJCnRir¡fHVÑ|c«jğVLp½t\\kEv^\\vIÜlM~vR¡r¨]lİl@r\\ªHÒfļ¨ŲÆJeÀ_l¦ IvnfN¢ÛĎSº³t»ĔÞCtïæ\\ĖćídĻVùĹ}P½Sßm@}pL»S¡hYE¨K^£bŋHÿQÇYĝUñJ©U¯D¿XxTZbPnq^AzµgWĂĈjàP^rÔ_µOfhPxelÙJf`Õ@åxÝP@VĜnUhj`[ïFPp½n©`ǡEǗw÷¬jZjqtll¡Dí·ba¦s\\¶@QƄhK\\±~ŇĊlÏıhqneLĨPdÔLúnlhM´\\Bb÷ĐÕ^`SlʛĸԇǺFx¾ACvTtàTOj¥GIl£¦Vtêz[\\È¦tėEũÌJ£v¦^ã·LčR\\÷¨Jl¥bft\\°cbĪ\\öaɮS¼´bHŌÖTiHnÒV¶¶xÒoÈÏÜJpvâfĆT¢[·¤ħ|ýfI«öÅé^{v°lúDO^vÓ|ÓBácęJ¡dõ\\ëKÅL¯P^ü¦²jR|±jë®őjXÆ_ù¡ŵi¡VpącÝyJĻãKgĩ¹ZğMƇh×QnDfųYÅZē[ĝ½ķpjjiçâÅlp½XjýI£lāVG±hnfÈ^áv~rĻd«FęèCêzVp®F¦a^nVjxŲ]Innhfpr°FayaþULblæ¦`ÒndjèLgNtlâĎVXpôAôUĔǠM¶kTi[ŬYFv²CdZėItR^ÁPÜpG®x ōxMpnJv×p±Ǯǹ̷ҿưǵVt¼äpĎ¤¨Rp³EhÆnŐY¦Vǰ[®OŬf||Ďn`Gz¹tVxÃVThúR~hľ@¾pí^^v`µ^¥Oě¨KšdFvǩyWĻDýIǏrw\\ÃU¥R£~ŅlXĉB[tŧP|Ü«VX|ÿL­p^Ī ɨUȴIƼ@ȐWö]ȄÏƲÁƨʺ͆¥a[ĉBw[ŠhiÚkªy¤KŒ©ŒNâǈ{ĴwŎKİ@͘fƘfȆƦRÔEnôQìHêU¤[ƒRªzétǓ˝\\ÃVÅgY~{Ëŝđdm\\ìfrnB Û|DvĖhÕZÏ{ěEǃjēvĳ@Pş@³PȍXćbġŅ\\»Xfçbl¼LYªL_ÿM¯^wÞBpº^ø®K¤_bfá°bflÕbũ^Þ~Az«ZƷXìxȀVuzǅ`ÉdzAjfĚE]rØPª`RnNV~¸RwhĹM³f¦`}tÐbǞA¾kŌ~ĄGÊZƦOÚbE\\̈jŮ\\ªMƀRƌFäRźOˆDʖKΌNӎæTɴXʮŀ@Ɯļ[ȀLń\\u¼îhĜZŬMĪdĊvɊNŮ^Ò]Ǹt¦Yƺ]ĂWòXKñ ŇHXà^ÆSŤGĚJ|X»fūIƕPóUÛ^K`ÀbƋdÔ_ūƗAÿʟJġb³vF´žFŌ¬qZgv«lƏªZŶEXdÔHú^ÔDè_XkØkÌQŪ@`ŕÛQĘiRWrĘVRcqâB°¯rWhÞFŚsŤHlr±TmßG­jť~¸fÑPȍQċz¿Jñzƴz¿RǟGOhĻHS|УPOXĽ`äXºn©üdİ[²QnÇ\\gĦJC}¤[âXƆqFgĭNqe¼]Â~ĢCT]ÐIi¿{ŐH«ƼDN·^½àPG^üZúIĎnÃdTĴtŦƗ¦¼lżL¼ULg¿sźBĎrÞJs®œCŧRãK¹`īVTšdąEPxŸ~ņNǠSƾ[˜ełHŲXŰ~¡~bdŠ²~ÆhnƒĐxÐDĔbÕ~Ǧ^îQR]ńMY®[ĦV´QĬ¸ż^üGrnƚXÈfļNĮUĸfĢB¢fu\\ǦNþĖ~rþuŐ@fZĸXZYĠK´z´HOxİBuiǦl~eäFR^âbǲIàdÂtŘQĶfǼNņlŖEͪtXŊPČlǜdÆd\\ėyŇBēWaďM¹VJÉZ¥g§ãJlōjxǓaS[ħQŐaKiǡPÖîPf®¢xÆMwŀ_ĂnDh¼Ě|¸uë_´²[Ì`ðNèhiĦh³xŧFHnĘBÖQɂHæ[ĀnĒComǦodŤCZ~ǋK\\ƾXƤICaÊuŴIäbÜeÂpĔrƢEîUƮBĸyƜaeǕYúwÃghWʫõJ[ŝu~iżY\\rüÜZPlĤ^Ð_Ǆ`]zèpÌGnuĮN¨kėßŮKhŸcXzìRªvGfâdĪZŞ|ºSƛgWĂwćqŴB]hºvàFú`ČQ|_źNhXģEċfƨǮÊdƌtådƕBÔnĘDjȨdĶfǎªĠbD{sƘGjǊ[[ļ\\Yĭ[Iq»]ÂeĘAÀ^ĠH¾MŻÊIeädĶm[¾DčOt­xēb{f^¨õGķ^CvĳƵIÍÊƉ°KhĚxζ¯̈́C̐jʌYƚZʄĸİZP~njÌĤHþY°dĉz©xãhĽGñÇ°FXŠîĴTIĞBk~ºstªhßVĨ¼ǠÒǖÀƠĲ¨¼@ĔefĪTÌ Ď¨ĘȾxŐ«fŘfâvê^ŘmƞBƼxƀƄòWÚdĐs¹yņaĴRƊpŔc¡kľkĂHČkĔKÜ]ƴKżfǔOÎ¥ĸC_ƔqÆÛWħbǗZiŻ«ķy´QákƑqCWƉa·@ǉyŽ\\ƳasÇKčRŅmIcƈWʂLæXĪqn[ŠDÞ\\lĎgŎEǾÒ]ĀFüacWŁWhiÓ[éVįI½c]ŎcƎdĂGöXŘäxĀQĮC¾W}îdĀCĆ|øAŬǶIŊ_ðońSýaǝON[ŘGċƋAwcUÛC£qšThªmÕchémZaěK§~űc¨ycƒyƞ@`gÜWBĞL΂¤AƲĶRżvĐf¤jÑZ^ŢZńMĠZoàPŪEłUĘH͊jČBƼ@cǐOƌ}ņOƶCɨlTɔ\\wƚMĂJƖňYą}æ{âPǆcæDÎYĉfiƐCɴ¥g[uĄMĬ½}ámM]ás¼OÊĺz°rɨÉŘöeÙqPWZ÷VGw[ĄH¤ÔcóÍöQ`ŌbI|fØjŠHÇśH¨ĶBĬbÎG¬ÂgÎxet¼q®}ĉĢiY}ìFñŞT¼XøWviakßë¯ßćqąsusŃAfê`Ĉ~nəxƻFhÍLWhŕ\\įĭñdĵ\\©]¦wW{Ʈ@ÐeÀEêÛÏ®EHyÅUouhwŰQöb¯~`rʀ¨YTyWAĂ¡ƾcĤDO|AwŋWċmƚC\\Y×ƍùʏÿĻ±Ɨ÷·ïoŝY̵ęFDƍħő§ŧzƫNéQùm·q½[qoōĿ[Ǜǝcğ\\MßǙ¡ãVËUĩë[ƽHıqȂižUB¡¯ĝş{ĳ¡̳qřɛÿĭÃŝñū·áaÅ©WŅRī}ũouXƋFëWŃGíPćYğ`ŧLĉ¬aŬ[ÀFĈyƑ©{cçcË«S­ćĹ_Û\\­EđVĳHOwÑYymo¹in}¯KďwSËvcímÏµUwßEŁđeÉuƇ]ēzĥ{ǟw{_KÏ]şSč½ˬQĄĪÒSº|Âk\\JÉĴRjUȖYĲxæ| HàrĆA´¨fEŔ~HuHîôP¨îKŒcĺqĨQĒDĖ|ŴFƄ]ÒAĄVþKƬAĂZż´Ą\\ĈEÖwň^bn«dÇE÷TÊvŮHȚfƠrĢCĢxĎFº\\ĄT½~[~nhŀtq²THbÃrxÅ^ćBK~ÜNŸÁŐyŠWĈDŬpÔÜGVHl`ËlĴAňxl~ølŢI¸lŜJfĺncƶiE}þkǝáiĹPÅav{_Ļ{eOwēNďeƿeûF[_ļq¾BøoŎGYaþ£B[ƩûY[ł_ƺ^SżJWyý{®aFc¶]£¯C÷woƌmħĩQ·¤KB{ÙQo{]sbŮ_}¦TÎcŸIĺSuŉs}]ÿMwÃm¸uªBƄw_ĲIâZ´IÆuxíĜfwäIgÔ[ÖNU@ϧ@ɟƎq´B_ìi¤ºItsAðdGpq¼U­ŻqWaø§{[»N}ħAáuwÅXghÁzÏO}cgkáCÇgÙZóÅFÿY¡ęsŋJƇgQUřcġdëaDđiqqZyƟ_qsěWßolua¢£½KOakRÔgĦakmřJă[¥`­kĝAĿiçDïigdĳŷSAÅ¸Y[ÎòG[g½IÃyNusYoaM©­GGĿã^ÇC·P§GybjdďWīC¡TóMXÏC«RţHwsãiokýDxs[pqck»ĝbŷgíKǳȇ{ď{ħUĉmħXĩM]Ņnī¯qeG}©eĩc̶ɓͤʓBơTǗ@óHŧSáSŉ[Aç_éEóNãƑYïGçğ·qơrÓW³£]ÇC±wŵIC£ĕÓ÷_ě@ăayZŉQcW_Ā¾gðV¼ITiȎ_\\ĝµ_ºKdø@uuMAroØcmuEwe[Lw¬awkk|mÝµIk{§qkqi]r£a]SĂŎB|{Pu²SakĔ¹ykJsymfÝ{w¡W_ozcjyIiôaàQÊElaw}Vcɞ{Ý{ATğ@ĹOÓkYuDĆw¡S·hĕ½CkĻYy¿sÕCÙuDq|aöeGok`{úaO÷\\S{\\Aěedu¿K{fo»jQe{eTyóMn¡OQLkBNombg¬^ČDÊN_r{¢Sa}QbiòUÞ²O®bÔAĮLdpvØYZg`bYòC¸hÄgRaêq¶OiÜO DCsØo\\¸HnÆXäC¶_voc[ÈQ¢iDÌNXkòLKt´dĴVĆ[¢v[jVaBvsS_ÄS¿mAkÜgÑg`{łtw{¹o[òHi©Oei§i}@vY©Bo[áb³lÕqFčRguoIYg¥T§ih­äATĚDľlĢGpaªGNúqłeÂTUD²e¨wLÖLciłIKneYº{FkEEfMs[gv[}o{SBugCeÚIoaWě¥E£`O]w\\i_­GQÃµBÇQ`kaYÆD[CouNrĪgP¶E¼LìQbioQ[ÀSWqakwkLiioyAËacD³ûkDkWÇYHwqkFm¢W\\u¶KNcgĊzoA«¥sCwZ]cam¸E[¨FöEh]Ām~³e@acļRrþO¦[hk[peE{c_i`ccseKEi¡c}q}}FwYiXSo¯i^O¯NIKGu`qÃO©±Ó{cVw­wDN«][cnWDog§KVookCjOiZo AFsåO¡A@gz[Zym¿SSmiPÕ¸cDS¯eIËCaÓLkS£¢sBBsē}}c aôAjU¬PgKIZWÌOXeERikHcUhzCtJm°AºbÊHmÀB°Md]æfpQ fPbæÜUÈ_^hj@rZ±vlÈ\\MzðȖcA[ºL¨rČ_¨°|hìVÎH¦SNw®ivHÀ]ŠØ®O°Z¢m|afæR^²|Llªr¦IgkJg¦H[Ã©xQh}aæO²tL¤MV®g¾WOMgµc§e§boH}wrqsiv]]aI»wF¤¦hd~Ø\\asqqvTĈ@C²ÜX¦d]ÂF~nªa¨FsG°MlÊ|L`xTqpÆYdçd®ĈÀ®jO~hb}`IdĬ°[¬vPxQRÜ¨ªp¶_jHX¬ÂdLň¶pEäJ\\J¦Zf¤ürKpÌb²NCâ_h TlRxjGljS^twXk¨Ä`B|örÌm¢JfCĈnC´`ÐOOiĨDQwGÚZÌSðwbð^URoǺ`®O|J}gqWLÐSX}ªY´¶QWu`qMm{~kìmØXFTêPQ qQcDśiN±Q¥sg}U¦¨EÞP[yfimhei]~¹wVoiäuvmKey¤Z¢[þXlE{Ô]vHYv¾ÔdÈ@Z¿~¥ dYh`{þSnXÔG``UäTäMve`õ|WĐ_ Y\\]®cŌcpO[`i]uÎ_d_WRJg¿ËÍHgodMĞ@h[ÑmeRCgmZ¤m´©n}DcoBUalcø_Eeņ_rnFè]VysÅ·dyUlo­ Íza[P{WqiYÍGqWG­`uµË^êApMPKwuQxqV¤JpdvEbÌpèBjcLnS_¥g_]wnq]wtqKY´s@|g¢^yU]ZspSrymMkaylqFq¤}WÐJU\\¡|}HqsoęqS{q@esäBHìDjgqcKmgSÖ¬YSoÜGÂX~gĖg~`tesUeUu¦FhSywĐ¦JpcégRá]JiŋHiycÛGM¡¸YgdUSqY[xiò°GRèBWRa_kÂQØ\\EJ°KNVÄQrEôZNVÐlG^~Yn¼ PxIj°IÃpmm»gFi¢eNy{[a^GZ·QY«]SI}¨D\\vQÈ\\vCxAV¬¦ªBdÎk¨R\\±sBoOBSidYMmrAqd[]¢{O½¡oS[yWj©©¯IMu§wG]qå_½WOzPZ|ÒNb^ÎblWDWAw£·GXkQ»ØOvüpkaDÃQaÕYVG×bAyk}GQg²eQen{nS­zqEaxUWm{[ÏKw¥[ijcU¢£¦bYZ{¢ÍyicCNweå¤mcXBÄ³Oiv_',
            ],
            ['@@¤_Ù[±Zèb'],
            ['@@°WȇyqÁU¯\\ZzƀĐĒTŸsk]ď[é\\ě¡QOq¼@ÒÎ^Ò['],
            ['@@ĢMàXŲMPUñkûF»^ċBM`'],
            ['@@pÆ äJpaµYnaô@ÊĹLŅC'],
            ['@@MrĒ|eÑw½O'],
            ['@@āX¼¢¢U[£'],
            ['@@ĔAĨeĉQ¡hŭaŏǮ_'],
            ['@@ăx|éƹFÏł\\ƀQcüfÞCVĈoÝ{ÜOĶXX_ŉIO¢şV'],
            ['@@ƐcÅ_ũ\\ h'],
            ['@@]oaÔšAÎ¬`ÅCkrĬTE{'],
            ['@@Ïżd¼]æ°ĬQĞL¤UcŅQk_ÆaģmīJ÷Z«]'],
            ['@@ąGşTĹC×[¿XNjŚLÐhÈ@ĄfƖUùi'],
            ['@@ŻFĚ\\úÌlŶJQkīičC'],
            ['@@ųhzbÞ@Þ¨I'],
            ['@@ņhr]ÿc·Z'],
            ['@@ĝW^üZÀ_'],
            ['@@¥VfŀAüVŒ]wǥYù`'],
            ['@@Â^ŀVjeŃcĢqÙwćQÅpCf¢|'],
            ['@@ČDĀeõ[ƟZÊd'],
            ['@@ƸPĞSĜw½Mtmĕ«ÑgċUVǥhEæ°Üf'],
            ['@@Ó_ËVstŹJ^zĞźyƐVPoåq¤[ąY'],
            ['@@¿NÚjÂiÛM'],
            ['@@gŜV_ċ}½B'],
            ['@@ÁX|jÎD'],
            ['@@ïJ}^ŝ]äɊ¢â@ɊzŀlɆÀ¼JĎ­ÕĝYkÇEyƏV}aýSǇgj´VXjĬEl@rƅiƩ['],
            ['@@Ûe`ì[Ek'],
            ['@@ăW§VpĮFQs'],
            ['@@NbťBýTƮ^¸GŌb¸KǓ£'],
            ['@@ajóP}rľjņFĖWĠƻs`ĩO'],
            ['@@ÎRƪđu¹BÓhW'],
            ['@@ēWeŏLóIðöd²ÂH¦qAq'],
          ],
          encodeOffsets: [
            [[72451, 57735]],
            [[72400, 57297]],
            [[72422, 57358]],
            [[82748, 74140]],
            [[107138, 74402]],
            [[107428, 74482]],
            [[108305, 74627]],
            [[80640, 74657]],
            [[82302, 75266]],
            [[109776, 75368]],
            [[109441, 75366]],
            [[113991, 75626]],
            [[88918, 75728]],
            [[86401, 75754]],
            [[88799, 75846]],
            [[84936, 75853]],
            [[84681, 75900]],
            [[87608, 75945]],
            [[88771, 75745]],
            [[88980, 75816]],
            [[81461, 76301]],
            [[88172, 76379]],
            [[87474, 76193]],
            [[86925, 76261]],
            [[87721, 76318]],
            [[87841, 76241]],
            [[87721, 76536]],
            [[90268, 76963]],
            [[84061, 76936]],
            [[88706, 76564]],
            [[87841, 76608]],
            [[88757, 76626]],
            [[83709, 77638]],
            [[95040, 77649]],
            [[116500, 77766]],
            [[94922, 77810]],
            [[84104, 77675]],
            [[84672, 77748]],
            [[97467, 77980]],
            [[97279, 78110]],
            [[98862, 77987]],
            [[99360, 77881]],
            [[102179, 77889]],
            [[97920, 78023]],
            [[109440, 79962]],
            [[95915, 80083]],
            [[108853, 80127]],
            [[103680, 81029]],
            [[105856, 81109]],
            [[102368, 81338]],
            [[95040, 81341]],
            [[77936, 81574]],
            [[81211, 82823]],
            [[93217, 83165]],
            [[92782, 81454]],
            [[97921, 82033]],
            [[102494, 81618]],
            [[93389, 81652]],
            [[95040, 81600]],
            [[96481, 81926]],
            [[96481, 81953]],
            [[95040, 82056]],
            [[125043, 54714]],
            [[98480, 78181]],
            [[99361, 78072]],
            [[98737, 78175]],
            [[115918, 78184]],
            [[97626, 78336]],
            [[115421, 78214]],
            [[96480, 78406]],
            [[115200, 78268]],
            [[96638, 78477]],
            [[99794, 78506]],
            [[98270, 78433]],
            [[97610, 78450]],
            [[97921, 78462]],
            [[100243, 78593]],
            [[99659, 78681]],
            [[98162, 78702]],
            [[98318, 78724]],
            [[90876, 78961]],
            [[92160, 78975]],
            [[91510, 79150]],
            [[110207, 79102]],
            [[108946, 79150]],
            [[108390, 79093]],
            [[108596, 79139]],
            [[97921, 78821]],
            [[98367, 78524]],
            [[98117, 78542]],
            [[99793, 78563]],
            [[84250, 79321]],
            [[94055, 79514]],
            [[109440, 79273]],
          ],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'South federal district' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@YRJt{RR~Ýfa\\B§|[d¹l½TgI\\qMœo]@XCčj[OóNó@SgßRVfŉłHHȩþeTǑàȭæ_d¥Q§LeTûh\\kxqKVaQLïNT­¥´S_Nc¤M|elh£P]Ó\\B¯j³@ÿPyOµT@ġ¥¶«jB­bƍx{e@wU`gŁóÃ@īçȩDÔTĀÙSë_eƕËUAƁPmKýVĳFÓEÝNÏXß@@țABÓòB^o{sp]`mAđ@CíĩB@dh}B_gī@CƩÞ@AÏ¶qVby[unKbUo^ǒAtR@dj\\f²@Cō_jeJe§ǔCCãY@@m]UoTsKPkYÿcb]f«Pj^ď¤RZ¤R_CmyKYÅEJ{EKUĊ}¬Å_i{Û½­K£_D]g­FI¡@cckFtOc[Kdj@jd wTK½Ae|Éoof{@ÝzHiKEO{L][ssDiiY_]C_£j]\\}­Wym{K_`¡jca±Ya©~¯aw»LwrPqIġd`¡U±@wSuF[YLoug}CkyqM±XxÐµýe`U~mpÕ|qå¾r·ÆwZ|ċªgn­ T@lgvfcA«hqBm\\yhBÙhÅxădÅRE·T³JiRenvJqxuEHmµd©Y`t^clwZ¯^@^Y[c±[ÿjoGÓTÃf×mlGh¨Y~}vljMfÃÑ|÷|VÙr»\\¯JÏQUPõr}Ê¨NV°MfðVjÐVZRKµJōkwª|I\\©pynpxÔRÌeq¬qèsþiĤOÄH®\\tAÜ~¢ZbpºQjAÒJ´Z~lĚ|~Bh`Ì Ō¶nd Z¶RZao@allZRv~vMn~RÐ¦Ò~ydG|oÈw¢Z¾[NXOWfpRËdÕ[³¢­ÏĥV@»~Ââs¸ºyø]ĞB¬VÊČZtdUjtaĆS²WnBjJHxm~ÍtIsR³Of¼zº¢ojAÖbÌAŚjnnW¶nvÜ^[ÌR®_®B\\Nm|Rht`rrnÒtčLIiTG__E{Rs±@oqFÏM{UG½_§Hcw¯^@|rfJlnh`SúVGNb|MŇQOÃse]iKWõDsU«OLh@ºrzBAdBCr\\rīABxrfVn|@`h@è[BGÌvR@nBAĚ@@xƈBZr@D|¸@dazFF¤ZH@à@Ehd~VØMŊ@@cvS@X²@JZĠ@JrÈ~V²@İQdhNp@A¤|ÂYleP]xĚD¥tZP~~FxBJ¢¾Kd~y Cb­suBo`DHnÖR|\\}pOgxrDzhNYª[X­jU¿HmVArxbp¤[jjfd`BvxvÚaÆuxCĘÞm}ToYURmfÕKr{LHbgCupB|¦ÖShÚH¶O@xº´ Nº¬ÒDhfjEfZx\\rcrhZElŊ¢}xGjtvªYÆCĆòQ NIvll|êO¸DdŀAêèP`VK¶ÞĢÌĖRRlvZA³f¦ÀKer`ĖĶs¶ÛàÊÆªVmÍEďĘÑęvƊÂjxSJMnTtÌTÔrúf|BX^fR pÐ¢EP[MÂmòWFæCņpZ_Ĳ@P¬Æ¼|UĖPvWÌƔËÊgä©¼£]rNzXKân¤VüO|VC¶H`PªGcV¦ªW¨TAñ@NE~N²[~I®db°EeCr\\¤SnRTnIbu²±lGV]xzjĈu¢EjXCrX|OCU^`zCXveQLÖmiIcgAmbc]Wnj_jPgrY©wM§gÃO£ǊJdprOÀCNefJB~¬HxW¨ElNwîPr||hĈA¨MĂ»¢CCk¶A@uUDÙKKǾDEÌBBeBàUctVdÜgAÜ`lzuGæl^_àAA_gB}´B@­AGłA@jƖ@AáACµPƆCq{ODwQiRgsßº·ƝƅȋÁyFuUķWĉyßeė{ķ´iÜè§°ÇmÛ³½ãč}Y@Ɓʃŉȟź£HÎŤuȠ·g³l­¯ĴkUyPSuċ¦ÏæÕ¹mÔÑǆáxèHØȦáǶEĆGÊXêgČ«ĨśłšÌBǆˇǢǷèřÛ£ƙSSqbmaR©AFm×e|c¬UOolWy¨KJKNîmHmzfQJ[Gefc¼WfJMz[ÒÙªk¼G±Ír_[´ÙwBWjsUMhÃz©¶\\WUBáR±ª@FµuWDKËyUO[doW]fXVfoHµÅpoM³aw£[Ád{Ua\\B ³HXSeqTOgtysvVj]^eM]W¡o¦ªuMOwoaU{ujSuOukQePsQ}ZUZIMqk£~ZzmjXdZÔ_je@U¨RÀMSLo[WDfU¥AYkWpFqxqªOªNhKtXnhk`AycJ_@bk\\«KÉNYwWy\\W´weQTzABdR[x]K¼Pc{\\QnuniLCdas·Tiá¡[g{A\\kzcLsShJoJË©Í\\yCC§geµ}M«Ac£JkfBbGQPqïuAkc',
          ],
          encodeOffsets: [[48021, 45888]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Ural Federal District' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@[^¸NHo£D'],
            ['@@«G[ČDe'],
            ['@@ç]µbFbJŀQ]'],
            ['@@XM^ĊfkŜexsKFg½IÍz½Ny`'],
            ['@@èy¹Cm~'],
            ['@@NÈUT[ąKap'],
            ['@@Ùp`^º'],
            ['@@q`ÆH¶jÌGâ\\ŜeǾÕgŋiťNwC]I[]ťz­dáHip'],
            ['@@±HoÒĖsJ}Q'],
            ['@@¼ujqęEéhŽ¨đZyRtÌA¬sÖYÞIÂgv@'],
            ['@@Ã @jl¦ÎBMf£ŊG¤SAkºQn[nEHàgX a£]į^ĉ±[ÕXg'],
            ['@@WHg@¸uOyiıOåBµjïH÷pnVÎERØcÞY'],
            ['@@Rr¾LN}Ý@'],
            ['@@ÊFÞK¬{İDÂ[¨@Ĩ©HoßEmQĝCfåRÅ|Ah³I\\ħj¡^RņJ'],
            ['@@yXL´QİDºÄa¦¯[ËKf¥LIp]NÁV³l'],
            ['@@ĵfnXúEĠHPS®@GkºiÓQƽA'],
            ['@@íTtÕAË`àndC²TAcªSi'],
            ['@@¤n ]ăO'],
            ['@@µÀRê[i×j'],
            ['@@ĆeĖýEçjY]õ|ZK'],
            ['@@aeÏ`jVÈO'],
            ['@@¦BèfºiÃiŏALn'],
            ['@@¸DÖj°VØOĈXÞ}@mIÁYqFÕkąIÉ|­PĵAăM«SaßH~Dd¤@j^ĒC'],
            ['@@ƍZÅE_½dŧJµIeZîiøUàPZZƶ]²'],
            ['@@ÓDĄI`Ğ^¸a{qB[ğy¡J'],
            ['@@¯uTTr^ÐMe'],
            ['@@ĳXĉjzĀVͨwìsLe±IɕJ'],
            ['@@Úc«eûQVÞrH'],
            [
              '@@¸^ČÎNK^ÇHAdĐÈAĆfàĂ^ÀvǮhŀFǴuH£YxqĭLKmôVĬKĤLR\\ÔbĎX¾{à©¨½ɁBÕI£oĭsċOūNčIƇ}éSŕýMÏ\\ğC_ó`[i­Wgìk¿KħRi¢Ø',
            ],
            ['@@Aiƕ\\ũOēFąřsļ¬ŀzĲPɬD'],
            ['@@ÄJĞYˠ£»CǱxťGĵL|'],
            ['@@}ðbcßo[i'],
            ['@@ėMbQxvVĞcn}'],
            ['@@¯`ƖÒRâKU]ǅq½_'],
            [
              '@@F~¢ft·`XVI`°Vo¢mjcPTEªdpEzXlcf¢^zPVhnLjGn×BdÅF|zLh{lP¥ ®PhhT¦A lbatÏp©@©¥Bgzvl¤Bf F^Jj~bw`cJ j»jÆv´lK~dVpIÈn`HvK´^¦gnBp`ĂlÌ\\´Êmx\\h»RqMÃZA`µ\\b£TW|vävPv}TMlrkz^PlġKNxF ®C\\¢zÐGhziXÁRnrsbhjDz~ĔÖ®_pPH|°XIÆ¶mÆRpb Etð@Èa¾L~{[}°axwÞibkĴJr\\`¬HĊ]Phä`^rBr´FàQr^Dt@|IÃEUÂÎx¸|VjÀ Grdª\\Z¢jDh¬ÔPÐFÈpĄLtDj¬FÀ\\^läN°CäTĎAjÃt æpÓÈ²j~MdtO^\\E^¼hfx~TŠ|bA¨d¢Âò¬üQbrZƨj^Z|~DÎvrzÂDŘbðKR^°PZ´pÄOð^pXBĘH²VKhƚHÀ|GƘ¢NxytM{ nÞJvdRnRĸbfò`jSúJ²IP~âR£zFfȌròHêðCh}vYÝißMÏ]~¤§¼t¸A²Y`fÌDÖuD¸Jv`qhĭzõz¬lLdo~Ê\\Rl³r±Kčx¯IđÁPſHģm×Æ|ìwVs¤htlEz¤ZRpºÒF~h¸L_tÈtVpehùN@dÁz½V_J]Ã[pûtÿZŃI½»@©hđ\\ÇI^ađVćBfzq^Öns|åbj¦ÚVpÄbRân¼Ơ|Dp¦xgĈȌȘAa®uCc¬Mx_àTŸFŶÀPXw®wòSŬƪsƖ_ǮÕGl»¤C¥þ}ºB°YzgŔ¥ÊeÂwtc¤SÒ@ɒ­eÌ½ßgr]ÞK¢pìjĤDl¨MÒÄƜĨº¢ÒÈx´²ÔpjÊ^oùV©^¦Z¦KĂh@`G`DB@HODLKSOãGÓS­oõ@ñZś~·p§~¯¾{lƛĈÇ®GtR|hüQ¢}p½UkoÇOÙnßBnÏfQXēLÛxĳUśh«@õB£oª]HaŹyBk´{něbevcŔD~Ř¬êºvf°YǞĨX]dj¦]d½jc¤ƍÜúP¬âOpÀjĩâ¢I¨°fit¼rDZµf¹«RĳGuŹsǑSH¢ñR\\ÖrĪÀt~®bªƟÈÖÊ²ƚrƶŖü|ôƖƺªJsðRúäTnpĞ®°ĸĄÞêĬƼf¤®Ē²Űvâøp¢\\ºƒÈÚ ¸ÚàhTȀRƖKbw³WŝQ{ĤGƬ^´OTŴDƈVƲMĦDȨMľFSkiÊZZÒ¤JĬQƨLĪX˶¹uő@p]Ć@ÈWröKШÕüaydw®QiĻBČ©YXŁN³Që»[p}Ýk·¯ī×·ģqk}Vĵţ{ÓħeƽµuTyÀ¥Ć°ÓƪÑìwƂyĚyĐÑ¥@±À¯ÖO¦Vs©E¹]Ë½KveRUïóWÙo­}ë³oŀ§lQ¥©{^ö×u³FÅÛgg´£\\uÐ¿B¥·­_ÎÛCùw}[µPÁÊĻØËĤ¹ĜǊ±Ô_¨wâƚ­Ħ¥Æ[će¡Q©sąÛÙux¥¿£IlĤßpsF¿Qoa¥C«°ÏyLǉweFƉ}ŕFgxkAåa`vgkeOyiƅB@hőo½_AôeÈP±m©õ`µCáa_weE¡k¥¿a¥©JyvăBoBï°RëyÄQK[£mG¥m@eyo¹cċ@ėPÁõiŋEëHkIJ_C¡ELïqŋDxÙDjµP_ykƯGčxÙ\\ITÕC£jÑVUtÍBùg§g³I·X|åÌK@s@wa¶iìZîFKŮLx[P]ÕÄǂÑÎkĠCƼcČix[ǊiâiÜGŘ{ÀJǢHǞ\\ŠHÂGļHĀEȔg¶[ØAðgWƼL¢YxVÚDŨ¢N¦pe¦ErlÅfÄ\\öÔȒxĴHPĄJv|rƒĖrǴÔÊàÚVîlôEhUZzO¤}lZ¢ÖtĠĔŌ´ɎúŠ°¸z¼¦LÂZ^ĖuÎ¿aõĈé²ÿ¥~ëL^ĂÖ°®DsrCĆ äĴzȜ¶LƮ|Ŗ|ƞnƘDŜzƘXƊvĤZʀBĢ[Vya¸Ñ³myvwĀĒufUňÎ¥Ĳ]xSkÃX°±U[}ÙYCise²OĀAvW§¥Eï~¹«NzIyÃµ]^EsJuºsŲÌsƶ}]ªEȎƖqƶruèKĔRÆXŨêZ_|®Z¾[¦BÆg´PJkÄRhfŋlsjāVµ@×V_Su¿iťŘCPGÿZÍG±N{[juE}~§HËefeÛCmhÕj½E§coZ¸`tďPGugE}gbÅCñvqªX´ºKjZfßDeDpfŒºĸhŰBż`XGfġ¢fxí`|A|§dâjHvh¯LUbLÕQp¢`@ÂiJê­vŋdĻEáz­TáBǉpěUõÁhÑ_ƫTpñbÇrǡ¤¥QÁHëMÿHŕbċKÕwEÁekgķmgs{SŃQŋ_óPûÿZƏLűQġĭmīRýòOb~¦ĎĸPj_¤ÌË´«xÑrÉÂU~¦zÚt~jdÂ¬\\zsr\\´j½`ŖøƒÞĖ´ìz¶ÜD¨wÖ¹²ċ¨Ǚú¦ StÕßrÍ®Ê½¬©ƯÚċzȇ llpĦ²ĄƞÔà°M¨«ºĞ˜ÄǤƀŦpŜxƐÖvŌ¾º¢ÌTĔOÄĀwæáĂƃĚj^ŒäJĮâQĲŸ¥Kg©[Ñ`uWĬÍĴ¾ŏWks|­qCÌls¼Gsš»µõÛ·~qıDYreK·R}º§ż¥iaq§JYä@kãiU±³VÃGËmbÄ¿ĖƜeŔľgȀaâHŠ_°FȨQÄNĒSƘKgĄ`ĂI UĐEÆLĔ@˪ÜutErgÈM²aİH¬gĶK âDlÔHÔOǈNĜ@^VnÔVnbqrÑckqËCėqk¢]sıCÇzÃUÑ±SRBÜ\\Wb»LtjihHûiĤcků_VaªzpÜjđZoWād¥Ame»OW®jknóHPďB¿}J]Ŀb»máVŅzěctû\\ŃLÿhē`ïf¥ērƧ¡zDvzr¡Ïr}xeN¡ÈáhƴÐĖ|ȪŒ\\ƎP¾S]eÞqĒiežÎwÐÐeĶaňEƲ~DŔ²nxh©²ě¸»dīPƥSƋ{wSĝTxú¦QhŎSêd¨¼fĂXN\\îJ²\\ôK T¶Kne OêA®oĀKW{¬U{ÛŨO\\sĊAWņk¤}¦QÄVx[ǐqþJļCzXǪEuŢcLĜ§¦P¶]u_]î]½oĽ@}gùQSgÄUUwsºHy_čm{{ūe­Pǯ\\¥UŏZÅmFg´Qo£§čão»sǶUӀƯ̸Ǻ²ǭØoIumNoŎw­wHÛoÂOQ]sĘJYc±DEuūZ\\SjµlǟNēóVBóWočUáskMhçKciÑm_å¥akKýVzbb¯EoqegmJmű^iwUmb]¥­EUoéyçDĚ¬Eļc}qâuÇ]me²g HĂU¤kþJi¾WoÆkèájiiĸo¾ĞĔ\\ÆYŴZeCmØRƈgĠNºYĪhäLļIÞzĆdo¢UŶjú¢Å`W Œiì­²iQ{±iû¥O]°ÆKìLö[¢cĚIâdÔAÔ{]uPùC¯k|uê]Æ¬õJþeĨ{¸£\\¡ąSáeouIÐÛpÇwÑµµÑUmGjÕSŋGa³»ɭTõbĩ[a¯ds[e¦aIkø§Q[Ď¸Kä]¥¤uIŪËĘFsÇ¥\\[éyUs¤¥Jk¦HPißSsSDu½BEwԈǹʜķTk_Ö]øďAa[N³kgùmÓKOcKħfrmĲgÐ kňĉ²}L[gƃR@µt[b¥¸aî¢CkkrsYiiø«ǘxǢFª_¾moOðE\\i_Vgěm@UÞOæwÖ@_IeÚfkOwgPe¶`qÓ]ßOiāćX¶hByr]OmaYSwÀW°CªVòIĞVÈZĀRŌG¤aL]§FZ¢g¼TK~o@àn¾TOĺ~úļUîcĈ[ĕðåDsēÝ¼´sT¹ÜčM¡meJu¥`kf¿ÅIűĻ§Ñe©Gq[@įk^k§¢quQ}NkÛJ[uu]Fl[¾sKoĠU¬idÒ{GU¢ejqQDmÂIÚd¦DäOd«Wo¥gbemdY{zyLqÂmq_¢wegćjQ¥]ĥIÅ[eÕuyy¿K©uó£M¿Cgkgŗ¹¿Ys[Ŀ÷åë§iN}ÉAÇQkH}´mzo¶_ĘgàbÖiĖaÞ²S¢sÂ\\Æ@ðÍȂŊlĴ£`¿WoƕKƁñº§GΕħɻáɟÝýa͇œˁuЇǘˏQ]ϛƻʑĵĉuOǹëʍľʛCŁ̕²]¶ËhɻzÅȟiǡÙǩCEɧVsL[ėIģ§G^\\etdvwZ\\kzLyb³B­Oo[ŁLćCg]Vkz­QƁ«Źrś\\ęKı±åƹĹBŏU«H÷v­A³bïFifSmV{oa±WéÉĖ[cof{Po[ÇCWSş}yX]]]×zGqQkSCÛ¶£]Ã`UɻÓuaßpeUcƋwñBȧ]ƣŗUYÿhµĵǛËôǑwÅ±ī­͛ǏÌYǽĥ@kYAyěkŧÃogSOŇȣėΫFʿJǽLŏLƱïãË±IÅHΛPƅN¿]d½Xχ§@qSÁ@YZ©EÛm§DIlxhydǸ²rTwbB£ZÏpOrRSTh»CÿŁ÷Ŀȩ˙­Ycr]LH©·ê[FäaşzX~I}G«[qQeƇ£FðÀH¤]PnSKeFvS¢FVajdxtËpÂxW^npDĖWtzÐwIWµKS±~{ÐOiÌõȂġô©ĭSDc[ImƟRTma×NfWėP±OMĎi{čÓyuµONÿSÅw²Olt¶N_¦O_mbjWąEÁ³cvALs²dLpGė¹¹ȓPĉIBSe¬S¼ed^ÚJâZÒiãQ§s©VíQUUwwSèuÆBaFqqÍPÏI}_ąÏb_½WsY§SėkÇĻ|~ģFíðÕxUZÓbuA]Ĉ[[ÑAEciZ{tcğDW]éL\\Nr¹RysUđWªÃt½`½A@h§C_³Feº@jNiCwkM÷rb¿bmJys½oDonKUw£ORĩYïTIsJfc¿X@k@RmwIäÅaÙ[@siǝeĹùYíÙ_±Iákd±D¿QÅfUO½WĩI¯¯PőSÑU½uáJɩ͏ßZdâŗi]§KĩéGgZLyRsG^ËG©QmsFscVkoj{b½rYyRÍYcHñ¤OTơ±Á]VGoZDÝkZ}}S»T¥GĽoñD±u»^DwaeU«B{pÛÙSUO¹S_ėkaP¡a³S@gZƽcb_yqA¡cĻJiPÝB«KycËDMÅcysX^Scooid{G§Ü¾Vf×^}@¥]ğB¯Iûj]}FõĥD×X ×T`g|·Y­uCm@C÷l@¬čDïUwoY~Qo`ÕUrT|åDWc¹AgC{Dj]àT©´USµm¯©³@_ËCEnċKJǄY~BLuös´FM¨BƌSV­zYÛua¿i»XQv»dE{q[«»snā¢yĮD¸U´ÐoĔPPx`¸wdmŎĠ@Ā}zaßčÍAġ°_WŏLy}]Ù¸F¯lãéJ±U¡q]Qa¿XEjw¢ms¡aYeõ§¡čYkFFď|Ubs²JvTCĳŞ]TëÜÛ³kkÑe¥iCMc±«ǥBĉ¯ÑáÁsǑFuÉL¶ĦĄ|vLfr~`]nFİïXXGíF·`÷@W³[eģB}×¬Õ^µA_R©SLoUFÓ[±§iĝÐ±^LrenZ`¡`¡N@Gi·LBwFV¤¶BA[A@f{@@ tHxqþapC R¤JkâŪEQx¿PEŔGjSFÚr@EǼT®ýBAvjÊ~LkI|dHlcà|z\\¤nV¤_¨h¶]â Hl¢ärZbt¬]jTłFÚuĜcCT^¼\\fÎët°T`H°Í\\Gl`Ģ¨¾Ü@h¦ÆcdR~ÂïLĉnrB±nqEaÃsaF_ÝG_»eýFmygyLíLílÁ¡YÍIaD_o·ĉ_{Dõ¦¿|]`ÑOýóW§ęÁyAér×ÆÕ`K\\h_dıc¦cXÑsalXb½r·HW^ŝKlbÐÂ@TXk\\Q¤«¨t®P^I~qj¨f}x\\hâM^j^\\nÂT¦BnTĤäFºKĒHÔU^U¬Gjc¢GQsÛTWF{FyOsw~w_ĜZ~F¤pmjVNl@HvdpGvèkxyBs´}Tcc}¬avhEÀI]ňXHzÚdfsP}NFfývGodNf`EJ}UÀZd¤ãhb¢`TĘWĐKBnăATÄ@®UB­F¤~zb@rt|@vĊGähf^®IEaG¬¾NRz²ZX­\\WąBG¢ÕDOq¡U¹}uDBtîreyDTpmPª¯|ŋAC~¼@~c^CtxZ\\lAv{BL~{ĀT¢Q bpH¥oï`±H¯^Gß¿¹Wij¡I@`ÝFLFnÑD]dD]zÑJ££@FHa£@oZ£Ri^QqNo½MÃFIgN¹OwH©cRŉH£Æ`_~vtº½DGh MvbºdJ~ÞU£XRXªf¹T@@b{^Í¦L^¡¢vĬxĚcL`ĈT]p\\Yj|ZCL°vbJIn@`sGj¨§\\lXFj^ýPMVM`PaVXÇ\\]vÒƘHvÐPD@rm~\\sb`V]zÆlàDIƞEf­IÜe¸ì¶ŸìĊŕ\\bO_^ÚG|bUjdtQthYØtE^xEVI\\G`ǴixäQXQ^nvTĈTÌ¤µĜhÞa¡CWõtÙEO¶AqÎCÀöJħ ĔŬ÷rĥtƛLĝz³~s°·®_zÅjąRĮȺļcüƎĚ[öŲqU¢]nÈò|âtfHfnZèÂ´àrhFx|bbS°rebrp¶[bPC¤PI{Pd]ÚðoTG¼T¸Gr¬´Jfda|yhjXxh@ò`Qx',
            ],
            ['@@³MårVúcJU'],
            ['@@¿^FhÎQSs'],
            ['@@ŭ®ÜBüW®mRkéB'],
            ['@@KIáYAznNZKv@PI'],
            ['@@őRnbĴaOQ'],
            ['@@PoeĿ\\fpz¶oĤSU'],
            ['@@Ī\\ «Y}ÅNeñUƅr^|Ĭ¸T'],
            ['@@Ê|GÃÁ'],
            ['@@íIDÑRÔÂèy'],
            ['@@[®y_Ń\\ÈæÎIFu'],
            ['@@DeOw¡TvĢpºK'],
            ['@@¥sCcŧN±WƑJěOËNƑKƓWßÔªĪƐ ||ð RþĘpŬG̈}ø]İt¡ģ[}ùuęImÑOik'],
            ['@@§¨fjâ@Ny­'],
            ['@@~V®v¨Sf{£{¹WeZ'],
            ['@@ƂDĤSŶmÕL­Ãd{k­đ~Ǖē|Ņ®°ÚĞl'],
          ],
          encodeOffsets: [
            [[74019, 67897]],
            [[71804, 68114]],
            [[72465, 68105]],
            [[71396, 68130]],
            [[71701, 68177]],
            [[72720, 68186]],
            [[71786, 68158]],
            [[72001, 68183]],
            [[71726, 68219]],
            [[72720, 68247]],
            [[71280, 68220]],
            [[72720, 68308]],
            [[70979, 68279]],
            [[72720, 68361]],
            [[71281, 68308]],
            [[72001, 68276]],
            [[73323, 68281]],
            [[73059, 68473]],
            [[70878, 68359]],
            [[71546, 68369]],
            [[72184, 68352]],
            [[70991, 68381]],
            [[72720, 68400]],
            [[71281, 68403]],
            [[70560, 68395]],
            [[70560, 68436]],
            [[78208, 74881]],
            [[72893, 75119]],
            [[71670, 74881]],
            [[77864, 75287]],
            [[77916, 75278]],
            [[71722, 75093]],
            [[73072, 75083]],
            [[71861, 75144]],
            [[60774, 63143]],
            [[80640, 69153]],
            [[80844, 69180]],
            [[68941, 70414]],
            [[70824, 70597]],
            [[67754, 70724]],
            [[68791, 71083]],
            [[68832, 71239]],
            [[68103, 72561]],
            [[68302, 72674]],
            [[68402, 72768]],
            [[80356, 74111]],
            [[79737, 74069]],
            [[74626, 74352]],
            [[72692, 74563]],
            [[76121, 74861]],
          ],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Volga Federal District' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@jÄ^öȗZ¼ǚrÄxĆĩEmPsŉ[åTyZ­gS`ç^QV¯L÷Atl©F¢ÅnPæDd°cGdìFń{¬Âkx¤íN~ähj®hB|a|ânvbºFh@~`h£\\}l´ĆĶ ^WVɪsŞfUTaBQªAa¼RbaWT³B«®G̲CèſºŉÃrYq¸[PgŪUHVĖ¡UýCKƽái¿TDÃ`KZȱVÑƖYƾYȌg½Ư´AlfPÆŖSTMc£ž[ÔEŋo_zYWcǞcn¤U¨ŴFĪ×N¾ƜĪFb¤GdTĉJ²ɼj¸ĦÒGɖU¦HnBtXŖĞŎdŊæez±¤mìv¶¢´Ď¶þĒĬüüzɂå°ňJnÞȗvzÞ͋¾Ŭ¸žЀ©ÐŬȆoź]ÄŸ̜Ƽi·ŵʸŴ_¾ŶҎ·Ǌo̸ÖŲŲcÜƂϦ­æŶϲ¯¨Č[TV²ĢǀoÖ@`ά£XvٲCŌ@ȠCԦE@pÚ\\ňJØ¼tüE²z®PRw_@ñgWwizgb{ec³I«Hq·SH»pSï^ÙOc|JOD£O\\aµqofaqT¯a{aEwgßqÁ³çYemGes{áñÇ^mV¡űrõę\\ûƍĻdĭȹĆQÆi`y¸­t¯´}ĞyƜKsĦøqēūĨõID¿rÍBPµÚFösX¢DbgÝ¶ěË£ćSSmuR]WãRwǳj_H[JUwF]sF×ZsgsRcViaH{Ù`]PaŖ[ĉŷëëµ·ÛfJe®ƝFJßCÅk^y_Uta}[qn@COuÏGÑƗ^uÈ[UWbON_UNþOi]EkW¨[i§H_t@mJIuaK¯DYi{Z[^oćSK_ędīw¡u¢K]Î¥|]@a@ºS©eQW¤WV}ÝcIa¹NuHg¾C¹su`}_Å¤ŊGQªdxGºPMhJÄE¾NprMRj]¤QpY¤@bGE¤@¤ÒI^yC^cÒCEmKÞE@_¢JjiºXàÀH°]²Gð_¦p GaoR¡ÿS|K}|ABu[kwYDsd]}»@D}ŌB°{©nOSozCfíqAsvCº~¢VPrÖCH¡ĆAX®[W±YQy½M«HFb­Je]ãgĉH@u{sq@a}y£EA®­VÃ@SĄBAmďLėX_Sa¡ägc£¿YVI~F_MepcHþuEe~MtOceÙGyŇW^¿JFug«bd~Sd³~AtwzçluoHucG@MkUni£oEY}ě`}xtxPzE|EXSÜRt¡Hdi«H]VÓVđG¹LãEģmS¥AÁS[m]]iáN[g~w§eriJ}]­Os¬§R£l[W@SÏÁaLkŞX]¸G¾qWabkÒtdWd¥Ĳ`c[gLÖ_ØÅêqzBĚÂ¨ôXþÒP^_À{ö¥|CĊ`p¸`CbÎJZ¢ÂîkîKzKzhEnþ¼fH`ÞE`bÄtbrF²mAqĊmðKÁQ}dc¥Å@gÛ½ġ§_HkÎ[G¯S_¯ìsÍ[e»S]DědÙvŁEiS«^asqY¡ãGkáµ^§g£`mU£y[{dßkcGJ{lKÉ}uiBþAS­Fǻq@EÙTHiFœÀORwũFlá£IQDborýwsG@|@@eB\\BµAU£xEA¸KHj @¢M¢_Y_fmKq²]ĞÏ¨j\\²EÔpVKªT`Q¶BÖ]Ø«~ĤAf´\\@Xø_¸îEHWðWEį^m}_eqKuă{µĥÊKvOy`slGDms]eìBdlƆ»Ğö@@o©_Û{ÊĔQXiͰCu¡B]\\ERgÐI]rR¨EnN®iĆCg´S¶EéŠËĹc±ǛuÝŹɫ¿̱ñġTśKȟTţĞ{vķc©@«rÿõ¡ÁLƋUēN¹^JĚUHk~uHQĵ`ggRI`{MµVſXyxBxtįMNLQ©KW[ÒvNSr^{NnsFÉśQS}bAhibiUąq\\cYmEFcÕDo`V~[NµwßKgv­a\\ct@aéBñg¥AŃRggFµfùSaP_M i_@WõcÓMr¯w{\\×j§_GªýMwZE¹ Zw½kXûëAbe}ÅB·\\µnKÓQXé¹­síwWiLG_cgQSyÙTnM`£JyVG{nąViuȥŤùnÖºDc±F½\\VbOj­f·P©]eTēMieo]½P¸Qm]µwWzI¿w@wXgå¹kl¥Ý«®tĲb_LÇGWzëNedOc^NµHVJpoZiÆoR£h]vřQ«p­Qp§HC|^yxvwtLixāhIC|n±AOTÏQIl±QjWóJ©aZÇQán^y¥O¥VNoPB~·úbGc®K`māgMX­EKëyT»A@`ĕ@SYo·¡]iíé_P_éa]z`zaé_Rcœ}§VÿDAMMŞ@@àÛ@AyaÙRSbSPÙ@mÔēhA³ÉAÁUõ@FVªjCnăBWdAB±£A@áfk[qDCĿAmÅm¥Ĺ§ǳ}Qă¿Ó¡ǳFÓUxq@Fµ¿Kgl^qyƁuo÷]i]ąóSLŝ±X¡ERsnµv{e¦Y^yOÖɩ¾«`ÓdFÊS½pWƃąñqƁ£§YQWypZ{AhR`¤^ElsdO°y¢X[ruLmxW|­tTN`Ç\\_Z]LbL^{XyzÏEwWƅDOD¶BBâƕ@@iŁBHB@®³AA~hB`ßB`]åkHyv_kBÛÛhcUdsßVAAfËAFǽCLLCÚvV@ µBDl¡Dā¼§NćB{g{OqxíkM§FwX«GA}eIMf¿DqPcoǉIP¤ÄhN¨xZªqhiOi`m^XadBndhJjÕnKRfWuyD]_VD{PqWDiW¡Fćvyi^wUkH±²avJSmmQ£Tq[Df¯FcaJ­}±\\}MFM@Bò§S©X¥Ud©H_OµGD{UûP£UámWLyqM^»¤ãªÉhƓÌË¼pLVh~]l`¸D×èAXĳÅNgsfC|_fªņÒdb^~G°btW~¨nEìTfEpÔnvAN¢v~fmrÎURN~b]vcRs ìf·tRz®VĞÊzA¯æÙðY@ąÊenfFhŭ´±~Çª]bãK¢¸XÁ¬éQÈU×|[`GMt^jXItsN_tyG{`CdUN«a|¬cBLìSfR@Otj Faª®Gt^¨@ìjNtl^J@¬w^«RX}rÂHô`æÖ\\i}X¸xY¸SF\\élÑqF±E}lW¡_TyS©Lµ~\\^gxTp_´Yv¨Df~Ò^V|¢I®VQv«@À_hFqÌv}rN`}PdpzZ±[eBhm[©zFh}RXdm`h¾aD¶¨r¡ºpBfbiDgmHYyiĩj©A¿dQjZlkdlBË{Ka`CCah~hPdªCM|dnorpt@ªnIPZ¦MâUn½nQ`fpºArrTGRnezX\\ªIX¤dNtbĈ`df¬FÂup\\j \\SlPDR\\\\Öb¢@¢j®APk\\Y[Ï@µ¸Dz\\k\\AzhM`©lwDÆjwvŤ@ĔDy¡NÔbW¨_tSfJ\\}pxtP²¬BºdM´FVîgZ¨Z]g¶av¿¨«ÈY@~`| xfºĺĔe\\C¬~Nnàx|v\\~OtæOµU|mÚo~_xTKl\\æE^XâVh|E¤jfvÊI¬`è®°|SfPt¾htKĘFllBÎHvlTr¬p®tT[pKrf^èR¶QB^ǶECÖAAgǺE@«baÆai¶N¾Lv]h^`¤KVjN¾Oh\\ŠBĸHƈBD`sjdGz~vRT^GivJò\\bNÂCÄJF¶mr²®MhªbĜ\\ºH¼fŊX_ÔNx®E\\ÎrfWÆFZVÄJdha\\CNqLrjðWa IæjrSV©HtÃ¶ttHÙSpblçI§X[\\āZvĀǕbÌȖ',
          ],
          encodeOffsets: [[48249, 61030]],
        },
      },
    ],
    UTF8Encoding: true,
  });
});
