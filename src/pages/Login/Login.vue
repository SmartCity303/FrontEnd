<template>
	<!--主要部分-->
	<div class="container main">
		<div class="main_con col-md-10 col-md-offset-1 col-sm-12 col-sm-offset-0 col-xs-12">
			<div class="main_left float_le col-md-7 col-sm-7 hidden-xs">
				<img src="./images/养医.png" width="100%"/>
			</div>
			
			<div class="main_right float_ri col-md-5 col-sm-5 col-xs-12" style="display: table;">
				<div >
					<!--
						作者：254092895@qq.com
						时间：2018-07-14
						描述：登录模块
					-->
					<div class="login" style="display:block;" id="login">
						<h3 class="title">用户登录</h3>
						<div class="form">
							
							<form action="" method="">
								<div class="input-group input">
								  <input type="text" name=""  class="input_im" placeholder="输入用户名/邮箱/手机号" style="border-radius:3px">
								  <input type="password" name="" class="input_im" placeholder="输入密码" style="border-radius:3px">
								  <label>忘记密码</label>
								  <!-- <a href="uIndex.html"><input type="submit" value="登录" class="btn"/></a> -->
									<a><router-link to="/PerIndex"><input value="登录" class="btn"/></router-link></a>
								</div>
							</form>	
						</div>
					</div>
					
					
					<!--
						作者：254092895@qq.com
						时间：2018-07-14
						描述：注册模块
					-->
					<div class="register" style="display:none;" id="register">
						<h3 class="title">用户注册</h3>
						<div class="form">
							
							<form action="" method="">
								<div class="input-group input">
								  <input type="text" name=""  class="input_im" placeholder="输入用户名/邮箱/手机号" style="border-radius:3px">
								  <input type="password" name="" class="input_im" placeholder="输入密码" style="border-radius:3px">
								  <input type="password" name="" class="input_im" placeholder="确认密码" style="border-radius:3px">
								  <!-- <a href="uIndex.html"><input type="submit" value="注册" class="btn" style="margin-top:0;"/></a> -->
									<a href="uIndex.html"><input value="注册" class="btn" style="margin-top:0;"/></a>
								</div>
							</form>	
						</div>
					</div>
					
					<div class="third_part_box">
						<div class="third_part">
							<div class="third_part_title">第三方账号登录</div>
							<div class="third_part_a">
								<a href="#"></a>
								<a href="#"></a>
								<a href="#"></a>
								<a href="#"></a>
								<a href="#"></a>
							</div>
							
							<div class="register-now">
									<span>还没有平台帐号？</span>
									<span class="tracking-ad" >
										<a href="#" class="" onclick="changeLoginRegister(this);">立即注册</a>
									</span>
							</div>
							
						</div>
					</div>
				
				</div>
				
			</div>
		</div>
	</div>
</template>
<script>
export default{
	methods:{
		// goIndex(){
			// this.$router.push({path:'/PerIndex'});
		// }
	}
}
</script>
<style scoped>
/*主要内容*/
.main{
	margin-top: 15px;
	min-height:200px;
	background: #FFFFFF;
}

.main_con{
	margin-top:30px;
	margin-bottom: 40px;
	border: 1px solid #BBBBBB;
	padding-left:0px;
	padding-right:0 ;
}

.main_right{
	border-left:1px solid #BBBBBB ;
	padding: 0;
}

.login,.register{
	width: 100%;
	padding: 0 15px;
	min-height: 100px;
}

#register .form{
	padding-bottom:15px;
}

.main_con .title{
	margin-left:17px;
	margin-top:36px ;
	font-size: 1.5em;
	text-align: left;
}

.form{
	padding:20px 25px 30px 15px;
}

.input{
	width: 100%;
}

.form input{
	background: #fff;
    width: 100%;
    padding: 12px 0;
    border: 1px solid #d5dce5;
    margin-bottom: 20px;
    font-weight: normal;
    text-indent: 23px;
    outline: 0;
    font-size: 1.25em;
    border-radius: 3px;
    font-family: inherit;
}

.form .input_im{
	background-color: rgb(250, 255, 189) !important;
    background-image: none !important;
    color: rgb(0, 0, 0) !important;
}

.form label{
	cursor: pointer;
	float: right;
	color: #4d5e73;
}

.form .btn{
	background: #c90a16;
    display: block;
    height: 44px;
    line-height: 44px;
    color: #fff;
    text-align: center;
    text-indent:0;
    margin-top: 53px;
    font-size: 1.5em;
    text-decoration: none;
    clear: both;
    width: 100%;
    border: solid 1px #c90000;
    border-radius: 3px;
    box-shadow: 0 0 3px #fff inset;
    padding: 0;
}

.form .btn:hover{
	background: #D30000;
}

.third_part_box{
	border-top: 1px solid #BBBBBB;
}

.third_part{
	padding: 20px 52px 35px 30px;
}

.third_part_box .third_part_title{
	margin-bottom: 8px;
	height: 23px;
	line-height: 20px;
	font-size: 14px;
}

.third_part_a{
	height: 32px;
}

.third_part_a a{
	display: inline-block;
	width: 32px;
	height: 32px;
	background: url(./images/login-third-party-new.png) no-repeat 0 0;
	margin-right: 5px;
}

.third_part_a a:nth-child(2){
	background: url(./images/login-third-party-new.png) no-repeat -37px 0;
}

.third_part_a a:nth-child(3){
	background: url(./images/login-third-party-new.png) no-repeat -74px 0;
}

.third_part_a a:nth-child(4){
	background: url(./images/login-third-party-new.png) no-repeat -111px 0;
}

.third_part_a a:nth-child(5){
	background: url(./images/login-third-party-new.png) no-repeat -148px 0;
}

.register-now{
	margin-top:20px;
	margin-bottom: 9px;
}

</style>