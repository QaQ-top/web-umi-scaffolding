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
  echarts.registerMap('委内瑞拉', {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'Región Capital' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@DSyuMWkUMWaqAYLgOJUMegEWewHM`kV]GQ[YVYKs\\¯A{ksASS]NiGXReZieuHgj_yyPeKafQAWhSrgGCfwV[Xy@qQ]cRKsmaU@s[]XsJsUGaZiI`iEiVab@cVSY]ylOIqnmBQz}BMO{NmWsjyZJ`[pir^lXPG|\\ZJ^kvpVIvrLG`kPakhq`Ck[WYVG]ZKhsTp¾^xGrLB¤TlCtJhR V dpbAzW¨DpTTEjVlKGL´LAbF¼HzC¶L°EVGrJÈoXVflRFuxWÌk[ZPPYeoeKFDthg{g}ªÌ¼uþÚs¼cæm',
          ],
          encodeOffsets: [[-67000, 10384]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Región Central' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@TBf[\\DdSd^zFovZfA`J`dN\\qT|²PXE`XAVJMZJBZTrEpZ¢LPJIJhKSotLg^YHZUXl\\Dr_lgblOH_qKJuUoluI][YH{WO]kjq\\oI_zYtinX|MNP~ARynArmPJzk^TZdU@bajUjF_jJbYHRqDåNa^SamCMSaBGkF{Ta`SVsBokDyg[J]rQSeBUWcGg}[OA[ioaYkUIyunmKbOM@ùĈ]s[DGl^dAdfVNhRVf¤M^Z`lIDbwdBQPm@uVNtOhabQKT_~k@S[\\B}DOZBjSNBjSdJj½FsQPDjyDU§vs_]B­wUHdßqNqli{IwoF[VcagB_m}ZAePKVa@YUDYI}dI[J`kjEMc`KgyogOYeÃkSToGaaC_TQPxcXËM]EecHuPgVCRoH\\oHMYZc]gskCigwoCu[Iqb_YYMIeqE]ahmI^SAk_UBgnqQqyg]BSzmfoPW`qQ«RaAs]YVYwn[EI[g\\NGMKqLwBIS·@jSGmj[KuRDp[NCSRw]wRW~ZDX`Ddn^@RA^JP{ZBRifsDfU`aP[Ț]D_X]AnaBm^}ND\\\\^g\\Kj¥re`WfgXBbS^LpWjT|]l@]zAbm]ZKklNjITXGnFlxRXSfRROCVIXhIvrBrRVdQNJÈRS|FHuVUhJGTeCsrBtn²zpbc|XzsfGfTwEd\\dFjR^lNhW^GvavQ|FIjJO\\Fh^dFntnpAhW|X',
          ],
          encodeOffsets: [[-69880, 10838]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Región Centro-Occidental' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@TYnNõľBRnFjªpZXZ@xnJxzrM^ZJJQXiR@tMNT]`u°CUSkPgSebBYEisVeIE]zYROniLU^FYfP\\QÚ]V{~fYhGnc|IX]XAd{UCN´^jTRZdb\\XTbJRrVØè¤x\\ÄNjVZ@PHIDdJtChYvJlhLhPpt^Y¬hp@d`HLbnbJ`]NV@fP^WTAfQJRTT`AkT\\ITapRLVjSuVYjKEcbeMnlb~w¤BhWRBna@XsoK_ZkYM_wJmcZIcõoWF]HYrnIlNL[~lC@zSn_F_MW]PUd@hSHBTrr@dpfpLrQTZhBpJl\\vzz`BPftFd_bM@f£n{GkH{VGuFjûxã¢ĩx£li~]tBXlr^F¬KÆa@t\\RVfNxfdBq~MrL^]xGfMTRnctGbNrO`VI|DbIPfWTJ|srSncjIR\\vKXU«[VFW©}ZMrCpNX[M]t£L{h±FoTIQSVwdLKøuNqmS}@YXaI@_mNUKwTp¹d~¥{WgXoBsmEm]cEgP[IJiER{buHuX]Mg]kQEi[cFcxSHeteWyd{oa±ysmqADtSfHgIUVGv{EQTÇIRMUcqQqAugJWUJDQPeQWTwQEkHmWJSMilkL^YnBa^y@^kS{XiKoT]AahWXef_¦qLih[[]C[~Mn]bAm^B`W^Cș\\bOV_CetjeAQ|YIO]B@Qm]Cc_CWYX}xQx^TQD\\MCovQ\\LniTHih{AMȓȗ]K©k·`¯m]wpWwDKdgNY^WSE|mlN[w^c|VZJVhRa@Y`GdUJBOd_JGd_Ai]@c^@jQLÅNeSWJurkTkFE]F}buRDheXLyK[iUXgS{`]CQZkNsCaT_Mf¡^EPoPezTaxQLWxQFM|q`ZWpk@]Pe@r]``LT¼XzhbfZpwzSv_HAXzxHv]R[Io``zzvhV`bB]^qAWZPOhW@a|DbU\\JpQpxLpXZ^BXQbJZKxREfe\\MZsC[ZShqhoS_DktkVKroL[IJac¡À@Bl¦]VsIkJoy[DcYqrkGmtIWTyG]YrmfiagAWUF³UO',
          ],
          encodeOffsets: [[-72399, 10121]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Región de Los Andes' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@RTO`\\NA`tTV\\PxEzŦxRft®T@bpA²Pov[A]pBtrbJxzƎBzzŘĦĮðpgvDlc¶ŴĒD\\Ytfe`uBM@TmHWjWlJEXSHcZ[|WPYäÄªSx\\VO[ZZK`qBlYQOdEH¢Cv]Ct`jT|@bfYZBUIČG®Ė^Kz¢HvtOpTV`dIj_|]XVPE´XVBbhjneZq^zHXSJnslHrqdZ\\CpzlItJ^U¥Ak@¿d¢Ib\\JpKLqlUls`CpTrgTg\\YtDNYf[FewQYLaIWR]AWYKoowRIoV[Cab{X@PgOXYrB^]A_agUyu_yp_\\J^QGuywBW`GTuxyYoaeyg»WKS_^_@qf^Ol@XoYr_N{REXwRKbwSfypOFO¢]e`NbStDlMRY^D|_hTVW\\jzLKfWCgvQ~a^EFlElSvqXIfTÆMRK@id]^@j`BHc`IPcAVIHcZ_b@QUgYIUd{x]\\Mnk{TFXZ]hMLcxCXxon^_°l¸Lª ^ȔȘBNg|¸@JTxArKLHNMh[J\\\\FxmZZUt^bB¬QrRX_pOneTy^AVMJqXYLotB@]eYgMS|vNnJF[quC@g^IBc|[ZFVeBa^ERZIVqdGXaGsRgxSBtOx_weX_bQTiGUTcUQgpq[qOByYA[Vy{qK[PsYf]MSNcGuWVoGTuaYPeGg_oG]SfSXcLiKgPEWO[d[QoZ_MSZaecMI[qLf}lSEeXwUDE\\yDmVaARqKMgqUsI_auGsJ][wJYIyRCU\\JOTLrm`MzkP_UPQwS@vsSMNAvst]G[VVQÅMHsKa^D}aBcOWUMKcwAYqsSsgOueimCY_cw^­UWikoiacb]MFwISYMq_WeeEamJ_eKYgdBIQkA@yeMIgWa@ikEY[YeGucCwYLCMai]c{RaSmGUq{JSNmS]NgGibsBbS_kOULaO{BYhUC[\\sCa\\kGmfEH_hdM`iEÁz]MURUwX{Kwj][UFms_MBoXc[loe}IoJoVchKpeSmbgQfQ_wiW_@YU[mIMWMRarwTaIKh¥mQkC_NaEmPm_mHkYgBSWmHEcaTJ`nF^oÈFnAFEbNxAdfvJYpEqfEZfbhLXpZ@\\IVF}HIg\\N´TPcEbaP¾SJDaV',
          ],
          encodeOffsets: [[-74145, 8569]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Región de Los Llanos' },
        geometry: {
          type: 'Polygon',
          coordinates: [
            '@@zhRrmrAh`VBl]TJgn^bFfrJZNZa`Jrv\\pDhxDjlht^YdNZG[pGQpUDOhGvfdF N^WÌwdOSR`DbbpHTSÄlZfhPzpLh_NdiF_lIJ\\cJ~CZZVb@LUfOB~Y`nhAdb\\UpEJxj|rkrMcàVG®x^At`u¨VzCCiROt¾EIiTcAiTMAiPY~CA\\[Tl@`}SRLbaPgMsvUn@ROAxcCaJk_]Y£NUegQMeUBc]cHk\\C^túć@PNanLvmzVJZlpbjB\\\\P~HhXdAVTfRqI^h\\CzlApUt_TSbE|HlbANTDbn]TMbCæQrtVtI^Wt\\V@nbLtQ^drRz@\\WxUDehHqTXgRBbefLzO`zhivGjffYQWjH^MTTtB|l°Bt[ZLUZDQuFg\\WJrkNmuõçƊÐĂd}Pwl[TaxcBlENYb@P_HqRkYYUFqsg[]]u[NPcrKHulSRlmzQZT´CFSohEN[KfgCercIbxEb[`nINQtYhahPsMm¿ĭyHERkJ}UK}T]@YTQZaFscqFK«Ts^WCyPWUiDqcW_JwewSHOocUouOSUaokHUea[eBOm]Sgma}MMaHe]_LW[©\\[Ê@v[vo~HfIN[uC­W«B`Á¨íW_¡qsq]©O}D·ILÃGQgwogOJ_^iLyIOUW}]¥yY_KM[mWIWDYcS]me_G±UYeS¯GkcKwB­egce{]K¯`y@mW_k}]SMcGÅN{~£hFc]¥E}FgUoc[}cgyO«IÇSuqďaoueUamU¡c}aUiG¥a[aOsoWgdxcliN{IqjaRAFiNQYFoneNUW]isi[WuAiUcBopVeMmHeyEsS]@Cn­GeLÉWiqcCsbiE{WIFghJSapsT©YTa@h{I[DWf]R¡YKWuK__YssE{I_imDR]QZq@q]gDucğŚȓʐ̋ϐ_IaRqO}DgEyY{@kVwP[M[vKyJYtWTigNaWqI¿lcfOSKgRaa[F©I]mIO[qBHo_SoH{O]NaA±RcÃYeA_RW_eNS\\eOYHWBYdFKYqYaB_bgG_PGi]Q^TlSa\\[EQa·CEh{XÃC]SHaYWyIu@GcOkDb_BV·ČÉĨD`ghkmZmEUUV_}l}C}JTXhAlZnGn`nObF`MlDnR¦LgJbxSbqQNNXnJ\\ZV`@jX`xRehRnafTLodgpUpI~Jpfkd\\pWA`NntVE^\\xi|LxWVVQ^NÂyjFN_c`gGFnelHb[tD\\[VDZg|AbPVKlPT`atAjahH^MnTTM|IVrnHbT|Qdj^NbDKxZ DvdfH\\ZFZjl@XbJhfN@zlBJRAcZhLfI`bnfFXfr`NTZxJE^NdajblpXj®Vx]`dZDjnvfhPttTZrxBLdVNXdPbA~Cb]tLGÆNRU\\U^HtsBuNMtTuT@RxO`VlONyn_KqPSIV[DzQZJxI^\\tIvH`btJrVNhrLQbBnUzCF[CxVfWTF~kerKJ\\dNbfTY`NpY\\R\\cXPFhOjLdKTWe^TpHh`fHZOvbSpHXUvdHTM^NetZ\\OrLz|\\UZBAzrPr\\hoVRSdHVSjaRW`xfw`sPAwTQhHtWbcHUrJQY]FAbUfYE{\\Ad]J@hDrvE\\ImuM{NThfZ@^sAKpWZIrUN',
          ],
          encodeOffsets: [[-69664, 8739]],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Región Guayana' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@KqeITf\\°hx~'],
            ['@@{BLjhE`ZCySE'],
            ['@@dNpMWaeaB'],
            ['@@Fy]@T'],
            ['@@s[EqaQIbbXSu_'],
            ['@@dhTsO}_WcFB|Z`'],
            [
              '@@pXPt\\b¦bjHbVd~¢nVVbvfbprĐTvJÈP¬hz~dd\\VpEhF~^¦Edg}¤M|HÆNd^T~`lnXz@°_^Lf|hd®fxAdLl°HfTVZH²f`^nTZdCJXnXN\\LZ`¦z~^XPVzJjK`]IhPxphRÄH K¸J~CªPr^rt¢`îXÂ§_¬A®XvDEp]nIÐElSvsS|CmhiVebcmctOBPn|XvzErLhMIlLRhtnMbávcdOPjLjX~QRufMfL|f`zpRtCL^KloRy\\_`@\\]¦uX@^sM¤d¨vbZTvnrfxj^pLONjdxJgO¢Nª\\XEn\\lAbnÌnCznjB`NGtb¸DdSjEÜjEn[Zof_~FlfHVXØrTsxAtL^Tflbz~x|`XllVpG|fD^YlS^JpZfdPjrrRRcdK`dLlxJZfR¾RpBlJjnlOZ]Ec]_@Ys¦JxzAttswmbJrO^_EB]k@@eO@z_Hqh@jiCcL_SWLNjbMxDlipH|crCff`Edg\\QZaCdV¼e`gCMXHlMnXp¦°PTh|vvNpIp]V@d\\rJ~`|bcDze`PMtE`TluTGRmV\\sCX\\T|B_zrCzeNHkvTX`Ã£A{LwpBLfÀ@OlQ\\iye^YbZlHVQvCVc^@xcdy|{QEsXaZFNlSfH¶cIdHtK~H~Q^dq|yjHZoJQTFbrA|_vSovmxa¾¥V^URIXGRgREzNg[ydFTU\\CDNQNTPtO¢mÈ]¬cB_nJQa¨«£ZMcqEwiKsgÉTS^LSvA¢hGHR^tfrcbsA]JbioCIwX_dMbDXY_UI]iViUFiKydLbxLeIok[EghWIaHMEMwFf[[nfjNDR´hlso{kkAoLyqBeIqF]OEeBeKei[}¦BjzC\\M¨HvGP\\ap[~sYºCWlHlIppUhJrL¶KĮFS´w²[|gňƃÒ÷\\eaW{ĩ_EewMcZg[YIg@qK_uu{UyZSY{£M_[UqQiy}_OPmGWQ`½EcNigcUaYLmoFowAOSLamoF_kYyD_MSgTAUZkjiZJjWGy|oDufeJw_@i]MOs\\tS@clSfgXwhVLvVB\\hnHt`rUJctBzPrrCreLGeWQEg]eU][JiOwUgid[umu{AsqEWQ±]ce_Ya_M»pqbW@q[{ZgdeLWwL]`MAcUI[]UyBk^i[{FmRMocVJWYB[oKsL_cIK_@SmZInrOCsOk`[\\AEiPqgRU]sC_VwlWbs_VUHaOUTSeDqccI]m^[c[H]OMm}Os]]H[i[CUaY]CiZSA¶ÉŨƉņťǊǷŦƋThCtR\\OBWf[L]A\\FEkJ]GqZMRopw^MyaEaiG]qGKÉ³@eWC[_YFU[kUBkqmXqDW[DcQk}QE[XONcSaFiaJDkUeeAUqÑJWKeHqWw{YGbsL­IKeNWrUDYdESis@oy]SiPCeRKOgZ]CouwIOJoUOLaZG£gi}QcdoiulmOmBcUeX}OJacOiJYEieQ]^UuCGoVcx[AW\\egI_Pa[TeMMgRgUF{kAYQjG\\eGlu@[XMk`E\\aCg`¡J[SWJDcWgXU_eCw\\EEaTSy_NcaGadiXgIcPYYgHmORcOJUg[LohQeiMKc_{[ePOGkP¥IeW_vIf_XRauykYWDSmyCg^yjRfF¢QBctv@_PqAmrK^AVbf¬FOPsMKdsREYqYYHjGokwwHgcKcFgX[KRaeE^Bp_RQpo\\SM]ÃdQNYM_mLBB^eXON]TeSFwQeZeFI|D_^q¦mvBz_dqheYyA^aEO`]BcW{E§PaIyFiW¡UkHoEWQR}lîR­raQL{Xrg_rkfXcZMl«r}vdlW©nQ`JnKVS[`WnQPUg\\j]ZmuhoRmEc{weoCen{QFstÉCeNyQ}g@YVapDU_iDiPlmIQ`mj_JQ]lY\\{fOPU@`ECdQ@[eO`gB{KkYSKkc}_@G[BWivsRcd`x_fNNWjEV^zOndxXPQjAdmnQDQpGlVrJ\\UMÀXORcvIrX`EZwVCllCPS|INyR_ioDa\\]GJgMsYcJciOJ_Eo_oQu^CcWIX¡VGM]cD]_@syQFkDcpWE{I_e}RWKEa­`GP}Km@uP}eEU}mMAqJaS`cEkkNQOoZaSQZk_µSBYYCGg_WYX{[eyIogawDÏ§[N[mqWJ@k`hvERj\\AhtpEyM_N_ys}]R_IoWU[gCo­@eI{[kC[eWuWLhclwuUE]e]uruoJyiFmk[OGekPKHx}J_V_WSa{KRYKoBeZQAkWwQ^sHUScFlmKk¡UOD_eEE]YKKg_D`GuUFWyaSKwYIwBqciDWi]JcwLGpdbTz\\^X@XrdhjS JRm[iBLlPu^W_i^eIRIQDgiWk[NUo[@G}sYwMEwciZcMcDM¥BS_k@qbabWBĥʍɊɅȖI^ghKxvFhCv_x^SpJ°Wq i\\JWahItgCjexInDU^e¼µ´PdAdUKeBYQ_PqS|s¬N~B|^VZhCTq~GX[Ai\\c[VOv_d[Ac`U~wXyiL[SPPye_VA^NkjBzS`uvkK]YãlGj£UmL_U[}oCAÞ̊ʶæØ¬EB rbnvXXVA\\aUzy`wJMRS¸gp@ZYVIvTj]vLdeRavG]roNY_³M_Dc|MFSx@i_^SrO@Kz]pAd[QbvOaAXN]`tvB@j]dLqdL~Wn`chD\\`pMB¨xÀKvE®HfAWCÆZrF¨`_V@d°bXZGNnO`_PCVbjbjnrT`\\^prfJ¸¤PZTJdij@nc¸LòV\\X¢X~hbb¢x`nª~Er[\\BVylalIjcR~',
            ],
            ['@@eIbXb`KIoig'],
            ['@@PbfGfGiwkEOV@|h|'],
            ['@@X^\\SFoyf'],
            ['@@pLTSiYGrj'],
            ['@@v]GLSĎąÔ±hwDOTMSOQViA¿ATq@KTwalKHYFMRYVF`QdkbKv}Xsp'],
            ['@@R`bgSoWJGn'],
            ['@@YWe^@hlSTY'],
            ['@@eJAacOJn¬Ff[k{s'],
          ],
          encodeOffsets: [
            [[-62126, 8989]],
            [[-62293, 9041]],
            [[-62210, 9060]],
            [[-62272, 9080]],
            [[-62216, 9078]],
            [[-62264, 9184]],
            [[-69073, 6343]],
            [[-62159, 9251]],
            [[-62182, 9364]],
            [[-62252, 9493]],
            [[-62320, 9441]],
            [[-62985, 10080]],
            [[-63314, 10024]],
            [[-63075, 10041]],
            [[-63763, 10221]],
          ],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Región Insular' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@WjAdU^G]qIfJTNoTb'],
            ['@@QZ^\\tDaOSMoJ'],
            ['@@tp|fvLpIVLl[_nAP_`UBcG[KQg@©bGPTcT'],
            [
              '@@N|Br^Raxw@_v¯·iCK_YCE_ZY[SKwBa_OwPL\\W@libLeSh]SagDuDkle@GXcB[kppJ^VaJeNfGUNs[q]ÏX_AkZkC§Z]ff^RnOhĀplI`ZPbGSyjoobQrQbGvERVVAfRXHtJ',
            ],
            ['@@]aEcwJ\\ttXLO'],
            ['@@£ZGxTFf|Qd[ZK{{E'],
            ['@@eZ]bB¾PPaG[cmkA{`'],
          ],
          encodeOffsets: [
            [[-65519, 11072]],
            [[-65757, 11064]],
            [[-66989, 11197]],
            [[-65519, 11338]],
            [[-68193, 12077]],
            [[-66144, 12095]],
            [[-67759, 12068]],
          ],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Región Nor-Oriental' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@ZpcCdARsP@pwWaKmi_Yf'],
            ['@@URZt\\IOOD'],
            ['@@Q_WBKbvC'],
            [
              '@@R\\^HlUN_xGXfhFNfIVhPKBZrbNXlVNXzvCT¼[Ői¶]ºiQè^jV@¶U°A¾X`npb¶¬lZthX]At\\Oz^XZ|d¨^]f]OH\\^LW~VbKCoikFK~\\OZZjTJAdPvAfdPnMlFnKjkQB¶P¢@LLYJHMBZtZPILtPPl]WRJS`c\\sHujLkI{HodoRyGÅ@ÃUO\\Q]Y_C_[Eq[Yib[tJtYPYfU~bm®AZ]pM~Ah`nBvbZCV_lIRJKfLhQLXhlGVfvvIvFl]²Op@hIºCNZ^`AN^AnFhn¢e`XVMSPZ`KjLTZÆ|RUMtT^CtRfSV|eAvMXTdG^VpFb¢RRVflivI|FEQhDQƐ]ZMvA\\W`RªIlDLUCHTfNjAVPOZBJbSbZhK`T~URdIe©cMPkiCU[Rg@MQ@NoG}DSI{HSmIjmI_]kF]^@sO¥låZWCuaÝDuQc]DS{Ygaome\\ODOCOM@KRY@eLCPFX@DEOcDOVKJB^^^EH[TcrmdnQ\\Q¦_RDxRTMf{f@fRfBfT\\Ìh³lDDqhAXxmT³scaaS@QR¢PjI¬QtC|tF²espR^D]tyA_TRSgaXcviLdhO^UJoMou{uSgO¥¯WoNmGkNWhDf_U»cbDRYh[Fce_DedqG{joCkNwiaMXK`TdKjD@irg`G@yP@fl@A^`FP]IqnatxsBsyIwt¥Z`@d^^FPYmkIikAQo½eQIYwKk_ccLQdqQiqcOYeo]IkT]ZeC{oHkUWk{_}wayek]SsKwBtqS×UWeGk}Ee`Ypm\\FÛiiFcT·CsaH_MiAymmDËamkBm[WF©[¡MPhwIicMPoKi]ewmqSuaY§u£cN]tW@¥v[^_@[`Qzkp]LKsDoQy_{eeKeNQv}RWiKOiPdcâuNasmQgkKJgNqKyFu{WmOAsPdnadUfgjn{DTutkTÏFmJo^FM\\eJ}Gupu\\É@[\\\\ªKX^`GfNb~Nbhn^TnAPf\\fbGVplbTVvPVppdGPTfxIxX`dCrVjOXDz]XStL¬rEtdbERYSZ^@~SVL~lIFQzGÀĮNnOtggbsZMRmJ_a\\wFaJqdDfehLM\\gFpET³DYSyRknQkTGvqLOdM\\^v\\^hrtVEZZQlGrO`a@MZkFAwdSbk\\Oxc~ÏāƉèvöMnqlI[XEhRvC',
            ],
            [
              '@@Me}A[OuxYHK}UUWMAOZPZ@JMFgECnQRFR`HHEPWXBlhnNXXlvRr@ZRXOPkGb©GM',
            ],
            ['@@hFHeGWAWEQlD'],
            ['@@iXgjV`dOX'],
            ['@@^ORoeBI~'],
            ['@@¥rYZBRx\\Jd©¬¯JmYIaT]jq`S`'],
          ],
          encodeOffsets: [
            [[-63923, 10188]],
            [[-66295, 10529]],
            [[-66191, 10550]],
            [[-67294, 10202]],
            [[-64333, 10662]],
            [[-64320, 10750]],
            [[-64437, 10538]],
            [[-64220, 10614]],
            [[-64236, 10639]],
          ],
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Región Zuliana' },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            ['@@~¨fpRnO\\ZRkrAL_Y\\YP[UTw©ãÃOZ{XY\\GdWTFkIiXGXn'],
            [
              '@@N@vAf_eZsC[ųđµkduCohĭïŗĥyyƍAwyaIsqoAB^u\\Op±oB@a­SeswQťFyOwU[sSB_[MP_QSi\\ƵǔcxuRcäsĤkņwäaÀG|WRgI[riY_RFI{SUUcPs[LnbFtQzaVEji¢uSKcA@iy[{AKY_KC[mg}JyOW[¯X]E}JG^JdZPbjzZfJLfDVFLpd^`Jdn[nNRrJIhjjN^lfD@`X~@t`nFzhnFXxzV¤°KZgJ@\\iJ\\\\Kl_`hIVpRhIxFVxvJdVHStHpT\\C|ZZMVDjKfVQ\\AxXTRlY`L ~bdnNZfJhv^VjRzxA^Rr^TGNdjDVxGTPxÀlFzntf ``B`MdNhtVQ^T`B¢`VTOfBrMvNİǸƂʊÐ\\ĲxŜ ɖÜ~YQvlRGuJWkOmoOg@Wmí[Q¡Q@sM½ky@wU}G_uKgIeK@RÛhÉp»Çx ·xyxcÜ^aOcaR]OKf}DloKQmd@N_IUHNsz¯TwmAsP[CcW_WCP{SkL_QwWkG{NSWqUqU·¯gOMkÉe_Qkg_Wm]BUU{M]HSUBcYMU¥÷_uI_e[I_iEDy|¡Øó¤ÁKe{_Xe`X\\{@a`AHu]]}^yLPwlY|NJ\\dhbqjIbUm@[Ueu\\YjfUpDnE¥RC~ZEm\\M]eNECukIeY\\URV\\kxbG¥\\uAScyhmvMKUnoXdKfNL}^G®@Ú\\ÌpVL®TvhbnDtbRZ',
            ],
            [
              '@@DM|VBc^WWJd{HmZge|}^URÙO[ZeEV]jKPmZQ^yFfJtUjZFAfahTlOVTDv¯^_SNM@sjQRWIIYN]yqIwwmY@YW©oEimAQöĽMZmS^W`{Ji_cUoSsPGuy¡]L­ĕċHJVYAeZRlL|Ex^`E|²SHDhTJ@bY~¢enzJKtiCagcp£op] sla WfVd~USTuXu~QLZT`]ZaMcVmXzQPNjgdH`mHU~¸LCKhJAvWCrpNNfkC@dhJNTF´MzC~V',
            ],
            ['@@Np^cQgY\\'],
            ['@@FjsHU`'],
          ],
          encodeOffsets: [
            [[-72925, 9417]],
            [[-72935, 9383]],
            [[-73014, 11234]],
            [[-73347, 11232]],
            [[-73307, 11244]],
          ],
        },
      },
    ],
    UTF8Encoding: true,
  });
});