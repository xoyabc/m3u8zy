document.writeln("<a href=\"./?m=collect-break\"><font color=\"#15696B\" style=\"font-size:16px;\">继续上次断点采集</font></a>");
//document.writeln("<script language=\"javascript\" type=\"text/javascript\" src=\"http://cj.tv6.com/cj/gonggao.js\"></script>");
var d = new Date();
var h = d.getHours();
var list = {
	'tv6': {
		'des': '『赏英才采集平台』vip资源、URL全网资源【推荐使用】',
		'rows': [{
			'status': 'ok3',
			'name': '全站资源【cj.tv6.com】一键采集资源 <img src="http://cj.tv6.com/cj/1-140105140054.gif"/>',
			'apiurl': 'http://cj.tv6.com/mox/inc/api.php',
			'flag': 'tv6',
			'hour1': '24',
			'hour2': '48',
			'hour3': '73',
			'hour4': '98',
			'xt': '1',
			'group': 'api',
			'ct': ''
'cjurl':''
		}, {
			'status': 'ok3',
			'name': '芒果资源【www.mgtv.com】一键采集资源 <img src="http://cj.tv6.com/cj/1-140105140054.gif"/>',
			'apiurl': 'http://cj.tv6.com/mox/inc/mgtv.php',
			'flag': 'tv6',
			'hour1': '24',
			'hour2': '48',
			'hour3': '73',
			'hour4': '98',
			'xt': '1',
			'group': 'mgtv',
			'ct': ''
'cjurl':''
		},{
			'status': 'ok3',
			'name': '优酷资源【www.youku.com】一键采集资源 <img src="http://www.51xuediannao.com/uploads/allimg/140105/1-140105140054.gif"/>',
			'apiurl': 'http://cj.tv6.com/mox/inc/youku.php',
			'flag': 'tv6',
			'hour1': '24',
			'hour2': '48',
			'hour3': '73',
			'hour4': '98',
			'xt': '1',
			'group': 'youku',
			'ct': ''
'cjurl':''
		},{
			'status': 'ok3',
			'name': '乐视资源【www.letv.com】一键采集资源 <img src="http://www.51xuediannao.com/uploads/allimg/140105/1-140105140054.gif"/>',
			'apiurl': 'http://cj.tv6.com/mox/inc/letv.php',
			'flag': 'tv6',
			'hour1': '24',
			'hour2': '48',
			'hour3': '73',
			'hour4': '98',
			'xt': '1',
			'group': 'letv',
			'ct': ''
'cjurl':''
		}, {
			'status': 'ok3',
			'name': '搜狐资源【www.sohu.com】一键采集资源 <img src="http://www.51xuediannao.com/uploads/allimg/140105/1-140105140054.gif"/>',
			'apiurl': 'http://cj.tv6.com/mox/inc/sohu.php',
			'flag': 'tv6',
			'hour1': '24',
			'hour2': '48',
			'hour3': '73',
			'hour4': '98',
			'xt': '1',
			'group': 'sohu',
			'ct': ''
'cjurl':''
		}, {
			'status': 'ok3',
			'name': '奇艺资源【www.iqiyi.com】一键采集资源',
			'apiurl': 'http://cj.tv6.com/mox/inc/qiyi.php',
			'flag': 'tv6',
			'hour1': '24',
			'hour2': '48',
			'hour3': '73',
			'hour4': '98',
			'xt': '1',
			'group': 'qiyi',
			'ct': ''
'cjurl':''
		}, {
			'status': 'ok3',
			'name': '腾讯资源【www.qq.com】一键采集资源',
			'apiurl': 'http://cj.tv6.com/mox/inc/qq.php',
			'flag': 'tv6',
			'hour1': '24',
			'hour2': '48',
			'hour3': '73',
			'hour4': '98',
			'xt': '1',
			'group': 'qq',
			'ct': ''
'cjurl':''
		}, {
			'status': 'ok3',
			'name': 'PPTV资源【www.pptv.com】一键采集资源',
			'apiurl': 'http://cj.tv6.com/mox/inc/pptv.php',
			'flag': 'tv6',
			'hour1': '24',
			'hour2': '48',
			'hour3': '73',
			'hour4': '98',
			'xt': '1',
			'group': 'pptv',
			'ct': ''
'cjurl':''
		}, {	
			'status': 'ok3',
			'name': '7k伦理资源（无水印秒播M3U8）',
			'apiurl': 'http://www.7kzy.com/inc/api.php',
			'flag': '7kzy',
			'xt': '1',
			'group': '',
			'ct': ''
'cjurl':''
		}, {
			'status': 'ok3',
			'name': '01资源网(m3u8)【无需安装插件也可以播放（ykm3u8）超多抢版资源】',
			'apiurl': 'http://www.youkuzy.com/inc/ykm3u8.php',
			'flag': '91zycc_',
			'xt': '1',
			'group': '',
			'ct': ''
'cjurl':''
		}, {
			'status': 'ok3',
			'name': '酷播资源(m3u8)【无需安装插件也可以播放（kakam3u8）超多抢版资源】<img src="http://vip.yiyagi.cn/vip/images/1-140105140054.gif"/>',
			'apiurl': 'http://zy.kakazycj.com/inc/apim3u8.php',
			'flag': 'haozycc_',
			'xt': '1',
			'group': '',
			'ct': ''
'cjurl':''
		}, {
			'status': 'ok3',
			'name': 'kuyun资源【无需安装插件也可以播放（JS来源kuyun）超多抢版资源】<img src="http://vip.yiyagi.cn/vip/images/1-140105140054.gif"/>',
			'apiurl': 'http://www.ziyuanpian.com/inc/api.php',
			'flag': 'xfyyzycc_',
			'xt': '1',
			'group': '',
			'ct': ''
'cjurl':''
		}, {
			'status': 'ok3',
			'name': '极速资源网【无需安装插件也可以播放（JS来源kuyun）超多抢版资源】<img src="http://vip.yiyagi.cn/vip/images/1-140105140054.gif"/>',
			'apiurl': 'http://www.jisudhw.com/inc/api.php',
			'flag': 'jisudhwcom_',
			'xt': '1',
			'group': '',
			'ct': ''
'cjurl':''
                 }, {
			'status': 'ok3',
			'name': '八千客资源【无需安装插件也可以播放（JS来源link）超多抢版资源】<img src="http://vip.yiyagi.cn/vip/images/1-140105140054.gif"/>',
			'apiurl': 'http://www.go1977.com/inc/api.php',
			'flag': 'go1997',
			'xt': '1',
			'group': 'api',
			'ct': ''
'cjurl':''
                 }, {
			'status': 'ok3',
			'name': '极速云资源【无需安装插件也可以播放（JS来源jsyun）更新快抢版资源多】<img src="http://vip.yiyagi.cn/vip/images/1-140105140054.gif"/>',
			'apiurl': 'http://www.caijizy.com/inc/api.php',
			'flag': 'caijizy',
			'xt': '1',
			'group': '',
			'ct': ''
'cjurl':''
		}, {
			'status': 'ok3',
			'name': '精品电影资源【无需安装插件也可以播放（JS来源jpm3u8)】<img src="http://vip.yiyagi.cn/vip/images/1-140105140054.gif"/>',
			'apiurl': 'http://www.jingpinzy.com/inc/api.php',
			'flag': 'jingpinzy',
			'xt': '1',
			'group': '',
			'ct': ''
'cjurl':''
		}, {
			'status': 'ok3',
			'name': 'ok资源站【无需安装插件也可以播放（JS来源ckm3u8)】<img src="http://vip.yiyagi.cn/vip/images/1-140105140054.gif"/>',
			'apiurl': 'http://api.iokzy.com/inc/apickm3u8.php',
			'flag': 'okzyzy',
			'xt': '1',
			'group': '',
			'ct': ''
'cjurl':''
		},{ 
			'status': 'ok3', 
			'name': '（百域阁-全能实时更新资源）主服务器-采集接口', 
			'apiurl': 'http://baiyug.cn/inc/api.php', 
			'flag': 
			'utvs_', 
			'hour1': '24', 
			'hour2': '48', 
			'hour3': '73', 
			'hour4': '98', 
			'xt': '1', 
			'group': '', 
			'ct': '' 
'cjurl':''
		},{ 
			'status': 'ok3',
			'name': '（百域阁-全能实时更新资源）备用服务器-采集接口', 
			'apiurl': 'http://wap.baiyug.cn/inc/api.php', 
			'flag': 'utvs_', 
			'hour1': '24', 
			'hour2': '48', 
			'hour3': '73', 
			'hour4': '98', 
			'xt': '1', 
			'group': '', 
			'ct': '' 
'cjurl':''
		}, {
			'status':'ok3',
                  'name':'cj.jiexi.cx 解析资源站-最全的影视资源-365日稳定更新',//  guale
                  'apiurl':'http://cj.jiexi.cx/inc/api.php',
                  'flag':'cj_jiexi_cx_',
                  'xt':'1',
                  'group':'',
                  'ct':''
'cjurl':''
		}, {
			'status': 'ok3',
			'name': '33uu资源站【无需安装插件也可以播放（JS来源33uuck)】<img src="http://vip.yiyagi.cn/vip/images/1-140105140054.gif"/>',
			'apiurl': 'http://www.33uudy.com/inc/33uuck.php',
			'flag': 'okzyzy',
			'xt': '1',
			'group': '',
			'ct': ''
		}, {
			'status':'ok3',
                  'name': '好资源【无需安装插件也可以播放（JS来源kuyun）超多抢版资源】<img src="http://www.qin52.com/vip/images/1-140105140054.gif"/>',
                  'apiurl': 'http://api.haozy.cc/inc/api.php',  //guale
                  'flag': 'haozycc_',
                  'xt': '1',
                  'group': '',
                  'ct': ''
'cjurl':''
		}, {
			'status':'ok3',
			'name':'秒拍',
			'apiurl':'http://zyurl.nepian.com/miaopai/inc/mac_free.php',
			'flag':'roodg',
			'xt':'1',
			'group':'',
			'ct':''
'cjurl':''
		}, {
			'status':'ok3',
			'name':'微录客',
			'apiurl':'http://zyurl.nepian.com/vlook/inc/mac_free.php',
			'flag':'rooeog',
			'xt':'1',
			'group':'',
			'ct':''
'cjurl':''
		}, {
			'status':'ok3',
			'name':'b站',
			'apiurl':'http://1zy.wlzhan.com/inc/apibilibili.php',
			'flag':'roo6og',
			'xt':'1',
			'group':'',
			'ct':''
'cjurl':''
		}, {
			'status':'ok3',
			'name':'2MM',
			'apiurl':'http://zy.vivcms.com/inc/2mm.php',
			'flag':'r9ooog',
			'xt':'1',
			'group':'',
			'ct':''
'cjurl':''
		}, {
			'status':'ok3',
			'name':'MOVS资源',
			'apiurl':'http://tv.dgua.xyz/inc/api.php',
			'flag':'ro1oog',
			'xt':'1',
			'group':'',
			'ct':''
'cjurl':''
		}, {
			'status':'ok3',
			'name':'ys帝国资源',
			'apiurl':'http://www.yszydg.com/inc/kuyun.php',
			'flag':'ro2oog',
			'xt':'1',
			'group':'',
			'ct':''
'cjurl':''
		}, {
			'status':'ok3',
			'name':'强强资源',
			'apiurl':'http://caiji.000o.cc/inc/qq_api.php',
			'flag':'jqqcm_',
			'xt':'1',
			'group':'',
			'ct':''
'cjurl':''

		}, {
			'status':'ok3',
			'name':'全网ys资源',
			'apiurl':'http://www.daquk.com/inc/api.php',
			'flag':'j9com_',
			'xt':'1',
			'group':'',
			'ct':''
'cjurl':''

		}, {
			'status':'ok3',
			'name':'zuidazy资源',
			'apiurl':'http://www.zuidazy.com/inc/apidown.php',
			'flag':'jycom_',
			'xt':'1',
			'group':'',
			'ct':''
'cjurl':''


		}, {
			'status':'ok3',
			'name':'速度牛混合资源',
			'apiurl':'http://zy.wlzhan.com/inc/api.php',
			'flag':'rioog',
			'xt':'1',
			'group':'',
			'ct':''
'cjurl':''

		}, {
			'status':'ok3',
			'name':'OBest整站资源',
			'apiurl':'http://zy.obest.net/inc/api.php',
			'flag':'ryoog',
			'xt':'1',
			'group':'',
			'ct':''
'cjurl':''
		}, {
			'status':'ok3',
			'name':'131资源',
			'apiurl':'http://cj.zy131.com/inc/api.php',
			'flag':'fyucom_',
			'xt':'1',
			'group':'2',
			'ct':''	
'cjurl':''
		}
                ]
	},'ykyun': {
		'des': '『赏英才资源采集』私有云资源【稳定快速无水印】',
		'rows': [{
			'status': 'ok1',
			//'name': '206云端①（院线电影，去水印）【推荐使用】',//<i><s>伦理pan资源②（标识:ykyun）停止更新</s></i>
			'name': '206云端①（院线电影，去水印）【推荐使用】<img src="http://www.51xuediannao.com/uploads/allimg/140104/1-140104201946.gif"/>',
			'apiurl': 'http://cj.tv6.com/mox/inc/27pan.php',
			'flag': 'tv6',
			'hour1': '24',
			'hour2': '48',
			'hour3': '73',
			'hour4': '98',
			'xt': '1',
			'group': '27pan',
			'ct': ''
'cjurl':''
			},{
			'status': 'ok',
			'name': '206云端③（院线电影，去水印）【筹建中】 <img src="http://www.51xuediannao.com/uploads/allimg/140104/1-140104201946.gif"/>',
			'apiurl': 'http://cj.tv6.com/inc/2062.php',
			'flag': '2062',
			'hour1': '24',
			'hour2': '48',
			'hour3': '73',
			'hour4': '98',
			'xt': '1',
			'group': '2062',
			'ct': ''
'cjurl':''
		}
                ]
	}
	
};

document.write("<style type='text/css'>body{font-family: 微软雅黑;}a{text-decoration: none;color: #0000FF;}.table {margin-bottom:5px;font-size:13px;text-align:left;border-collapse: collapse; }.table td {padding-left:10px;padding-right:10px;border:1px dotted #cedebd; }.table .td {height:30px;padding-left:0px;} .table tr {height:30px;line-height:30px;}.table tr .left{width:180px;text-align:right;padding-right:10px;color:#666;} .table_title {height:28px!important;line-height:28px!important;background:#f3ffec;font-weight:600;color:#333;}.uok2{width:30px;height:15px;color:white;background:#39C07B;display:inline-block;}.uok1{width:30px;height:15px;color:white;background:#FE7200;display:inline-block;} .uok3{width:30px;height:15px;color:white;background:#9253DF;display:inline-block;}.uok{width:30px;height:15px;color:white;background-color:#5FAE2F;display:-moz-inline-box;display:inline-block;}.uerr{width:30px;height:15px;color:white;background-color:red;display:-moz-inline-box;display:inline-block;}.red{color:red;}</style>");


var html='',url='',url8x='',url7x='',ver='7x',url1='',url2='',url3='',url4='',urlone='',name1='';
url8x='index.php?m=collect-{ac}-ac2-{ac2}-hour-{hour}-xt-{xt}-ct-{ct}-group-{group}-flag-{flag}-apiurl-{apiurl}';
ver='8x';url=url8x;
$.each(list, function(k1, v1) {
	html += "<table width='98%' class='table'><tbody>";
        html += "<tr class='table_title'><td colspan='7' class='td'><span style='float:left'>�" + v1.des + "</span><span style='float:right'>�</span></td></tr>";

$.each(v1.rows, function(k2, v2){
		urlone = url.replace('{xt}',v2.xt).replace('{ct}',v2.ct).replace('{group}',v2.group).replace('{flag}',v2.flag).replace('{apiurl}',v2.apiurl);
		name1 = v2.name;
		if(ver=='8x'){
			url1= urlone.replace('{ac}','list').replace('{ac2}','').replace('{hour}','');
			url2= urlone.replace('{ac}','cj').replace('{ac2}','day').replace('{hour}','24');
			url3= urlone.replace('{ac}','cj').replace('{ac2}','day').replace('{hour}','98');
			url4= urlone.replace('{ac}','cj').replace('{ac2}','all').replace('{hour}','');
		}
		else{
			url1= urlone.replace('{ac}','list').replace('{ac2}','').replace('{hour}','');
			url2= urlone.replace('{ac}','cjday').replace('{ac2}','').replace('{hour}','24');
			url3= urlone.replace('{ac}','cjday').replace('{ac2}','').replace('{hour}','98');
			url4= urlone.replace('{ac}','cjall').replace('{ac2}','').replace('{hour}','');
		}
		
		html += "<tr><td width='20'>0"+(k2+1)+"、</td>"+'<td width="30" align=center><em class="u'+v2.status+'"><em></td>'+"<td><a href='"+url1+"'> "+name1+" </a></td>"+"<td width='60'><a href='"+url2+"'>采集当天</a></td>"+"<td width='60'><a href='"+url3+"'>采集本周</a></td>"+"<td width='60'><a href='"+url4+"'>采集所有</a></td>"+"<td width='60'><a href='"+url1+"'>绑定分类</a></td></tr>";
	});
	html+='</tbody></table>';
});


document.write(html);
//document.write('<table width="98%" class="table"><tbody><tr class="table_title"><td colspan="7" class="td">↓↓↓播放器资源库，欢迎提供接口整合【由第三方平台提供更新,自行选择采集与解析】</td></tr></tbody></table>');
//document.write('<!--/加入官方api接口--><script src="//www.maccms.com/union/xmlutf_2014.js" charset="utf-8"></script>');
//document.write ('<script src="https://s19.cnzz.com/z_stat.php?id=1271675633&web_id=1271675633" language="JavaScript"></script>');