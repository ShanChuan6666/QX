[rewrite_local]

# > 喜马拉雅,会员.大师课,音效&音质,去广告,界面优化+++
^https?:\/\/.+((ximalaya)|(xmcdn)).+(mobile-user\/v2|mobile-web|queryCategoryPageData|discovery-feed\/v4|vip\/v1\/recommand|product\/detail\/v1|mobile\/v1\/album|playpage|album\/price\/ts|mobile\/user\/member).*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/xmly.js
^https?:\/\/.+((ximalaya)|(xmcdn)).+\/[a-z]{6}\-[a-z]{8}\/track\/(v[0-9])\/[a-zA-Z]+\/ts.*$ url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/xmck.js
# > 去广告,
^https?:\/\/openapi\.mysteel\.com\/v5\/getAdv\.htm url reject
^https?:\/\/ulogs\.umeng\.com\/unify_logs url reject
^https?:\/\/adse\.ximalaya\.com\/ url reject
^https?:\/\/gslbali\.ximalaya\.com url reject
^https?:\/\/www\.taobao\.com\/help\/getip\.php url reject
^https?:\/\/.+location\.ximalaya\.com url reject
^https?:\/\/.+dbehavior\.ximalaya\.com url reject
^https?:\/\/ad\.ximalaya\.com url reject
^https?:\/\/.+audid-api\.taobao.com url reject
^https?:\/\/passport\.ximalaya\.com\/user-http-app\/v1\/token\/refresh url reject

[mitm] 
hostname =  43.159.71.*,ulogs.umeng.com,www.taobao.com,43.132.81.*,101.33.27.*,114*0.*,61.172.1*.*,43.141.11.*,114.80.99.86,180.153.255.*,114.80.99.*,*.mysteel.*,61.172.194.196,180.153.*.*,*xima*,*xmcdn*,*.ximalaya.com,*.xmcdn.com,180.153.255.*,180.153.140.*,180.153.250.*,114.80.99.*,114.80.139.237,114.80.161.29,1.62.62.64,51*.com,1.194.255.171, 23.236.99.89, 36.99.200.135, 42.81.4.198, 42.81.26.128, 42.81.120.58, 43.132.80.77, 43.132.83.175, 43.132.84.11, 43.152.24.12, 43.152.24.18, 43.152.25.127, 43.152.29.38, 43.175.16.34, 43.175.22.25, 43.175.44.15, 49.7.69.197, 49.51.224.95, 101.33.11.32, 101.33.11.106, 101.33.20.34, 101.33.29.110, 103.105.60.99, 114.80.99.90, 114.80.99.70, 114.80.99.71, 114.80.99.89, 114.80.99.91, 114.80.99.88, 114.80.99.87, 140.249.84.135, 140.249.85.189, 150.109.90.80, 150.109.91.35, 150.138.47.94, 150.138.136.145, 203.205.136.87, 203.205.136.100, 203.205.136.102, 203.205.136.159, 203.205.137.27, 203.205.137.87, 203.205.137.241, 203.205.250.111, 203.205.250.113, 211.152.137.25,ulogs.umeng.com,passport.ximalaya.com
