
$('.faq-link').on('click', function() {
    $(this).toggleClass('opened');
});


var emailReg = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\"\.+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
var email = $("#email").val();

function validateEmail(emeil) {
    return emailReg.test(email);
}

$('.contact__send-form-btn').on('click', function(event) {
    event.preventDefault();
    email = $("input[name=email]").val();
    if (validateEmail(email)) {
			$("#result").text(email + " is valid :)");
            $("#result").addClass("basic-text__valid");
            $(this).removeClass('error-inform');
            // const submit = () => {
            //     alert("Данные отправлены");
            //     var t = $('form');
            //     var n = t.serialize();
            //     console.log(n);
            //     $.ajax({
            //         url: t.attr("action"),
            //         type: t.attr("method"),
            //         data: n,
            //         success: function(o) {
            //             alert('Thank for message');
            //         }
            //     })
            // }
    } else if (email === '') {
            $("#result").text("enter email pls");
            $(this).addClass('error-inform');
    } else {
            $("#result").text(email + " is not valid");
            $(this).addClass('error-inform');
            return false;
    }
});

validateEmail();



        var burgerMenu = $('#burgerMenu');
        var headerMenu = $('.mob-menu');
        var headerLogo = $('.header-logo');
        
		function toggleMenu() {
			// console.log(burgerMenu);
            burgerMenu.toggleClass('bars_active');
            headerLogo.toggleClass('mob_active');
			headerMenu.toggleClass('header-menu-wrap_active');
			$('body').toggleClass('overflow-hidden')
		  }
		burgerMenu.click(toggleMenu);
		 
		$(".mob-menu__link").click(function(){
			$('html, body').removeClass('overflow-hidden');
			burgerMenu.toggleClass('bars_active');
			headerMenu.toggleClass('header-menu-wrap_active');	
		});


