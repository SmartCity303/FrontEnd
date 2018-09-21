<template>
	<!--主要内容-->
	<div class="main">
		
		<!--导航条开始-->
		<nav class="navbar navbar-default">
			<div class="container">
			  <div class="container-fluid">
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header">
				  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				  </button>
				  <!--<a class="navbar-brand" href="#">Brand</a>-->
				</div>
			
				<!-- 导航条 -->
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				  <ul class="nav navbar-nav" id="moveNav">
					<li><router-link to="/Personal"><a>个人中心</a></router-link></li>
					<li><a href="#">健康监测</a></li>
					<li><a href="#">健康日志</a></li>
					<li><a href="#">健康监护</a></li>
					<li><a href="#">服务预定</a></li>
					<li><a href="#">亲人关怀</a></li>
					<span id="line" style="display: none;"></span>
				  </ul>
				</div><!-- /.navbar-collapse -->
			  </div><!-- /.container-fluid -->
			</div>
		</nav>
		<!--导航条结束-->
		
		<!--正文始-->
		
		<div class="container main_con">
			<!--预警信息始-->
			<div class="col-md-8 paddingLe_0" >
				<div class="earlyWarning" style="height: 170px;">
					<h3>
						预警信息
						<a href="#">查看更多</a>
					</h3>
					
					<!--预警列表-->
					<ul>
						<li>
							<i class="glyphicon glyphicon-exclamation-sign"></i>
							<p>2018-03-02  16:29:06，<b style="">名字</b>测量了脂肪：脂肪：30.1，该脂肪超出正常范围值，正常范围为：14.0-19.0，请注意！</p>
						</li>
						<li>
							<i class="glyphicon glyphicon-exclamation-sign"></i>
							<p>2018-03-02  16:29:06，<b>名字</b>测量了脂肪：脂肪：30.1，该脂肪超出正常范围值，正常范围为：14.0-19.0，请注意！</p>
						</li>
						<li>
							<i class="glyphicon glyphicon-exclamation-sign"></i>
							<p>2018-03-02  16:29:06，<b>名字</b>测量了脂肪：脂肪：30.1，该脂肪超出正常范围值，正常范围为：14.0-19.0，请注意！</p>
						</li>
						<li>
							<i class="glyphicon glyphicon-exclamation-sign"></i>
							<p>2018-03-02  16:29:06，<b>名字</b>测量了脂肪：脂肪：30.1，该脂肪超出正常范围值，正常范围为：14.0-19.0，请注意！</p>
						</li>
					</ul>
					
				</div>
			</div>
			<!--预警信息终-->
			<!--个人信息始-->
			<div class="col-md-4 padding_0" style="height: 170px;">
				<div class="personal row">
					<!--<div class="">-->
						<div class="personal_le float_le" >
							<img src="./img/QQ头像.jpg" width="120px" />
						</div>
						<div class="personal_ri float_le" >
							<p class="userName"> <i class="glyphicon glyphicon-user"></i> 姓名</p>
							<p class="tell"> <i class="glyphicon glyphicon-phone-alt"></i> 188-0000-0000</p>
							<p class="age"> <i class="glyphicon glyphicon-heart"></i> 60</p>
							<p class="address"> <i class="glyphicon glyphicon-home"></i> 太原市尖草坪区学院路3号</p>
							<p class="MedicalRecord"> <i class="glyphicon glyphicon-plus"></i> 骨质疏松</p>
						</div>
						
					<!--</div>-->
					
				</div>
			</div>
			<!--个人信息终-->
			<!--指标始-->
			<div class="col-md-8 paddingLe_0" >
				<div class="graph">
					<div v-model="getUserInfos"></div>
					<div>{{userId}}</div>
					<!-- <div>{{result.cut}}</div> -->
					<!-- <div>{{result.userId}}</div> -->
				</div>
			</div>
			<!--指标终-->
			<!--热门信息始-->
			<div class="col-md-4 padding_0" >
				<div class="now">
					
					<p class="now_title">热门服务</p>
					
					<div style="width:100%;">
						<span class="col-md-4">热水器维修</span>
						<span class="col-md-4">气功</span>
						<span class="col-md-4">体检</span>
						<span class="col-md-4">针灸</span>
						<span class="col-md-4">太极拳</span>
						<span class="col-md-4"></span>
					</div>
					
				</div>
			</div>
			<!--热门信息终-->
		</div>
		
		<!--正文终-->
	</div>
</template>

<script>
import { mapState } from 'vuex';
import {reqUserInfo} from '../../API/index.js'
export default{
	
	data(){
		return{
			userId:1
		}
	},
	
	created(){
		
		// this.$store.dispatch('getUserInfo');
	},
	
	computed:{
		...mapState(['userInfos']),
		
		// async getUserInfos(userId){
			// const re = await reqUserInfo(userId);
			// const {userInfos} = this
			
			// return userInfos
		// },
		
	},
	
	async mounted(){
		const result = await reqUserInfo(1);
		console.log(result)
	},
	
	methods:{
		
	}
}
</script>

<style scoped>
/*主体*/
.main{
	padding: 0;
}
.main .container{
	padding: 0;
}
/*导航条*/
nav{
	border-bottom: 1px solid #BBBBBB !important;
	background: #e9e9e9 !important;
}
nav .nav li a{
	text-decoration: none;
    font-size: 16px;
    color: #4F4F4F;
}

#bs-example-navbar-collapse-1{
	position: relative;
}

.nav span {
	/*display: none;*/
	position: absolute;
	left: 15px;
	bottom: 0;
	
	height: 3px;
	background: #c92027;
}

/*正文*/
.main_con>div{
	/* margin-bottom: 15px; */
	margin: 0px 0px 15px 0px;
}

.main_con>div>div{
	min-height: 100px;
	background: #FFFFFF;
}

/*预警信息*/
.main_con .earlyWarning h3{
	margin: 0;
	padding-top: 4px;
	padding-left: 10px;
}

.main_con .earlyWarning h3 a{
	display: inline-block;
	float: right;
	height: 25px;
	line-height: 25px;
	margin-right: 5px;
	font: 12px/1.5 Roboto,Microsoft YaHei,tahoma,arial,Hiragino Sans GB,\\5b8b\4f53,sans-serif;
}

.main_con .earlyWarning ul{
	margin-left: 10px;
}

.main_con .earlyWarning ul li{
	height: 35px;
	line-height: 35px;
	display: flex;
}

.main_con .earlyWarning ul i{
	height: 35px;
	line-height: 35px;
	font-size: 25px;
	color:#FF8F03 ;
	margin-right: 3px;
}

.main_con .earlyWarning li p{
	width: 100%;
	display: inline-block;
	height: 35px;
	line-height: 35px;
	margin: 0;
	font-size: 14px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	/* -webkit-line-clamp: 1;
	-webkit-box-orient: vertical; */
	
}

.main_con .earlyWarning li b{
	font-size: 16px;
	color: red;
}



/*个人信息*/
.main_con:nth-child(2) .row{
	margin: 0px;
}

.main_con .personal .personal_le{
	padding: 12px 10px 0 12px;
}

.main_con .personal .personal_ri{
	padding-top: 12px;
	
}

.main_con .personal_ri p{
	font-size:14px ;
}

.main_con .personal_ri p i{
	font-size: 16px;
	color: red;
	padding-right: 5px;
}



/*图表信息*/





/*热门服务*/
.now .now_title{
	font-size: 18px;
	height: 36px;
	line-height: 36px;
	padding-left: 5px;
	border-bottom: 1px solid #E2E2E2;
}

.now span{
	margin-bottom: 5px;
}
</style>