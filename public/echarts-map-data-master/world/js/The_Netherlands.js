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
  echarts.registerMap('荷兰', {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'Aruba' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@NQZIfY@GHALFNKLOLCAE\\aNENOLQREHKFUJ_HOBUFUFEQKI@OPWFEFOLQAE@GJBDIFI@WHQLYXA@_\\UJIBAFQH@HYRMDALGJIDILOHKNAFIFAFRZ@NLLFNDLCREPI^KLLNPGDGl[FGJSXWPO',
          ],
          encodeOffsets: [[-71675, 12871]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Curaçao' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@CKITATLADQ@G'],
            [
              '@@[PQFMDJXHBHQDDEJL@BIJPAPQLBMFBHIWFCGG@UNIBAGHEDGTCAGIK]HOHSNFVFJKJCCBO@KYLEJMBMP@LCFCPONIVEDBHCJKL_LKCMSKCMDSLGNIH@\\KFBJORIA@RKNSTIDGJHH@HGBAOM@EDENGHEBELIRPR@HER@ZCHBNCLFHIVFJ@FQXFDFNFFNEXO\\UtWbEPKT]DKLQBS@KBaAAJ_JKFQNOLUj_LMTK`]LETCPERC\\DNEPIVE`@nEHBPAfWNKVKNOLY@CMIKDIFCIDGKCXMDFPGFHIHAJLHJS\\mXULOT[PI^YCCMDIIG@OFK@OBQGEIGAMDKBIF]HCFKHGNMBKDGHDRJ@LHCNCFMKGDKEAJICHOHCFBDGEOEBEHAPI@KIOLOHGHIBOL',
            ],
          ],
          encodeOffsets: [[[-70287, 12274]], [[-70559, 12382]]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Netherlands' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@NALGHMCKGEKCGBKFQBKC@JLV\\H'],
            [
              '@@ENMP@FDLJJFLNJDRG\\ON@HIPI^GJQLWTK@QHG@GFI@MFkAYBKA[LEN@JARKNCLFFJDALAHBF@RLVTNPPHBRGTCPGFMPWDGNGJIRIPM`ODCVEPIDILGNDJ@bMXALCPALDN@ZKBOEKGEGK@IEKAINoJWFQ@WEGMSUQ@JINIDG@GKGICAEK@KFCFDJO@ODOHQBWAGGUIKKGQAGHSPITGJQJAHDdETCR',
            ],
            ['@@CNSNCLAJENHLARDJJ@DKHGH@HCAMFGLEHBNKTGJGBGGYGEQE[@IHIL'],
            ['@@IMCKIAKEY@WJALHNFZJBNJNGPANBBCGMJ@BM'],
            ['@@EJHJ\\T^H@MIE^ICE[NGEM@UMCE'],
            ['@@KCDKP@BH`ETI[KKGIIQ@WLCRHNJHPB'],
            [
              '@@PRdZNTHDZ@JCXUH[REPIVWHKKIEMCkFYISMGSGAEKE@QWOAEMIMKSEcCuiAKMAWJaFEI`G@GUCW@CGmKG@DPMTENCZJlL^JRNR\\b|ztjRV',
            ],
            [
              '@@CEFKeOAGoOJEGOOE_QkB[CKGQCOHEPJHRDºt\\N`RZNzZ`|NR@tG@GII]B_CEE[K]IS[K',
            ],
            ['@@OD@JbR`@DGIEkQ'],
            ['@@TK]GOOAKQ@MXUVHL\\RPBRARILKdMOCeL'],
            ['@@R@CWBIGSIBHNANGJKJPD'],
            ['@@ZBr@VCRKYA_DSGKRWCAF'],
            [
              '@@H]@GJS@aQSfOWEWAY]CGBSMOGCHahOE\\ÏHGOMy·Ýßa[JWiyMåSíBA]U{JSJSAWHMBMGO@KE[AWDQ@KNUDKFaAQDME]AUFM@SG[BMFOAUDWEGEQDcGUOIGUE@IPIHKKaCS¢qEE[CSF[BMWGEJrOhONAzYnI´BnAASRDxIbIMLD\\NZ`FLVJLIXiL_VKZgbGPA@EJKPa@k_[AKMOASGCSUMUAGHKCG^kp]IMkMiEKDSD]COKAMKQWW@EUScEmAKG@Eo]SoaWYAiA¿@EgCGIBKELO]UkCeEBEMUCG@YvBWVMDELAgEGfAHOAMFQGK]ACCYEIoKKeY_GEI]EIKSEq\\IJQDSAYGoMGGQBkIeE_K[MGJOCIE]MQAIESEEK_IeCKHMNgKGJYHEDSCULISBEjSKQJIICHOIA[LSDSCIDAPIHUHyBYEK`IH_LUAGGKAYBYBeEgNYPAHPFBFOD[NGCOLwIICOHOMzSLSBKnOGODGBSeJeDcBSBSDy^GOQAHI[IKIMFWGAE]K[CaFOFeY\\MSKPANE`SMODILBPEGGCIRG@GWKIAmUBKHGzBTARItOLKVEEGU@KIDOHQGEJGEMNKQFBXI^B`I@IOGCIOcKC@QEOtWJCRUbUTGjyXIVKZ]DUCULOJQA[CK@QKA@WQLB`CYSX{iCGgEBESS@GKI@GQQ_YIUwYI\\gYAKCDMF}TWNAZBRDJJ\\LV`QY]YKBGaAYEM@KGsMI@OUOI_EEKm[sIWMQSOCBEWQ@MCSUGGGU@ICENQNO`IFcSGGIAiA@IXSGOJUJIXCAMVCC_UMHIPAfLVLlFDGVKXHHADTEWeSKVGAIFYtIP@JECI\\CHFVCTGSOOaHOPKAEFGIOKGE[cJAJ[KO@MEQCEO@INMFMGEFEQGKKMEcTICIMAGJEPAPGNKJEfKBEQSFQMB]C]@UDBFKDWDkKIBSKKAEJO@EGWJAREJSIYCWKEGGXKAQKQ@OCM@[\\QEINERU@UOOIMMCKO@QLMEIBOCOIYFBLTLJLFTGHEV@VUFIH[@UFDJKHDFONIPHHEHHJCJPJKFNHlLNAFPTLJPAHHJNBPER@HHARNRPJLR@HXFCNKFQ@OIKAKFCJRPHDHLZJPTVNCPBJRRENWDEHPRJNH\\RATGJDFHIPPJALONFHTF^GPHFJAHQFU@IJDLVPPHX@NVRHgRDF[VQICGOHGEUEMGMCEHJJGLKA@JHFFLSLU@ULKE[CeEY@KFYAWDMAORFHaJÛhInFdCJWH_VSPELyHSGAGYMmEGKI@_[kJ¥RGSKEi@gCLsKWNbdwMUKyLEWREJr|TRu@OPFPQASGIMKEGOHIAKIEAMkuMCGNMBALSFQJOBSCYGUHU@E[EWJMDCH@VJBZBTGT@NC`EItJDJNHANFODBPFTEFaBGVmLQAILOBYEOEKScKW][CAESYM@gMFeYAIDKGMAQH±NSKvfpSR©IUBUMmEµeXOCU@GWKR[MGLOSBmO]EcFcDOAMhy@õGJQJI^KÙ»ÕaOYICEkEODQAEFSAUIAC[GMQ]AIOaCMEMRGESEFMgKGDQGQRZJFLIHcMUKoFSGK@SFKC[HCDATBhLVSDOHQCMDMNG@yHGASB_FGJW@CDcP]@GCkPwPSKNKIGO@GFQHSKSDKOG@IJ[APqJc¿Ga@aHIAETQLGEI@ILMDORQBEHJD@NQFIJ@HTFeZxhCNQN@VQVRLNFjJlNNBNEjLtH`JNHZB|EAETCRABGZALKZET@RItI GFKTITGFGTGACMHCXEAXDDbALE`EEINEJBFJXCFCXCfBNLDH^DLJTHXJfDRFTBPPBLJHEH@TTP\\AJCrENMH@JUVYRIC`KJ@bNTAPEXN\\FXEPPRBTCBhDJKPsIeMcDIDgFO@cJSBMHUDUNILHHcDEHYHS@AHgTKLKF[MW@_MQF@KGCJSMMEKOUO_WAQFQ@MCGE]CuGO@m\\[L@JW@QHUES@QFKXIBMNaTYJJNUDGDSAQQK@IKOCK@cAMDyE[RYFiXUTQVWV[JgRSLaXCLHV^LPDbPFVdPrLZBrERGV@^F`HfLBEb@`MtFNFX@DDZCLJbBDD\\@PE\\HPGP@XCXORYTOLO@GKCaEUQFM^F`AHDVDLAR@FKCAZWVF\\@^ERAVGFENDRAFMdMHERBFQHMCKFMFAb_L@RWPCnQH@LIJ@`DZJNHVDjIbCDDGbFPIrGHTKNJNYP[BOEQJMCQ@uF_BCFSHGN@FOFGJ[DKDDJEH]LUJYBKHBNJJJD]jW@MFYPC@MRIBIKUA{JBTKJ@PIDILBHQLSJMCyPFHILOHeCICCKeO]I}M@I[FUJSNOTGVDVPTVPpVfAxNt@lEPDAJRPTN^HHFLTATS^DPTRbLRDdA^JXHzRVATDTF^FBKJIBKZKPIj`VJ@NedWXOHALbbHBFJJDSNMFkG_GaDEFe|ERBLJLZXTFVDV@VENDP@HEbE`IPL^D|dj^`\\TNJJN\\TEZPHJpVRJLr^RHZPbX~llbfFD\\\\TVFLprrbnj|HN¸LXB`GVEJTAJFCNRRNTTfNjDRZN@TNr@TFZJbFnAhNhNdLPZ\\LVP`BHX~VnNrDZ@vFZHNVVVDZAPDb@AIPKRBEPTBDICMOOCMBIT]PGNKZGtUhKRBrHXNbHfZHRNHTDZBdHNCRBNFTIbPÞňÊfLDJXF~bFHDNEFbNRNJ`FhFL@NILPJHJ^pVX^Nh\\NBbPTFbP\\VTJLRfXPH|RVDFDrPvFXRHzTzP`FvRfLDDjHRNRBNALB@tLHvJpB~F`CRFELAVJ@TCRI`DLTAWTKT@^L@BpP\\BdHTAnF\\FrD|HB\\FP@xHLFZ@fJLDbHHBvNLF`@rIfK`RfGFICGeF@E`EACRCdCBDaFHTZGVG`QBGO[A]JERQEGJEAIFUFGAGHUHON@t[MKRA\\IhExMHEVJAO`GTDXI|BHHhHSOKECKFQMW@KVOZIRCRB`CPGLA^BTIGFL',
            ],
            [
              '@@|NxHT@dA^IOOgI]CeKOEQ@CIBKiG]@BkCQESIUM[IUCOGUFEEUCOIcFMCUB]MIDaEKOK@SIOAAGiBSJQBHTXT`RRRPJªPrHHN¤R¬T',
            ],
            [
              '@@KRBJZVPHNDlDFK\\CPCp@ZA@DĀJDf@`CNE@Ka@MBMAAeKcCKC]CMc@W@QDY@WF[@IAQM]KcG_E]HCCWDOFWR',
            ],
            ['@@AIQFSAGEQEYCFRTH\\D^@HG'],
            ['@@DAQSDOCOKQGDENJHFNANLLNF'],
            [
              '@@AIIKSKMCQTJR@NDNJPXLGFBFdDvB`@r@|DnBØRfBR@ZEEC[GSAYE[BQGM@YI_GmGGGMAGGSE_AWB{I@IG',
            ],
          ],
          encodeOffsets: [
            [[-69948, 12461]],
            [[-69923, 12387]],
            [[-64497, 17895]],
            [[-64733, 18055]],
            [[3774, 52858]],
            [[4785, 54258]],
            [[4924, 54428]],
            [[5094, 54544]],
            [[5245, 54562]],
            [[6654, 54826]],
            [[6567, 54804]],
            [[6718, 54828]],
            [[7382, 54521]],
            [[5586, 54720]],
            [[5754, 54721]],
            [[6212, 54755]],
            [[6280, 54781]],
            [[6304, 54752]],
          ],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Sint Maarten (State of)' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            [
              '@@VFJNLBHNHANBXOHDPGLFHCFEBMEIEAEKFIMIDIUQEII@BNAJDHMFM@IKGBMCEHIC@HIDKAKLVLGPBF',
            ],
            ['@@X@LCHBNQLARBGGMBMCCEGBAFGDCJQFGH'],
          ],
          encodeOffsets: [[[-64602, 18480]], [[-64654, 18487]]],
        },
      },
    ],
    UTF8Encoding: true,
  });
});