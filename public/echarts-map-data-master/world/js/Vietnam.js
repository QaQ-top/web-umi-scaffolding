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
  echarts.registerMap('越南', {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'An Giang province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@øHztÈlrrĒ¸KurOm¤KrdTJtxtTH]Sy¦F|UF­~Ti|EHSE[iW@WxMLNMUPp«vMnctFgx\\t]di^F¥eJUkYIGug[iRQg]§O^a¿goWH[@m}ssãÐěÀcNō~¬y¾ghB',
          ],
          encodeOffsets: [[107294, 10771]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Bac Giang province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@[MGéØyPZKClQjLNYOu`YE^Udj\\EdXXxb]pZVPrrfZhGrTÀIrSEe{lIBvLh[BbeQHepFlQVaSijkK``iaeNqI]YuMUOXwQugqkc`³OMZwEM{sOãZ¿ZEiNS^CawBuL§BWogI{NZwKcc[wX]dEhuWSdHaviTS_Hpi]BdAo]cTIV]vK]@Qn\\ ~AflL¤]NRC~bH@UZbºgl^TNjnnOPni',
          ],
          encodeOffsets: [[108734, 22123]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Bac Kan province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@^phnvC`t|Kn^tRhiOOnyogU\\kMU~cPulytMJ¤qf~hGÊX`cjMNbGBsyLT]Gb^hQLY{aVkqDWS_[Zu©§s£Hq[FuX«KUOF[haPcC@UokM{]kDk[KwYAu`CX^CNnEj]`FdSryZ_AcdoPMciEo[qEcgQqVurUhMq|ThSh~XDX}zNrIr`^fO^d`AdfVAtRxzbTvMhN^Y|pEpglDZ',
          ],
          encodeOffsets: [[108065, 23177]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Bac Lieu province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@`bBENdLX`EyvSb@rncAVWlDNUfZFfYK\\RLTUReUćBgP\\|_j@dodLXYj@zpJ\\y~[LbldbUS_\\¿MGTaĳµíei¡Btuz[Q\\mBgboI}bPr_AQjg`tzHjX',
          ],
          encodeOffsets: [[107789, 9625]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Bac Ninh province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@JUS^dBpcAj^oGT`jSbu GTcvXFg^cxWGURP[gmF[mgM]PoIlaSsXk]yPDfbzixmG^avWºLXa\\RXQh`',
          ],
          encodeOffsets: [[108481, 21754]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Ba Ria–Vung Tau province' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            [
              '@@`|[d\\heSlp¤ILpEd@tnvP@atJfM¦AJ³I]d_TGxZnhZ\\nvXr|\\[ZF^qfHBuzqZwMYzÁF¥_qKsyßCc}_EkpeJMSWqWyYoYNCdWTCzP`nIh}IjWneCcnPj',
            ],
            ['@@NVhUiUKV'],
            ['@@PiiOO{`{FmtPflfP'],
          ],
          encodeOffsets: [
            [[109580, 10768]],
            [[109226, 8879]],
            [[109217, 8971]],
          ],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Ben Tre province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@ixNDªvî`\\SÔlOut@qb[ªaÂ]¤goIMa^gKoP_Sc¡©]F{iOiCsxeTq^e{¯QÉĄ©¬oj³vxol{Zq®xmxVBkNQN`',
          ],
          encodeOffsets: [[108580, 10546]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Binh Dinh province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@Xj¨vX^ctVDKp®Hnl@lQ^~Mri\\HrQzAe`gl[a@N}l·TOjOaZIk^y ÃKSfa]D_ljeO@c`«FoM_P]Yk`N[PkYciIMtVT_Ø_bS@kaWp_IahE}H`}n]Y¡cS¡EwYDn«KeQk¤KfXK`R`UH\\tCmdOtYPKf¸WvJbqd]hKnYXmHIiJj[b]ªDpo¬JrIHnYnHzMf',
          ],
          encodeOffsets: [[111236, 14894]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Binh Duong province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@TLÂIydbbwwoC¡RYº^Ho¶QJtClx^@|`\\SF}qqWAHwVexI\\RmC|r^Ab`nGX}[[H[_m@w_ENk_QNerEjs@JmWeJagOisaWuKwb]voINsQSWjk_G]sP_pIqMzHgeQYXFrOdPKªgCWTFjkNG|BuxF iluAmVSacZNV£xBtcgNHiXTtenffFtXhTVh',
          ],
          encodeOffsets: [[108979, 11771]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Binh Phuoc province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@jŏJÅAXujSjBUl_`Hizc`yLohOa©_WEygFca§YcaAseLmaFgQ[^pKíiëaQeiI[XameKGakMM]___[L\\\\W~mHa_]B{qDn[QwJUfGxXBrrE~[T_@{w]ksDIµRGp¹]QZD¢xpaxcazÁJSKP X\\fĐFj_`_GxºMnN\\hN­ĎhArb\\_vGrXnYĈL^`zqVlvBhº@x[~JSrXª^ttRbbVJfjRI^pND`xL|T^xLpZ',
          ],
          encodeOffsets: [[109780, 12592]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Binh Thuan province' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@l@R}Qc[N[LL'],
            [
              '@@tlT@OhYjChLhZJ¸JĤQ¬WÌqDw\\qC]Viz\\C`tÈ^V`lRV`v\\ª¬WxgAaj^AbfENipDbZYJpVotTRhbh¾K`hSRLAG±zq¸UZifEQi[Bow@OgiSU¥S_McQaRVWgD}kK_Uik½[QYP_Be[YuK{uI[eIuWBCp`kGo[MmF¡ess¯OuW½i}DqR¡HaYFk[}uauQgBsMue]oE¦yÂNZYxyrAvhDr^`@[h@ÊcK¹``HPngpjpLbnrFj~I@z`VN',
            ],
          ],
          encodeOffsets: [[[111544, 10805]], [[110123, 11633]]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Ca Mau province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@Ê|{dp]NdĔ½žĉWGiysh_Ri`BqO~apJhanA[\\RvyAsck_©[qg§_w¿ËyYMmS¡§UaB]gmû{cS]DgSĉg¡GST§ZbKtfdvQ¢haXGhLxdkiH\\¶J²AÆPĈEºNtTìA¦PÔ@¶Hº',
          ],
          encodeOffsets: [[107352, 9760]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Can Tho City' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@n~\\@XGpÀhb]¨Ph^fgv[¾³b{Jivc¤¬¼íuc¡Q¡`W[UiF[\\se¢WM}ÉŏļWxgCon£JP',
          ],
          encodeOffsets: [[107757, 10454]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Cao Bang province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@^uImdSVPjWz\\e¬ABgdGglw|WFc¨bXWn\\SR|GlÖL_RdYIzwhlrAZUdVdafjR^RdKºh@j`hjE\\mbKv^¡tg`x`SlJZ]I]°FS Fd]a}qKqW¿CuLowGcW{Fw~[CSwAqeFweRmM]qE]i{HGW·b_edF`al]E\\oSoOyKZgRa]HS^KtzAaHMiN_dWÉgHe}£rIsNkzOv}dNV[lVphmzPPgjsQm]{L_suDmg]oBWZfWZ]¤gDY`jW^sPpQXX@ZCArnHNvGb\\VpBfVCTHd`tDl¦VR',
          ],
          encodeOffsets: [[108092, 23687]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Dak Lak province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@xhhN@Z°WZlhLZWrJVShJ_fvUf\\|ZdOXGu~Y¨HrkxGchwHVSfF`iIeNo\\cxeOgNklkO{pCYrRlkF\\WpACa{xM©NmtHkC]hmxAQT^JwMYV[sXm\\UEg]_eDYWEg|eBwgoHUcodWWy³}jwOE_D·bBqSaD{egQyYhaBQcmAczkUQggCGcqYuC}Zi[YimWkLeokaoRUWd¡[MR_vUzev_BYpgFkXqKG\\aLcpArgzLnnjr@`RVrEnDcdNflG|SJBtaxPjafVP[TEfRfYXwYgeAaL·J¥^{O@Klwn_|YRMhVfczLj\\VYtHv¬Ť°Ŏ',
          ],
          encodeOffsets: [[110186, 13622]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Dak Nong province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@rA|HTKxLnQvC[w`FZjffn@¤ĄclxSnJ]zBtXXoRXOf@¦ @|P¦]¸IbKBhfxZZWQeFe\\SOUbeOibwAsTIH{kMedcC FmUq_Qq@miKmhyBqdobKH[rLlWhEZo`AfuVy`uAm]WH·AO[iCOc@iia¦wVnsPhK`up[QeQJí¡ezagdZ[nB{UIYStWrL`aPQDW_s}UWwY@wa}iTKg{Ha_wdFz`XbªgPKp_zydGj_k`ViAiTWvBIÆiŐ',
          ],
          encodeOffsets: [[109780, 12592]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Da Nang City' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@@QQK}U_]INutQ^FpD~tN\\e|Sp^\\iÍq]BMqL{Ï]SmRyOj_AOmsZ_myd{mgRGU|LdtpApkp@zgoD{^IHv~F^JKxNVf^avQ^Jfjvi¸YD¦f~N',
          ],
          encodeOffsets: [[110792, 16598]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Dien Bien province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@v³X_~]LUK^G`q«XwrcdBR`^@tk`KAjkSlcRN¨kV]AqYuNr]dk|D\\XnEbF]wPejGTvrF^OlZEIZZ~fMXiDK~gW`NanTnR@Zxx²F\\ub³^edAbs_ithON]e[I\\vYhLqKm\\QjRwCi[MWo_OdgWs_YWsE}oGa[uR{]uoIwTaQ}DI{fUHcvUe{|]IRoM@¡JQGgC_gTkGYd}B_CRqfaJoW_`wYc`[FoQ\\}_}F¡dcSqJaOKiR@vYVYepIlBfJjObgXTZkpsFN^F¤e`X_QkA[bNOzR|CnplX©kN¬lBLpfn|nCPMnJ^OrPA_`¥WYKSohAJ~QEK[RwBLi{iswkQHCkbMWr@r\\x[jFdQr~VhOleH·kLu~JdzVWXsL[hqZWuVg@IlodsB@hklUMsVQtkA[xBfmJfJds¶Yf`|HdM@p[NVi^Fbhxpf',
          ],
          encodeOffsets: [[104780, 23089]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Dong Nai province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@oJO`tH^l`iTXtRMpJ^uxavLbXjthPIbXfIn@itqFMf`RMl`F@x`nG\\\\K```N^lNHbfLnWbJ\\fjRìbîjtPfYEeJw\\gKg}mngl`\\WEabCM_U@yJ}EimqKaiohoOm_G_ºLd@É\\g@]_qgCeG]rYE[\\q{uW[mgYYmHwSc`J^I´¥BeNsI@buOsmc@FKo£JoTkmcC_m\\£^{oWM]tnejAtjrpTrp]XHQl^\\C\\qtEUn',
          ],
          encodeOffsets: [[109405, 11161]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Dong Thap province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@ªevHÎTJ¨lfvfclTtU`}Îx±WOƴƙxIv_ÚċC@çñ_yHL½bUMh_aYZglaP_MeQM{«KaNuSUcfgP¿COudIja|½´u\\ehQR\\jvhHZJVlfIE¦]cjs^w[hsEmduNo¬OVMNKwN@XjXF\\TG{FSj}E®',
          ],
          encodeOffsets: [[107712, 11174]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Gia Lai Province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@XX@hdPnp^BG|rPEXv`ddQ^XRhN²KrflVK[pnrWrEv\\T¦H`HX_l`LvvhGV^PPh~n~EZ\\NLZHnIlJI^DZjSn[\\CdbhxC^wtaªU\\Fl`VZEkFcX[jVNeGyZmGmqJIp«Co^©\\aIijJGnZWLm^grcIaXue·LZOPsncDsG[VQ_L_eWLl£RoGYXyBa_gJYcGkeSURinM®TdAJ~}\\{h]EMi[Q@ga[mOL½_iAUeoB[XEklqQZoDP|klMlhPwf[dMpJf_jeEUTGgxdwHql§G}ZvHWcP{Ye[uVe`gIUTqIYXKkgYX¯@YgMwgrÄOŖErĄEg]gJmbTnKXdve\\bt@xU@',
          ],
          encodeOffsets: [[110040, 14256]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Ha Giang province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@XehEvVVrf^¤dtlRljxX`zFne^VSDjR\\¦z^Fzra`ExcfHTM¦UX@ClLLn_fXUfNL^tL~@NUZXhzKT[~VrElzBHbzuBkTafSf`¢¥l~W|oPyQQUQ¥Ck_sGcSDeUoA[UHaMumGBqD@YWRWotOX]iZ_hC^£XYYeXW_SF]fRBcwkBU~»d[`LqXguvI[s]N][kPiV}a\\oWiaW^oUOBhm_gFkma¢[T{GWZcAkbElYWw]EtuG}eu_G]b_cY©GKb}ZJxOPMXDZkwD]oM]PE|hR^bYrZjsHMznc^mHern}hSfgNXAEuN[Vq¤Km`Ln',
          ],
          encodeOffsets: [[106846, 23257]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Hai Phong' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@OlpC_g'],
            [
              '@@lHRWxPNtvN[pPLjkCHlSrIlPMFZQVKxaL]hRZ¤T^QtN[OhBtmF»cDYh{nQ]u[Z_`KieZgskGm§yYHqBUZigPQe¡PUcnJdapvbzSV',
            ],
            ['@@XmuE]n|F'],
            ['@@¨i\\`dHtG¤Tl]GkGh]]}YRwsVQFwV{f]O'],
          ],
          encodeOffsets: [
            [[109702, 21241]],
            [[108962, 21226]],
            [[109440, 21316]],
            [[109555, 21241]],
          ],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Ha Nam province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@tFNtVVF~ttf]hCdRprpLDwV``TpbI`eENcnk`EhZrDTUHtQZcV½SUwIKtsD[OA]TLYqamHBt{G[kuQVwJ®KMX£u®',
          ],
          encodeOffsets: [[108308, 21059]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Hanoi' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@Fk\\kR|c|EH²`EfBfXKf_lCnXQjv\\PxºbtWpFDdWfARm^@L^u_RgQWb[KWX¹bu]nHjwayCeqC]Q@_oMoPUkVaEe[ugH_g]KmdtK^UE£Pi|HSo__UCxoKoqcQgDe^ssE}UUMssEw@MnotFª¦A|NL[xPdTQQ@NNb`HTbEjshr¤§F_SÑuqJAXMJYTUpDd¤f|^VjZ¶hiJe',
          ],
          encodeOffsets: [[107975, 21776]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Ha Tinh province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@rIbUZ`n\\HV]rIziCjV¸dtF\\W`¬CL\\xJhU\\Xj@hdAtbbNp\\V`GxRsºA\\l\\\\KfãzÛÁ¶ÝlBpx°¿¬hWBt]¤dA°»²|QzHh¯h¡aUyGMVıNgGkyN[yMo`¥MkQûf\\DbpmxsBKq~WOoTmm«MUQsbgBQu__Á@UAgjDHzIhchm@ArahgRR^UdYKQgaHY}T[jY@cdX¨k\\UWBAfYn§nCxegGW|gDczT¤DtpGrjvS',
          ],
          encodeOffsets: [[107712, 19051]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Hau Giang province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@~ÊXN¡tf\\[jEVX\\¢_¢RvdfYiiYÃ]HKS«Åå§wuacH_[_P}ySVK[QLeZEeYMVFfnPP|ÉrUrzXhLQdvIlrNÆEPlMN',
          ],
          encodeOffsets: [[108066, 10158]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Hoa Binh province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@TbeªMwtW}Nvw``~Z kbHVWYpINBWrIvÒ`T¨Eq£tgFiSa_GMaM@RRSOc\\wMKB{¥E©psNm@xv­¤NWLQ~QBN{{RDXu\\Ue|ÁoQY]aFy|½SS}HEq^T{YgLùaZiHRjwrSty\\ESlmTveJMQ[mDsbJJfM|U^tYDeOVF¢InP`^fI~g~GdWBTXm\\^h\\mXFs C\\tcytY[P_^LRn\\',
          ],
          encodeOffsets: [[107430, 21619]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Ho Chi Minh City' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@²bG^ZZ@vvÖTbnUvBjkEvwAH{lMEiXShDL©OPcEqZWfRGhyNrVmFrsD[][RkWG^qooSiqBsfim^sNpX|¤]n[D`ndf[g\\c_{aAgYBcUikRUKJ{{ÛcBG~±mWj¢wXhG¢HZmXGd\\nSboR]WBw[IjgVuOyT@t]B_UMmZov|ĤãGan',
          ],
          encodeOffsets: [[108910, 11256]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Hung Yen province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@zOl^tWbTkPonSQkNWeYTaK}WWX{EaV_b@\\g]XjejCs_iZeWe^]biQMqCgY_FmlMdF_faJ{GOjF¤]VsLcLnh^G`h\\vFfUbVlpOpN@`^RrD',
          ],
          encodeOffsets: [[108546, 21505]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Khanh Hoa province' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@_I[`pOfmBGjbPrWbLlQBcVWLqV['],
            ['@@`CfVlDUOcPKGTuZET'],
            [
              '@@hjt`~TfQHbbXVvnandNz@fatrMbTdIpXrjnsqKQ]Fwj³Ï`IQDeMCtaHOphHEWFQBljJRvm@wCG{S@¹ÁwQas@_]QIeXuQo\\M^hZ_KTR@{QRkrIpiKSOSdAb_pqrzu{J[[ELsOQyISJwZ]IQWl_S{_ICuVt¥n}hMD[KDwfmWekDaby@X¸uBmwiU_NWAmbg^@ZdBD^MÛKsXUtqQleboKVXEneJcdq¢SHt·ZgzXxmx@ÂiRC|TbAra¸CF`xP~i´XzcXdpGVhpAx{fFhZXfC^`Fh[VnW\\t',
            ],
          ],
          encodeOffsets: [
            [[112039, 12858]],
            [[111863, 12513]],
            [[111611, 13012]],
          ],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Kien Giang province' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@IdT`f[og'],
            [
              '@@`iKP{IJqMomO[iNYapaOaMiRcvKeøe¸cfUnsLSToLSlY |@°[\\V\\bLLxZZnEf{\\Aps',
            ],
            ['@@qPtljMQiYC'],
            [
              '@@Ahgz½«Ŏ}dMĜ¿äÏttIO¤pmhDXwŐĻNMkFOÅqMJkuRcgKyWVqÊqO{mOEekCUXBmd@qTazuFW_cKMFaA_ŽĊē¾Mc^co{|ÉRĖR¾rĔj¤CbL ®fNF{¼éðA¯YyX«âXwIo­HcYÊUfmlaBY¢ONp[vNhsbfRpXJn¸DDV E¼gpB',
            ],
          ],
          encodeOffsets: [
            [[105963, 9510]],
            [[106561, 10641]],
            [[107149, 10029]],
            [[107294, 10771]],
          ],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Kon Tum province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@\\Bp}B§nJ@RbPpeÎWrHfcph\\En¤gH[]Yuq]fjavF~S`ohCL]¼VVbU@xzT}hB\\WV}h]JsdKxyXbeQ|uRXmXGZyYsgm`[yBiAj_UEk[©Vsb]xwDagDc\\[TmiCYJ]kImJGKYMY[}F}mOg]OUgHuuKk_W`_G¥G[SFuqqXom\\LUekLqM±Qg]WcR_cWuFqOH{]AmocO@gWWMRD¦o\\GipBÐmpKjªhVZO\\T`G]vnjhZlFDp`|BttÀSS|D®qx^b_teblZxrIz`QjoBwzU~NjAnhnTi\\nt@otfYhXRg¢@jfVJbM^GRpgBft',
          ],
          encodeOffsets: [[110208, 15785]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Lai Chau province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@²õ}bsqD]jWfPÈJhPuB`cgsrQotAa^g`MMcrQtylENKw^cBXaQ[|}]OUqcck^wWI¯~w`{gsGIqX]aO_P]agL_^[|cDysRDn@q^r°aL@fmfJhmRKzWXe@n©dgI[[BgakgPs`jatcB]fa´[v±Eww@YmQSbm_MX}hLCWjeNY}JYFkY]PqESuiHOfxE^amF[W{Clcq^MZvBrU^§lQMdkTilB_Lsl]@Q_cAqdWx¬_r]HVLK}^W`u´BT~RQ`vTIn_rtJxbRrZNKh~zxA´³Dav¢\\¢d@XelEBeBcdgEyd_A]voDeWpBF[k¤PObhNhnd@thkpNdtFHT`^VLtCxEpbDMhcdEP]pU[K_tsNas',
          ],
          encodeOffsets: [[106015, 23136]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Lam Dong province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@xcb`|GhLjS~xbZ@Xx~V`tCXRbOK_XqsZTJ|VA\\mYhc bfyî¢RI Rfo\\_vgLOmtU¥xjb@jPdjDP\\¸BXGn^BNQ¢\\cVXpQlbfplKnXZjj\\~YvDrZHdhDRhlVdynBRdbAgzZRfhjQ@ÁnwWwhy_Aa]OlwZck[@ogmFUmA§mYSubSKEp]Fa{YAãukBSWC{jmVoagQgsSpoUIYZaoCMjeFa]BibhBXw©«u[U_kQU_Ç]_s[DyUjD^[rCxËr«XģR·IYIKggiDgZPS@skaDFb[Xk_mh~nLh[hxIFfeZsOoL]R\\EhbKnfBtdb¨ZdbhE',
          ],
          encodeOffsets: [[109969, 12050]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Lang Son province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@VPL W¬Evr\\Gt¤ª¨Yv`\\TCXrUlb|PzppT[^FbkE_fc`¸aXH|G^jrF`Ai[Y¼_bNnMTlgPÍcQOarIfgIQYV{okAapYfNDtLbQv}´RUXHhfHR[hNTpIsJoU[ePWl@h]`@ncVqt]vC`rZÃXQN{OQLUePcI_yiASY}FWWveLsT]OmFqpS}]IcjS]W×VE__Y_DYgcEJ^Mrbf_j_LilTjUbkRoEGffRaAg\\KAukJ|FfqT¿JqSgHeYqOqYU^owaWcWFi[Vc]F_ZPvMZiKkRDYLO×zHê\\NZ`IzZ¹t{nYhqGGlYbXXPBr`nl',
          ],
          encodeOffsets: [[108645, 22465]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Lao Cai province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@dhJnhLPj_Zl^Zd~jSHaq\\q^H¢­Vk{hoVLxzU^ax\\nFFÌb¨SrrÊ^`jP`zplnKx`nFÔrXKk½nrWfDjiKmn_Lr£\\UvMFBWhMTe~gqmfnGd]mNytGYiZq]agQF{^OpNCqz@JAI±arKXpslKf\\yw^mDkq³d¹CqAWoonIh©`iA`Rs@k[µRURVaWXDgnIv{~R\\WbA]dLxMkFszqRNd_N]hBbspqRht_dAvgOÇIeOiXC^rat~±ö',
          ],
          encodeOffsets: [[106015, 23136]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Long An province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@CŌz^lfjLJx·ta¦gIKj¶jEÔHpkCªqmzZxQjDH]¬^hRK\\\\_d|\\tSqbmHä{ģpunYVN`^A@szSvPhUJix\\XA^pQTa[mHcnWGYH¡Wgqig}YMcVAt_P_}}_QeaM]\\yPgKUW_Y\\uBAhxhWZt[_eXA|kZ@Vy~SIolçQUDýID«Ɖ\\DÙČu`wJƳƚXPw²Í_~',
          ],
          encodeOffsets: [[108031, 11217]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Nam Dinh province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@zM^[_XiGfMDe{qHs\\EnXluOdWl{nWFd`rP|ur{LwWUrsL}gIOµ½ÅÃÏ¯ÍC_miOQrìn\\HzlKÀQQ[uX`XK\\GoZLlo|uX^dapUxvR\\l|HAsnGb ZrK^SB\\PtCLsxJTV',
          ],
          encodeOffsets: [[108732, 20977]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Nghe An province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@^SBbaÆTOPnIZWx@ZQj£QWwFeuKwR}CyvsTVD¬\\ZnXWA{QWGR`Yzd^cFc«^T]dZXO^XERcÅpIX\\n}l[NibcrDvbz{VJ[m[WWOwMûg]\\gYuUµH}^±²qr{BeXqk[B[t¹wQ_H[UMoaaBsgci@[WgVwIK[«D_[XsE·ciUDyjqJU^Gm[Y_aVqJVYf_Ccn]PPdUXwS¯DPdLI\\ÝKGq^C_WaV¡ASdkQqTc`MdkAmRAV}^Qf£^gWVIl]XaCer[@SeuCunAXin@^}dk@jIjwPoSmH[\\VtoNi©N[dkNqfÃ]^ObcN[MUdXxPvl^EVZvTpOFbhDV\\edJXAi^q~LpSd`zgvChNN|CXzEnSdF`OLi|p¾ZVMHsfBbgxDb}hSbJrIZ\\~LjW`BB~pLr|HZEnxjZlKddCrVbWR^dM\\L ´H~',
          ],
          encodeOffsets: [[107425, 20479]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Ninh Binh province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@~GTT¾z{bEZ^pR{ÂVfv[CW|QM|AR}R­Ibo]cvWp{KkpYHL[_WvW\\RRL¿kGym[qëRuamLEhwlRjNhC`£OuRCÍ®eFk`aJxPÅ]t}zyPatqHnM|',
          ],
          encodeOffsets: [[108075, 20853]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Ninh Thuan province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@¸YGsTr¡dcfIFmUWpLfa krRsVtWÜLOmrcAYhUEuq]}MgUOw_U^uK}LQYNycm@¯KwJgM{RkMGWwkIxgGRjeFYj·VyrH²BQKTg_½LUpinD|TXlAävZBb|Eo^FLaTTvnZB¨VnE hn@p\\dlYkx^PBb`',
          ],
          encodeOffsets: [[111342, 12454]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Phu Tho province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@JIXf`jodRalpF[h]F^ahH\\vRM^XCfppB\\XU|QxP[zÄiLUnA|qxEHW[cj[H£LupCfÃTqj`tkMTauRgWIfjgYµUi]e{£CcoVZSZoXGUal}Y__uxM~sXx©NafS_bnV°S^W@¦{t',
          ],
          encodeOffsets: [[107330, 21846]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Phu Yen province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@VfjB`K¾Pn\\hb@\\RNjFg^[|}~IBc­SmNQjVfTHlZdhIb`zAZWpHf¬LmCZxF¢dTZ¢ ^~mGqHotYgYsdEXY`QYXQq`SnsDc^eMaT`OK¥BHh\\rcUKNQE^MPo`SvRO£½]MHmYQP{OJi£p©¦Å¤ÓIwdsYUkmtqioWcJaSqNseby@cMmmbUuaWGaeR}Ss_giUNZIx]SRwBgnD^lsGMnªwN|Db',
          ],
          encodeOffsets: [[111291, 13310]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Quang Binh province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@Â@``RvhAtaRV¬NnnpSXPr}LtAnwoCa[üelR¦Np_zNM\\lzhHĲMNUzHbVfsW__Aaiq§B`¯ÅLe¯NIhxp «¨¥ªźĥ·­e_YoIPe[_aKeLYeB{oUKwHoQ·sg­D[jQ~kC[VweTqFWbeK]ZGtkj\\tOdgfTTynEg@}DLcgosEnaJ[xtȕɠc@Yj©x{KM¨[D@n{bqN~mpqLy^Bd^|@dfjB~',
          ],
          encodeOffsets: [[108179, 18425]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Quang Nam province' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            [
              '@@j`rqIXVOjhZ¢P\\~Y^g|EhfA^nb^nWXFJ|]pCh@yloBosoKc{VHhQ|nzc`ntYPn`BPiznQ^T°toT«^}¨ëË°ÕklDb]RkIeuyM@egAkU_Dc]uF_a¡L_yELgaFsk_taUµgsAWc_DeqeL]CgA~yS@wVUa»UK^gD_p}TuEiber^Zv^ G\\£hm[FogedqGÍXofaOQ@mI¨Ao~[ACueXYZPfYcJqfNCWBUSdAnkLPp]nDWRAd[RVj@rOb]DIpMCfdv[hj\\MllzT¤tMnrf¤d~^',
            ],
            ['@@aHmSIk^W|'],
          ],
          encodeOffsets: [[[110046, 16410]], [[111101, 16359]]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Quang Ngai province' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            [
              '@@zWTL`pgIW\\qYqrlcrEBaY_kIW_DµJ\\³ęÇ|³³zPg]bßk\\_hBfyqR[Gqj}N]kR@mk­GLoCsUdW]§uWiiUW\\EdlYFiBAjz_\\hnZtYzWHWnQ{vRafWwzcLItg^U~[XDK^rfCfd`BXhtV¶sbl`EthbKzF`¢K`bvEd^`ClVhBf@Nvz',
            ],
            ['@@kNA^Ckg'],
          ],
          encodeOffsets: [[[111349, 15769]], [[111740, 15738]]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Quang Ninh province' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@CnjIec'],
            ['@@lZNcyJ'],
            ['@@V@cyqkLIRvH'],
            ['@@É{L^¼~B_'],
            ['@@@zhllGI]'],
            ['@@VxRFeW[oQeJ'],
            ['@@PfGUsqYkXXX'],
            ['@@V®PSe'],
            ['@@YW{CDZ~PTM'],
            ['@@QXmF]uV@@}'],
            ['@@fg[OUnml\\b\\QBq'],
            ['@@XSDmHWRD~xU'],
            ['@@@fvL`MassP'],
            ['@@JUOomaihB^~'],
            ['@@^ZHbvlCwo'],
            ['@@ZlzxzF[kJqYaa¥MOU«L¬V'],
            ['@@]CRT`Nx`a­W[S'],
            ['@@d|\\@KRZdE|XajDb]ZR¶h TlCoC{DOokO{QDbT'],
            [
              '@@xAbDT]jMFÀYäYtPN|xFNY´Pd_lhrRvWxVPNZvdFZh`C`ZF`ØU^XTdi^JT~oErPnS^KtufXX~ETZjB`zdJfOVjG\\nln¦rTCfwA{|_hA\\rtFVWfF´Eb|dÂdhE`YXTfGZX_ uT}vJ°F`goej]xAEWGwackSTh^almVqLKh©UyhsgPJefu]KiwU¥FONk@KcmkXaveuoYZu»uJMBi^ITgoRq]MNm@igkKyP£@eGMcu}U¡@hXfzPgXU[[@UWwBczqaVmKÕhIfcBJwRUGkPcemUVmaS`gPAg|CZdE¼sngAP\\sM]RSbuhEYMjyEcZTfInrA\\ZG`là',
            ],
          ],
          encodeOffsets: [
            [[109981, 21278]],
            [[110539, 21746]],
            [[110521, 21901]],
            [[110389, 21849]],
            [[110445, 21530]],
            [[109956, 21729]],
            [[110119, 21601]],
            [[110238, 21649]],
            [[110161, 21781]],
            [[109958, 21293]],
            [[110347, 21493]],
            [[109484, 21445]],
            [[109924, 21368]],
            [[110103, 21420]],
            [[109981, 21421]],
            [[110071, 21493]],
            [[110161, 21487]],
            [[109978, 21601]],
            [[109058, 21734]],
          ],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Quang Tri province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@\\UlDR}\\i®Cth¸RGpLxpVA|ZffKbL\\`OfpJ`Zf¸®¨ÌDIIJvÖÕÀ«à³eSe·J[de[[wuhwQaLKYKYg@wSgkZUxK~mVsY]Ny@SoRYBsuPKCLSiFUSDPGh\\snW~]\\`^QfPn@ofREwkWDQM@dUTAn[@F~abBfrlq]Co`uCNfsh[ª@ƜTzrHBÐ',
          ],
          encodeOffsets: [[109107, 17407]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Soc Trang province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@~z`O`\\dGbxvæ¨ÆT¬GL^ZÄjjtOºf}®­^ioÐÙÐ¿´UOUay]UKQwu^_Dos]AŅŭ±SNH[À`VTakcKa}\\[zoIyi@WZcKcpi@{`O[AhVĈQf',
          ],
          encodeOffsets: [[108080, 9817]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Son La province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@~E`[~pRE_\\Zd_x`pXbIreQDA`c~HZSl`hhDHIR@¢NQpJ{^f|uVGdeVJ|~CbRxSpJ^vQ|\\vbpHF~Xt`ZXtch`PXp\\NDjQxi[RLnKrguZ[Jf\\M^blAh\\\\hJªcmf@XWLynQIgne@ebKq¯r]@CmtQzdC\\{`]hK^b`ObP`UAi¸LI`Y]RFMprCîciycNigbs@oU}d]CclYXgnNdaVJkB_¬]tt¦IT\\´OXr~@zhMVibTfC|s@¥XT]U¯m`a[Qm]K`\\OZzsdsD[tEnWg[]n[SWAcX}H}heJ_]mOJE¡PUE@qQe~uCµªCfAeTChhyi}hU¤{ZE^mI[EGrotyh]FdcVyLMX¹QSncLWY[K]Q@mT[_¹LwekseViRk}uTkM_NcgYEDRcSOMaLOeBSb{^OXÅTwBOjejD`k`e]GcuFqYqn]Gy`oJIXUoTUdRhgt',
          ],
          encodeOffsets: [[105694, 21398]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Tay Ninh province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@ď[eWOgUSWgEseefmSsjWGhMdAs¤wMUdYuÕ@uYYH]±arsT{[`c[[LgQ«]G^vK`LaCª[[cg~_@S^rIVGÓ`CHKPTP]VP`G`vnFf{bVjKtLpm@aBlb@r`uUvtFxjVZrKn\\pDpYpi^FnQdfoEbOH]xPz^~I`[O',
          ],
          encodeOffsets: [[109006, 11951]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Thai Binh province' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@[njbRU_y'],
            [
              '@@^fj[lVUVtbTUayuboIcmVd¢ORfhOjVYrA@e§@gSiPu^SE¿a»XÁakgX{vqOc_EmXk|cXPkvmW[FGt|rCfeNHWj`]\\yNU¾YdsRGSVRNaj^f]fXjY`t',
            ],
          ],
          encodeOffsets: [[[109150, 20736]], [[108820, 21182]]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Thai Nguyen province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@hRdrFp\\jFNdpOdc`BzYTqEc^_FiMmD]DWv_ZBLxl\\lC^|Npl@VDdbO\\gEk_mAqOWWZaHkrHZg|mºsYJyY_mjOmPmMi]Shka¹VY@aGD}MQ£^kKe}B[eBcXCoEXasQBYa`oEexu`uBinB^iVOpiXw[D_R}HTaK\\Td_zF¬FBdUpt`TdGNT',
          ],
          encodeOffsets: [[108090, 22485]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Thanh Hoa province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@¶©vDf}rR@FfZC sV]N{IeItanCR\\NfIunSTkFz[TsxqQijGbYúhK|ZSr]FN{mrGbszO~y^sÆOwbIl_fEÎ­DvQ¤PD_giMQµYWMPKcMwHyUqcR]UgYgíKB½Iue}H{Zp_eI\\Uy|uaqCadMjk\\m~W[oJÆQdF]WWPcY^]S¬Ed]dyc_ZQHRXB|WXm[Y«UCSutDzQ~LxfvxERXi¤YRw@YXmJOSPÅabA]TXd~p^Hd^buHEXn[l_QK^Q^z±FcVLM^Ea^C~VÊGhllhvPqiTEnY]WM@aOiJCg{Um]mT}CatRlwhUrljrHXV\\v|nHJp\\tXdGth\\x',
          ],
          encodeOffsets: [[107152, 21149]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Thua Thien–Hue province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@ĺĉĞÛVHc¦öÏæÓlW|uZNjqUjJ\\dN}¨Ýz_~RlYr@}M¥eC·Zujei]IuR]beMULw]IE}GuWEmXa]mB]ge{F]h}Z[¡OgYPiWUJqri_g\\A`^fO^sS_NYmkXWYwKvoa@s|cMuFpWtCxTU^¹[OLKTDOLvAtQZTpz@MZ^Ut}nwLYVhlxTh@LZZLbKxRvgx\\\\cfI\\¸ffT',
          ],
          encodeOffsets: [[109967, 17146]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Tien Giang province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@Ɗ[C¬þJVCèRpkTJz}@UlYB{fW\\`sXYwgBgvAZ[`VXhLzO^[bNRf~``~`OBsdUZNh~rjx¡XiWAåtaPiyp£hÁ^©ba\\rs@vPÓk[Tí_©uCwMj[G©}Kg`NaVK¾zG`èò@',
          ],
          encodeOffsets: [[108485, 10790]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Tỉnh Hải Dương' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@pJ O^NnhE\\hnO\\QHVd\\LdYxM|hJXp¨AvKkßH_[YqBJmSedYzFiZNFvgTa£SQY^gbKLwUYRENkOJTqGklDKioO\\uMMswOQXkGsaUUVki\\]eiDifW^[ha@U`FbW|XXL~SbfZMXRlmTOp',
          ],
          encodeOffsets: [[108675, 21488]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Tra Vinh province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@|Ypkw´upiª«ÊăUoCi_oagUkLMKforyfUQ³ÏÀÏÚp]j­®e~Jf|^L`dI vkhrD¾bKPdkphAVrc',
          ],
          encodeOffsets: [[108841, 10291]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Tuyen Quang province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@`d^a`HfvH~sv^FXxkZFladBXY|H\\Sb¡nEl`hgnAVP]pbXXj[p~bUjO\\lM^t^J\\uhvrWK\\_¼cV}lAdxAQ^eETX`ACYhkFooZ{M]NguSyaQwBseUBcc_P]]e_JqMq~yCWW}TgSgr{NVgvqrUMSHScs_VoAcEE«`yc[SLbGS~`Qywe[Ha[Pq@cZcoDKv¤Gi\\\\dGXwF{rmBKVÃjgr\\zQRbx}¨[NOveFBgMW\\XS^N¥QOh©`mtAS`Ix',
          ],
          encodeOffsets: [[107366, 22718]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Vinh Long province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@DPÀhOdeTVvbM¬LN|RNfO`kbYhbZ~Lª\\HM_RlMAUnww­rqdUBogclOaLC½gqulcJK_{]Ie¹ sPeZ»î«£',
          ],
          encodeOffsets: [[108220, 10378]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Vinh Phuc province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@ ddYr@\\Ob\\Gxfz\\CxjWPojUA]jmvAv_fwpFb_ZRAw¹[OiuRmWkD`LeeWeAF±_G{F{dQ[lElXQhvSbNsli_SreÄ',
          ],
          encodeOffsets: [[107853, 22024]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Yen Bai province' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@JuhmCWbXUVQ¶Q\\@lQt_jBª_JgpmpBXrDcºr´Cl]nzx[LetkoLWqbJ²BI y@DrC^lxYCNWOPIw~YLaªHZJwT_Bnsª_Pg¦RMT]WX[hNAfEPu\\M~§awRQ[yhq\\ywO{RWV[oAoDe]WNuQG[bgE]^\\gEobkcQipe_JWIeDaSUjgNy }@WqP³S[¥Jss«^A`lUIcbmMWhkZDdc^V~@patjhMzdjídDoqNEQ^_ZJ·KBj_VW^JrHht_|}xJ°xXl]ddVr^P',
          ],
          encodeOffsets: [[106482, 22495]],
        },
      },
    ],
    UTF8Encoding: true,
  });
});
