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
  echarts.registerMap('意大利', {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'Abruzzo' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@bE\\KRDHJVH^RTOHLGVHXVNXBXE^D^\\Cp`jXJJjR@TWtGLLbApVHQNIzHZPpPDTRVGLhNl@NFhBtNXLJJtNZ@xNZ@VHV@JCR@Kd¡VoVaNOjVSd{hsnoZanil_zyrgZORCHM~kxckmjORSREASXWFS\\Y\\S~ch]AUNQVKpSl[tWYØojEF_EKJyI]RS^W\\MrSYcGSZCPIEMYS[IQKaGuu@G]ScaEKDOGamceIQICQ]g@S[UKWUWcAW]KEDMeQWeD[AEFRXQfOITYBGTOHcZkEC`_KFKKQ]FAN]bETWEUBc^KBQQ]QQSeM[ogIS@eIg]deHYBcLKdAPKMSAS]DE`IBQSEQqGYFMQRUISWQGVO\\ALqAGIYYAesBCOQYqXDYEMIQJO\\IX]@S`]KsHONOA_FQXSGK@QKaNW@ALWJ@VOTQJETUF[UYHSZiN]@UQJU]U[CWS_ESU[L[@{XDNSPM\\kDMH[DW\\sNgPUEI]WCWXEpFVOLLTPJVhKPk\\MGYJGPUVaTSKSFc\\wPQT_Jc@aPaLaVQHVQKJUOA]BqNIPEXg^C\\MVNjPXHXpHZTHNTJN`@NKXCNIi\\PZCTOdK\\[XC`PXHRIjHLT^NGJXNXCTFMRhHX@ORgDUPSTTRKJ_PyDSJOPET]V[JOPKTEK@oXsfePbZhXJPIVgN]PY^UN_Pd^jHrbMNLvSHSXCZVBTVC`dTATlI^@ROTC`VpANWjF^L`ILZVGVLhXND^wNW@[`KF@\\PZ',
          ],
          encodeOffsets: [[13680, 43721]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Aosta Valley' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@AQJCGSJwNMCQMIEQNIHQWKHeGUVYRMFW^SdK\\CGMTUeoM@M]NK@STGAKNUZKEOmGciAWKEYFaEWJOIUBaKk{UYQKAOP_EeDUI}bYDqOGTML}ZWAaKQOQ@qNQ@QI_ACI]WAKmQSCBMiKBE[QYEGLOFQGaAYMwDUG[FKa_IWOKUMISB[T_DYAYJ_QKZLJKj_S@OMW@SUSGDoJyCA\\PDANDWFQNJV]\\J^KVBPLJAN]PEHPrEJHNRLLNWP[DKPMSL@N[JHJGXSKSL]@mRIT[HQ^URRZQLE^BTGXHVNJBVMTTZBJdFPHlSRZNJVIjE`J\\@VZnRd@RNLXEZVNPVnJhY@SZI@If]EER[b@`TDHfNVGEG\\Q`GTJENRTRHBJXFZCNFVGZVLBR`RJPG\\ADIZA^HXGRMdMLBZZRCpXVV\\HbBEXNJbJpHHGj@FJI\\RTz@FULGnCTFdCjNLAZUJQdCVMCY\\W\\BZ`lEPMTENMREhT^Kh@PI',
          ],
          encodeOffsets: [[8053, 47019]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Apulia' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            [
              '@@NEpEEt@¨B¶GPO\\IxE¦D¦JHü\\NHdCfKV@LKXABD¤JJxJTCJ NZL\\AJHtK`DnKR@ROXI\\WREnGLWTQfKKICoT_LCESLKAiDQKEESDI]OMCIU_IEM]IOBGO]CY[_GQ_UIi[UEMI_EoWkMYKMIWKm]MiAsFcLelhmVQxe`OxUfIäbG|_xSR@RGn]jUXG`CUhG^IedG`UlW^G\\BHIfGBGZ@^I\\UTALInSHKRA|WVB^GVDVEVM~UrGbGPG\\@bYbOlG\\HNU\\BPIfMXC|QxUrEVI`GIhQ`I\\Oi`KnGTQ^SBMbMhGLIfSbKteDKTEFKNCXW@E\\c`KlKw[fUHStWxS^GTKbEWfCbKWfSFD^QjSBG^KTM^I^CBKPI]¨QE\\JXeVE@IQMNGZH\\MDJT@dUB]PSjaGIBUMMDUPOh[RELYJGnYHA`_XK`CNIT@^WbATIVUZG^WV[TIJOgCIX[i^YV]RQn_`MNM@[VGNkRMPeM_FOTQRWDYVYHORBHMPKSO\\c[[WKSQMg@SIOUMwWGk_SEUSiA_K]CeGKJIJWEGB[QwGIBSJMCOimOHaKSHMVeLELmReTsC{HICm\\WBON_JMNm`WJWPOBUPOVm\\af@NKPSHgv\\DPNJbEV[boRTD^\\NjGfKHS^ITcRMAGPY\\QDelCRRdCL_V@^ORSD[ZcX[BIIsRg@IFcDSAmFWH{F}D¥GsCm@ÃIYbJQXsJc@_DUNKROAWNICSN_B_NAH]N_@STQ@INOAo\\aBKHVTjDTLR^AT[h`BDGbD\\IZAfJLLJVSTm@eSBKMGGRDRYHQC[UIQSAg@MCSHKR[b_WFXGFaPaFu@[CuKyOyWqm_kaGKcLqb]\\@\\MVSJ@oLaZdnARUDSTRXSTQJDZRhIVZRW^G`bDVWBeZPTHKbP¡n[ZCWYBHLiTqCXQQVYIIQFK`KF_KKMTGFaI@}zORIG_kaYgcGYN[rKJ`~{`YRIPWPKVQJWbMGFK^W\\VaGOKIYWMylSFqL[PZkJMHI\\ZCf@LD^^RXGZ@ZZJET_Z]PQIexFNMLmALNKVcDGGWDg`MG]`SAIKeKWJSYQ@SMOeSIODYK_\\mDGKQGEF_NYFUEgDOA_O]_KQCSYB§dAH_EaD[VORYB_RW[[MMAWT]@oRaU]HaTCNSHAJsjMAUNCNBXZPNTLBx^_jAZJHTAXDHVWNOVSHWBIISCIVWDMRcAiE]BO^SJH^cBYRaBWHIZBJMPE^VHRVjFW\\J\\XHIZkAWNeFGLBPYAAVKVaTQTcT[\\uJEHBnPZFVCRHTUjKN`^TXtMNSbM^ADZhLH`LH`@jZVAHJ@RXPbH^NKNYNQDITYZ@PZ@ebJbZNDtOLQZH\\VHRRL\\TLAXIHCPLr',
            ],
            ['@@TBIYOIQRXP'],
          ],
          encodeOffsets: [[[15502, 42935]], [[15859, 43132]]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Basilicata' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@DTLR^``PPBhCVFZE`MEFRHHLnC`[ZLPCTJPfTNR@TZXIfLJLTB^_NHh_XCHHdCLUKMnBNKEMfwRJ^O`YFSYI@YHYQW]]KCe@YDJ[NGlIY\\OrKTEzkXNJZPLbHUX[L]HENXaRILUXOJOZQ|_}_LI\\qZMdHhbZ`lJHPQ~yJ@EbSHLN`LLEL_REJJUZRRWrDjSGKZADX\\Y¢maOGLOSfYXACUaH_X]YQJUQgCYRITSQWTSVCBQcmbYpK@TINU@[^[radKUaWUkskYeYQUW_[_S_SSseXMFUGqJYMUHmMSK]VYDOIQB_PeBcOY`C]UOJUCeFUQOI]MOAOJoM_igCMQQDOGKUIS[VWXIIeWDwvWHkC]JcGYMq@JQ@OG[eLOP{XieMLUEcDYGOK{BGEMbIJ]NAVONO`ZfVFHLETOD]BEMuMURaF]LQBc[YKOZYDSMUXYFqEAIUQY_]KSU@SKaSOIVK@SRA`ENQHERMHIPUHBL]HMR@dYVc@AH~XARMT]FpPzEJL\\CVILAP`RETbPAHTXRELLRHXP`@PPMHEPDN`PKPBVLDQTIP_FQCEPkFa^HLSFahCdNPBPjQK]lMD[VqROLSZOLBTMBKNSBa\\ER\\RSNDbMFFLMNAPRXKJSCQFEVMF]AKPYAOV[HP`NHDXrRTPDP[DENcDYJILmPMROHQV[BUNDXG^HZPJUXHJBZOEUH\\Z[BYZ[HILvJZIHLEPA^KR[@AVlHRSLAZL~IX@PORAXNILARVVLbDPXRlAHJPhbFZATFPIL@NMHCNJNWTCZMH',
          ],
          encodeOffsets: [[15916, 42042]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Calabria' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@TPLb@TTV^LZ`VRBJrFZEVWTNZCPYZLd\\RA^KbEVQvNFN^APCFSGKUEYeP_PMBU^MJINaHF|APLZHdCVFNKjf|WPOfKH\\@PIRr@ZNdH^IlDXGxuXCJfWJUXT\\VJHLCPRRDNjhN`IpBPNPJ^RPEVDfIVVPD^Z_dPfA`ORAPJZC^UTLnNVGZNrIVHNEfWoeciG]DSIYTsDiPiVWCMOKMSOGcaaciuSSWaIUIc@mDULUVUnSI©KINS`GlY]XGpGbABPBIV@bPfIZWlYTORg\\WnYHI[JIlO`UfMjGGPENMTmVY\\QzadILIlIf@AMciCSK]aCYBaKoDWHQXYLSXQPOMeS]aIgCWFWHIPBBMXCIQJcXUtYzMHI_AcaMQI_D]ROWSUIcaWQIMUIMMKTQJOAQJmFUGQUaVO^ULQFoAÃS¹]]{YauaYAkaQ[mmIKSu][Q]DUVUN@JUEmHTBcDQAwFoJUHWy[]¹§ue_K@uOYcEUGcU_g[S_gUUi_QSEQCqMkEiK_BWk@E_qegqmaEUDaCkMQFDQFWBEH[BEKB­Q_DmGu@_RcFgPc^]HSdCThXFVQZHXcTE`AVbVJT@NJNKNJPENWV@ZMHCFRRXPnLVBnA^HRJdpl@LXdAZPvZNRRJTCF\\vblZ@CNL\\X\\OJNzTjFbCL]J[TOZKBMRWHSVQJILcNTxVX`PPNTAZNbD\\LpHVP\\`^RjAVHpBLEdEnMjCXLTCdPZ\\\\HRLLP^xVxLtD@|CjMV]D_PYRSBKJI^MPETOXWPktEhGNIbGjCFG^SlGt@EXCI®M^OO\\Orq²WfYZ]XUdo~U@QV[DUJMTMlGJIfMdOVKtMb[PQGHHPEdWQSLBTOHZZPBD^QRBPGVo~',
          ],
          encodeOffsets: [[16135, 40881]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Campania' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@Hh\\BlGJCZ@NJNI[[OHWAQMKD]EOH'],
            ['@@RHBPMXXRPbVELIfG\\FRInINSAQJEBOSOm@WMaHUEWBOEo^'],
            [
              '@@Rd^AJHtA\\^HRMXNBRNbBVLXEPNALLR_`KVHLQfPbTJUXDL]PCPtTLEXBVPVHjHLdAzQHMCMMOJKZCRMDO\\_fJnDZS`GDHUXH^MR_^KNPZCRPDPVPJVV@RNDvq\\GD`NJbC\\DXEXB\\APWzB^S@MXEnY`@WP@VKXHRQdIbBVQV@BSVeXEJKdF|K^ZRCZ[EIdOXJ^VHPdTZEDLGL^DVH`CDGZIlNXB^RBPLPDXVNT@^KHK[VCVFZ^ZLJnLNNnHBT\\BVNbSLUBUZBAOHKfEXMlBJYWGI[X[iEQUUGF]NOAIJYXGbAZQdAG]TIP]^AjFdBNQXCJUTDJJXATGPUXMGUWCSBIGBY`iw]KAMSYOAWDMVMNBtiBITGDMbS^GbVpQ^@XSNB\\NX\\`QZAPQ\\UbC`FBG¨cZANGDYXSIMDMNG@MJKEOBSEYgaIOBGQkOWaCUKUBQJKWMQBOPW@}JYKKBQTkGBU\\@LQB]FOGKYJuIJK\\GZY\\A[YVGPFAYGIVWOIGYH]CWVM\\ARUPGNQnOJKZIdCFM\\CCOSOqQCWMGO_\\GPUZBLO^BNEFURETDLIQWBONMEKNECaTM[QFQb[TALMNAASPKTYPKrQ\\UNC^kRLiAOMODcbgTEGKb]lEFORD`EJORSKCAULO_OCMFONGOO_@WOQGKKQFSWBGaOFS_QBOJKDUK[FIyoO^ENSBQ}WYNMPJXKHOIcLKAmJMEq@wMSIWWMUSC]KGKskOYqDcJSGUDeNchQLkCEIYCUNbJBPE\\UfORmPYVefMJoDUP]LgGY@gQ_NKCeRCLQ^SRIBQTmFOPSHW@IGSFaXCPFLpTVRFrCZGNJb`JLAVT^FNRD^CZI\\QdkqciU^q~_`spyl[RuRQ@WMcGMKQ[UYWAyR_NU@OGQS[GWMWWEFEQKODEPoVS@UGWKMD]GGE[A]QAEYMKYCAKQG[BEdNJH^FBdt\\MVB`PRDLLB^VBZNN\\VPxJLVIZM\\]deNQE[@ePUVuhm`ALe\\WNZQ@UQEKeDUG_gBOiOQH_hKDe@OFSACPSHeAWIKQTI@WJMSK{DORNbD|M~K`Sne|SZkpQNWZe\\S\\IFGZWtYt²W`_`wp{n',
            ],
            ['@@TXBRvE_O@MaKIF'],
          ],
          encodeOffsets: [
            [[14537, 41515]],
            [[14184, 41689]],
            [[14094, 42214]],
            [[14336, 41726]],
          ],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Emilia-Romagna' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@bEtFS`DVhaBQXC\\BFK^@HPnF_^JJCNVHX^WPOBy\\@^~VR`ZJhVHN]hG|U@[NUCgPJNYLL\\LFDVOJ^PZBPPFVVNAXRZBLNNTALJHVJHKLLjIFLPVJHLVPXBARpAFXtBXD\\J\\BZUJULETDZRBLUdERHR\\BRWN]bGbHXTFdTBRMJSE]M_ZKhD^IXSbIRI^LTTTHHRKXC\\FBfKVa\\O`ARGDOA_NCTPFZKTJXRFXCXMVYR@ZRBXk^IVbTrPTMDMKWOG@O\\A^NLLf\\fNXO^ad[@QIKCQvaN_vNF]XSX@NF|PZTXAJUhGdL_V[VM^F`CN_~QdQL@f^dF\\GRSPi`QfC^MjMfUjAtCjJPBN\\XXdVT\\NJRVUAYbZBVZN\\KH[LSKSBG¬QVKHHhKHH^U`HLQNE`HCOxXrCTLAJbDlbTFE\\@\\E\\\\nKNBnKJMpWvJnB`JfB\\HvKPZb@JLPGZHTMhKLJ`HlGBMfDT@EaFIPpDfAr@ZGdYbEVUBOTSjAVDNLflFtRZ@VFHRGXRRJl\\tC¢AnHZE`@XfClGZI@PMT@PHXKPHHQ^EH]TIBO\\GbNPLPAJOZMhB`EZX`@JPlCZYCMUWH[AaDS\\[GLIFaN[v_hQIGeFBPONYLKNS@MV_^yAGCgcLK\\AKQmwQcKCwBYJSJ@@]Rk\\aJkFKBDSGSAgDcHQBYFobHIPeRL_ZsHkRoTgr\\Qhkd[fclcp_ZKZEFJpqnismvYlIX@JKKICW_cIGFMEKNaOKGQTMMWqEGK[@I[FQOMwFcKcTANTNYBKJD\\[DHPIXmEGYiKMJGPXZOT[AUVaNHNffERMRL\\CTHROB[QmIoYUQaBGIW@DUJEHSKQHUGMNETgNOW@YHMGU`GKQOMC[DCUg@KcUGU[MaEJOC]GMkKKBOQgPOEWBAOQE@QIKSTWLS^_MmKcHQIUAUM[FETOHg@IHQA[LgG[NgNI^cFY@KLDRIJ[IgDKNaCIKPBHYVQFWZsPCDsNUVUFCTNbEPNTaNK@]TV`GLSFaZO@Q^NTRH@NIN\\JXAFNTPDbZ^xlFVRJJbQLqKaAqFEMwaQZyPYAOIMFHP^DBX\\NEZWAYLcCSNUC@MOK]JOCWRMC[X@LOJSCKT[BMPRTETs\\YCeYO]MKaH[@MDeUEWSSaAFIYIIMQHAIG_IeD@SfOLKP@ZITOT@FWW@SM[J]EiLmFUJEgS[IIK]FsC@JuDi\\DVTF@ZMB_EHIaMUSDG]gWS_GU[eDNZCNWPaPQBcEQXSPUKaPOP[F_VKT_LC_F[AWGSHUAIHOMGOSKFI@]ISLEPWR]JIJmRMVJN]\\iTIPRXUNWDKLMEQDWGMBcRK\\KBsdiHWEuNSRWBUG]OaGc\\M^QLUC]\\KAwlAR]PYDyGQGKLsVEHcLWNYFq\\KXX\\JPSbaCSNAZOFJYGQHaEiDeEUB]EE]I@g[SWccUMDSWE@QUA]HcQEKTQ|MVgDoZKJYDUKKLkLKUKEUF}IS@iWCXOBGKkA@TNTXHALTdJHCZZE^HCdPZCLHVMVSNLRSL[H]IGTUGSNYHF^IHY@IQSFO[_PU@YMqbQDQXYBBIQQ[HoBRLAROJaAoICDCPXM^BV',
          ],
          encodeOffsets: [[9422, 45759]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Friuli Venezia Giulia' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@GVcGGEH~@LDjFJW'],
            ['@@KCIOuY@I}JZNDJ^AJNTDdRLK'],
            ['@@UHGLZJZUUG'],
            ['@@@J|@\\ANJZ@BISQ[@SJSEGF[HEG'],
            [
              '@@\\HJNXFKRQ^IZFLGGchIZJnEXF@^MRH~OZFPE^FVK^A`JxB`M´K^MDG\\IbGPDneZPREXHZGXFXKZAnbPEVFTTOAUhG`AVFlCNHnJDS\\QxLbCNYXBJJTBGLISLEfEpDD_YK@aLE_[JWIYYKIDk@KNcIaEc@]QGKG_QUmMIIUDUIcY[@cSiDQECKZgSW]@SOFQW@GKwCJSLDLODaJYNSdQMYOM\\MpHCZZBREbDbGHKEbOHSAMPG\\NHEnBDIfPvONSWWBOWcSCUUmWIOaOOQUAcQwaWBOI@S\\KCQWcaIAOLEbiZ@VMFKdCFJhCV`XLxK`JTKSJUikQaYGS]NKKEUiCO\\OHWJGAWdIZKFXANMXGn]rUVObBFKhC^OXc`QNMDSGIDKXKZ_bUfSTE`QWQyYSEEWUGGQWC{C{H\\kGKV\\JbAtIPK\\L@PcJIfcMMNARTDVNQVObc^kPAP[Rkdj[\\OCkFiR@KcH]Nk]IOBQKS\\SnMMGY@sWkO[@OLkT[KYTQDcEyVkF@FmJCFyFWCKJWE}HKdmKQNQABSaBCOSBQKMHBL]PCKWIJIUS@KaK@MeSLo\\ATGZ@|RDQq]YYO]MJYJ@L_GCRJJEPS@UNTR[JBlWL@XkUDNLD@N]PPV_`OBG`@PMLHP\\GDJ]HSV@LOXSGAkiGQ\\KMOHOKaF[PPTaPsGDKQKSC@QWIKHARJZU@[T]OMOaYUTIC][OGIO_O[UeTGhaBBPaBQLYGHQQOOTeDKFGTJPQ\\]BCjWJWTRFQTEZMFa@iRFNkNSEOFEPFX@ZD`SXEh]^JBJbVLPXPPLA|ZXPTdJ^EboX_LSTBPIRDVYDuCGHPVONWA[IULUDOPWHEVODE\\P^TD^VCVJJGNbNRLLEvDVZCVRC^PLB^RM`XJZ\\^REVPZ\\V`DEPHPVIx`dC`OnTfENKZDQbob@V\\L@`ZvNRMdRUTFTGHTLGZHNY\\CVJHGLHH',
            ],
          ],
          encodeOffsets: [
            [[13567, 46805]],
            [[13794, 46801]],
            [[13768, 46801]],
            [[13572, 46810]],
            [[13038, 47754]],
          ],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Lazio' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@RFRVTEMKaKGB'],
            ['@@L`VNVVN@NLPMYCUMAYMEPUMWUFFVUB'],
            ['@@\\FDM_H'],
            [
              '@@LTILNPhVLPA\\PJV@bKzRTE EfHGZFJILLZEXMJmF@R[NKCMLDThlAlZD\\GLQXXPET@\\XXCdTKThLXTpBPHRTCXPDpINJdNHVOXaDAVFPIPBR^BNPJhLFHRSP{JFROB_^[FPb`Z@JdGPSbM@RHNAPdH\\PZBATMFURQPmNMdAdUZEFWOEK]QKUCIOUGMULGbIOYO|YfWHOTL^BhNjANNNCTSPAFPZANFBP`TXI\\U^AVUXMAOdM]cbM@OSYLMBMVERMZ@HWIWO@RYHcTHRETSOSdBPLjSLUpPBHXFAPrDdW_O@W^CEQMDKWPYKKRM`JXE\\LHMOIA[NQPNPDVMhLDoLWXEDJbZjBJHt^^XElPbDb^BLK@SPM@G`CPBjPRVn@PPRDk`Q^bRnBDFl@GVFPH`@lVLNTTBB\\MTERKHDR`PpUZALXbFEf@VL@VPNPCLSlILB^PpN`XCL^H\\[ZNd\\HbIHHN\\`GbDNVBNG~IT@PGJNHVnBTUlKVWZUdKOY@[LE\\_X@xMC]WMKgHUYUK_J]KiEMXoB_USDQP]@kJBScSD_SUUADYTWTGKuNMqaiGc]`OVMZ]^OhMJUIOgWaYfOtepWL@FLSPO\\I^UFSPOTIzC`OLISQTSVOhCPQW@gGNQSEWDWMHI]MKSiGQJWG_OWD[\\cLSPYD[OjMJDLW@MM_SIGMYSoGGWOWMiNUD[h]FWJOrM^APBIVRLURGbUbKbOd@`IRSxOd[TETLbSVUHOZINHl[LOUgOIKSPKEUFoXWXDJ^VFhOtMX[\\CNGlCN[TOCM|W\\@\\KTV`FXT\\D^VIVVR^@jMTYZG\\VVEFSRIPS@UXIBKX@bMRLL@THRW`EPBPMtG^LT_^@JWP[RIDGtUNOZS@ONUDY^aEOHUMAOQN[XCPGEcM@KOdQ]UaCIMWKIOdQYkcBGKiUGUOWAKFsSDO^OCKVWSIOaReGKLU`_KQBKOMWFUKaAQMMANWGQ[]sBIG]BQcE@k\\buSYJCHWHkHWAmUYCUMK_FSXIKKeNSIQPkV]@eZ_@s^UHoX^wN}J}F[CIMSKgDwCKsUkYUG[SEMWQkCmJW\\DROf_vk|[`{ruby`sV_LiFeCeHc@WO_Pm`s\\]LiHwGaOatcbWhoxijyt[R{llfyVVaDON@TM`HXO^U|iapw|_VaLcH_XuT[^QRmVqJKHS\\MBs`aRk@kEOGOBkIERWTAPILM`OT[NQTQJAZWHYdBJQPANHTe`O\\I^Sb[XWZMVifk^kTncR^Ãn',
            ],
          ],
          encodeOffsets: [
            [[13730, 41765]],
            [[13253, 41879]],
            [[13359, 41953]],
            [[11724, 43396]],
          ],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Lombardy' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            [
              '@@TZfX\\cvUdBLLTGb[hOF[U[SFIICYOQ[EY[KavALEV@RGHKraVI`FFI@YGQ^_N@V[EMTYJamsLOzR\\GVM\\LTGGUnK\\FR^FVVRCPLVVFXRX`YCC\\_HaVYASHFNUNFNATgLKHnZXTDPCb[T@VPL@LZHjRTAbFDXVT@JaxbPVDXNR@\\flRLRfA\\RB`NZbPD\\ZJ\\AFP@bPZDTRFHPZPEXXPLVMRPNIZYDKVDVJJOVNTETSHiZE``FZTAVHRGJPXpLLFvDdCPJVIISPSXKDKhK\\PB\\TRjPPOAYH_KKBkEIEcLKRqO[dGFG^EHQPGJejk`SJH|W`BZENI`C`Hv\\JKlMXDH\\NHBTQDVVIP\\VjMZQR@LLdF`L^VHHC`TtNPQ\\EFNfJX_lYPBFSWQGUhS@QQOHWJC~KrUJeMK@KSK^I\\MTNlHjInNJRr^EXQJEZOV[JAJkTM\\ILFflRCb`RZAPLA\\HFQPQEK`aDQGQDOM[@[NOCMHAP]HGJ^dENONHTInRFFTSdpTFP^RMPbFLPGPLdrKvTRBtTxQRZbLHY^WUSMWJ]PGTLpKRW@Q^G^JVO\\LDNXAWlPf[`MJi`SHIXDCLEb@TUnSfGBKh]IGFQGKRkDQeY@MQC@]SQC@MIIeDGYL@tQfOCYXOHO]QIMbYRqc[FMSYUMESKMZQX[UUAMOMHGAiO]i]GOQMYGeePKB_COWA]W@[GI@]MBMMWRQ@Q`OHSGUai\\SEOJYGoLM`HZGPMMKO]FOdIX@fLDHfT\\Fl@REXhGR|BbRXIbLT@^IHMTVXB^QH^GO_ka­£¯¹³yDaBPuJÁHIGOe@@KdLFWLMMKTGDNXH^A~MN[COSSAIQCNSTEUQeIDSNGRBXMAWfMDSI[PIzxeNOpaAMNSlCXEBG^BNUIIMAO^WlBrWNSIENoGQ`AXN\\KVFHEMO@O]M@I\\URClUL@fIEZLL`QXAPNH\\ND\\M\\EtQoU@QXE@G[M@_hD^ClWVCfRP@HSO[NCLWxAPG`apSYTGR@\\GPQAMS@eCANkH_GKIgLSNYGOHIKa@OYuL[GeA_ImAuIoXINmLMAmL[[[F[@FSEkaaCBISKqDwWDP_GMFKR_G]VGGgLGGUL«RAHLTKTG\\[LYMAUaYBZUVIQ[MUSWc[WAMOiIsDiBeViN]NeD_ROjQT[HcEe]K@cR}RM`_D]EUNU\\`cKgHIVWBYS{OMEW@WTE^uMM`ubDRJL@Rc\\]bWPeMe[KK]M[B@PPHLXCNSNqOaSJUl]AWYQQ@UZWNWDQEIWLSEYSOMDB`CPQH_B[PUbeLEAD[LWGQSGSS]KQJaJWT]JgCYLN`F^ITQNSAEcWSaGaHM^QX[AGQFQVcAKYQSCKFIVYV[A[IWCsAEWoBBQWAUOGKUIKOJEKiLKIGGUKISBMMAKQYBWUMEUOOYA]OPICUKEK[ZKIMhOVD\\MV@H{^gGMgUYIQ_}U@]z[PAXOW]UGDMII`]mEGO]@EL[AWDARgbCUT_sEaFPdKfRTDjiJk^Dpe\\c@UGGH[GGPSL[GU`YNQZVPPFDJMJO`qDWZUDY`GZmZFTJHBTejUBKMc@mnAPFZKtY@IHmG[BWKSOyCNQMMcHBUGIwBFVOHi@OZS@GSUCQHSCWQOJJJMPO@G\\PHERKJFTIZ[DBN[TFPEHHPkHI`MLwNQZDVPPTBBLTBCNkIDGkGKLnJEJeVAP`HCLPJULPLUJCTHTkHHTg@T`PJpPWb@NZFDJ`DZIlHFEpLVGF[hSXcFe\\DVAtTV~`@DP^JHJKNSAm^dLNC^LDRzSfJCJ\\FLC\\HKZUDELFd_@A\\WXSJFJAZELYC]ZeB[JONOZNRSZETA^UP@LPJB\\WHK\\OHWAAVMNFJVELMVNOVWVVNBRyEWD@V\\jANOPa@SFcBUPQ`spGPB^TX\\JVNNbEbYpOXAZplnbÆ¤fZfXNNFVQZIjShDRNP',
            ],
            ['@@RhTAAkcF'],
          ],
          encodeOffsets: [[[8924, 47205]], [[9174, 47068]]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Marche' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@HND^IPbF\\NHVdV@LVhCDD\\PNRHLV_NHZGX@MPShbDVHPSNCTFjAHRDVbMVU\\BPSWYHONIjLHZnFJWGO\\CC[LIZASMBMdSdLxEPNERJ\\\\@HLrFNXSNHRPLMbFLENJH`dDXLJILGXB_¢gZM`Ay`WqZKP@ZShU`SumwzgVIVQot[vY]SLKhQnQpKjCPFLZRIRRhMNQ^QXYJ]LKVGLBdMLKTEDUKIHoEKFM\\elLOTiRmn£bqVKbb{TYJ_jPUVuNSb}B[JqRwZPkVsd{NaU@UGY@wMY@sMIIWKsMgAMEk@gMHKQUCSoOYOyGMJGRoUaBKKsHSXQ@IiWI_iDo][]CWFWAUMGWHUGKSP]QUGGIQC[LaFcLYVUXkLSVmAGUIMOHS@}JMHUAAHTTG^\\DRPbBFMRDALNbPPJXMROdC\\WbIYSGQQW@YMODgIKHUZITc`S`VWL]^WKGKWMwFB_IGM_Y@EPDRKN@VPnODgD@P_PINgL[LJXNRgrT`L@FV]XCXJfBVUXCfULWBcEIVMN@NhLLTLHDhHRKbYC[PCZKJCfHNKLYDk\\RRF`GhGRYNQRCTYJ@PQLHNMJLLVBXLLZ_ZJTGPVJSRSAUL]CaaEWMQmHIJ]F[IYAMQOBg`_Jqb]^]ZWXITaXgNMUQDOGKVQJIPWIIF]WW_MBINHHiZiY]HS\\QJNTr@FJnlCPKP@NNPWNMQgAKIW@KWOIIPw@GGeFMHYEWdCPOP[NGL\\VX@bFj^P^bKvXJZB\\GLPPJOBgNMI_`GD\\IZBNh@NKZJBJ]V_\\[`SH]@eT',
          ],
          encodeOffsets: [[12579, 44816]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Molise' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@NJZFCrWRZDPtABfZZHJrBBKP[HUXRJTQVNRZErHFRRTJAF_^CBTNTOLcBKLAdGZcfh^fJT@hJ\\pfNRT^RRRLAd]VAXFFS^aBM^ELREL`LD_lFdYPGHSZAJSPReQWFE\\BfCRXfCNLFX^dBVXLX\\V@T^hDRRJfJndHbCPFLdb^T@HvvbHRL\\JZTFNOJYDHTZdZEXQ`O¢erOxMdCzMEH[xWLObORS^UXIdKIKqDOJGBWSKK[QQUGG[RYPKCsYMIafaY@@OZYJSRCZMLM]MaGWO@QGIUBiY_@KGG_gKCY]BaNMTsNSW_]LMViGSDQEUOYAmFGvI\\[dSRSUM[AASmGMMmKIYKY]UEUD\\GL]LS@UMCWKOAO]QWAkMYJCH_DUG]CHKCKYFcSGO]UWIcPFJY\\QD]Y{LcEILWFUfATU@URaAcJQRWGULO@X_@mZWF@N]TyAOX[BWAWF[CaDMIC_[HurMC@QUUOIOUOCDQOYLM`]NQG]VWCG_HYTmCeI[`CPQNYDILNPDNGNyRZlcRJPXLJNbD^VcRLPN@FdOHWDM\\PRNBGVFP]bCZMV@PYTMPsVCH',
          ],
          encodeOffsets: [[14276, 42689]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Piemont' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@VT@TNX@P`TLiKILY`RZIZB`C\\STANJLVXP`JLb\\EVHxCZNbBRHPEHKZF\\RAFjLANTDnRBL^XDJ`BRJR@rMR@RPbLXB~YNKHSrPZC~aVJfC`FPOLBZR|VlbLVAPJXIbFZELFBXdjnHFPYLMVBLSH@TMLN^N@fpSVHN[DcL]TEXQNUZHVGfXLGRMJFRNJDRMNIxHTIDBRRHJLQVNhLNET`L^dVAtD\\CjHTGLJNXV@ANLLELTRTHShCVNPBPJXf@hJPAxNJJF\\TJjFRTITBP^X@LYPCXORG^]HYVCRkHOJtlNBPVdVTAXIhB`LHA\\PDTVNEF\\V\\@FLZLGRTJXCdTZHHbMR]DIHb`hFt^DHZL`AjHPJxJXELONEHOQOFKCQTQIQPMSSJMHcQQHgSKCMSAK_SKLU`[LSOGISlKJWdE`GRIVBVGDQLWZKFMPALMDSbSZCOWbUFWDXUXGVBROP@dGMOCQTgJiRYEUMMeWeYÅ£maokBYPWZoFaMaUM[ISWA]HOtoR_VOdATEb@POBM[i@UXCzFAQUMXUPUUMKNUFEINMBUXBPGL[XGA[OI@KVOB]FSTYMQPYPM\\IfA^YZDFKBYEITIXWB[`@EcFKVCLY[GKD[EDIeIyTCQ]KMDcKn]TBLMGI]ICO_@U}sSUB[CEfWdgTE\\UHoKEFkGYJ_CCIYE@MXaoOOIS_h@GSlGGSDSVIOKVKOIDK_GBOfUFImILKlHCHlJDMSAAKSAOOCURYxMNKJ_lGGOFGEO\\SAM\\CJYESLIFQOGH[P@NOIIPIXRTDRGVDHTT@PYj@PGEUxAHJAVdGNNMRzDTPXL\\AnHJGZ@LsEYBOnmd@LNVAfiASIGESnYHYZ_VCXYrCP_NICIOEUORYZMV_\\HTKHO\\HHGVHd@f[Col]jICiQSLeOcAUN]OWDDCDUCQgEQGkY[AuPUZD`QJS@SRiCaZ@NILQHGTOLYBUIiDSXSCeDSGBO[cuOFOPMXGDM@iNMCIT_OMgGEIWJINkEcJQEGWLKGIeGWWFcHI_IFOgDJ\\M\\BNUZMHCTQLM^URODcCQDMM]PIEYHOI_LOUaMEU`SMQ[CMWYAAOHKwKWTW@UEAMFGTWKQc]LOAOT_GGQDMkWMW_KMjuFk^U@iJW`OL]SWEKQGWNUYO[D@W\\YAQTSDQOGKQDOYGUOQJQSOIWADQUIR_GQQO_QWWQ_aJCJSAGKSGLI@OV@XYFOQMaORKJYOMIUPKDM\\CLKEOLSaWMOAUGIuCWVgFu[KQWIINMUOOL{JIMmK]Ri@MGYBEP]Jk@¡VmVwGUQOBMMDMSOPEHUNSlDQMMAOQEQ]BJlGL}vSFO`PJJRONDNPHFTJ]GBMYe{@_FgKWCQFOOWCSJ]KgI[KQFeBKeSNSAWPsQU@UjCPuCIFcCOBMGQNS@ELUHKVMNMMO@MNSHAJSLKVUGSLUDYI{doJINaHOKKFcKON[BQFWdDNGlYNSGAT_HJ^OPMBQPUHIVBPePaFBJRREpHNI`RA`NJGVDLREL]LULI`[JaVBLULGRMtFL\\NNZLCT\\DPHAdLXPDHN@NNFTEBNOFORK^ZZCLJLPA^VBLDZCVKZEbBARUf@JUDYHWTQjHPKfOPUJRTLVJHBXWDEZsNU@u^WFSY_OEHiBIF[@SPYDWPoPWXUDKROJSAWJHhHTUDTNR\\CXUNAJ[VXDBPKPHJoL©CARONLLWXJfQ@SHDRKH[fLP`@VNZFP`VAjL`MZCPHjhVCRGtIdQhY`HPJjBQlRTbElLpTATZJMNJJjHNCTTdILBbTR@`]ZFDVNDVRNDJT^EXZIJHfENWRKdMLNTVANFCTRXVDRJCVJXbTALPLGJgLUTaFiN@P[ZEJLR',
          ],
          encodeOffsets: [[7275, 46559]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Sardinia' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@LNjAJICQMEmV'],
            [
              '@@TNKJRNANPPJAJSTE`LPE^NJYLChUDcV]_sIaFeUWHSOEMM[@[FBXOFCZKFK`MH]tGvO`',
            ],
            [
              '@@VdZANLZDLRRENHZERPHkEIJSEKLMKODcGUQCEKQFQCGJeHMNJHMPJH@NUP_DIJ',
            ],
            ['@@VHpVBHQmMuaSLUC'],
            ['@@RBHSQCGV'],
            [
              '@@LfNFPXQBHXAPX@\\LRNBTTPTFD^OPHLRExNFT\\OCQdINQWGEKJOEU[GyHSHmWJGSKU_B[NCLUGWGGsBQHW@',
            ],
            ['@@hZHQMKUAKF'],
            ['@@PP^QCM[NMB'],
            ['@@\\NPABWOA]N'],
            [
              '@@tdJZLHERHhRLPbXTBRNX`jEZNJIPBLeXOBCX[P@N\\fLFJVXUbOP@UgR_GKdiLGZYlarY°MBLCRHbW`OjEbBHlHTvZf\\Pd`TlLjTJLZBl@^LxEjLtdlfvxTVCLJ^VBQTZ@\\P`@@JVDJT`RPTb\\^h\\VNTbF^THBZUl@fLVDXVGPbAdFffIPOFGPBTNXJ`SLSISNNR^EFOXRVH`Er\\VGAKUZQFYWcLMRfTBFQQO\\IdDXONJKLNTrDBWJYXJJMN@TKbHHCCWWEGK^CRBHOGEVWDWAcRFhfDTMDnP`@RINHGXZBHIAMb[OSDOP@NJTAFMGMFQGSYOUTUeNGKQMGHSESemNEZHFVXPPDbGMQKYNEVLTIFPVL`BJOVMhGZHRSWUeJSLGNSDUWWCKM@MVS]cUQNWYGKJaEIPsKOQJObJLEpNdQNQVEJLRBXZ@EKsqP@ZIJUZNB_FQTEVRLCRYlEPKQKYBIHSC@MIMPGDOSAQMCMDY`aPGJM^EFGQURSKKFWNS`KX]@sMMAYBQTY@[LOZSN@ZUJu`QHB\\QAWMmSaYu]YUY@eMOBMYWY@iW}W]OISagiIQQwLEOHaLYRIDORYAS~uBIbSNCjSJG@YMG@SkwK_@aYaBQE[BW\\[PHPOAOU@SIU[CaBaLUJCFSUQU}IyA_FGJiEmHOMK@IQCCMHSG_OEIYJ_BgJcCSDUCQKQBWOEGMKmC_JMNAASHkMWHIGMMGq¡McG{F[HObWZICMSFQAUMckYqGi@SI]DUZIDOQMC_IWMQMBeIY]JGYQMPJ^KLeJoOMFOIY@@L{\\Y@FTSFAJWLQR[DW^SFUPYBKNcDOCUJ_AUTWD]AeKcQQOIURISOOJIE_\\QTYPeKSKOCUKokUWW_E_IKNgCKDYHA^gTMGcIEUeDGGSFKOGGQMDUGDOQEe_saKM[MSOU[WOYG]SWSWACHWBOZ_@@RYMSFMNJNiL]P_LGJi_WCYQSCEUIEUHKUJGJ[OEOHAZNRIHWAQG]DCPR\\NJGPLTEPQ\\MH_KEVYTA\\ORDZNHFNCRS\\]A_RDJeHyAUBANV`WVGbILQFcGKLEPLPAdqdQEI^@RqT@JOJA^dZbZVV\\JXpCVO^SLFPIJeDMVEXUPXvH@XVRfCb[J]TFN@RJNNFZZxbvBZT^ARP\\K^YLCbFJG\\RZ[NRlD\\QDF`GDFRIfLFDPLBXWFS`cLO@MREhivFTCDPGLWFOKK@K\\KFYACRLFTXQNnlXnPFlG\\YLLNM\\UVkNGFGSIc_a\\aPSF@`DlB`Qpdh@VFRMTw@@VhNZI^FPNTG^LbZ^\\BXIHJRM`WVYlDjEVTbMTJdb@^QHSVDTWVaDGP[NYC]HSBHPIHETPDBVJdNRC|EPUdBNIJKpqZWEBRKJARYjIbFXW\\MLCAM]DS_qBYCMRNJLXPDBLS\\WHOCBSKAEO]KJIQKD_QHIRIfDPIdFHbDCJlFRfJb@NPNUNMAYHBNMPYJMVeP',
            ],
            ['@@DLVPVBBYCISCYJ'],
            ['@@BTHL^@PQCMUO]P'],
            ['@@NBJZJHANFXRC@llME[U@M\\HFGUG[FCPKDOUQP'],
            ['@@NPRCDRRP^JBRPHFQRWGiPSgEIFWKWB_NCR'],
          ],
          encodeOffsets: [
            [[9944, 41851]],
            [[8550, 40018]],
            [[8417, 40088]],
            [[9905, 41874]],
            [[8409, 41963]],
            [[8406, 41974]],
            [[9586, 42286]],
            [[9558, 42293]],
            [[9559, 42274]],
            [[8326, 41711]],
            [[9623, 42181]],
            [[9557, 42227]],
            [[9660, 42178]],
            [[9600, 42217]],
          ],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Sicily' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@TPT@fGP@EJHNGV@NcJGCMiDMNQKIJgJCJ[B_HQA[L'],
            ['@@ZNd@JecCSDOX'],
            ['@@PTXAdTLKFWTETFZIZQRGGUWEc^_AIFkI[FGTML'],
            ['@@XBjEJW`gDOOCiJSJBHYxID'],
            ['@@FL^Z@LNHPKQMbYRCZSDWJKCMSGSBm\\WHM`KF'],
            ['@@DPfFDOPOUUSDS\\'],
            ['@@hPEOLcEKF_KOMnAXQZ'],
            ['@@DTPNfNnKDMnMTLj_LM`UF]A_OY]OEIeCgFSNUjMHOAEXQTeZDPCL'],
            [
              '@@\\TFChLPZEhPDZxIJSHWnPNLV`fThI\\BNXRFXERVNjbNPVNHXdNTIVFJGxN^NHN`TIHAT^LRCNMVATHjdEHXRkDTRNPUDHOIM@OLMNBV_E]DUZYFSXOT[dUNBHM\\DD[PQP@PIfBNlLzV`RN\\Dt`KX@TIV_bZNf\\DNERNRbR`@lOLFZC@W\\G`B|PbPV\\XF^GFJd\\RJ^FJSPEGQLK^KXBNSB[R_IODOSEfonUXCZB\\GFdH^LFXlQVkEONKQMJUbURQhK`Ol]^C`UXGVDzKLW\\E`@HIbBJtNT@T|Vf^R\\APHPGT@rJRNTAPQZIVOtBfKhFhRrOVDdIX@bIh@LCdH`IxBrTZBPGbBlNzbZBVMvAP^D\\LdXpAPB\\ZE\\RTPVHbZ¼¸P@jQ`CT^D^L\\CdJXV^T\\QZIRSd_RE`BfEFJMPC@UZIHIZCjFv^lJ`P\\R^^`\\V`VpL`IRHbVYFSGYKMBYjKnAfDlLjDvRtLjTJ@pTnLDnpH\\GfYnKXGZE\\B`GUKwK}UGQOGQg@QGIAUJCCSUSIOY]S[EUKMWsKMEOWSOYWOa_ISYWmm³½EYYMUYe_OYNKSSO@[YEMPKUKOS_YK[BSZeIUUaMgFQ]aUOFMISBiHUAOSIKYUCM[WG_UBKgeIOAOKQDJCUBBcLqNWLDxGRQbUPJpUJVTENYrgJWPEBOSCONQDQKEPSBQSO@JUYYDYHSZUA]LURGVDRNHE]KEMB]l]`ERI^HXCJMFkYWUEMMBSP[RCTRbIP]\\]AKkDSXK@]SKDSIGYKamAaSKFOIEK_QSSGQIIUEIKUkK]ISUMOQM]FkESQEEKBiLMBUX]P]AgLYNGJOC[QA[FQYoWUR]HG`QVqZeBSIcIaBqdkZ_L}BaG]KEIgA[Q]EMPeAMPYDKEgFKEiL@F]`oVSROHS@sNGH]DUFeDaCYLo@_^]`GP_IHGZUPOdQPWh[dotohy^ONoRW@WNdqL[BsNwJ[BGFyA[YH[GcHgVSFGRUXgVSD@uJ]TMRcFGHUF[TiNK`cfSJMAUV]ZeJ@JWX]PcDSG[N_E_A[P_CMN_JAJQNUZKHWBMNWPO@UR}LY^aXUDSEK`YhSPKBU^QVSLWBKV]TML]JUB[IUJiJoFgA_Oo@CT]lW\\eZ[Z[LuJ[GIFL]AwBC[CMMEQU@YNIRMBuQnMN_RWBWT[FYCKGcHAHUPMDKXQH[\\HNGTB\\CZSVIZYdUHOT',
            ],
            ['@@N`BVNL\\JJEb@ZFFYCUDS`UkCAaLOKY[F@LUZ]Dc^CP'],
            ['@@N^PFPE@QEKcICJ'],
            ['@@RTfTjMKWmWaHEN'],
            ['@@FJPF`ZNBnMAKSSIYSIMB]NQV'],
            ['@@LR`DJECYGMWAKFET'],
            ['@@TfZD^@\\GlHJEAUHMOYHY]EODeVG@oPOP'],
            ['@@PR^C`IJo[FYA[ZEN'],
          ],
          encodeOffsets: [
            [[12818, 36374]],
            [[13157, 36730]],
            [[12566, 38846]],
            [[12317, 38904]],
            [[15295, 39326]],
            [[12616, 38913]],
            [[12728, 38802]],
            [[12213, 37700]],
            [[12723, 38710]],
            [[15256, 39410]],
            [[15416, 39557]],
            [[13467, 39630]],
            [[15552, 39722]],
            [[14684, 39469]],
            [[15151, 39489]],
            [[14889, 39504]],
          ],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Trentino-Alto Adige - Südtirol' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@Wys[CUFEMTOBIiIQ@qRiDDKQGsEgNEJYKKM}MOUWCJVE\\WASZWHaGKRWF_PGLsRYPB]IMPUKEEaWIAQMCHMCaUMUeG@ioYToA]IGSYC_JaEYMIqQKOMAK_FMXEdDHCzCXODU]icBQEQcJGMWIYFacLGKiCeSRQfIDWzOD[LGQYGSX]fBvPJIC_ROTLdQUq^ODMVSp@@U]SFQ_LagEOSYQKGQOK@QAIB_QOTC_YOHSAE]P_NCPOEQsASKNQPC[ULCJWX[KICOHMWImB_GKPWDGGaJUES[BSJWDqIcDWGKQ]A]YMG{@ODQEoHIUHYLOASoBFSEQYGLO[@IHWDQPUAKKWGQF[ECYUILOgWTEIikWBWaKIOQMHaRUWEaJN[@UI[HUaYaOOOMcOHk@OGcXG@YVMDWSsAANeKBSOKgQJ\\M@MUW@IUOAaNQPNZbQCuFEDN`ZPDdVRPDDLQV@^VNGN{VYL]HG]RWASUGN]JS@aKWJaQ{AHQWgQFk@[EeSCGeKW@cJEPP^NLONYH_GKNHpIZFP[TbjHVGT_P@RQRNXANN@^HJ@\\^XXBDPA`OLffZHRNHPj^P^BjGHPNBNVVW\\YRLNFTVNTZENd\\QraZJN^RGPWPDZePsRK@HZfCJJ@NRD^T@RD@NfZCRQlHLERJHg^ALeHmTSVa@KFDWCGJ_TIjNTZFAJNRETZnE`NNSPwdYDmASEQDAROR@bOXRLTbXDHNU^OHhPPCXOTUJLTfJT`FPGLRJCLRPELtCHKnCJFU`FPLXFJLTBlNxDRPRGfENIGSZKX@JS^EhCNWWKOWaIFSrGpLRLTKd_XCNPPBZO^CBKnCJLTCZNTC^D~EZGVAdJNKVbLXNNIHjP`PN@K^IjLFJThlIFDRGLDL\\LAPLHpG`N\\VKLD^TEZN`ALIZLj@^JPNNApL`AVPhOLLZ@bUNSTATG`BtVFPRP`F@NRRdCbIFIbOLO^NR@hNPPT@TLfDPStQHErHVEXBZ[HOfEdHPXXPLE^DXCjHRPNAPNjRZ@DHjZ`J`GTTXEVTEVJZRCFPjXfKfP^AZVG~KVYAIiK@[WeEQIcLOKYKIMHGJ]PIAaIGLKhKVY_kNOTBPEZATSEE^_lHFPCVOEK^MBUJYXCAOcYKKTYWYHMrDxKLE`AFYLQFYLODUNKtUHI\\CBG^MFD~GDK',
          ],
          encodeOffsets: [[12778, 47801]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Tuscany' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@HJ\\HMYRIMIY\\'],
            ['@@JDARLL`BNMNCAOJSIIiKQDMJCZ'],
            ['@@LFJ|nbTY\\]MceUW[SNS\\'],
            ['@@JVbACUUGQJ'],
            ['@@NLVMXDhELNLAPQ@[mE_S]DAJ[ZJNKJ'],
            [
              '@@DL@bp^VJCXJ\\ILB\\[ZIbDAR\\APJITNBNRTBLIlDVMYOnOTCXFHfLANTddAJNRNFBNNJTK@M\\GRSYkEQDSNMKIHYAM]AGKcEUM^APMBKXCVUDWEOYIKP]C_BONQjSVBLYLkCICNeOIMnW@QKA]_CyXQACQLIMMgFULMAiB]GMDaCaTMTALWR',
            ],
            ['@@VNVERLNVVQLcOSWF{HIR'],
            ['@@JJX@A\\LPPITA`mNGGYRIC[OKeN_dIN]DET'],
            [
              '@@d^GVB@RXFCTVNddTXh\\J@F^^FVAfFjCbFRGZHIPEBYTMbDTaIOW[LWr[ZEXMdKFGtULKRHzHZC^OBQxkLB^[VDRKN]d[bH^PVHXATQvMXFjGtcLAL[dQNAXHRCNFLKXCVMQWJOjS^[IMNUnQJI^IXQFOTKJ@^EJTLHPPNJGVBTGXH\\B`ED`KLS`U\\EPObOVLTORWdFRAbOXODMMYfCV\\`HXT^hCHVTbNGJ`FNA@YSECUj[vC@ItD^EJL\\JhTFVInEjK^F\\ITNX@EXS@SPYJO@KLeP@TfC`JJHBRGJNZJEJbBTTFXfVNC\\@bGNLP^fZZDt[FSQSNO\\ALSTDPI@K\\WNDXQPD^IPL@NVDTMdDZKXBFY[MAW]CGONEPJZBzORYxbFNrEbBrLRKIaQIEUwkY]CaSOEMWB[IJM@MQGMSR]P@bYTEHKU_^SL@bMMSFOMaDSVEVUtMDCtOXYREZUAGOJLbDLMhC\\JJICQLKZ@dEJ]hM\\MhH\\KRBJGh@PGFS\\EVNVBRJdGnL`NT]XKTSJL@RRFBPXAPFhOPRLAlLfS^@TG\\_`[^UAIYIMLg@AMJYC[_HJ`MNAhIPOOHKA[IYuWaLO]i]aEW@[UHK\\MPODOSIOMCUQGIQc]IYFEOYUFmGUB[SGW@OLIZEROZI\\ECS[BKGgMGYYSSGiHUUYEQQN]jEfNNEGSAkLK`DLJhOZ_JiAUWUNW\\O\\ALEZAPXCPTTRCLIdQWIGOoQUAWK_YMCgFWKOQaG[P]FQJ]KP_MUDGMYCWQO[GaDcYqOcQIIIaMEPUDWFCLYQSDMPMHYX@DRNJ`ITYS_@[MWUICA]F[YYBMMiJKRBTEDQAYBQ_B[C]emOFQBYA[OcGBOGM@QaNOTcH@I_YOa\\E`]PAEQ|ITOGQKEIgMO]AAQJOEOBUbCPWGUcMMIoJOCDWQSOGoAWSgKLScSWD[WS@OFWWKR[HYCBkgkCSNKLD\\M@QnENIFWKYJKEIHYeGFSFyQaLU@OIB[KOgUMOJKKST{NNLSEUJANWFsAyOIEHicKWcMJWAWMATq`UHMASJUVFVGHbzNAVWTHJGhA^RVdJXHb@vYrkpcCKOaZUdFHSdOBSTNDEReV^UJ[nOhYdUTiZePqR­ZJwHOCrBNXBVTP^FXC^ID@R`dBJYfgZ`gNNFA_ESWKGE]kDWVUF[l@\\DLIXXLTIXVKLBLVNR~NDAIMIZ_ILsj[PMT@^MVMJAVS\\MbaNOTBP[TIXm`aFYTBTONOxMHMVGZHBCVIXLHCRMXItA`GfYpTJFVKtDHEZFDcÎKd_~@bYfivkrx~udm\\sPIAaT\\lFCxdRZ[`{RU@aWO]UPVLBVWPGbItMHMEqBOCMHoMKHXVbVLVW@MR_AgYMWOTNTPpYZDZINCVcT]HMJQGm\\gVENORUH[DWvUViA',
            ],
          ],
          encodeOffsets: [
            [[11358, 43267]],
            [[10536, 43350]],
            [[10027, 44056]],
            [[10126, 44468]],
            [[12462, 44857]],
            [[10345, 43793]],
            [[10287, 43606]],
            [[11126, 43380]],
            [[9920, 45431]],
          ],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Umbria' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            [
              '@@XcZFNGfEHHx@JOPJLXX@LJhBNRXMMO@MLODOmkEIq@MSRIT[^GjZjYGGJMNAX`^XJEXJJORILUPHRCNVhMbWJSXW^Y^]ra`Ih_PANRZB\\J^EJInGNRFXbb^DVKTBTQUIHOIS`YKYWKUAKKNIGMRK@OZIDSRQZMHQHgE_QQl[ZCLKGMDeLIDY\\OZDLaGQCgKGKSgK@MNMJUdFXAVKDeVWAUIeDW^WEUK@S_hqMQIW\\KhKJM`O@OhCPCOm@ULMCQFOZ@N`JHA`xEXNHLXL^]XKUT_d_JSVYLGhJPCZNX@RRTHJZXaD[PcNQIWOOMaBKQCENaAQO[CH]SSBGCMHa[_GMJGGac[YM[\\]GDK_WoM]OKAkJKTODOM@UUKe@FaEKWYBoV_OCQLGFQNSA[SASKMkU_@GEOHUk@CEmAaQR]l_QCOOm@QUiOOA_D@HON@TKL]ACaOaFk]Ws]IGiAaYCIWFKXCpgKUNOCOMMRB\\PJGN[KWF_IQNLLOZLXNCFR]D@X`PcXqCBOWEAGoOKViTOKcAPTSTQFSGGdQZP@JXGXY@QNUFANKNTZ@PaN^dcNBPWNUV]B[VWJ_SAOMEYBEOOBSTMDMMiBgM]ASKGPeX{ZPPZaJKHNVVHJPVDRLL^PFEXYFcVcBMNOnQREVSNERnP^f\\D`AARBZCRSFQAILNjANZZE\\B^JDVNX@\\T`SZ_JMICQW@GZONCNRTKZEDCXOVNFJbJJdRrPdZbC\\HRPDXNZCHNVO`^LRI^E\\ObHPRXLhEND`ZXLVBpRHPXJcRKJQDSSDOOWYBKF[B[PMXXVBVIjY`gPKI_CKLBlHTMFeMiFM^RRZFVVjGTHZTHZhNLH\\ADT[FYJQPYFKJ@PHX\\TVAnHVEPZEFJZd^JRRHDVPNTJ',
            ],
            ['@@`PXUCMOAILYJ'],
          ],
          encodeOffsets: [[[12507, 44658]], [[12706, 44649]]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Veneto' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@UOOZQLBZ^C^]EM'],
            [
              '@@ZK|UHMUM@]RUCKOCUQCcYOM_FCvERDaMYRObMPBJVX@NVN@I[hRPLATfLBMtBXTNCZUH@dWPHl@PGNdPPbPbZGVJ\\@VM\\bIXFQVGbRNJPbLAXlXJjSFhXKPVJDZ\\FREXHLLVBROXCJG\\@KPZHFRETpABTKPGZJVpGRFPC|@NH^Z^BLRXHdCrJXCTI\\ATVFbIHHXCLO`HnAXJGNDPLJW\\IXKD\\VODMRTLtBFROPMDO`F^TBPG`ZDPS`RJABRL@PHRRLTZFPbh`KER^T@Vo@UTCN]PVrcRSKQPD`IJuOeAW^HTRZKHC\\yPCXeJQRfTjDHLdKEbJZNXIHRdRFdA^jCVWPyDGDcCWFENL`NBLPrRJZNbF`IZDHT^JpBZSjpH@VfVNDbGNNDBRXJFbLFOVJNA^ZOtQHK`OXELQbHXGTYXBF[IUXDPV~NLNZLFIhMtFRHCLjCrQR@jJAJSPFNVE\\DztXZGVHxMh]XKTANJxA\\L\\@VS`LARIbEJMVOGGHKIGDUZ[GMHYSKHGESVScQQNuM_YK@[@UpaRaYCMLeFmS_PcDw_UJGOFO_C[UOYFU]QY[WIN_]QKA]OQDDUUYuCKFQKaMHMIIDU]USCO]F[PCFUXGPOVCVK\\JXBPMOUHGvDZCCUJQAOTS`KpWFaI]ScWO{YKBOOOWUKIaIA^]FgTWC_@YEWFOPETFlMEMjQb@NEFYRSQEXSXIDi^AR[IOHSLEfCPSRPGRZHRKbAAObAHgfS\\V`PJPPH^\\JDVSbZNP^P\\SV@IYBQLGXJ@RTDRLCLtHbOOS\\ObEPLPGLNR[jHBlTHPW@KTU^GCI[HGONK@OH_PA`_OU^O@MKCCMlV@WXKAk\\ISQVMT@FOIIDQ`H@KZINIMOIw@»MµYIFsceQ}U[o]qKáu_{OsQ¡Y]KcQeaYR[FeYmiaqQYIS@WZEMOUDGM]QDO\\GQIIYRsTO^eK{BYTySNeFLVQ@EYSOFKIOZK`BRIBSRBLI^@RUPGFMg[dU`FP\\RDDLqe^CVDx_XCHWg[mgw¯GS[eWQk\\P^A|]JsWJG]OEWTGPSWiVWVANIGQeYgRu`M\\EbKJH[\\CTBbG\\VXDNYZkDIO_@YW_FgAYNIPOBOKaM[HAPSJG^]FGROGWLOGS@ON@YJkHeDW_@YFmG¡BsDk[IQQHWGQUEY@sQkEeMKUCiBSTAPUVaFcZYHq@eBoCOEJFbBNOR[HQ@SHZoT_bOHwBKXMDP\\GTO@eQUDkX]DgC@`\\N@HWF@RpVsR[F[NMCG[OMWB_RKKFYeJK@kVQD[V@J^N@PNPGFUE[LWM_BHRMpJFMTqXkA]XBPJNJMV]AAHWFkDMTBNobMPwfyOJJ\\CTeNBXWNQAMHCTfJVRSFMTRDBJTTDPM\\}N]BWGCMSHNLKNEXcK@Lf@HPGJIÂOvACbzº´¤°®lbP`',
            ],
          ],
          encodeOffsets: [[[12652, 46148]], [[11102, 46934]]],
        },
      },
    ],
    UTF8Encoding: true,
  });
});
