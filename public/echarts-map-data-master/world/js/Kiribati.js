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
  echarts.registerMap('基里巴斯', {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'Kiribati' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@_jPHPq'],
            ['@@zJ`N`Gj@^W@QcIc[cPa\\gHKL'],
            ['@@mBSR@NbXNA\\kIK'],
            ['@@WPcb[VH`¤HRLdC[DeCIeMGF'],
            ['@@YH@VFDkJ[IG'],
            ['@@ahanNLp}Fc'],
            ['@@_TNPRKfgQISZ'],
            ['@@XB\\UIuKTBXSDKZ'],
            ['@@]TQn{rmlWRLL|GPORwP]neJi'],
            ['@@HOUGWXYJQZTJE`O`QRcFH^`QjN_jq'],
            ['@@g~]Ty|KbaXQHi\\YHMVPhfkHWpO^WNaZYFWPAB]'],
            ['@@IRPXV@RUE]gJ'],
            ['@@j_psnYT[HEaDa\\wPAoSK]VLJPKNNBZOzWdEtDlIjA`SVYH[V[jUFS`'],
            ['@@OTTLJo[OOWCdhRl@\\'],
            ['@@FXlEBGbUkCiP'],
            ['@@OWYD@NTHVA'],
            ['@@PJZx@fY\\{X[`Q\\JbGNSDGVhMFIGg@[X[fQjMVWFQKq_oIB'],
            ['@@aGMTVBZM'],
            ['@@KMeBf\\AnNAD[C_'],
            ['@@WLIZSEYDKVJNdMleZMjkA]MU[MWSOUuËSADV^hRrPfzpLL@ZQ^[V'],
            ['@@KAGZ}EK'],
            ['@@RkSBSjOT[ROAUMQ_GZLTVLVFp_²¥'],
            ['@@W@OfJDRaLG'],
            ['@@fEpJtZHPPFf@dN@PJ\\KPDBld[CWKE}L[EqDcMeAg]sW{ASH'],
            [
              '@@NHfIVRRfRDDTfBA`NRONEETmrW@YIEKY`FXXHxBzOjsvaxO|C^QN]K_cMSSW{FYAaH}V]XELQrWXAVQTCn_`CVKzMXcFGYMGe@eI{T[bmVsdWVaJeTcHiAN_JypMVMhOR_RoMOISDSTQbrjJXpSeu]IWBWVMFXpB',
            ],
            ['@@diF_zvuIIq~_rW\\EZ_v'],
            ['@@XHFLpL\\ADHWNiAiIqYQSgQOOSRPfb'],
            ['@@Tm|ITNUdLBVcOQFUDI\\DT'],
            ['@@IR@\\O`]EERLRRDNS`©MN'],
            ['@@Y[KTdfZEDK[K'],
            ['@@TOH[LSXKnMzLVXZDLIgwGiHOLcnKj'],
            ['@@n\\VFLSuIUKIO@gFMfSEUaZS\\CTZn'],
            ['@@Nq\\S\\@dLTFuVW\\MnCfU@G'],
            ['@@@KUM_BbARRHhCzUDI'],
            ['@@HaBYLY^IEM[PQ`AlQ\\MFR\\Pk'],
            ['@@^Cv[]SWWSTIx'],
            ['@@KRqnNPZON[Hc'],
          ],
          encodeOffsets: [
            [[-155454, -11720]],
            [[-159677, -5767]],
            [[-175339, -4574]],
            [[-158645, -4146]],
            [[-175185, -3221]],
            [[181090, -2735]],
            [[180205, -2561]],
            [[179255, -1504]],
            [[180729, -1438]],
            [[180251, -1394]],
            [[178988, -1284]],
            [[173596, -886]],
            [[178561, -604]],
            [[177805, 180]],
            [[177708, 182]],
            [[179804, -1988]],
            [[179808, -1987]],
            [[177957, 396]],
            [[178117, 320]],
            [[177193, 1020]],
            [[178117, 354]],
            [[178091, 441]],
            [[177195, 1510]],
            [[177120, 1365]],
            [[-161280, 1926]],
            [[177121, 1949]],
            [[176953, 3161]],
            [[177412, 2047]],
            [[177450, 2054]],
            [[177148, 3460]],
            [[-163186, 3951]],
            [[-163207, 4018]],
            [[-163073, 3959]],
            [[-164199, 4794]],
            [[177121, 1641]],
            [[177573, 238]],
            [[177573, 238]],
          ],
        },
      },
    ],
    UTF8Encoding: true,
  });
});
