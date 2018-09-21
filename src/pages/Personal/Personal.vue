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
							<li><a >个人中心</a></li>
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
			
			<!-- 个人信息始 -->
			<div class="main_personal">
				<div class="clearfloat" style="padding: 20px 20px 20px 20px;">
					
					<div class="personal_img" style="padding-right: 20px;">
						<img src="./img/QQ头像.jpg"/>
					</div>
					
					<div class="personal_right">
						<span class="name" id="name">姓名</span>
						<div class="personal_in">
							<span class="bor_ri_1" id="address">中国-山西省-太原市-尖草坪区-学院路3号</span>
							<span class="bor_ri_1" id="birch">1990-07-20</span>
							<span class="bor_ri_1" id="sex">男</span>
							<span class="bor_ri_1" id="phone">188-0000-0000</span>
							<span id="company">在家闲居</span>
						</div>
						<div class="personal_in_bot">
							简历：<span id="physicalState">支气管炎症病变</span>
						</div>
						
					</div>
					
					<div class="EditInformation">
						<a><i class="glyphicon glyphicon-pencil"></i>修改个人信息</a>
					</div>
				</div>
				
				
			</div>
			<!-- 个人信息终 -->
			
			<!-- 医生回复，家庭医生，个人账户  -->
			<div class="">
				<div>
					<div class="main_bto btn-group">
						<router-link to="/personal/doctorreply"> <span :class="{cur: '/personal/doctorreply'===$route.path}" @click="change1(this)">医生回复</span> </router-link>
						<router-link to="/personal/doctorlist"> <span :class="{cur: '/personal/doctorlist'===$route.path}" @click="change1(this)">家庭医生</span> </router-link>
						<!-- <span>个人账户</span> -->
					</div>
					
					<div class="main_bto_con">
						<!-- 医生回复 家庭医生 个人账户 始 -->
						<div class="">
							<router-view></router-view>
						</div>
						<!-- 医生回复 家庭医生 个人账户 终 -->
					</div>
					
					
				</div>
			</div>
			<!-- 医生回复，家庭医生，个人账户  结束-->
			
		</div>
		
		<!--正文终-->
	</div>
</template>
<script>
export default{
	methods:{
		change1(my1){
			// console.log($(my1));
			// $($(my1)).addClass("cur");
			// $($(my1)).siblings("span").removeClass("cur");
		}
	}
}
</script>
<style scoped>

/*清除浮动代码*/
.clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}
.clearfloat{zoom:1}    /*兼容IE*/

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
	margin-bottom: 15px;
}

.main_con>div>div{
	min-height: 100px;
	background: #FFFFFF;
}

/* 个人信息 */
.main_personal{
	height: 200px;
	
}

.personal_img{
	/* display: inline-block; */
	float: left;
	
}

.personal_img img{
	height: 160px;
}

/* 个人信息右 */
.personal_right{
	/* display: inline-block; */
	float: left;
	height: 160px;
	/* width: 20px; */
	/* background: #122B40; */
}

.personal_right .name{
	display: block;
	height: 35px;
	line-height: 35px;
	font-size: 24px;
	text-align: left;
	padding-left: 15px;
}

.personal_in{
	padding-top: 10px;
	height: 48px;
	line-height: 48px;
}

.personal_in span{
	font-size: 16px;
	height: 24px;
	line-height: 24px;
	padding:0 20px 0 20px;
	/* margin: 10px 0 10px 0; */
	display: inline-block;
	
}

.bor_ri_1{
	border-right: 1px solid #000000;
}

.personal_in_bot{
	padding: 20px 0px 0px 20px;
}

.personal_in_bot,.personal_in_bot span{
	font-size: 16px;
}

.EditInformation{
	transform: translateX(30px);
}

.EditInformation i{
	color: #337ab7;
}


/* 主体下 */
.main_bto{
	width: 1170px;
}

.main_bto span{
	margin: 0;
	padding: 0;
	display: inline-block;
	width: 290px;
	height: 60px;
	line-height: 60px;
	font-size: 24px;
	cursor: pointer;
}

.main_bto .cur{
	border: 1px solid #DCDCDC;
	border-bottom: 0px;
}

.main_bto_con{
	width: 1170px;
	min-height: 20px;
	border-top: 1px solid #DCDCDC;
	transform: translateY(-2px);
}
</style>