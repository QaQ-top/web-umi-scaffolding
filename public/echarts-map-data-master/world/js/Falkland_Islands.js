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
  echarts.registerMap('福克兰群岛', {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'Falkland Islands' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@QeSSdÂTTQ'],
            ['@@q_ËbYbLAXNUf@bzoOjklW'],
            ['@@qkUFfvbO'],
            ['@@BWNvbBQs'],
            ['@@a]uLBRwZ pnbzBD[gRi'],
            ['@@]bz@[a'],
            ['@@KRt\\|JX\\IK[hwK]^qm]j[@cbNbJ'],
            ['@@YSe@¥_GkFS`ÜCDRÂLBvz[m]'],
            ['@@X¡aKWE[h\\Ynj\\umMmlVFgÐJ`kSo'],
            ['@@]GHQV\\N`jGNaQg'],
            ['@@kXJpDSkdAb]IOuO'],
            ['@@¯AAVhNilGr'],
            ['@@eQ¡vZVheS'],
            ['@@XGT@uDOMZp\\'],
            [
              '@@zEPVtAFnVdRwNNNJqMwYaS}N[[MOmJA[aKGaokkFoU]_uMW^_FS^wnPMdeNI~T~qKhzl@UhTd®AdetBC_qIu}SnU',
            ],
            [
              '@@dV^G|B~UrNrafKRXhDÎ]LrCÔ\\ ~_PKOUOEfl~~oPt\\wz~EFMcj]ayiWOpFrrp@OfoNzfotTDgd[nJlI^TdOtLXÃV{o]AZeSFc{Å}¡JYJiYAk{A@diPWBOzYn\\VbUKgKJÎh|XÔQ¤Vf^tUs´UJpKpL¹b@NK^cfsbF^WPC]JgoQFqPj¡Z\\UfZE Sb@FfeJgtyDMbÃ][L¥NEv^FLMFbxYÄ[¢iU¦qXYä®cGhLXQÐC^d~M\\ZFMdiLÇDx|KF\\abLHeaGL]zH¢pjIR\\rANoSbJQVVfIFWÙ[\\gªCVJ¤TnGrJhzjbG_ea»WN[IT^xSIfZpDljOXTZixOGhtPqÔgàu¡gMhW]g¬Ha«}\\@m^O[mB]WmeF`j©aaR}fUkwc}kYwuiHQmS_aUg[{ON}q­_Nll_My\\eOGgX][S«HEQVRcJß_iGSFCnA[K_syµqmAuQa]rP^uRTm^JXwL[bcPVXz@]jyYg\\¡AWXyc~itCVW´sÁWmLQVZVKVLOfsTDcR@`wZNANXG bLrUCi`IBfNÐKPZP´PEbÁBS\\',
            ],
            [
              '@@Jk~JprLfMPwtlTpDNhd^n@R]^N`vNjMhZxE^_[U©qQRkQoHg@U\\K¶yEZ¦abuLdCTÃlSTpRd~zZ{nh[ZfcX`TqfQjv\\nF©tP]WmVErpPfrl]|OTH|BILNªGZXNh¹ HPzfhuSI`[d@¦[ä_HPVFlhZMJjUPFY¢A~xWjcJqZ]ikEYiCROydE~cJSs_XxlWRuLg^kYy[OjYr|_fVycg@oZJi°aI^Z^ºoJ¯pOFcCxGX@ePT³lcpRG\\ON`pA^{[CUAmLb^NdzbBX`xLlIĊT°RªOrR¢A|QRg_cgrYR{hUn@vWGYÅNoTc[ÚOUA[gKŇHÁR_twE{LZ{POePwªYGPi´GrHøQĜc^IRiyg[V_Y§OYUU|fMvBHY}BUueQÃJR[ëgµAµQRM@xgLpKRU«FËOs@_i¡GXQVZbBQbWCFaIe[W³Sa[EY[IGkFD\\ÀIC\\Ù@BRILIUAJmMT­FIQ«^Q\\qF³^dUpoC¤mG`g¦SiUc²c\\eflDZQ¶E^]luFiUJ{kDFa`eQS`[}Qs@^~s^cG¥^@g@_e[AWgWa]_p@nT_SaZ}E_\\ObgNqgÓDa`oaANM¬MBcQe`E`}KUetDbObTde©WoetCVVn_`fpBjMLYYuinUB[iHqkPFZUVEOUpBxB}huC{lGFiiBWSaCI_~]vTfMUkOMwTacUSD_ºq[Ih§NZfmP±O]RnlmTNR^UQ¥V|FiXCve^cOap«dLWnBnUDSLU®T_vq@IhTVFAX~TT\\RDZ¯VEnlthQBUCfYn§\\GptKrYhVEn¥NbPC^DhIf',
            ],
            ['@@]ZPp^\\\\]qcvGA[m@'],
            ['@@ÑLE^G|a'],
            ['@@Mxwi]'],
            ['@@K^OGoNAVolHP'],
            ['@@epFeRScRwBeXDo`ZTJAJ_IÂD¬A[UnlF`XFZt@TV|OPegBS¹GJY\\'],
            ['@@HVTx@@['],
            ['@@CTxLJ]}A'],
            ['@@Rj\\SYY'],
            ['@@lLmAIWkF_`]]}NVVPO`'],
            ['@@q`T\\@PTEp__efemWXsb'],
            ['@@T]KeRgvjZwrQV_'],
            ['@@RX`hq'],
            ['@@bJJk'],
            ['@@a\\Xf@He['],
            ['@@gfJpBXJÂ[@VBBS~uQ]{gAsRyO[SLRbUlT^hfMl_L}DdvoV_C\\q^'],
          ],
          encodeOffsets: [
            [[-60479, -53687]],
            [[-62676, -53104]],
            [[-62639, -53128]],
            [[-61127, -53650]],
            [[-61177, -53625]],
            [[-61167, -53344]],
            [[-59952, -53279]],
            [[-60260, -53467]],
            [[-61126, -53466]],
            [[-62324, -53252]],
            [[-61130, -53239]],
            [[-62536, -52291]],
            [[-62639, -52272]],
            [[-61037, -53026]],
            [[-62475, -53114]],
            [[-62280, -53234]],
            [[-60839, -53063]],
            [[-62772, -52999]],
            [[-62190, -52825]],
            [[-62137, -52915]],
            [[-62187, -52559]],
            [[-61031, -52560]],
            [[-61268, -52612]],
            [[-61097, -52617]],
            [[-61079, -52590]],
            [[-61209, -52559]],
            [[-61454, -52560]],
            [[-61964, -52532]],
            [[-61289, -52495]],
            [[-61028, -52660]],
            [[-61155, -52656]],
            [[-61670, -52559]],
          ],
        },
      },
    ],
    UTF8Encoding: true,
  });
});
