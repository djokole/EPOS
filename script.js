$(document).ready(function() {

	$("#idemo").hide();

	$(".imgtext1").animate({ opacity: '1'}, 3000);

	$(".imgtext2").animate({ opacity: '1'}, 3000);

  $(".imgtext1").on("mouseenter", function() {
      $("#idemo").show(800);
  });

//JQuery plugin za validaciju

  $('#podaci').validate({
        rules: {
            ime: {
                required: true,
                minlength: 3
            },
            prezime: {
                required: true,
                minlength: 3
            },
            mejl: {
            		required: true,
            		email: true
            }
        },
        messages: {
        	ime: {
        		required: "Ukucajte ime",
        		minlength: "Ime mora da ima bar 3 slova"
        	},
        	prezime: {
        		required: "Ukucajte ime",
        		minlength: "Prezime mora da ima bar 3 slova"
        	},
        }
    });
});