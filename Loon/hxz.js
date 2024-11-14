[Script]
# 首页信息流
http-response ^https:\/\/casper-agent\.hongyibo\.com\.cn\/agent\/v3\/feeds\? script-path=hxzfeeds.js, timeout=60, tag=首页信息流

# 导航栏
http-response ^https:\/\/api\.hongyibo\.com\.cn\/gulfstream\/passenger-center\/v\d\/other\/pData\? script-path=hxz.js, timeout=60, tag=导航栏

# 资源列表
http-response ^https:\/\/api\.hongyibo\.com\.cn\/gulfstream\/passenger-center\/v1\/other\/pLayout\? script-path=hxzziyuan.js, timeout=60, tag=资源列表


# 侧边栏
http-response ^https:\/\/common\.hongyibo\.com\.cn\/usercenter\/kflowermenu script-path=hxzSidebar.js, timeout=60, tag=侧边栏



# 支付界面套餐推荐
http-response ^https:\/\/pay\.hongyibo\.com\.cn\/gulfstream\/pay\/v1\/client\/getPayInfo\? script-path=hxzPay.js, timeout=60, tag=支付界面套餐推荐
http-response ^https:\/\/pay\.hongyibo\.com\.cn\/gulfstream\/pay\/v1\/client\/changePayInfo\? script-path=hxzPay.js, timeout=60, tag=支付界面套餐推荐

# 打车界面
http-response ^https:\/\/api\.hongyibo\.com\.cn\/gulfstream\/passenger\/v2\/core\/pMultiEstimatePrice\? script-path=hxzdache.js, timeout=60, tag=打车界面

# 顺风车输入地址后界面
http-response ^https:\/\/api\.hongyibo\.com\.cn\/gulfstream\/pre-sale\/v2\/core\/pMultiEstimatePrice\? script-path=hxzsfc.js, timeout=60, tag=顺风车输入地址后界面

# 顺风车，代驾界面围巾
http-response ^https:\/\/api\.hongyibo\.com\.cn\/gulfstream\/pre-sale\/v2\/core\/IndexInfo\? url reject-dict, tag=顺风车代驾界面围巾

# 满意度调查
http-response ^https:\/\/api\.hongyibo\.com\.cn\/gulfstream\/iapetos\/service\/pGetCommentData\? url reject-dict, tag=满意度调查

# 花花会员中心底部轮播横幅
http-response ^https:\/\/dop\.hongyibo\.com\.cn\/growth-member\/api\/user\/index\? script-path=hxzvip.js, timeout=60, tag=花花会员中心底部轮播横幅

# 去除侧边框现金奖
http-response ^https:\/\/common\.hongyibo\.com\.cn\/passenger\/discount\? script-path=hxzcard.js, timeout=60, tag=去除侧边框现金奖



[Rewrite]

# 首页弹窗
^https:\/\/res\.hongyibo\.com\.cn\/os\/gs\/resapi\/activity\/mget\? reject-dict

# 广告跟踪
^https:\/\/adtrack\.hongyibo\.com\.cn\/trackx\? reject-dict

# 屏蔽更新
^https:\/\/conf\.hongyibo\.com\.cn\/api\/dynamicmodule\/update\? reject-dict

# 首页安全中心提醒
^https:\/\/sec-guard\.hongyibo\.com\.cn\/api\/guard\/psg\/v2\/getShieldStatus\? reject-dict



[Mitm]
hostname = 
api.hongyibo.com.cn, res.hongyibo.com.cn, conf.hongyibo.com.cn, security.hongyibo.com.cn, common.hongyibo.com.cn, security.hongyibo.com.cn, sec-guard.hongyibo.com.cn, pay.hongyibo.com.cn, dop.hongyibo.com.cn
