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
  echarts.registerMap('阿拉伯联合酋长国', {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'Abu Dhabi' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@ATRDDUSA'],
            ['@@iVOFOBIHKDDLXALPG^FNXHfEfUfKBKX[oUMKkE'],
            ['@@DKeOR`PC'],
            ['@@ARNH^GKM]C'],
            ['@@DtRKFe[A'],
            ['@@RG@_QR@V'],
            ['@@c@SE]ZDVjFZEDcJE'],
            ['@@PEUUQBXZ'],
            ['@@NBFK@OKAG\\'],
            ['@@VTPMAOUCMN'],
            ['@@FVPRGBs]eQN'],
            ['@@BTVENSeQ@X'],
            [
              '@@PFDTdNCOaRgPBQ\\hfDL@NGPjhHPbCFK[GF[JQ\\[`GXOjGPFrUNYTO[eP@FQa]qSuf]SmTOGEXRDdS{|OAS]@QIcaMw@KQ[PcA]FSPaTeNINSAUOMDWMihTZVNxNVPd^dRj^jAlSTF',
            ],
            ['@@SHDVLJPGK_'],
            ['@@YIeHOTHHRUrJDM'],
            ['@@S@[Rc~WJOAWTFXZXfLbZhObs\\YNCjuEOQEsVOEUc'],
            ['@@XWYIMJPX'],
            ['@@PLzNDEuQWA'],
            ['@@@MkBIT_HTT\\nFLHpAZFB]KQC[HYOAadWD[NSGKW'],
            ['@@TYRCEUYCWVCPJRL@'],
            ['@@WRDP`NJ[CUQB'],
            ['@@ANPTpTbd^LBWYQJeNG^cSEONmXsLUU'],
            ['@@GMOXQfOJRlARMPHX\\AeUM_SQ'],
            ['@@MHZPHOSG'],
            ['@@@FPLTZPRfEV]TmKUCcKSweS[MTQUwGR'],
            ['@@pjPYF]EMcF'],
            ['@@CP`Ate¬ciQaHb[DC`'],
            ['@@OFIdZB@k'],
            ['@@HXbN^OHS@WIOsFKLET'],
            [
              '@@¦YÌk^QĴţ¼Å¤k[vRXDÂGDvJjN^NPÆ¾@GdJ`@jLXLÒpÜNHTW@GaBsLaDank£ChP}N@Açua_ocQAK]AW\\EVFdYkjTbJìNGQPAB_T]QW^qhihFoGqCcKOsWkYYCQM[NeJg~oG]LY@qWyU_¡oWQßU[XYFgLQRKV_RyB[EyHE_viT[FeCYF»M]kmSYUosm_kYmoSKW]c]TíM]©õ_u}[iISAqKYJqW]AqF]EQDOCcBQIaHLMDcC_KQHeJOEOHqMwO¹SCÅÓǃrčZǕtģ\\Ɓhțz˹űf˛فðĭŢŁŸƥǮȱʜƋǊġňµÌ@łRLCTNXIL@XOJRGVQDANTLVBLYZKTeCUNII[D]IK@mLUAcHgAQTDdhN\\F^KVDXGZMNMvRIBWTYEOVaRcFSCQHaZKRDNN@RK\\DZTRR`TVz[PWMiN_Q[JgSWB_IMJqTcDeNa@OMiFkfuPElcbErCJGKPFCXLPXJ\\CRWZ@XGrD\\ATWhQ\\B`IV\\rQfEnF\\A|DhLFJl@XJpN|VPJLR|htXR@JJfHz^RNN`_\\EAQ`PNRMGQDMVOTATPtHfZ^ZRERQBBpHNxf\\AhMNQFW^KTOP]JjGXBDNoL|ZjKHOhAtPjJNSTAvRd^ZS~SlevJzXRBLKNEBKNKJPPEdULAlHHJlTNAV]XSrCZ@MZSHAZ`PRMPgbeXPBZnWXDZT`EzBt`NBhQP_nDdO`GVKsN[I¨J\\HtTFLjQfE^HxE`KAVnJVMĂ^zLMv`F´jLF^K\\L[\\_RDHzMCMPKTHFPXI\\DnPRRHRVBPPTBRJCRuAAZ]PQEKAZ[QKUCIPM_aI][YAORgFMJGT\\TTEPLTMZFFaLFGZQJARlOBP_VHN`@bYPGXFFHPLMJi@[XRZXATMNLcNa^G\\ML`Pvj\\LLAC_JMXQFWruhaXE^OXFLGJT~JRCpB¼^\\jbZ`@DVAORXJ@BfDXAARY@@MW@KPHVGdLHzAAHVVCNJREtfNLRC^MNmLXTHZGJdRZ~BZU`BTb\\V`bHDXmPH`SDVXA\\gRbVRAZV[RRX\\X`|LJRQrQOjPj`C[{C_LMK]dLJTd`S\\FPSHMbdFdR^FzrZNTRTFbT',
            ],
            ['@@RQcIAHTT'],
            ['@@DEgKAJRZAPcNQVFRTAdRpGNMD]IMeMCW'],
            ['@@TB`OeKMZ'],
            ['@@GNxDI`VIbCXU@IgKKI]BALaD'],
            ['@@IEBAGE@M@CPUSKGRLR@TBBNH'],
            ['@@DBrakOUFGhTB'],
            ['@@]PQjXfZXLDnWPQA_yEIHDM\\'],
            ['@@DJ\\ANIX@UTQIQ^mVAH'],
            ['@@OKXIIQ]bUNDZmJEV[Le'],
            ['@@QOMXLHTO'],
            [
              '@@VKGQFIh\\JXbXFNSPLXAP^JNKMQZUBOGmn_SSNU`KZF^I^AFM\\QJ_GKcObITaEVuhBQRBJjJUPJP',
            ],
            ['@@ULUBIP|KEQ'],
            ['@@MJRXV@DO]Q'],
            ['@@bUBOQQq`BPTCJL'],
            ['@@SEXpXTL]MEYY'],
            ['@@CSSHDTTG'],
            ['@@YVRbRBL]U['],
            ['@@IPHJZGEQQ@'],
            ['@@NLVCTNP\\XACUDSS@UOYJ[@'],
            ['@@FIC]UFC^XD'],
            ['@@iMAJ\\LPG'],
            ['@@KFOXFXV@N[MY'],
            ['@@QXH\\\\ATYGQA_[Z'],
            ['@@eBUXnbHGc[RUXA'],
            ['@@@J[JOX^JZUNc`{WDY`G\\'],
            ['@@ZLldLEE[PgMKNYUCkZWFKEc`LHbB'],
            ['@@QjAMUmNKGaPST'],
            ['@@ZNAN`AAQMGg@'],
          ],
          encodeOffsets: [
            [[55149, 24658]],
            [[54438, 24688]],
            [[55151, 24746]],
            [[55383, 24743]],
            [[53236, 24750]],
            [[54819, 24785]],
            [[54711, 24777]],
            [[55109, 24811]],
            [[55110, 24825]],
            [[52772, 25001]],
            [[53248, 24797]],
            [[55631, 24840]],
            [[55081, 24813]],
            [[55754, 24915]],
            [[55727, 24880]],
            [[55539, 24841]],
            [[53857, 24849]],
            [[55107, 24860]],
            [[54546, 24858]],
            [[54474, 24896]],
            [[54361, 24903]],
            [[55494, 24951]],
            [[55620, 24903]],
            [[55683, 24958]],
            [[53814, 24888]],
            [[55748, 24958]],
            [[55630, 25021]],
            [[54149, 25744]],
            [[55500, 25840]],
            [[56208, 25509]],
            [[55891, 25055]],
            [[55920, 25053]],
            [[55829, 25084]],
            [[55788, 25021]],
            [[55603, 25065]],
            [[55727, 25056]],
            [[53560, 25069]],
            [[55800, 25061]],
            [[55782, 25054]],
            [[55755, 25065]],
            [[55620, 25073]],
            [[55881, 25088]],
            [[55830, 25116]],
            [[55714, 25089]],
            [[55645, 25074]],
            [[55711, 25093]],
            [[52963, 25161]],
            [[55958, 25233]],
            [[55808, 25201]],
            [[55965, 25272]],
            [[55982, 25337]],
            [[53826, 25370]],
            [[54342, 25470]],
            [[55979, 25388]],
            [[55801, 25108]],
            [[55725, 25129]],
            [[55825, 25168]],
            [[55920, 25200]],
          ],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Ajman' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@Lcna^_LCaOUMeDWQD[VCdMHSbFPCZ¤edDbÞm'],
            ['@@^KPKDaSSQCWSOLObJ^bZ'],
            ['@@`QvHlB¾mjEVKBKGE©IKWDd}dGJVXR^RDjp'],
          ],
          encodeOffsets: [[[57403, 25469]], [[57327, 25940]], [[56804, 26062]]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Dubai' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@fJdCrFCEeGKQmYG[KGqODWHCXNfPVb'],
            ['@@FhZdXGcOSs'],
            [
              '@@Z_XAXLĦŌ¥lėX«A¯FIŝLe^«PyÑoWKiK_@cIH½@OÅ]MiMuICÁHWCuQ\\£l»ÆĳŤ]RËl¥Z^JbbURYGNdVIGQVQ`TtpVBzXYlUHPVTDH]ICR_NC\\R\\F\\XIbtJDI^\\\\^trRZPJflZhVdMVFJ^@EXYDJf^YhbGRQVJPVM^IJ^[LUTHVRLbeNABiMMLKTVKHH^ZQB_PDOV',
            ],
            ['@@TLFOeWL\\'],
            ['@@\\FNI@SVQGG[XUIOLRLGL'],
            ['@@NcOKBp'],
          ],
          encodeOffsets: [
            [[57453, 25416]],
            [[56273, 25597]],
            [[56679, 25921]],
            [[56369, 25644]],
            [[56444, 25731]],
            [[56457, 25831]],
          ],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Fujairah' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            [
              '@@FDfSVF|Et`dFx\\D\\LtpXIKuLCIMW@sCHÁÅ^YGNWPc@iTMC{OUcKBYXHJ`wTUCIQ]Y_SEUWq@AQYSJTCPMNUJLNBZcPYVCLJ^lp[PUXgtaTUheDE\\O\\AfT|J¤AVS@LBRd',
            ],
            [
              '@@vKPMN[@]HO\\BUZH\\PVMVJRAnQJDfSEuDa`sUHsImJgI@c]aeaSyQ[WKsEGeOKOUEa@WLFZRYAc]QEHU\\FRCJQTC^BFEU_SGkICOJWBUGMOAM[aKkLOP_CSOYBcRsCUBLtI^SbXTRDTTCbOL]LLbP^JdXQP[NEzGlSVAbJ^h^KLDJbCvMBmK_JMfld^bH^KJWbWTMBgYYIiFuGaJWBKJG|QlHNQpD^TR^@PIRBrRRfvjfQZJXPpCZHVV',
            ],
          ],
          encodeOffsets: [[[57562, 25846]], [[57505, 26277]]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Ras al-Khaimah' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            [
              '@@VAtDdQZATP`DPOlKbLN\\PBHNAVIXDPlJTHV`EF]ASDIRQD[EGVRFd^ZBQEYXKQiHkNSD]FCQcKA@TBUI£S{BeP[F[YGCKL]d[JQNoPY@Q_]GO@[FURMhO~CfEVINMDOISOK­SCuDqEcDeIKD]`mbKd]^AldaCFj_LmjRYnUZDbIrpFRRPSdidDjFJzZDT',
            ],
            ['@@RMKKQLLN'],
            [
              '@@UUYGoDWOYIeRuiQeqQQAOJ]@SQC]RoGMRkH{LIXAbIvHjEZJhZNAXSXaLIG]]akcNe`InLNADuIaKC]L]gaIUBkTyHMFO\\WRmXYAK]@qau_lOZSVk`aLEJ^XVXAPzgfIZAbHzC^M^udwbQjqbOZNXPKPLSVXTRFPC^PvHHMhVRRZN\\\\LS[[NMjLAVFR[BE^ZTLXRMRRXf\\zNJ\\GLTLA`TM`[KCSOM@SYHXh\\TffRzNjJTIfNNTVFVaBYTePMCgRYNGSUE_eW^CaUOMSTMy}AcJ]Vc`[G_[OUUEeNiEsFSTK',
            ],
          ],
          encodeOffsets: [[[57330, 25831]], [[57075, 26312]], [[57505, 26277]]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Sharjah' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            [
              '@@fCVgbShsVW\\OZE\\DdLPVD|SN@jOdMXZHÆ]H}JUD}F_oGOIg@`wTUCIe@GcUG]CoPaBAYKMeF}DgPQNEV@\\HP`^@ROZMpIRc\\K^DLZH',
            ],
            ['@@JLXDH]C[[A@bIJ'],
            ['@@[OWNV^^['],
            [
              '@@HI~ccXCLªJHFALULiF½nkAuG_RT`HTTJV`DXRHHNr]PCdSJSdUcnK\\BNON]`Yx[TOP_JuNSHgTOXG~AdJZPbF\\NHZGhMZFLlC`kbv@rL^ZBnWIcO]KaaYI]PaPKTaJ]KsCSyYEICijcTcQOEQoJqCaVYZmWF¥¹@¯FģNOMGÛOz]¬KfŞEJB°W¬kĘŋ¦ĥWKWBY`V`P]JN`RWjBNXVBPp',
            ],
            ['@@b@VFRSCIXMK[gMTGlRj'],
            ['@@IcaNbxJa'],
            ['@@Lt\\XzRbTbfd^J@FUCWOoMCB_VQLHXYDYKUoWGHkIO@GKUPC`cIUNELUF'],
          ],
          encodeOffsets: [
            [[57512, 25655]],
            [[57608, 25880]],
            [[57631, 26229]],
            [[56754, 26009]],
            [[57555, 25916]],
            [[56707, 25951]],
            [[57611, 25939]],
          ],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Umm al-Quwain' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@FRZAO]ON'],
            ['@@YFRZH_'],
            [
              '@@PYraRixavcN]D]GyBaJYheyBOUW]WFIbKl_TUPYkDEKNYHgGY[MaEYOcI}BWHSPGhMTIvO`SPw\\_ZM^MP[AmLdcVITcTODq^È^RRMKKUADSMu@MPMfCXHlHFK_GHMZTNBXV\\FDNeJDNVJI`f\\@Nr`LFFPrRVN',
            ],
            ['@@LUUMKPVT'],
            ['@@iB\\VVJLWSI'],
          ],
          encodeOffsets: [
            [[56910, 26156]],
            [[56954, 26186]],
            [[57072, 26262]],
            [[56976, 26231]],
            [[56957, 26220]],
          ],
        },
      },
    ],
    UTF8Encoding: true,
  });
});
