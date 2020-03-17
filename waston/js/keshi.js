// JavaScript Document

//首页登录页面切换选项卡
$(function(){
	$('#login-switch').children('a').click(function(){
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		
		$('.login-form').eq($(this).index()).removeClass("hide").siblings('.login-form').addClass("hide");
		})
	})


//签课时页面
$(function(){
	var $allDay=$('#allday');
	var $startTime=$('#start-time');
	var $endTime=$('#end-time');
	$allDay.prop('checked',true);//初始化的时候勾选上全天复选框。不用attr是为了避免兼容性。
	$startTime.attr('disabled','disabled');
	$endTime.attr('disabled','disabled');
	var $isChecked=$('#allday').is(':checked');//先获取默认值
	//console.log($isChecked);
	
	$('#allday-label').click(function(){
		$isChecked=!$isChecked; //点击后取反
		if($isChecked){
			$startTime.attr('disabled',true);
			$endTime.attr('disabled',true);
		}else{
			$('#start-time').attr('disabled',false);
			$('#end-time').attr('disabled',false);
			}
	})
})

//修改和删除课时，清空预设，弹出层
$(function(){
	
	var $change=$('.recordList-table').find('a[class=change]');
	var $delete=$('.recordList-table').find('a[class=del]');
	var $clear=$('#btn-clearInfo');
	var $addTeahcer=$('#addTeacher');
	
	
	$addTeahcer.click(contentPanel);
	//点击修改弹出签课时层
	$change.click(contentPanel)
	//点击删除弹出删除层
	$delete.click(confirmPanel);
	//清空预设按钮弹出图层
	$clear.click(confirmPanel);
	
	//弹出层
	function contentPanel(ev){
		ev=ev||event;
		$('.change-wrap').removeClass('hide');
		ev.stopPropagation();
		}
	
	
	//删除层		
	function confirmPanel(ev){
		ev=ev||event;
		$('.delete-wrap').removeClass('hide');
		ev.stopPropagation();
	}
	
	//阻止事件的冒泡
	$('.changeRecord').click(function(ev){
		ev=ev||event;
		ev.stopPropagation();
		})
	$('.deleteRecord').click(function(ev){
		ev=ev||event;
		ev.stopPropagation();
		})
	
     //把关闭事件绑定在后面的背景层上，不要绑定在document上。
	$('.record-bg').click(function(){
		$('.record-bg').addClass('hide');
		})
		
	$('.deleteRecord').find('input[type=button]').click(function(){
		$('.record-bg').addClass('hide');
		})
	
	})
//切换审核、通过、删除选项卡
$(function(){
	$('#recordTitle').find('li').click(function(){
		$(this).addClass('active').siblings('li').removeClass('active');
		$('.record-wrap').eq($(this).index()).removeClass('hide').siblings('.record-wrap').addClass('hide');
		})
})
	
//判断修改用户密码

$(function(){
	
	checkBtn();
	$('#oldpwd').keyup(function(){
		if($('#oldpwd').val()==''){
			$('#newpwd-message').text('密码不能为空').removeClass('hide');
			}
		else if(!($('#oldpwd').val().length>=6&&$('#oldpwd').val().length<=12)){
			$('#newpwd-message').text('密码长度在6到12个字符或数字之间').removeClass('hide');
			}
		else{
			$('#newpwd-message').text('').addClass('hide');
			
			}
		checkBtn();	
		})
	$('#newpwd1').keyup(function(){
		if($('#newpwd1').val()==''){
			$('#newpwd-message1').text('密码不能为空').removeClass('hide');
			}
		else if(!($('#newpwd1').val().length>=6&&$('#newpwd1').val().length<=12)){
			$('#newpwd-message1').text('密码长度在6到12个字符或数字之间').removeClass('hide');
			}
		else{
			$('#newpwd-message1').text('').addClass('hide');
			
			}
		checkBtn();	
	})
	
	$('#newpwd2').keyup(function(){
		if($('#newpwd1').val()!=$('#newpwd2').val()){
			$('#newpwd-message2').text('新密码必须相等').removeClass('hide');
			}
		else{
			$('#newpwd-message2').text('').addClass('hide');
			}
		checkBtn();	
	})
	
	/*function checkOldPwd(oldpwd){
		if(oldpwd==''){
			$('#newpwd-message').text('密码不能为空').removeClass('hide');
			return false;
			}
		else{
			$('#newpwd-message').addClass('hide');
			return true;
			}
		}
	function checkNewPwd1(newpwd1){
		if(newpwd1==''){
			$('#newpwd-message1').text('密码不能为空').removeClass('hide');
			return false;
			}
		else{
			$('#newpwd-message1').addClass('hide');
			return true;
			}
		}
	function checkNewPwd2(newpwd1,newpwd2){
		if(newpwd1!=newpwd2){
			$('#newpwd-message2').text('密码必须一致').removeClass('hide');
			return false;
			}
		else{
			$('#newpwd-message2').addClass('hide');
			return true;
			}
		}*/		
		
	//判断按钮是否可以点击
	function checkBtn(){
		$('#btn-infoSubmit').attr('disabled',true);
		var oldpwd=$.trim($('#oldpwd').val());
		var newpwd1=$.trim($('#newpwd1').val());
		var newpwd2=$.trim($('#newpwd2').val());
		if(oldpwd!=''&&newpwd1!=''&&newpwd1==newpwd2&&newpwd1.length>=6&&newpwd1.length<=12){
			$('#btn-infoSubmit').attr('disabled',false).removeClass('off');
			}
		else{
			$('#btn-infoSubmit').attr('disabled',true).addClass('off');
			}
		
		
		}
		
	})	
	
	
//隐藏老师

$(function(){
	$('.teachername').find('a').hover(function(){
		$(this).find('span').removeClass('hide');
		
		},function(){
		$(this).find('span').addClass('hide');	
			})
	$('.teachername').find('span').	click(function(){
		$(this).closest('li').remove();
		})
		
	})
	

//添加新老师
$(function(){
	
	
	$('#newTeacher').keyup(function(){
		if($('#newTeacher').val()==''){
			$('#newTeacher-name').text('姓名不能为空').removeClass('hide');
			}
		else{
			$('#newTeacher-name').text('').addClass('hide');
			}
		addNewTeacherBtn();	
		})
	$('#newTeacherPwd1').keyup(function(){
		if($('#newTeacherPwd1').val()==''){
			$('#newteacherpwd-message1').text('密码不能为空').removeClass('hide');
			}
		else if(!($('#newTeacherPwd1').val().length>=6&&$('#newTeacherPwd1').val().length<=12)){
			$('#newteacherpwd-message1').text('密码长度在6到12个字符或数字之间').removeClass('hide');
			}
		else{
			$('#newteacherpwd-message1').text('').addClass('hide');
			
			}
		addNewTeacherBtn();	
	})
	$('#newTeacherPwd2').keyup(function(){
		if($('#newTeacherPwd1').val()!=$('#newTeacherPwd2').val()){
			$('#newteacherpwd-message2').text('新密码必须相等').removeClass('hide');
			}
		else{
			$('#newteacherpwd-message2').text('').addClass('hide');
			}
		addNewTeacherBtn();	
	})
	
	function addNewTeacherBtn(){
		$('#btn-teacherSubmit').attr('disabled',true);
		var newName=$.trim($('#newTeacher').val());
		var newpwd1=$.trim($('#newTeacherPwd1').val());
		var newpwd2=$.trim($('#newTeacherPwd2').val());
		if(newName!=''&&newpwd1!=''&&newpwd1==newpwd2&&newpwd1.length>=6&&newpwd1.length<=12){
			$('#btn-teacherSubmit').attr('disabled',false).removeClass('off');
			}
		else{
			$('#btn-teacherSubmit').attr('disabled',true).addClass('off');
			}
		}		
	})
	
//分页条
$(function(){
	$('.pagebar').find('a').click(function(){
		$(this).addClass('current').siblings('a').removeClass('current');
		})
	})
	

//弹出修改窗口

function changePanel(content){
	$('.changeAllWrap').removeClass('hide');
	$('body').css('height','100%').css('overflow','hidden');
	$('.changeAllWrap').find('input[type=text]').val(content);
	$('.icon-close').click(function(){
		$('.changeAllWrap').addClass('hide');
		$('body').css('height','auto').css('overflow','visible');
		})
	}
	
//上传头像	
function upload(){
	$('.changeAllWrap').removeClass('hide'); 
	$('body').css('height','100%').css('overflow','hidden');
	$('.icon-close').click(function(){
		$('.changeAllWrap').addClass('hide');
		$('body').css('height','auto').css('overflow','visible');
		})
	}	
$(function(){
	$('.changeImg').click(upload);
	})


		
		
		
	
