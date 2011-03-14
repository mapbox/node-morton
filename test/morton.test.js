var morton = require('../lib/morton');
var assert = require('assert');

exports['test morton numbers'] = function() {
    assert.equal(morton(0, 0), 0);
    assert.equal(morton(0, 0), 0);
    assert.equal(morton(0, 1), 2);
    assert.equal(morton(1, 0), 1);
    assert.equal(morton(15, 3), 95);
    assert.equal(morton(3, 15), 175);
    assert.equal(morton(15, 0), 85);
    assert.equal(morton(0, 15), 170);
    assert.equal(morton(3, 12), 165);
    assert.equal(morton(15, 15), 255);
    assert.equal(morton(22, 49), 2838);
    assert.equal(morton(63, 115), 12127);
    assert.equal(morton(88, 84), 13152);
    assert.equal(morton(100, 23), 5690);
    assert.equal(morton(21, 74), 8601);
    assert.equal(morton(89, 57), 7107);
    assert.equal(morton(31, 57), 3031);
    assert.equal(morton(49, 127), 12203);
    assert.equal(morton(13, 72), 8401);
    assert.equal(morton(8, 38), 2152);
    assert.equal(morton(40, 101), 11362);
    assert.equal(morton(67, 92), 12965);
    assert.equal(morton(88, 114), 15176);
    assert.equal(morton(89, 34), 6473);
    assert.equal(morton(74, 89), 12998);
    assert.equal(morton(7, 55), 2623);
    assert.equal(morton(29, 63), 3067);
    assert.equal(morton(13, 95), 8955);
    assert.equal(morton(39, 46), 3261);
    assert.equal(morton(31, 101), 10615);
    assert.equal(morton(93, 64), 12625);
    assert.equal(morton(101, 15), 5307);
    assert.equal(morton(28, 125), 11250);
    assert.equal(morton(115, 36), 7461);
    assert.equal(morton(11, 5), 103);
    assert.equal(morton(123, 118), 16237);
    assert.equal(morton(102, 86), 13884);
    assert.equal(morton(5, 62), 2745);
    assert.equal(morton(8, 7), 106);
    assert.equal(morton(55, 13), 1463);
    assert.equal(morton(120, 50), 8008);
    assert.equal(morton(69, 8), 4241);
    assert.equal(morton(67, 106), 14477);
    assert.equal(morton(76, 39), 6266);
    assert.equal(morton(21, 49), 2835);
    assert.equal(morton(65, 66), 12297);
    assert.equal(morton(17, 61), 2979);
    assert.equal(morton(109, 125), 16115);
    assert.equal(morton(14, 98), 10332);
    assert.equal(morton(71, 43), 6303);
    assert.equal(morton(124, 114), 16216);
    assert.equal(morton(63, 64), 9557);
    assert.equal(morton(116, 90), 14232);
    assert.equal(morton(5, 15), 187);
    assert.equal(morton(96, 58), 7816);
    assert.equal(morton(99, 99), 15375);
    assert.equal(morton(113, 114), 16137);
    assert.equal(morton(30, 127), 11262);
    assert.equal(morton(90, 45), 6630);
    assert.equal(morton(77, 107), 14555);
    assert.equal(morton(77, 26), 4825);
    assert.equal(morton(12, 66), 8280);
    assert.equal(morton(32, 119), 11818);
    assert.equal(morton(70, 126), 15036);
    assert.equal(morton(99, 78), 13485);
    assert.equal(morton(6, 47), 2238);
    assert.equal(morton(33, 109), 11427);
    assert.equal(morton(115, 98), 15629);
    assert.equal(morton(35, 66), 9229);
    assert.equal(morton(62, 46), 3580);
    assert.equal(morton(3, 124), 10917);
    assert.equal(morton(120, 6), 5480);
    assert.equal(morton(74, 62), 6892);
    assert.equal(morton(20, 38), 2360);
    assert.equal(morton(35, 56), 3717);
    assert.equal(morton(103, 64), 13333);
    assert.equal(morton(98, 83), 13838);
    assert.equal(morton(0, 91), 8842);
    assert.equal(morton(18, 64), 8452);
    assert.equal(morton(55, 100), 11573);
    assert.equal(morton(23, 125), 11191);
    assert.equal(morton(27, 85), 9063);
    assert.equal(morton(110, 10), 5340);
    assert.equal(morton(46, 112), 11860);
    assert.equal(morton(22, 57), 2966);
    assert.equal(morton(44, 29), 1778);
    assert.equal(morton(64, 106), 14472);
    assert.equal(morton(48, 60), 4000);
    assert.equal(morton(126, 100), 15732);
    assert.equal(morton(60, 41), 3538);
    assert.equal(morton(124, 114), 16216);
    assert.equal(morton(76, 107), 14554);
    assert.equal(morton(73, 21), 4707);
    assert.equal(morton(0, 29), 674);
    assert.equal(morton(82, 32), 6404);
    assert.equal(morton(102, 18), 5660);
    assert.equal(morton(63, 39), 3455);
    assert.equal(morton(58, 45), 3558);
    assert.equal(morton(86, 82), 13084);
    assert.equal(morton(36, 107), 11418);
    assert.equal(morton(26, 123), 11214);
    assert.equal(morton(82, 52), 6948);
    assert.equal(morton(33, 111), 11435);
    assert.equal(morton(30, 56), 3028);
    assert.equal(morton(52, 44), 3504);
    assert.equal(morton(53, 82), 10009);
    assert.equal(morton(15, 96), 10325);
    assert.equal(morton(84, 28), 5040);
    assert.equal(morton(49, 58), 3977);
    assert.equal(morton(112, 14), 5544);
    assert.equal(morton(5720, 3022), 27177448);
    assert.equal(morton(1004, 9609), 136828114);
    assert.equal(morton(28361, 26987), 1020688587);
    assert.equal(morton(6041, 26483), 692022091);
    assert.equal(morton(26482, 8247), 471146286);
    assert.equal(morton(8430, 30829), 780172534);
    assert.equal(morton(20421, 6841), 316529299);
    assert.equal(morton(3796, 275), 5657370);
    assert.equal(morton(10902, 31515), 785269662);
    assert.equal(morton(20428, 23206), 853399672);
    assert.equal(morton(19892, 26742), 953249592);
    assert.equal(morton(18553, 5788), 308844513);
    assert.equal(morton(27669, 25147), 1012403099);
    assert.equal(morton(12711, 20252), 631981749);
    assert.equal(morton(26239, 15091), 513589087);
    assert.equal(morton(15952, 9917), 226270114);
    assert.equal(morton(20174, 30111), 980865790);
    assert.equal(morton(21240, 15881), 464278978);
    assert.equal(morton(18901, 30886), 985782585);
    assert.equal(morton(25734, 13851), 507003550);
    assert.equal(morton(10849, 20020), 619453985);
    assert.equal(morton(21191, 17836), 824629429);
    assert.equal(morton(14734, 22423), 661373566);
    assert.equal(morton(3824, 13218), 173989128);
    assert.equal(morton(32676, 9740), 494748848);
    assert.equal(morton(1938, 9547), 137847182);
    assert.equal(morton(30301, 22821), 932583795);
    assert.equal(morton(12017, 32116), 787906337);
    assert.equal(morton(28827, 27445), 1032473447);
    assert.equal(morton(26363, 6336), 378860869);
    assert.equal(morton(2497, 4099), 37834763);
    assert.equal(morton(28647, 11071), 484400831);
    assert.equal(morton(27636, 815), 340745658);
    assert.equal(morton(5722, 30558), 725496812);
    assert.equal(morton(16582, 4846), 302577852);
    assert.equal(morton(1556, 3519), 11963322);
    assert.equal(morton(8851, 2711), 76333871);
    assert.equal(morton(28526, 21803), 913775838);
    assert.equal(morton(3371, 10679), 148082287);
    assert.equal(morton(13038, 20313), 632190678);
    assert.equal(morton(6307, 9538), 157443085);
    assert.equal(morton(9891, 20101), 616350759);
    assert.equal(morton(6326, 26655), 700467134);
    assert.equal(morton(19391, 3937), 284126551);
    assert.equal(morton(23785, 25452), 962231521);
    assert.equal(morton(22010, 13068), 454776292);
    assert.equal(morton(25710, 2369), 345125974);
    assert.equal(morton(12700, 4702), 118055928);
    assert.equal(morton(23702, 8875), 425249182);
    assert.equal(morton(11259, 713), 72218055);
    assert.equal(morton(261, 2253), 8495283);
    assert.equal(morton(24319, 20017), 838623063);
    assert.equal(morton(3016, 2911), 13595370);
    assert.equal(morton(15559, 21961), 661844119);
    assert.equal(morton(1181, 1208), 3197905);
    assert.equal(morton(25309, 17587), 874830683);
    assert.equal(morton(17869, 9383), 405919867);
    assert.equal(morton(25265, 23324), 915294113);
    assert.equal(morton(13913, 12079), 230562283);
    assert.equal(morton(30794, 424), 356686020);
    assert.equal(morton(21758, 32095), 1001551870);
    assert.equal(morton(2977, 5963), 40854667);
    assert.equal(morton(31305, 22467), 930000971);
    assert.equal(morton(32414, 17594), 896846812);
    assert.equal(morton(16596, 20925), 839048114);
    assert.equal(morton(1584, 24960), 672564480);
    assert.equal(morton(14393, 13126), 256517481);
    assert.equal(morton(22231, 16087), 465367871);
    assert.equal(morton(20748, 969), 285974738);
    assert.equal(morton(12479, 29812), 790654837);
    assert.equal(morton(9075, 23020), 646430117);
    assert.equal(morton(19005, 7389), 316975091);
    assert.equal(morton(504, 30451), 707395402);
    assert.equal(morton(19499, 22618), 852502221);
    assert.equal(morton(1080, 11805), 146278370);
    assert.equal(morton(513, 8011), 44966027);
    assert.equal(morton(30397, 613), 354184563);
    assert.equal(morton(21724, 18616), 831577040);
    assert.equal(morton(14661, 32744), 803977361);
    assert.equal(morton(5644, 9225), 154403026);
    assert.equal(morton(20039, 6261), 315898423);
    assert.equal(morton(14923, 6794), 130846925);
    assert.equal(morton(786, 5109), 34581286);
    assert.equal(morton(24859, 15441), 513876807);
    assert.equal(morton(31649, 5820), 393072289);
    assert.equal(morton(16196, 10165), 226466354);
    assert.equal(morton(6396, 18937), 566427602);
    assert.equal(morton(2745, 32283), 720127947);
    assert.equal(morton(18996, 17440), 811863312);
    assert.equal(morton(7334, 2074), 30426780);
    assert.equal(morton(1175, 980), 1762101);
    assert.equal(morton(29552, 30378), 1059954056);
    assert.equal(morton(16234, 27905), 771167302);
    assert.equal(morton(29490, 26014), 1026000812);
    assert.equal(morton(5553, 8361), 152161667);
    assert.equal(morton(14798, 14639), 264460542);
    assert.equal(morton(24200, 14607), 467026154);
    assert.equal(morton(6862, 26021), 694605942);
    assert.equal(morton(29605, 23694), 933610681);
    assert.equal(morton(9321, 5786), 104371913);
    assert.equal(morton(4660, 17185), 554568978);
    assert.equal(morton(2623, 9863), 141329791);
    assert.equal(morton(1467925, 534589), 1735646251955);
    assert.equal(morton(652143, 5047590), 36160758291581);
    assert.equal(morton(857192, 3593958), 11517545725032);
    assert.equal(morton(5685301, 6610669), 62899572223411);
    assert.equal(morton(6802319, 6630520), 66208412297941);
    assert.equal(morton(4889554, 3941834), 29567786414476);
    assert.equal(morton(5573126, 344862), 18911282987708);
    assert.equal(morton(7963404, 692222), 23956265347832);
    assert.equal(morton(7580227, 3101965), 32639174447271);
    assert.equal(morton(7922560, 2104131), 32162167349258);
    assert.equal(morton(6155679, 1804188), 21834883646453);
    assert.equal(morton(6559599, 4108551), 33777956361343);
    assert.equal(morton(5798553, 5827286), 56902911058793);
    assert.equal(morton(2198235, 2313317), 13243009759591);
    assert.equal(morton(7119672, 5231579), 58252206254026);
    assert.equal(morton(6155921, 5864851), 56983461217035);
    assert.equal(morton(4409888, 3645358), 28791630892200);
    assert.equal(morton(5541103, 7390932), 64943671539317);
    assert.equal(morton(894927, 271173), 486608433271);
    assert.equal(morton(2603271, 6590512), 48609487817237);
    assert.equal(morton(3558026, 5755755), 43150232938702);
    assert.equal(morton(7950122, 3960958), 35052206763756);
    assert.equal(morton(8222171, 4501804), 58762116422117);
    assert.equal(morton(4977310, 2456863), 26832802300926);
    assert.equal(morton(3781999, 3582481), 16947095344727);
    assert.equal(morton(5732628, 5126662), 54688351846712);
    assert.equal(morton(4418788, 2235734), 26444498630200);
    assert.equal(morton(3420829, 6752844), 49727224439281);
    assert.equal(morton(5579801, 3467340), 29900162474465);
    assert.equal(morton(8326420, 3383005), 34495079752626);
    assert.equal(morton(191592, 7254739), 44722929841738);
    assert.equal(morton(1994083, 2068894), 4391978636973);
    assert.equal(morton(1136085, 1725077), 3887802733363);
    assert.equal(morton(2351196, 6219327), 42528701684730);
    assert.equal(morton(6187044, 474949), 19233382212658);
    assert.equal(morton(4907022, 3917023), 29476161364734);
    assert.equal(morton(8015028, 4320803), 58577867263258);
    assert.equal(morton(7945535, 2357302), 32210909466493);
    assert.equal(morton(8177472, 8223779), 70310673324042);
    assert.equal(morton(6359929, 3697469), 33540084277219);
    assert.equal(morton(560472, 7847140), 46638159739232);
    assert.equal(morton(1198423, 852092), 1812748909493);
    assert.equal(morton(1762959, 1503636), 3766654255733);
    assert.equal(morton(5131174, 4756404), 53689545903668);
    assert.equal(morton(5848053, 7307043), 63682284313883);
    assert.equal(morton(260354, 5317254), 37415025213484);
    assert.equal(morton(3258353, 2313750), 14342602708777);
    assert.equal(morton(6011318, 8225179), 65866633037726);
    assert.equal(morton(4728041, 7305838), 62578455248105);
    assert.equal(morton(5179324, 316181), 18097417176946);
    assert.equal(morton(4069210, 7284550), 50569100079468);
    assert.equal(morton(8090168, 522192), 23569693058880);
    assert.equal(morton(2006630, 3242744), 12465804721812);
    assert.equal(morton(19676, 3540395), 11167190931930);
    assert.equal(morton(3035838, 3827907), 16339020604766);
    assert.equal(morton(3410044, 1646046), 8323695032312);
    assert.equal(morton(7870775, 4156065), 35090583883031);
    assert.equal(morton(7449445, 2851384), 32486131048081);
    assert.equal(morton(7485034, 5406312), 60525480000708);
    assert.equal(morton(6873760, 7764459), 68618520292490);
    assert.equal(morton(4081021, 4468192), 41180560866641);
    assert.equal(morton(2095849, 1170611), 3676356009547);
    assert.equal(morton(3185997, 2567790), 14475280857337);
    assert.equal(morton(5853235, 2115790), 27767794083245);
    assert.equal(morton(788334, 3927556), 11934250112116);
    assert.equal(morton(493783, 2691425), 9445744736535);
    assert.equal(morton(3414194, 4294439), 40761410866478);
    assert.equal(morton(1062134, 338957), 1245770175926);
    assert.equal(morton(1002145, 7120609), 45035289373699);
    assert.equal(morton(4208890, 6084474), 55665584930764);
    assert.equal(morton(4636438, 2845476), 27068727232820);
    assert.equal(morton(467708, 650410), 651436547544);
    assert.equal(morton(1095352, 4982211), 36972239709514);
    assert.equal(morton(935653, 5283817), 37746634587283);
    assert.equal(morton(3319233, 2110058), 14312141322377);
    assert.equal(morton(5111017, 1531085), 20321502557411);
    assert.equal(morton(5094259, 5082269), 53823555344295);
    assert.equal(morton(4892274, 7712390), 64213195986220);
    assert.equal(morton(1368827, 4326378), 36388373200333);
    assert.equal(morton(997151, 7083298), 45032853145949);
    assert.equal(morton(6267594, 3707462), 30604964687980);
    assert.equal(morton(747163, 8217675), 47172635877839);
    assert.equal(morton(4428111, 7924114), 64346822775389);
    assert.equal(morton(3045093, 8374723), 51671503139867);
    assert.equal(morton(1532241, 7752960), 47541876101377);
    assert.equal(morton(3751964, 2093823), 8709019839482);
    assert.equal(morton(674390, 1463327), 2663725142974);
    assert.equal(morton(7131513, 2920810), 31820657933769);
    assert.equal(morton(8319577, 5813544), 61387416410561);
    assert.equal(morton(6131711, 1632382), 21792275398653);
    assert.equal(morton(4703151, 15360), 17683901138005);
    assert.equal(morton(6509097, 2565461), 30988610971235);
    assert.equal(morton(274143, 2179090), 8874011939677);
    assert.equal(morton(7703807, 8109815), 69938357796735);
    assert.equal(morton(3574594, 7388098), 51766348460044);
    assert.equal(morton(3594749, 2201371), 14391687469019);
    assert.equal(morton(4692557, 6514070), 61707563471481);
    assert.equal(morton(2257638, 2458797), 13359850511542);
    assert.equal(morton(2734275, 2166438), 13483075229741);
    assert.equal(morton(4772969, 7428662), 64057081601641);    
    assert.equal(morton(5892187, 10860749), 168654217982439);
    assert.equal(morton(501861, 12630892), 176015524117681);
    assert.equal(morton(2953709, 15986459), 191708711835355);
    assert.equal(morton(14093957, 16410425), 276652407802515);
    assert.equal(morton(9370571, 3470914), 81866362024013);
    assert.equal(morton(1271855, 1906810), 4016176115421);
    assert.equal(morton(3275094, 15244675), 190773184401694);
    assert.equal(morton(12401095, 1854383), 79101046806719);
    assert.equal(morton(11335619, 12464093), 227566120071847);
    assert.equal(morton(3692566, 2042553), 8702036315030);
    assert.equal(morton(3019057, 6991676), 49325714116513);
    assert.equal(morton(1492691, 5727344), 38751211649797);
    assert.equal(morton(8588369, 10337530), 214024846359433);
    assert.equal(morton(14810736, 488902), 92545798812968);
    assert.equal(morton(12917425, 5989136), 126010738493185);
    assert.equal(morton(12906296, 3502207), 99172914376682);
    assert.equal(morton(7124337, 16535183), 209939708089771);
    assert.equal(morton(9017349, 6007554), 108627403341849);
    assert.equal(morton(3679357, 14927267), 190536093965659);
    assert.equal(morton(12879656, 8739630), 228914821532904);
    assert.equal(morton(2441569, 15169162), 189370378851465);
    assert.equal(morton(1533748, 7913972), 47921971572528);
    assert.equal(morton(359674, 5250907), 37456812079054);
    assert.equal(morton(3851091, 15578929), 191207014603527);
    assert.equal(morton(9842948, 7078928), 116221901079056);
    assert.equal(morton(8315850, 10285280), 167078489618500);
    assert.equal(morton(9049713, 13069724), 246763750856609);
    assert.equal(morton(15546982, 9775509), 235789640701494);
    assert.equal(morton(14496917, 10969793), 239123060810003);
    assert.equal(morton(4493472, 7549429), 63884602043938);
    assert.equal(morton(13950728, 8297913), 136033760414402);
    assert.equal(morton(10819432, 10737992), 224419080778944);
    assert.equal(morton(933822, 8052158), 47127199207420);
    assert.equal(morton(7607130, 10655402), 172728605579724);
    assert.equal(morton(5347892, 6483965), 62714742222770);
    assert.equal(morton(7984905, 1360218), 25709424091849);
    assert.equal(morton(10628218, 1451105), 77155001187654);
    assert.equal(morton(11427423, 11916483), 227009212232031);
    assert.equal(morton(10713774, 13325336), 251303760774868);
    assert.equal(morton(16656875, 7476675), 140033220932687);
    assert.equal(morton(15906553, 13283741), 269985118607331);
    assert.equal(morton(5437535, 3164032), 29705963737429);
    assert.equal(morton(10904626, 16527959), 262457366423342);
    assert.equal(morton(5047770, 12272504), 170265927187396);
    assert.equal(morton(4895107, 13373995), 194494490822799);
    assert.equal(morton(12385235, 3741980), 87764834407333);
    assert.equal(morton(10459149, 12027393), 223749566103635);
    assert.equal(morton(12508088, 4926380), 112005663935968);
    assert.equal(morton(2122313, 1359694), 6737170936041);
    assert.equal(morton(1812815, 570593), 1949082695767);
    assert.equal(morton(10177249, 5307821), 109151139585187);
    assert.equal(morton(4103247, 8914732), 147146678081781);
    assert.equal(morton(9368872, 8474979), 211477597465674);
    assert.equal(morton(424561, 5281768), 37471835307393);
    assert.equal(morton(2434809, 2208209), 13278127781699);
    assert.equal(morton(2173059, 15390724), 189707208114213);
    assert.equal(morton(789847, 4187900), 12071684651957);
    assert.equal(morton(5629969, 16173649), 205857594286851);
    assert.equal(morton(6067863, 10665932), 168606654456245);
    assert.equal(morton(14555018, 14383086), 268135533897964);
    assert.equal(morton(10413092, 9708784), 214904530316816);
    assert.equal(morton(335068, 11135093), 150167790582642);
    assert.equal(morton(14448227, 14707547), 274123026478735);
    assert.equal(morton(11035891, 8110636), 121816883944869);
    assert.equal(morton(586799, 14119186), 178578282120797);
    assert.equal(morton(4224380, 14765483), 202319630409178);
    assert.equal(morton(11673929, 10965223), 225598089836651);
    assert.equal(morton(11569461, 13828), 75867550713137);
    assert.equal(morton(14303782, 2936384), 98838751486996);
    assert.equal(morton(10022977, 12936119), 247813120891435);
    assert.equal(morton(1413404, 15323156), 186452633781104);
    assert.equal(morton(6025027, 12140255), 171280594481839);
    assert.equal(morton(13547224, 4610506), 123679616201160);
    assert.equal(morton(11603626, 3794124), 87426885543140);
    assert.equal(morton(14429569, 3123853), 98932639776931);
    assert.equal(morton(6694571, 7652100), 68395812668517);
    assert.equal(morton(11490291, 11568180), 226866902687525);
    assert.equal(morton(12036523, 14956196), 260813204606053);
    assert.equal(morton(12540510, 12965983), 252302279848958);
    assert.equal(morton(19465, 8388504), 46912769786561);
    assert.equal(morton(6644290, 1447092), 24434440444452);
    assert.equal(morton(11091372, 1045597), 75779051448050);
    assert.equal(morton(7610725, 3970986), 34843025710233);
    assert.equal(morton(600555, 10429871), 143946036796655);
    assert.equal(morton(6491048, 9600323), 164983298548810);
    assert.equal(morton(6151392, 5254712), 56424494816896);
    assert.equal(morton(685509, 12193641), 152609142569107);
    assert.equal(morton(4847092, 11706833), 169642032363282);
    assert.equal(morton(10334886, 3916561), 83407812838934);
    assert.equal(morton(8636701, 575386), 70944008405977);
    assert.equal(morton(6837928, 1139217), 24473681806914);
    assert.equal(morton(4022974, 1952629), 8743287680886);
    assert.equal(morton(1609657, 8634463), 142158591256555);
    assert.equal(morton(13294412, 227253), 88298008582770);
    assert.equal(morton(11014979, 8951451), 216331113566863);
    assert.equal(morton(5753366, 9733164), 161859338766772);
    assert.equal(morton(7435757, 16066997), 210157540990579);
    assert.equal(morton(8727578, 1215055), 72677370372590);
    assert.equal(morton(3572622, 16188325), 192681897609334);
    assert.equal(morton(1071256, 2657993), 10447808422338);
    assert.equal(morton(11944106, 5213063), 111869143204974);
    assert.equal(morton(5333575, 745078), 19289615383101);
    assert.equal(morton(22, 11972167), 151906696044862);
    assert.equal(morton(53, 645845), 561072613171);
    assert.equal(morton(126, 2105114), 8796137723868);
    assert.equal(morton(108, 2796309), 9382499325554);
    assert.equal(morton(35, 931711), 721725042351);
    assert.equal(morton(46, 12685183), 175932609015550);
    assert.equal(morton(89, 13131063), 176472197307243);
    assert.equal(morton(47, 6275636), 38116224667253);
    assert.equal(morton(99, 14611770), 178845292568205);
    assert.equal(morton(90, 4782653), 35736988949478);
    assert.equal(morton(18, 2277589), 8833137156902);
    assert.equal(morton(80, 15517146), 185407834862472);
    assert.equal(morton(88, 7478918), 46213892706664);
    assert.equal(morton(24, 13253440), 176506152821056);
    assert.equal(morton(123, 5969648), 37976137056069);
    assert.equal(morton(31, 5498941), 37429171981303);
    assert.equal(morton(90, 11578641), 151734896956230);
    assert.equal(morton(25, 14877060), 184760903303521);
    assert.equal(morton(60, 8931706), 141287789572056);
    assert.equal(morton(72, 447801), 174518835906);
    assert.equal(morton(76, 4755424), 35736286574672);
    assert.equal(morton(110, 6317810), 43981138869852);
    assert.equal(morton(3, 11918603), 151881362047119);
    assert.equal(morton(97, 13602481), 176654163418627);
    assert.equal(morton(80, 8846445), 140912149674402);
    assert.equal(morton(19, 12898993), 176062017866503);
    assert.equal(morton(114, 14652452), 178853211282724);
    assert.equal(morton(59, 4595378), 35356215381837);
    assert.equal(morton(68, 7655697), 46319645364754);
    assert.equal(morton(36, 3579076), 11169106535472);
    assert.equal(morton(55, 4140564), 11725405947701);
    assert.equal(morton(117, 7684887), 46326054786875);
    assert.equal(morton(67, 8910360), 140920731734661);
    assert.equal(morton(22, 7286615), 44710754919230);
    assert.equal(morton(70, 7343186), 46179498865180);
    assert.equal(morton(28, 6285827), 38116367270234);
    assert.equal(morton(126, 11903116), 151880915260916);
    assert.equal(morton(31, 14226210), 178679263660381);
    assert.equal(morton(59, 12528012), 152462891845093);
    assert.equal(morton(32, 10580707), 149542876523530);
    assert.equal(morton(62, 6403868), 43991373055988);
    assert.equal(morton(30, 5878083), 37944056488286);
    assert.equal(morton(66, 15774172), 186919292154532);
    assert.equal(morton(22, 374925), 148352565686);
    assert.equal(morton(75, 2393255), 8935681595503);
    assert.equal(morton(64, 6150916), 38081907003424);
    assert.equal(morton(107, 6110136), 38079356903109);
    assert.equal(morton(125, 15886716), 186952016084977);
    assert.equal(morton(117, 16198377), 187097508527507);
    assert.equal(morton(17, 665078), 584252042025);
    assert.equal(morton(33, 1883626), 2888543939721);
    assert.equal(morton(124, 14028310), 178292693407608);
    assert.equal(morton(27, 14415879), 178716449702255);
    assert.equal(morton(60, 14554741), 178842474393458);
    assert.equal(morton(74, 11072046), 150086189848812);
    assert.equal(morton(89, 1900707), 2894807996747);
    assert.equal(morton(10, 3175097), 10995821480646);
    assert.equal(morton(93, 9020034), 141298116366681);
    assert.equal(morton(6, 2198285), 8806839484598);
    assert.equal(morton(24, 6021539), 37978919569738);
    assert.equal(morton(29, 1297531), 2244667780059);
    assert.equal(morton(106, 15548018), 185413916966476);
    assert.equal(morton(79, 12095115), 152284518977759);
    assert.equal(morton(75, 584331), 552583336143);
    assert.equal(morton(47, 6516453), 44024096926839);
    assert.equal(morton(2, 7923655), 46732065546286);
    assert.equal(morton(92, 6282207), 38116266783738);
    assert.equal(morton(46, 10852303), 149681794098430);
    assert.equal(morton(72, 10364603), 143658202995402);
    assert.equal(morton(0, 10277378), 143626424811528);
    assert.equal(morton(79, 10803325), 149673746643703);
    assert.equal(morton(64, 16225071), 187099547048106);
    assert.equal(morton(112, 5090729), 35882449149314);
    assert.equal(morton(98, 13172176), 176474479048196);
    assert.equal(morton(71, 8587849), 140780446953623);
    assert.equal(morton(12, 10000429), 143488456853746);
    assert.equal(morton(23, 9370202), 141461903909789);
    assert.equal(morton(107, 10517201), 149534294980167);
    assert.equal(morton(111, 8560140), 140774040147189);
    assert.equal(morton(43, 7442863), 46190259506415);
    assert.equal(morton(9, 5807695), 37935343214827);
    assert.equal(morton(0, 10291790), 143632305234088);
    assert.equal(morton(7, 12934567), 176068470409279);
    assert.equal(morton(67, 11617318), 151741733541933);
    assert.equal(morton(120, 15691173), 185448779652450);
    assert.equal(morton(3, 15955728), 186960633790981);
    assert.equal(morton(6, 13474786), 176619835271196);
    assert.equal(morton(90, 9886786), 143111038710092);
    assert.equal(morton(43, 660273), 584149765703);
    assert.equal(morton(57, 16433543), 187503776793963);
    assert.equal(morton(91, 3361552), 11038611870533);
    assert.equal(morton(66, 16480845), 187510395777190);
    assert.equal(morton(13, 3912493), 11590137678067);
    assert.equal(morton(56, 3465049), 11135284291522);
    assert.equal(morton(25, 12556034), 152464932864329);
    assert.equal(morton(41, 15499121), 185405864029763);
    assert.equal(morton(81, 3372671), 11038773230507);
    assert.equal(morton(84, 7229009), 44702567510802);
    assert.equal(morton(107, 10776107), 149671702437071);
    assert.equal(morton(30, 11770156), 151777743866356);
    assert.equal(morton(2964607, 111), 4746028006911);
    assert.equal(morton(9316506, 5), 70729592750438);
    assert.equal(morton(13056202, 48), 88051212638788);
    assert.equal(morton(16450255, 58), 93754841389789);
    assert.equal(morton(9677308, 62), 71490875777016);
    assert.equal(morton(9560250, 28), 71473960077284);
    assert.equal(morton(10834378, 78), 74840090439916);
    assert.equal(morton(11029506, 11), 75041942274190);
    assert.equal(morton(14853686, 7), 92377298765118);
    assert.equal(morton(15308712, 113), 92639241530946);
    assert.equal(morton(2738756, 79), 4678566031546);
    assert.equal(morton(12882385, 32), 88030740306177);
    assert.equal(morton(30038, 11), 353440158);
    assert.equal(morton(6750500, 61), 22080426938034);
    assert.equal(morton(15981812, 23), 93481327417146);
    assert.equal(morton(1578817, 79), 1374407700651);
    assert.equal(morton(48742, 106), 1163148444);
    assert.equal(morton(14470076, 97), 89405385960786);
    assert.equal(morton(10981191, 87), 74858064327231);
    assert.equal(morton(5830444, 101), 18968003030130);
    assert.equal(morton(8819208, 110), 70455734315240);
    assert.equal(morton(3529191, 58), 5571935821469);
    assert.equal(morton(11118716, 58), 75047108616152);
    assert.equal(morton(15457602, 5), 92656693743654);
    assert.equal(morton(2924808, 0), 4742784811072);
    assert.equal(morton(9155980, 30), 70666255680248);
    assert.equal(morton(10055619, 60), 71747769817765);
    assert.equal(morton(1456684, 34), 1185499319384);
    assert.equal(morton(3564671, 0), 5583794083157);
    assert.equal(morton(1831415, 85), 1397290530615);
    assert.equal(morton(2380129, 45), 4467051273379);
    assert.equal(morton(5128011, 14), 17953052758253);
    assert.equal(morton(3524130, 49), 5571916074502);
    assert.equal(morton(9494756, 78), 71469665121464);
    assert.equal(morton(4998334, 26), 17936052930524);
    assert.equal(morton(4023451, 76), 5845787107813);
    assert.equal(morton(10676687, 82), 74785384133213);
    assert.equal(morton(16137346, 127), 93544476863150);
    assert.equal(morton(829476, 121), 344742440594);
    assert.equal(morton(8888336, 14), 70460079341992);
    assert.equal(morton(6019703, 49), 18989413834519);
    assert.equal(morton(10366470, 111), 71829105682622);
    assert.equal(morton(5977437, 6), 18988135420281);
    assert.equal(morton(14174269, 55), 89335592390523);
    assert.equal(morton(9704240, 59), 71536992391050);
    assert.equal(morton(1689718, 91), 1380030887838);
    assert.equal(morton(4374916, 87), 17610708181562);
    assert.equal(morton(2860172, 32), 4695541172304);
    assert.equal(morton(13578057, 20), 88326075126369);
    assert.equal(morton(10031201, 1), 71747445462019);
    assert.equal(morton(2594735, 43), 4489332739295);
    assert.equal(morton(14494384, 14), 89408405783976);
    assert.equal(morton(15164657, 74), 92449507669385);
    assert.equal(morton(12233942, 84), 76159506215732);
    assert.equal(morton(6818518, 79), 22265114948030);
    assert.equal(morton(10578293, 9), 74771425465747);
    assert.equal(morton(6578887, 72), 22059287867541);
    assert.equal(morton(12248003, 95), 76159769735855);
    assert.equal(morton(14786986, 30), 92364412634860);
    assert.equal(morton(5719335, 62), 18782161538749);
    assert.equal(morton(6935355, 85), 22270764722023);
    assert.equal(morton(15212862, 111), 92633921826302);
    assert.equal(morton(4457842, 96), 17660906650884);
    assert.equal(morton(1631895, 101), 1375800158519);
    assert.equal(morton(11914857, 1), 75940664448067);
    assert.equal(morton(5197894, 15), 17957543481534);
    assert.equal(morton(5542886, 93), 18761508026038);
    assert.equal(morton(10402485, 121), 71830195171219);
    assert.equal(morton(9441397, 20), 71468272588593);
    assert.equal(morton(1604058, 116), 1374746147684);
    assert.equal(morton(13195148, 73), 88240389710034);
    assert.equal(morton(14290153, 66), 89352504898633);
    assert.equal(morton(7958984, 14), 23369269465320);
    assert.equal(morton(2853277, 43), 4695477275099);
    assert.equal(morton(10257027, 30), 71812927210157);
    assert.equal(morton(3891753, 84), 5794246698593);
    assert.equal(morton(3490156, 45), 5570841091314);
    assert.equal(morton(8369870, 93), 23455975371510);
    assert.equal(morton(15319943, 17), 92639492129303);
    assert.equal(morton(4307071, 91), 17597642848223);
    assert.equal(morton(411050, 99), 86168923214);
    assert.equal(morton(5853100, 62), 18971144572664);
    assert.equal(morton(12449310, 52), 76215622044532);
    assert.equal(morton(12850288, 12), 88029667530144);
    assert.equal(morton(11446462, 100), 75128713014644);
    assert.equal(morton(2978918, 26), 4746292237980);
    assert.equal(morton(4469760, 89), 17660990464642);
    assert.equal(morton(6930054, 45), 22270568581302);
    assert.equal(morton(6901030, 36), 22269679176756);
    assert.equal(morton(4051714, 116), 5846809782820);
    assert.equal(morton(1785885, 7), 1396132807035);
    assert.equal(morton(15683500, 43), 92724322979034);
    assert.equal(morton(12468264, 51), 76227348008522);
    assert.equal(morton(12567709, 2), 76232717779289);
    assert.equal(morton(3416344, 52), 5566344792928);
    assert.equal(morton(10653154, 8), 74785049629828);
    assert.equal(morton(765463, 105), 297499109783);
    assert.equal(morton(13402731, 67), 88305601623119);
    assert.equal(morton(11331711, 105), 75111801568727);
    assert.equal(morton(13125193, 63), 88236077882091);
};