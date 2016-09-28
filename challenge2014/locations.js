var loc_problems =[
   "probs/amaze/amaze3.mzn"
,  "probs/cyclic-rcpsp/rcmsp.mzn"
,  "probs/elitserien/handball.mzn"
,  "probs/fillomino/fillomino.mzn"
,  "probs/jp-encoding/jp-encoding.mzn"
,
,  "probs/mario/mario.mzn"
,  "probs/mqueens/mqueens2.mzn"
,  "probs/multi-knapsack/mknapsack.mzn"
,  "probs/openshop/openshop.mzn"
,  "probs/rectangle-packing/rect_packing.mzn"
,  "probs/road-cons/road_naive.mzn"
,  "probs/ship-schedule/ship-schedule.cp.mzn"
,  "probs/smelt/smelt.mzn"
,  "probs/solbat/sb.mzn"
,  "probs/spot5/spot5.mzn"
,
,
,  "probs/train/train.mzn"
,  "probs/traveling-tppv/ttppv.mzn"
];
var loc_instance = [
   "probs/amaze/2012-04-27.dzn"
,  "probs/amaze/2012-05-31.dzn"
,  "probs/amaze/2012-06-15.dzn"
,  "probs/amaze/mod2012-03-19.dzn"
,  "probs/amaze/mod2012-06-22.dzn"
,  "probs/cyclic-rcpsp/easy_3.dzn"
,  "probs/cyclic-rcpsp/easy_5.dzn"
,  "probs/cyclic-rcpsp/hard_1.dzn"
,  "probs/cyclic-rcpsp/hard_2.dzn"
,  "probs/cyclic-rcpsp/medium_2.dzn"
,  "probs/elitserien/handball11.dzn"
,  "probs/elitserien/handball12.dzn"
,  "probs/elitserien/handball13.dzn"
,  "probs/elitserien/handball14.dzn"
,  "probs/elitserien/handball19.dzn"
,  "probs/fillomino/5x5_1.dzn"
,  "probs/fillomino/5x5_6.dzn"
,  "probs/fillomino/6x6_0.dzn"
,  "probs/fillomino/6x6_5.dzn"
,  "probs/fillomino/7x7_0.dzn"
,  "probs/jp-encoding/data100.dzn"
,  "probs/jp-encoding/data1000.dzn"
,  "probs/jp-encoding/data1700.dzn"
,  "probs/jp-encoding/data400.dzn"
,  "probs/jp-encoding/data800.dzn"
,  "probs/liner-sf-repositioning/fm3_11.mzn"
,  "probs/liner-sf-repositioning/fm3_5.mzn"
,  "probs/liner-sf-repositioning/tp7_0.mzn"
,  "probs/liner-sf-repositioning/tp7_10.mzn"
,  "probs/liner-sf-repositioning/tp7_8.mzn"
,  "probs/mario/mario_easy_5.dzn"
,  "probs/mario/mario_n_medium_3.dzn"
,  "probs/mario/mario_n_medium_5.dzn"
,  "probs/mario/mario_t_hard_2.dzn"
,  "probs/mario/mario_t_hard_5.dzn"
,  "probs/mqueens/n11.dzn"
,  "probs/mqueens/n12.dzn"
,  "probs/mqueens/n13.dzn"
,  "probs/mqueens/n20.dzn"
,  "probs/mqueens/n31.dzn"
,  "probs/multi-knapsack/mknap1-6.dzn"
,  "probs/multi-knapsack/mknap2-1.dzn"
,  "probs/multi-knapsack/mknap2-10.dzn"
,  "probs/multi-knapsack/mknap2-20.dzn"
,  "probs/multi-knapsack/mknap2-31.dzn"
,  "probs/openshop/gp10-4.dzn"
,  "probs/openshop/j7per10-1.dzn"
,  "probs/openshop/j8per0-2.dzn"
,  "probs/openshop/tai20-4.dzn"
,  "probs/openshop/tai20-6.dzn"
,  "probs/rectangle-packing/rpp18_true.dzn"
,  "probs/rectangle-packing/rpp21_false.dzn"
,  "probs/rectangle-packing/rpp22_false.dzn"
,  "probs/rectangle-packing/rpp23_false.dzn"
,  "probs/rectangle-packing/rpp26_false.dzn"
,  "probs/road-cons/road_11.dzn"
,  "probs/road-cons/road_14.dzn"
,  "probs/road-cons/road_16.dzn"
,  "probs/road-cons/road_20.dzn"
,  "probs/road-cons/road_9.dzn"
,  "probs/ship-schedule/3Ships.dzn"
,  "probs/ship-schedule/6Ships.dzn"
,  "probs/ship-schedule/7Ships.dzn"
,  "probs/ship-schedule/8ShipsMixed.dzn"
,  "probs/ship-schedule/8ShipsMixedUnconstr.dzn"
,  "probs/smelt/smelt_11.dzn"
,  "probs/smelt/smelt_2.dzn"
,  "probs/smelt/smelt_3.dzn"
,  "probs/smelt/smelt_4.dzn"
,  "probs/smelt/smelt_5.dzn"
,  "probs/solbat/sb_13_13_5_5.dzn"
,  "probs/solbat/sb_13_13_6_5.dzn"
,  "probs/solbat/sb_15_15_6_1.dzn"
,  "probs/solbat/sb_15_15_7_1.dzn"
,  "probs/solbat/sb_15_15_7_6.dzn"
,  "probs/spot5/1502.dzn"
,  "probs/spot5/29.dzn"
,  "probs/spot5/412.dzn"
,  "probs/spot5/42.dzn"
,  "probs/spot5/5.dzn"
,  "probs/stochastic-fjsp/fjsp-a1-s2_fjsp-t15-j3-m3-a1_det.mzn"
,  "probs/stochastic-fjsp/fjsp-a1-s3_fjsp-t20-j4-m3-a1_det.mzn"
,  "probs/stochastic-fjsp/fjsp-a1-s4_fjsp-t8-j2-m3-a1_det.mzn"
,  "probs/stochastic-fjsp/fjsp-a1-s5_fjsp-t8-j2-m3-a1_det.mzn"
,  "probs/stochastic-fjsp/fjsp-a1-s6_fjsp-t8-j2-m3-a1_det.mzn"
,  "probs/stochastic-vrp/vrp-s2-v2-c7_vrp-v2-c7_det.mzn"
,  "probs/stochastic-vrp/vrp-s3-v2-c6_vrp-v2-c6_det.mzn"
,  "probs/stochastic-vrp/vrp-s3-v2-c7_vrp-v2-c7_det.mzn"
,  "probs/stochastic-vrp/vrp-s4-v2-c6_vrp-v2-c6_det.mzn"
,  "probs/stochastic-vrp/vrp-s5-v2-c8_vrp-v2-c8_det.mzn"
,  "probs/train/instance.1.dzn"
,  "probs/train/instance.13.dzn"
,  "probs/train/instance.14.dzn"
,  "probs/train/instance.8.dzn"
,  "probs/train/instance.9.dzn"
,  "probs/traveling-tppv/circ14bnonbal.dzn"
,  "probs/traveling-tppv/circ20gnonbal.dzn"
,  "probs/traveling-tppv/circ8bbal.dzn"
,  "probs/traveling-tppv/circ8cbal.dzn"
,  "probs/traveling-tppv/circ8ebal.dzn"
];