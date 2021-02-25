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
  echarts.registerMap('科索沃', {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'Gjilan Municipality' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@zG^NX@FMXQXYVAbLFJOZB\\dF^GNMZT`SH_ZOT]PFl}FwfNZA\\_~KKK`oAMTOWS]u]CUPcIBWcBsOSc@aTGLYRJ`GGUnaLaSSYMqHYYU@EfcZbXK^OFJXaPANURceBEXgBOTIbWBgTD\\gLUKmIcQodS`FLEt~ATT]fDV[RITJPf``A',
          ],
          encodeOffsets: [[21835, 43585]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Istog Municipality' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@PP`A~HV|[vh\\NRP^F\\NpPX@bN®iNqVMZDCgKQDgKYSE\\iRMUgOO[F@U_QMQkAaWsEYLKKWHqBgCBsHERURo\\SBMRLVMTKbD|J\\QXYD',
          ],
          encodeOffsets: [[20808, 43854]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Komuna e Artanës' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@TBRZB\\ZPXBZXdYBPZB^QbHTK`EEQLQ`MD[UICM_TYSMN]HcEA[PYEIaKUBWZWRENW@]MyHVTRZ',
          ],
          encodeOffsets: [[21855, 43608]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Komuna e Dardanës' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@hO^AFJfJTKnCMmOXHPibYXRCPVTTGVFZCfHfPReRGFYd_UISWUHKOHQM[OBQS\\e@kgW[FYII[VSAQ]DBSsYHOYAAOq[II}L[`YBeMExk~OES^YPG`DNVJC\\_NKRFR_FSLC\\VLEZadcFG^[RfN^SpERDHbTJX^',
          ],
          encodeOffsets: [[22023, 43759]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Komuna e Deçanit' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@NN`OK^FHU@]ZCL_bEh@bEpUjVNRTUVCTy\\DGajIxVz@bGLUMMMBYcQGKPKBWW@qcIVgKYAMXQCO^SIQPkA[PUVqBwTmGMNhZaVQBuaUAIZTbONkR[nJ`\\PHT^NDP',
          ],
          encodeOffsets: [[20595, 43680]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Komuna e Drenasit' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@FUZOVUUODaPiAGd]_aTsGeKBaSCMPS]U]LUBAUaGQO[Gep[P@[UFCCVJr]LGLTR@^]LaCM@RNEfT`GZ\\A`LjBMnnNVVdGbcX`fbZIlV',
          ],
          encodeOffsets: [[21448, 43749]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Komuna e Ferizajit' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@bBHT\\FXKbAZCd`JZ\\\\FPPKNxXFKhD`HJXApOVW`PT_pcSyXUCWsHsOWoXKIMkYYAUMWc[R]@QU_CMNqKKBWdeLY`UHQGB[Q_{\\mEM^FJOlA\\UX',
          ],
          encodeOffsets: [[21464, 43393]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Komuna e Fushë Kosovës' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@lD\\V^AFSEXRlGFNvBNO]KXMV[K_UEYYCUPKYD}@aNcBOMyGcOHfSt`bc^BH',
          ],
          encodeOffsets: [[21474, 43673]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Komuna e Gjakovës' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@dD\\CH[vUPOR@TM\\ALK`IfARJP[\\L@POPJRhLJUrdX@AXOLHLdRAZNNNKVpJ`EXQX@RKRWRGJSKSYB[oDOQQLIPiHs[_\\QKUx}VEj[Z@nKYYUSwELOQM_GMY@SSSEg^_LNS\\kPiHBNQPaFoYeR{I]RJJU^PJBbKXeZWJHXZJBROZs`FV[VI\\WV@R',
          ],
          encodeOffsets: [[20651, 43527]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Komuna e Hani i Elezit' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@RdnMNBJZZ`XDG]TCf^RXVAP\\|Q]GHQMYWMHSeqPSTkaCUNo]oIqPQVHdYfKD',
          ],
          encodeOffsets: [[21707, 43161]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Komuna e Junikut' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@lQPMSaJYVBvbRAbUgYNMnHxSrAVU\\OlBROTJP]RDNWZBIQPO@O[KO\\QIeB_JKL[BSNQ@OPuVG\\[DcCcPwRiR[hQJVhET',
          ],
          encodeOffsets: [[20569, 43608]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Komuna e Kaçanikut' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@rLNM`DRV^@\\QXdVNZBlZdGPNPMYQ_ehgXeIPM\\L~_SaOB[c{RO[UBQWe]SDH^WCY_IYMAmNQcMVg\\KXFX£THfN\\`NBhQZuT',
          ],
          encodeOffsets: [[21619, 43303]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Komuna e Klinës' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@hDrAXGLLZKtFbXlBNR`RFQXCAO\\gZIlJPT\\WD_KIG]PUp@Z[BQfAN@AIgUKSWMU\\goOUYAeKHOGoGITQHQXNP_l_NGXWNCPF\\V`ARQZM@Wx',
          ],
          encodeOffsets: [[20951, 43711]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Komuna e Leposaviqit' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@DJOEooaG[]@eKQacKqdGUNIIOaGeAgYWIS\\]FXbg@MReDIRgL_QUDYPFV]JeAW^zRNNG\\JHSbm\\C^OPgH_NGjc``AlH@XVlZVFV^PBpMTFnACXRRjFPETUVG{AUTQyHeEZYAI_CBSfAVQVFVUTAZOfIHQWVXhH',
          ],
          encodeOffsets: [[21503, 44174]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Komuna e Lipjanit' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@\\HRPbHBVVA^K^VOTDNbTLAdPzHPNdAbM~@ZCdGHSXHz`XchA^EVRhLSf`jhL`@LMfKLWTONLRUQYUS_Be_IOJS\\QCU^eSS}BFsEK_OUXoPWBI_GgCELMXqGc\\IKsKaPmBcNOK]D_^gQOQ]CaDST[DWE_EGPNLDbjA',
          ],
          encodeOffsets: [[21382, 43535]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Komuna e Malishevës' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@PHGLBfVZpPhV[XNLThVBJbD^K@]SQHK^KIqDUDVE@\\\\OfoiBCaMKHO`FMSHWZEF[QqUgRqOMWMADaaHWKOHc@E\\YGSDLfUDWPMVPVQpWJaUcLYOlM@S`NL',
          ],
          encodeOffsets: [[21056, 43545]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Komuna e Mamushes' },
        geometry: {
          type: 'Polygon',
          coordinates: ['@@NVKZ\\P^UXCF]]MBQ}X'],
          encodeOffsets: [[21200, 43335]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Komuna e Mitrovicës' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@VU`DlCZR`DlhPpÛXJhZfBbHJPMJHVrcdLRbfL^@H\\pbVGdkA[XEdW^yZcKs[EDWiL]@aUwdIKWAX_GaOQyIQIEOOSLY@KM_EMQ]A[S[GQT_GRe^]VPhVNXCNJjPEb',
          ],
          encodeOffsets: [[21293, 43938]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Komuna e Obiliqit' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@PIbBnfLJV`AMVZPJRWnfd\\@RPZFLgUQKWQEQ[Lah[QUPCASbQGUUKAUuAEMkHWQFET]B[UkCOjCbVP',
          ],
          encodeOffsets: [[21475, 43719]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Komuna e Pejës' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@ZCRWI[C{LaNSKUNQTAp[VQFQtGAXwN@RYBQU_E[DOXMHW`M`kMOQLW@WR_FoIaHy@wUiJHb[CSzUDSVMQiUoVaFg@aFK`YD@^GV]EL_PMMoZKV_B[JQTYFMdHH_RAXVZBZ`PjLRGzBfYVAjMP\\hYnIbARJXVPEtQThLBLf@JVdAHS',
          ],
          encodeOffsets: [[20808, 43854]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Komuna e Prizrenit' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@TFTTZ@HN`RNKPxFVTVKBMdINVdP\\VEJ^P`QIY`OJH~WAR^NRSVA@WVSbBDIt_`BnEhqQ[DUSCD[XI|C°URI^kAk]EgFgUSCKUUUPOsABOUEMCMaxm[_NYEKPiCmJSI_DaQSmI[]J`YfHJ_`AXUZOtS\\WHIXi\\AH',
          ],
          encodeOffsets: [[20968, 43272]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Komuna e Rahovecit' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@pHMKT_N@kZPdKbVXIRoOUNUXOVCKeTCZHF[d@MKFmQs[OLYMUIG_PJZ_R]OFI[UcOMUcJANULZZmLY@i\\UFw~LV[R\\`GtOjKJRRCP\\pZALT',
          ],
          encodeOffsets: [[21032, 43541]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Komuna e Sharrit' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@\\^nJRTb`CTJnIjDLOZF`Mn\\bwNGUseHSYCobmQobgMUYMWi]G{_QMW@WJO\\S@WUeKk`kTBLR`J\\VJxGPSNSIHCpsd_l\\`IP',
          ],
          encodeOffsets: [[21057, 43117]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Komuna e Shtërpcës' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@TGfD|\\BlNIbPZnF|[R`A\\RHVGZ_fKXcLAvSRYAg_MM[Ge_Ck_YAUQO[UAYS_Bl]lQJ¯V{DWJC\\TDCVR\\',
          ],
          encodeOffsets: [[21380, 43259]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Komuna e Shtimes' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@^DPRhR`]^CPLdMnAbOtLJLd[rHNWwWLMOO[EY[_IDcYaBWL[EGSaAcHGXhCLJePHXlRUPBTYReJYLWBCPfR',
          ],
          encodeOffsets: [[21425, 43497]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Komuna e Skënderajt' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@dXvPTOJgJKnOXWJVIRJ^f]Q`HRS\\H`cK[\\gQ_ZO`BRT|SdkkUYJeaW_adcHUUmMNmiA_K[BHYS_FeQMeBARY\\o@OVH^LJC`[XOSkIYJ[hBPWDER@V\\EPPVhQN[jTFLZChLRDh',
          ],
          encodeOffsets: [[21147, 43871]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Komuna e Therandës' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@PGXLbGCbNBNXrPhQrVRE\\YFGXNTXF\\CTSbCeQDOXAZKfIZQASVOkQGWfOKIgDHWdGVWB[PkEIN]OYJakM[A{eCSHgrmF_As`CJaAUT@XUBQTE^WD]VRtEnNL',
          ],
          encodeOffsets: [[21228, 43422]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Komuna e Vitisë' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@dRnJVLhKC[hSXAJaPShAFWfAdVQBMbOIWPEL]aWPyGB[OEFYKS}Z[EQQ}`[KONJWfgh`fZRONOMcHJNWLXptPtGDXWVTz',
          ],
          encodeOffsets: [[21820, 43438]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Komuna e Vushtrrisë' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@\\T^BNR`FLNZ@TKPPFRJzJPRHbW`XBJLxcbV^@jKCX\\F@KUcSMAW^[JNSEK^M`WPeYEQO[@ecXmIQYONU_BIUeKmaAOJUVYPEVcl{TQS_AYPR`[hL\\_d',
          ],
          encodeOffsets: [[21347, 43846]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Komuna e Zubin Potokut' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@RQhQTAx]VQ[Yhe@U`cJSVCTK@QFaiOMIWDUMOg^UI]JQIUWXmPILIhSPuOcWYCUNMr­jaMW@OBUX_RetTPHX`dlLFS`DAPRHRfVDNRXH\\QdHl^HXZD',
          ],
          encodeOffsets: [[21167, 44069]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Komuna e Zvecanit' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@fB^IEUZOVC`RhKJQfCNQh@Wa^ET[ÜOokg_CYQkD_CUV@RSLUDIT_d@Vgf\\ZURw^SBgRQRBn',
          ],
          encodeOffsets: [[21168, 44092]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Podujevo Municipality' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@zOvkZDbRBVTJT]dQbDVeIYR]F}HMTGEUX_bRJ\\TFx_DgLSOqRkNEfmFQTITPZDVG`BXGTSCQZQb@JIbPCBi[I@_IEJiYKGcQBQPIªJeKeC_BKJEHAHCdaTK@cNA^eToQ]ESY_[JUWkV_DC\\_ACOc[SBQXKhOf_X]NFLMTI]\\BXTNVd@LLtYd]zcXWFB\\clUHFpIPC',
          ],
          encodeOffsets: [[21503, 44174]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Prishtina Municipality' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@RWTAd\\DP`BD[`ClUVX\\IZ`T^FpRfSB]dML@bSDcBGFGLI`AfDfLDGhI\\DlSW]SIGaQCoF]TeM\\QH]dEbcFYUKD[aG]RYAAOcZYWWAYOA[QYSAQVMKSPKXeLKN_@gK_iTegKUQ]FgBWdy_WGGTcHOLDVZZVFL`U\\WN^LMPBVVLHVaRBTODRVg\\KbR\\RFLXVR',
          ],
          encodeOffsets: [[21634, 43814]],
        },
      },
    ],
    UTF8Encoding: true,
  });
});
