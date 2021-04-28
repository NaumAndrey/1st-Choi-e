$(document).ready(function () {

    $("#ajax_form").validate({
	  rules:{
		 full_name:{
		   required: true,
		   minlength: 4,
		 },
		 city:{
		   required: true,
		   minlength: 2,
		 },
		 email:{
		   required: true,
		   minlength: 6,
		 },
		 telephone:{
		   required: true,
		   minlength: 16,
		   maxlength: 16,
		 },
		 checkbox1:{
		     required: true,
		 },
	  },
	  messages:{
		full_name:{
		  required: "Это поле обязательно для заполнения",
		  minlength: "Логин должен быть минимум 4 символа",
	  },
	  city:{
		required: "Это поле обязательно для заполнения",
		},
		
	   telephone:{
		  required: "Это поле обязательно для заполнения",
		  minlength: "Введите минимум 11 символа",
		  maxlength: "Введите актуальный номер телефона",
	  },
	 email:{
		required: "Это поле обязательно для заполнения",
		},
	checkbox1:{
	    required: "Примите условия",
	},
	  }
   });
   if ($("#ajax_form").valid()) {
	$("#submit").click(function () {

		sendAjaxForm("ajax_form", "assets/components/php/db.php");
		return false;

	});}
});

function sendAjaxForm(ajax_form, url) {
	$.ajax({
		url: url,
		method: "POST",
		dataType: "json",
		data: $("#" + ajax_form).serialize(),
		success: function (result) {
        if (result.status === true) {
			document.getElementById('ok-form').style.display = 'flex';
			document.getElementById('p-tel').innerHTML = result.number;
			console.log(e);
        }else{
            document.getElementById('error-form').style.display = 'flex';
			console.log(e);
        }

		},
		error: function (result) {
			document.getElementById('error-form').style.display = 'flex';
			console.log(result);
			
		},
	});
}

function sendMail() {
	$.ajax({
		url: "send.php",
		method: "POST",
		dataType: "json",
		success: function (response) {
			//Данные отправлены успешно
			console.log("mail sent!");
		},
		error: function (response) {
			// Данные не отправлены
			console.log("MAIL HAS BEEN LOST!!!");
		},
	});
}

function checkForWin(url) {
	$.ajax({
		url: url,
		type: "POST",
		dataType: "json",
		data: {
			win: winRes,
		},
		success: function (response) {
			console.log();
		},
		error: function (response) {
			console.log();
		},
	});
}
