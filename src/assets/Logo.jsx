import React from "react";
import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate()
  return (
    <div>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="90px"
        height="90px"
        viewBox="0 0 19272.000000 15986.000000"
        preserveAspectRatio="xMidYMid meet"
        onClick={() => navigate('/home')}
      >
        <g
          transform="translate(0.000000,15986.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M96145 159850 c-704 -37 -1341 -124 -2038 -281 -3681 -828 -7247
-3095 -9988 -6349 -1012 -1201 -1865 -2489 -2525 -3810 -228 -456 -406 -856
-786 -1765 -523 -1251 -778 -2113 -837 -2838 -12 -140 -14 -422 -5 -503 l6
-51 202 -11 c110 -7 302 -18 426 -24 309 -17 1954 -17 2360 0 1049 43 1680 82
3370 207 481 35 1017 74 1190 86 369 25 381 28 484 131 270 271 618 925 1221
2298 178 406 258 573 366 767 325 584 706 1142 1119 1638 212 255 355 411 614
670 460 459 884 807 1401 1150 993 657 1930 999 3045 1110 217 22 731 30 965
16 1056 -65 2087 -352 3118 -868 978 -489 1871 -1137 2682 -1948 1323 -1321
2074 -2706 2284 -4210 71 -509 80 -1114 25 -1655 -54 -532 -182 -1160 -349
-1715 -421 -1399 -1277 -2709 -2490 -3810 -757 -687 -1514 -1199 -2690 -1819
-132 -70 -629 -322 -1105 -561 -476 -239 -984 -498 -1130 -576 -1856 -991
-2851 -1844 -3601 -3089 -106 -177 -299 -551 -388 -751 -447 -1014 -707 -2191
-820 -3714 -49 -654 -71 -1239 -91 -2450 -21 -1248 -57 -2119 -146 -3460 -55
-848 -173 -2325 -200 -2505 -45 -312 -132 -501 -301 -660 -293 -277 -748 -503
-1782 -885 -173 -64 -378 -141 -455 -172 -78 -30 -854 -397 -1726 -816 -5781
-2772 -44918 -21549 -45535 -21847 -528 -254 -1427 -693 -2460 -1200 -2627
-1289 -3760 -1833 -5095 -2447 -1263 -581 -2121 -1055 -3135 -1733 -917 -614
-1736 -1262 -2590 -2049 -256 -236 -897 -877 -1135 -1136 -1384 -1504 -2502
-3109 -3431 -4930 -907 -1778 -1414 -3573 -1510 -5343 -15 -285 -6 -1083 15
-1332 49 -565 133 -1079 256 -1565 532 -2099 1829 -4073 3870 -5891 974 -867
2155 -1724 3440 -2496 800 -481 1704 -952 2485 -1295 1420 -624 2827 -1043
4186 -1247 546 -82 2212 -211 3619 -281 1771 -87 2861 -63 3097 70 l43 24 0
-56 c0 -62 -286 -6951 -296 -7135 l-6 -118 3681 0 3681 0 0 3675 0 3675 48 0
c260 0 88696 300 89390 303 l932 4 0 -3828 0 -3829 3985 0 3985 0 0 3740 0
3739 41 -14 c83 -30 212 -38 569 -38 941 1 3001 162 5220 409 1203 133 1684
200 1985 275 2030 509 4038 1517 6440 3232 1616 1154 2934 2349 4005 3632
1562 1871 2467 3840 2664 5800 55 548 55 1154 0 1700 -118 1167 -495 2403
-1099 3600 -1131 2240 -3055 4401 -5870 6590 -1515 1179 -3593 2575 -5745
3862 -1682 1005 -3249 1861 -5110 2791 -1606 803 -2945 1422 -4767 2206 -1475
633 -2585 1167 -5211 2503 -1495 760 -2242 1131 -3302 1638 -1161 556 -2628
1265 -4705 2275 -704 342 -1683 818 -2175 1057 -2038 991 -26035 12615 -26150
12668 -231 106 -482 216 -980 430 -1052 452 -1520 671 -2006 940 -1144 633
-1872 1312 -2279 2125 -288 574 -455 1212 -530 2025 -37 402 -39 509 -40 1755
-1 679 -5 1296 -9 1370 -23 443 -38 609 -86 985 -17 127 -37 302 -45 390 -82
859 55 1425 440 1818 250 256 518 411 1216 705 405 171 533 231 799 376 1401
765 2301 1344 3182 2048 1626 1297 2961 2724 3994 4268 1401 2093 2212 4356
2409 6720 30 366 36 512 42 985 11 897 -41 1648 -173 2525 -465 3091 -1861
6118 -3939 8540 -554 646 -1267 1358 -1890 1885 -1683 1426 -3661 2526 -5610
3120 -998 304 -1913 472 -2965 546 -203 14 -1048 20 -1265 9z m29444 -62541
c20073 -9415 29976 -14065 30326 -14239 640 -319 1048 -537 1555 -833 1911
-1113 3259 -2263 4036 -3442 434 -660 682 -1300 771 -1990 25 -195 25 -702 0
-890 -122 -923 -518 -1778 -1231 -2665 -344 -427 -842 -931 -1331 -1345 -808
-685 -1840 -1376 -2786 -1864 l-196 -101 -3666 0 -3667 0 0 2300 0 2300 -3375
0 -3375 0 0 -2300 0 -2300 -45335 0 -45335 0 0 2455 0 2455 -4600 0 -4600 0 0
-2455 0 -2455 -3978 0 -3979 0 -349 353 c-356 359 -570 587 -819 872 -1545
1768 -2372 3437 -2495 5034 -22 285 -11 705 25 996 177 1419 985 2744 2340
3835 355 286 816 596 1170 786 72 39 61070 29471 61084 29473 2 1 13416 -6290
29810 -13980z"
          />
          <path
            d="M96270 103083 c-520 -39 -1125 -284 -1486 -601 -401 -354 -598 -871
-556 -1465 31 -443 154 -864 397 -1362 265 -542 621 -1044 1070 -1510 l96
-100 -19 -45 c-23 -53 -4146 -8898 -4173 -8952 -43 -84 -424 -419 -761 -670
-825 -614 -1666 -997 -2443 -1112 -257 -38 -593 -49 -821 -26 -1127 113 -2097
814 -2891 2090 -50 80 -703 1214 -1453 2520 l-1362 2375 51 100 c28 55 128
231 222 390 279 472 466 801 536 942 82 167 97 249 90 478 -6 177 -26 266 -91
400 -136 283 -411 465 -817 541 -116 22 -440 30 -582 14 -493 -53 -954 -251
-1235 -529 -162 -161 -269 -336 -313 -511 -18 -71 -21 -104 -17 -215 4 -113 9
-143 38 -228 36 -107 102 -230 187 -346 77 -105 344 -367 488 -479 132 -102
456 -320 632 -426 62 -37 118 -77 124 -89 29 -53 21 -408 -21 -922 -38 -455
-83 -904 -194 -1935 -50 -461 -59 -572 -81 -1000 -54 -1031 -120 -1427 -322
-1940 -114 -289 -198 -436 -303 -533 -106 -98 -203 -110 -342 -44 -126 61
-232 150 -503 421 -937 939 -1501 1727 -1651 2309 -19 73 -28 137 -32 228 -7
185 7 235 128 472 413 806 577 1490 459 1918 -36 131 -84 214 -179 310 -167
168 -367 233 -715 232 -198 0 -341 -16 -578 -64 -179 -36 -256 -63 -408 -140
-377 -195 -609 -507 -659 -889 -68 -524 224 -1209 844 -1980 42 -52 79 -104
81 -115 3 -11 325 -1653 715 -3650 391 -1996 712 -3630 713 -3631 1 -2 180
-28 397 -59 1730 -245 4086 -531 6170 -750 7216 -756 13708 -1052 18865 -860
4484 167 7973 699 10401 1585 119 43 218 80 220 82 4 4 764 4181 1084 5958 99
553 190 1042 200 1088 68 290 212 475 710 910 129 114 279 251 334 306 310
316 448 633 433 1001 -9 221 -69 371 -204 516 -225 238 -598 368 -1213 421
-201 17 -723 17 -820 0 -342 -61 -601 -184 -796 -379 -221 -221 -316 -540
-274 -918 39 -350 159 -688 425 -1195 144 -276 154 -382 65 -710 -22 -80 -82
-341 -135 -580 -234 -1063 -398 -1560 -631 -1912 -67 -100 -204 -236 -279
-275 -202 -106 -362 -80 -513 82 -204 218 -344 663 -466 1475 -73 486 -87 732
-96 1725 -6 736 -10 882 -28 1085 -78 882 -91 1383 -40 1539 7 23 62 88 156
185 651 677 1032 1310 1133 1886 27 154 29 395 4 535 -75 424 -334 758 -750
964 -197 98 -397 159 -645 198 -162 25 -549 25 -710 0 -674 -106 -1142 -442
-1270 -912 -31 -110 -38 -334 -16 -460 37 -215 115 -402 265 -637 205 -322
242 -383 284 -470 304 -625 189 -1283 -381 -2183 -116 -183 -229 -347 -517
-750 -258 -361 -394 -563 -492 -730 -39 -66 -389 -712 -778 -1435 l-708 -1315
-131 -130 c-643 -636 -1436 -1092 -2146 -1235 -219 -44 -326 -54 -550 -54
-238 1 -402 22 -619 79 -135 36 -364 121 -476 177 -557 280 -1079 779 -1528
1463 -52 80 -5185 9362 -5204 9411 -3 8 49 96 115 197 547 832 1211 1926 1407
2317 93 185 117 280 135 527 43 609 -193 1161 -660 1543 -407 333 -1005 507
-1590 463z"
          />
          <path
            d="M78272 81025 c45 -31 90 -119 118 -230 44 -180 57 -406 80 -1405 6
-245 15 -508 20 -585 58 -844 199 -1321 464 -1572 83 -79 130 -110 243 -157
138 -58 304 -95 523 -115 428 -41 4844 -332 6690 -441 6023 -356 10959 -483
15180 -390 245 5 875 17 1400 25 1894 30 2729 53 3645 100 2392 125 4265 415
5984 926 413 123 631 213 816 337 167 111 259 210 330 351 137 272 189 618
230 1516 8 182 20 395 25 475 50 718 161 1042 394 1155 83 40 80 42 -34 14
-687 -165 -2120 -456 -3340 -678 -4485 -816 -9214 -1345 -13530 -1516 -1233
-48 -1819 -59 -3190 -59 -1238 0 -1627 6 -2570 39 -5017 180 -9437 893 -13151
2121 -190 63 -350 114 -355 114 -5 0 8 -11 28 -25z"
          />
          <path
            d="M112140 45767 c-612 -437 -1228 -918 -1965 -1532 -317 -265 -360
-307 -434 -420 -56 -85 -86 -157 -108 -260 -20 -93 -13 -267 15 -350 11 -33
29 -105 41 -160 11 -55 30 -145 42 -200 19 -89 20 -119 15 -266 -17 -434 -94
-879 -246 -1411 -105 -373 -209 -667 -430 -1228 -81 -206 -1787 -4558 -3790
-9670 -2003 -5112 -3676 -9371 -3717 -9465 -102 -234 -343 -717 -451 -906
-342 -594 -707 -1045 -1067 -1317 -185 -140 -471 -268 -835 -376 -459 -135
-1195 -286 -2020 -416 -107 -16 -205 -32 -216 -35 -18 -4 -56 -85 -213 -451
-105 -246 -189 -449 -187 -451 3 -3 98 7 213 21 1094 136 2190 180 4408 181
2224 0 3327 -44 4315 -171 107 -14 215 -27 240 -30 l45 -5 207 458 c114 252
210 466 214 476 6 16 -11 17 -257 17 -805 0 -1611 83 -2149 221 -279 72 -563
189 -738 306 -172 114 -301 272 -358 438 -24 70 -28 95 -28 205 -1 112 1 129
22 165 12 22 22 48 22 57 0 30 105 432 160 613 167 552 434 1299 883 2465 515
1338 1532 3896 1605 4034 46 88 116 160 189 194 l58 27 4990 0 4990 0 60 -28
c69 -32 113 -72 156 -139 31 -48 101 -259 524 -1578 604 -1886 938 -2974 1315
-4290 284 -993 358 -1271 367 -1389 12 -162 -38 -368 -125 -516 -60 -102 -217
-261 -332 -336 -461 -303 -1170 -454 -2300 -490 -195 -6 -358 -14 -361 -18
-12 -12 -340 -883 -335 -889 6 -6 2785 122 3091 143 289 19 785 44 1125 55
382 13 1818 13 2295 0 1315 -35 2038 -62 3435 -129 l555 -26 -3 -22 c-4 -28
-2 -28 165 -8 113 14 153 14 411 0 399 -21 360 -25 385 35 25 59 -9 51 352 85
1772 164 2886 213 4625 201 2893 -20 4524 -92 5859 -261 151 -19 276 -34 278
-32 7 8 471 982 468 985 -2 2 -29 -1 -61 -7 -162 -29 -1024 -42 -1374 -21
-929 57 -1506 263 -1792 640 -134 177 -187 374 -188 697 l0 133 54 152 c466
1310 2135 4230 4899 8573 406 638 1086 1696 1097 1708 13 14 1742 -2648 2808
-4324 1305 -2054 2224 -3553 2897 -4729 354 -618 438 -777 489 -922 160 -452
195 -723 125 -978 -170 -626 -987 -965 -2404 -998 l-289 -7 -193 -449 c-106
-247 -191 -451 -189 -453 1 -2 97 8 212 22 1159 138 2567 218 5204 297 557 17
2166 17 2570 0 1504 -62 2831 -177 4353 -376 l249 -32 33 65 c82 165 435 910
435 920 0 7 -27 11 -72 11 -94 0 -564 26 -828 45 -2031 150 -3444 515 -4264
1103 -118 85 -283 230 -362 318 -312 349 -1262 1560 -1982 2526 -1993 2674
-4124 5778 -6803 9911 -192 295 -349 542 -349 547 0 16 1609 2414 2488 3710
2423 3569 3769 5454 4926 6900 356 444 559 630 943 863 446 271 1065 500 1769
656 50 11 651 88 1334 170 684 83 1244 152 1245 153 35 54 466 811 463 814 -3
2 -1424 -54 -3159 -125 -3058 -125 -3163 -129 -3454 -121 -491 14 -1393 53
-2335 100 -668 34 -3213 150 -3215 148 -6 -7 -425 -806 -425 -810 0 -3 170 -8
378 -12 1333 -24 2262 -136 2935 -352 702 -227 1076 -579 1077 -1016 0 -72 -3
-84 -64 -220 -323 -727 -945 -1849 -1961 -3538 -890 -1480 -2186 -3568 -3650
-5882 l-118 -188 -22 33 c-44 64 -545 843 -846 1314 -2598 4065 -4185 6864
-4614 8137 l-55 164 0 195 c0 295 34 432 151 607 266 398 876 625 1851 690
277 19 667 18 773 -2 50 -10 116 -18 148 -20 l58 -3 171 468 c94 257 168 470
165 473 -3 3 -153 -10 -334 -30 -1749 -191 -3293 -296 -4898 -336 -768 -19
-912 -16 -2337 55 -722 35 -1452 74 -1623 85 -547 35 -1135 69 -1720 100 -643
34 -950 54 -1174 76 -84 8 -155 13 -158 11 -7 -8 -176 -867 -171 -872 13 -14
313 -24 838 -30 316 -3 665 -10 775 -16 955 -46 1688 -231 2175 -549 227 -148
613 -598 1304 -1520 1073 -1431 2695 -3763 4993 -7180 1152 -1714 2913 -4361
2913 -4380 0 -6 -138 -223 -307 -483 -2552 -3928 -4621 -7021 -5943 -8882
-593 -835 -1215 -1676 -1383 -1870 -111 -129 -344 -359 -472 -466 -1027 -863
-2544 -1362 -4597 -1514 -270 -20 -312 -20 -304 0 3 8 8 21 11 28 4 9 -136 23
-607 60 -1696 133 -1575 121 -1747 167 -710 188 -1241 469 -1642 869 -261 261
-364 422 -679 1050 -812 1624 -2034 4708 -3453 8716 -80 226 -523 1447 -985
2715 -884 2426 -914 2512 -1758 5035 -486 1451 -1800 5421 -2760 8335 -218
663 -399 1208 -403 1212 -3 4 -121 -75 -261 -175z m-1269 -5748 c18 -19 37
-58 50 -103 28 -94 4173 -11565 4206 -11636 32 -71 45 -151 33 -204 -11 -51
-64 -99 -125 -115 -32 -8 -1253 -11 -4427 -11 l-4384 0 -44 23 c-70 35 -85 64
-84 160 0 68 5 90 26 132 24 44 4457 11409 4529 11610 33 91 52 121 99 153 47
32 86 29 121 -9z"
          />
          <path
            d="M96662 45650 c-690 -172 -1943 -307 -4517 -486 -439 -30 -427 -30
-1245 21 -1344 84 -2054 142 -3488 281 -546 53 -994 95 -995 93 -16 -22 -338
-721 -334 -725 3 -3 112 8 243 25 434 55 701 78 1051 90 1167 40 1970 -219
2443 -789 123 -149 251 -379 320 -575 263 -751 427 -2410 515 -5220 83 -2659
94 -6697 25 -9435 -47 -1874 -123 -3433 -235 -4840 -45 -559 -128 -1417 -143
-1474 -7 -29 -125 85 -4677 4490 -2569 2486 -4692 4545 -4720 4576 -27 30
-138 147 -245 259 -1307 1366 -3169 3437 -5265 5854 -1889 2179 -4519 5423
-5968 7362 l-272 363 -70 -5 c-1171 -91 -2680 -140 -3559 -117 -453 12 -766
29 -1101 57 -173 15 -502 50 -575 61 -33 5 -37 3 -53 -31 -72 -150 -367 -818
-364 -822 3 -2 83 12 178 31 954 194 1891 174 2552 -54 315 -108 625 -276 840
-454 85 -72 123 -123 191 -261 395 -797 645 -3214 746 -7200 48 -1902 64
-4825 31 -5545 -6 -129 -18 -395 -26 -590 -69 -1598 -234 -4572 -465 -8395
-33 -544 -85 -1393 -114 -1885 -30 -492 -59 -940 -65 -995 -32 -318 -248 -647
-621 -945 -144 -115 -228 -168 -415 -260 -498 -245 -1093 -373 -1856 -396
l-216 -7 -212 -425 c-117 -233 -210 -426 -208 -428 2 -3 127 20 278 50 830
166 1691 255 2974 308 398 17 2165 17 2660 0 1605 -54 2889 -149 4245 -313
184 -23 357 -42 383 -42 l48 -2 255 489 c140 268 254 489 252 491 -2 2 -41 -5
-86 -16 -320 -74 -611 -103 -1037 -104 -362 0 -519 10 -805 51 -1107 158
-1865 668 -2244 1509 -371 823 -589 2592 -711 5745 -102 2649 -137 6997 -75
9235 48 1719 129 2917 296 4375 4 30 10 61 13 68 5 8 68 -54 181 -175 3391
-3650 6211 -6636 8265 -8753 599 -618 7603 -7864 8061 -8340 2565 -2669 4477
-4786 5445 -6030 272 -349 533 -718 640 -905 30 -52 49 -74 60 -72 24 6 379
246 379 257 0 5 -15 94 -34 197 -269 1467 -420 3832 -486 7613 -40 2298 -40
6516 0 9555 84 6312 296 9802 693 11376 54 210 100 336 179 489 89 173 175
288 328 440 246 246 518 408 905 540 407 138 831 206 1435 230 145 6 268 14
271 18 4 4 57 102 119 217 62 116 128 238 147 273 22 40 30 62 21 61 -7 -1
-82 -18 -166 -39z"
          />
          <path
            d="M45285 45599 c-2178 -32 -4190 -341 -5935 -911 -2379 -777 -4374
-2082 -5758 -3766 -277 -337 -641 -856 -869 -1237 -304 -509 -587 -1083 -812
-1648 -566 -1418 -910 -3057 -1025 -4897 -33 -512 -40 -783 -40 -1440 0 -654
8 -977 39 -1530 220 -3899 1259 -6960 3122 -9198 452 -543 989 -1068 1554
-1518 2138 -1707 5040 -2681 8639 -2898 530 -33 695 -37 1425 -43 1230 -9
2085 32 3115 148 2999 339 5463 1251 7344 2718 961 749 1780 1646 2449 2681
1349 2087 2118 4772 2302 8040 31 555 39 877 39 1555 0 685 -7 950 -40 1465
-200 3153 -1087 5712 -2658 7670 -412 513 -903 1016 -1416 1451 -1586 1342
-3539 2285 -5855 2824 -1679 391 -3500 564 -5620 534z m765 -1289 c747 -21
1318 -84 1975 -215 888 -178 1641 -434 2430 -825 881 -437 1627 -940 2385
-1608 193 -170 683 -657 861 -857 1616 -1808 2721 -4098 3248 -6730 395 -1976
444 -4164 136 -6117 -202 -1282 -555 -2484 -1071 -3653 -108 -243 -370 -770
-495 -995 -824 -1481 -1879 -2678 -3224 -3660 -1375 -1003 -3001 -1602 -4860
-1789 -479 -48 -642 -55 -1280 -56 -624 0 -756 5 -1166 46 -1870 184 -3475
818 -5034 1988 -441 331 -799 643 -1225 1070 -619 620 -1133 1256 -1655 2050
-1456 2214 -2345 4936 -2550 7811 -31 440 -36 578 -42 1140 -7 734 9 1187 68
1815 190 2062 788 3965 1747 5565 307 513 690 1038 1097 1505 185 211 698 726
905 906 949 830 1977 1454 3085 1874 1191 452 2515 698 3950 734 160 4 310 8
335 9 25 1 196 -3 380 -8z"
          />
          <path
            d="M13476 45529 c-1828 -208 -4095 -349 -5633 -349 -243 0 -602 14
-1625 65 -722 35 -1452 74 -1623 85 -547 35 -1135 69 -1720 100 -643 34 -950
54 -1174 76 -84 8 -155 13 -158 11 -7 -8 -176 -867 -171 -872 13 -14 313 -24
838 -30 793 -8 1083 -24 1480 -81 512 -73 904 -185 1247 -358 210 -105 300
-170 458 -329 726 -734 2745 -3565 6072 -8512 1165 -1734 2903 -4346 2903
-4365 0 -6 -138 -223 -307 -483 -2552 -3928 -4621 -7021 -5943 -8882 -593
-835 -1215 -1676 -1383 -1870 -111 -129 -344 -359 -472 -466 -958 -805 -2347
-1295 -4190 -1479 -425 -42 -872 -67 -1414 -78 l-315 -7 -169 -423 c-93 -233
-167 -426 -163 -429 3 -3 48 -1 98 5 564 69 1789 183 2488 232 1190 83 1973
105 3350 96 2893 -20 4524 -92 5859 -261 151 -19 276 -34 278 -32 7 8 471 982
468 985 -2 2 -29 -1 -61 -7 -162 -29 -1024 -42 -1374 -21 -929 57 -1506 263
-1792 640 -134 177 -187 374 -188 697 l0 133 54 152 c393 1105 1656 3381 3709
6683 603 970 2244 3553 2287 3598 13 14 1742 -2648 2808 -4324 1305 -2054
2224 -3553 2897 -4729 354 -618 438 -777 489 -922 160 -452 195 -723 125 -978
-170 -626 -987 -965 -2404 -998 l-289 -7 -193 -449 c-106 -247 -191 -451 -189
-453 1 -2 97 8 212 22 1159 138 2567 218 5204 297 557 17 2166 17 2570 0 1504
-62 2831 -177 4353 -376 l249 -32 33 65 c82 165 435 910 435 920 0 7 -27 11
-72 11 -94 0 -564 26 -828 45 -2031 150 -3444 515 -4264 1103 -118 85 -283
230 -362 318 -312 349 -1262 1560 -1982 2526 -1993 2674 -4124 5778 -6803
9911 -192 295 -349 542 -349 547 0 16 1609 2414 2488 3710 2423 3569 3769
5454 4926 6900 356 444 559 630 943 863 446 271 1065 500 1769 656 50 11 651
88 1334 170 684 83 1244 152 1245 153 35 54 466 811 463 814 -3 2 -1424 -54
-3159 -125 -3058 -125 -3163 -129 -3454 -121 -491 14 -1393 53 -2335 100 -668
34 -3213 150 -3215 148 -6 -7 -425 -806 -425 -810 0 -3 170 -8 378 -12 1333
-24 2262 -136 2935 -352 702 -227 1076 -579 1077 -1016 0 -72 -3 -84 -64 -220
-576 -1295 -2267 -4135 -5611 -9420 l-118 -188 -22 33 c-104 152 -1024 1589
-1421 2219 -2259 3578 -3650 6070 -4040 7235 l-54 161 0 195 c0 295 34 432
151 607 266 398 876 625 1851 690 277 19 667 18 773 -2 50 -10 116 -18 148
-20 l58 -3 170 465 c93 256 169 468 169 472 0 11 -37 9 -314 -23z"
          />
          <path
            d="M168855 45494 c-363 -35 -986 -95 -1385 -134 -1386 -136 -1683 -159
-2625 -201 -374 -17 -2022 -23 -2545 -10 -831 21 -1470 54 -2055 107 -248 22
-1232 126 -1895 199 -316 36 -577 61 -581 57 -14 -17 -381 -844 -376 -849 3
-2 86 11 184 30 201 40 467 80 683 102 1119 113 1990 -73 2645 -565 120 -90
144 -120 210 -255 162 -334 286 -944 400 -1967 171 -1534 293 -3758 355 -6473
29 -1265 35 -1961 34 -4120 -1 -3313 -29 -5232 -109 -7505 -85 -2399 -180
-3473 -370 -4164 -154 -562 -498 -978 -1098 -1330 -432 -254 -1201 -524 -1817
-640 -406 -76 -677 -100 -1110 -101 -369 0 -447 6 -629 51 -57 14 -107 22
-111 17 -14 -16 -381 -885 -376 -890 3 -3 481 27 1063 66 3649 248 4198 283
5278 332 616 27 2438 21 3345 -11 1631 -59 3038 -195 3689 -356 79 -19 147
-32 151 -27 10 10 471 975 468 979 -2 1 -34 -5 -73 -13 -92 -21 -963 -30
-1230 -13 -477 29 -954 102 -1406 216 -537 135 -1024 349 -1382 609 -124 90
-361 331 -436 445 -150 225 -213 396 -265 725 -178 1115 -295 3178 -406 7165
-29 1046 -90 3646 -90 3843 l0 24 193 7 c824 29 2460 79 3567 111 1149 32
1629 44 3190 77 339 7 2479 12 6039 15 l5514 4 -6 -2158 c-5 -2022 -10 -2514
-37 -3568 -78 -3075 -280 -5178 -571 -5921 -182 -467 -515 -855 -968 -1128
-662 -401 -1613 -606 -2806 -606 -369 0 -528 14 -728 61 -48 12 -89 20 -91 18
-12 -15 -425 -893 -421 -897 3 -3 1576 111 3497 252 2771 203 3516 255 3603
251 61 -3 308 -12 550 -21 2932 -99 4934 -258 5748 -456 70 -17 129 -29 130
-27 12 15 468 981 466 983 -2 2 -58 -5 -124 -15 -102 -15 -190 -18 -585 -18
-256 -1 -532 4 -615 9 -601 40 -1233 154 -1700 307 -806 264 -1321 621 -1588
1103 -86 156 -134 315 -181 603 -101 612 -166 1433 -246 3112 -116 2448 -228
6408 -246 8720 -7 828 7 2902 26 3985 56 3177 246 6069 486 7385 64 352 162
702 221 788 38 55 258 265 366 349 438 340 963 549 1582 628 402 51 1032 55
1262 6 l63 -13 300 386 c224 288 296 387 283 389 -18 3 -696 -61 -2223 -208
-1334 -129 -1634 -151 -2575 -192 -394 -18 -2277 -18 -2700 0 -664 27 -1112
53 -1595 92 -480 39 -1776 166 -2399 235 -173 19 -316 34 -317 32 -10 -9 -384
-851 -380 -854 3 -3 74 9 158 25 750 148 1450 176 2013 81 500 -85 935 -265
1300 -539 52 -39 110 -90 130 -113 437 -507 723 -2690 845 -6447 40 -1253 70
-3120 70 -4457 l0 -612 -52 -5 c-29 -3 -172 -10 -318 -16 -146 -6 -501 -24
-790 -40 -1078 -60 -1666 -88 -3380 -160 -657 -28 -1564 -66 -2015 -85 -2212
-93 -2977 -102 -4940 -55 -1712 41 -3944 156 -5845 301 -465 35 -1069 86
-1124 95 l-39 6 6 1207 c29 5131 222 8275 591 9583 39 139 94 295 124 354 29
56 286 303 422 405 443 333 952 527 1578 604 342 41 1015 46 1198 8 l92 -19
233 300 c129 165 265 340 302 388 l68 88 -43 -1 c-24 -1 -340 -30 -703 -65z"
          />
        </g>
      </svg>
    </div>
  );
}

export default Logo;
