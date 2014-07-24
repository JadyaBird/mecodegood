(function($){

	"use strict";

	//  Colors
	$('head').append("<style>"
		//+ ".site_nav li.active { border-color: " + pcvData.pcvBoxColor + " !important; }"
		//+ ".period { background-color: " + pcvData.pcvBoxColor + " !important; }"
		//+ ".site_nav a, .aside_el h5 { color:" + pcvData.pcvMenuColor + " !important; }"
		/*+ ".site_nav a:hover, .site_nav a:focus, .active a"
			+ "{ color: " + pcvData.pcvAcMenuColor + " !important; }"*/
		/*+ ".site_header h1, .aside_el h2, .skill_level h4, .par_el h2"
			+ "{ color: " + pcvData.pcvTitleColor + " !important; }"*/
		//+ ".site_header h2, .galleryItem h3 { color: " + pcvData.pcvSubtitleColor + " !important; }"
		//+ ".site_header h3 { color: " + pcvData.pcvDescColor + " !important; }"
		//+ ".par_el p { color: " + pcvData.pcvContColor + " !important; }"
		//+ ".par_el h3 { color: " + pcvData.pcvSecSubtitleColor + " !important; }"
		/*+ ".experience p, .education p, .blogsection p, .newsecwithsec p, .par_el > blockquote p"
			+ "{ color: " + pcvData.pcvSecContColor + " !important; }"*/
		//+ ".info ul li a, .info ul li a:hover { color: " + pcvData.pcvConInfoColor + " !important; }"
		//+ ".info ul li span { color: " + pcvData.pcvConInfoIcoColor + " !important; }"
		//+ ".progressbar-inner { background-color: " + pcvData.pcvProgColor + " !important; }"
		/*+ ".progressbar { background: " + pcvData.pcvProgBackColor
			+ " !important; border-color: " + pcvData.pcvProgBorderColor
				+ " #bbb #fff #bbb !important; box-shadow: inset 0px 2px 3px "
				+ pcvData.pcvProgShadColor + " !important; }"*/
		/*+ ".borderbtn, .borderleft, .site_header h1:before, .site_header h1:after,"
			+ "footer, .postedcomments { border-color: " + pcvData.pcvLineColor + " !important; }"*/
		//+ ".galleryItem p { color: " + pcvData.pcvGaSuColor + " !important; }"
		//+ ".blogsection .post h2 a { color: " + pcvData.pcvBlogTitleColor + " !important; }"
		//+ ".read-more, .read-more:hover { color: " + pcvData.pcvReadmoreColor + " !important; }"
		//+ "input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { color: " + pcvData.pcvPlaceholderColor + " !important; }"
		//+ "input:-moz-placeholder , textarea:-moz-placeholder { color: " + pcvData.pcvPlaceholderColor + " !important; }"
		//+ "input::-moz-placeholder, textarea::-moz-placeholder { color: " + pcvData.pcvPlaceholderColor + " !important; }"
		//+ "input:-ms-input-placeholder, textarea:-ms-input-placeholder { color: " + pcvData.pcvPlaceholderColor + " !important; }"
		//+ ".smallerbutton, #submit-message, #submit { background-color: " + pcvData.pcvButtonColor + " !important; }"
		//+ "#submit-message:hover, #submit:hover { background-color: " + pcvData.pcvButtonHoverColor + " !important; }"
		//+ ".single_post h5 { color: #464646 !important; }"
		//+ ".posttitlelink { color: " + pcvData.pcvPostsBlogTitleColor + " !important; }"
		+ "</style>");

	//  Horizontal line
	$('head').append("<style> .site_header h1:before, .site_header h1:after { width:"+ pcvData.line_width +"% !important; }; </style>");

	$('head').append("<style> p { font-family: \"Cabin\", arial, sans-serif; } </style>");

	$('head').append("<style> @media only screen and (max-width: 870px)"+
		"{ .site_header h1:before, .site_header h1:after { width:"+ (parseFloat(pcvData.line_width) / 1.4) +"% !important; } }; </style>");

	//  Additional Description
	if(pcvData.words_more_check === "true") {
		$(".site_header h3").hide();
		$('head').append("<style>"+
				".site_header { padding-bottom: 15px !important; } .site_header h2 { margin-bottom: 25px !important; }"+
				"@media only screen and (max-width: 767px) { .site_header { padding-bottom: 0px !important; }"+
					" .site_header h2 { margin-bottom: 25px !important; } }"+
				"@media only screen and (max-width: 630px) { .site_header { padding-bottom: 0px !important; }"+
					" .site_header h2 { margin-bottom: 25px !important; } }"+
				"@media only screen and (max-width: 480px) { .site_header { padding-bottom: 0px !important; }"+
				" .site_header h2 { margin-bottom: 17px !important; } }"+
				"</style>");
	}

	//  Profil image
	if(pcvData.my_picture_display === "true") {
		$(".circle").hide();
	} else {
		$(".circle").show();
	}

	// Contact Info
	if (pcvData.contact_info_display === "true") {
		$(".cont_info").hide();
		$(".about_me article").removeClass("span6").addClass("span9 about_me_right");
	} else {
		$(".cont_info").show();
		$(".about_me article").removeClass("span9 about_me_right").addClass("span6");
	}
	if (pcvData.smaller_email_font == "true") {
		$('head').append("<style> #emailfont { font-size:"+ "1.1em" +" !important; }; </style>");
	} else {
		$('head').append("<style> #emailfont { font-size:"+ "1.4em" +" !important; }; </style>");
	}

	// rss button
	if (pcvData.contact_info_rss_check === 'true') {
		$("#rss_link").hide();
	} else {
		$("#rss_link").show();
	}

	// pritn button
	$('#printicon').on('click', function() {
		window.print();
	});

	if (pcvData.contact_info_print_check === 'true') {
		$("#printicon").hide();
	} else {
		$("#printicon").show();
	}

	// hide phone
	if (pcvData.hide_phone === 'true') {
		$(".first_con").hide();
	} else {
		$(".first_con").show();
	}

	// hide address
	if (pcvData.hide_address === 'true') {
		$(".second_con").hide();
	} else {
		$(".second_con").show();
	}

	// hide email
	if (pcvData.hide_email === 'true') {
		$(".third_con").hide();
	} else {
		$(".third_con").show();
	}

	//  Soc Icons
	if (pcvData.pcvDisplaySoc === 0 && pcvData.contact_info_rss_check === 'true') {
		$(".soc").hide();
	} else {
		$(".soc").show();
	}

	// Version of the period box
	switch (pcvData.boxoption) {

		case "box_onesmall":
		$('head').append("<style> .experience .period { font: 1.34em 'Droid Sans', sans-serif; } </style>");
		break;

		case "box_fewsmall":
		$('head').append("<style> .period { font: 1.34em 'Droid Sans', sans-serif; } </style>");
		break;

		default:
		//
		break;

	}

	if (pcvData.boxoption === "box_onesmall") {
		$('head').append("<style> #emailfont { font-size:"+ "1.1em" +"% !important; }; </style>");
	}
	else if (pcvData.boxoption === "box_onesmall") {
		$('head').append("<style> #emailfont { font-size:"+ "1.4em" +"% !important; }; </style>");
	}

	//  Skills
	if(pcvData.my_expertise_display === "true") {
		$(".skill_level").hide(); $(".my_expertise article").removeClass("span4").addClass('span9');
	} else {
		$(".skill_level").show(); $(".my_expertise article").removeClass("span9").addClass('span4');
	}

	//  Retina
	if( document.cookie.indexOf('device_pixel_ratio') === -1 && 'devicePixelRatio' in window && window.devicePixelRatio === 2 ) {

			var date = new Date();
			date.setTime( date.getTime() + 3600000 );

			document.cookie = 'device_pixel_ratio=' + window.devicePixelRatio + ';' +  ' expires=' + date.toUTCString() +'; path=/';
			//if cookies are not blocked, reload the page
			if(document.cookie.indexOf('device_pixel_ratio') !== -1) {
				window.location.reload();
			}
		}

	//  bxSlider
	$(window).load(function() {
		$('.bxslider').bxSlider({
			controls: false,
			auto: true,
			pause: 25000,
			autoHover: true
		});
	});

	$(document).ready(function() {

		// open external url from portfolio
		$('.externalurl').on('click', function(e) {
			if(e.button === 0 && !e.ctrlKey) {
				window.location.href = $(this).attr('href');
				return false;
			}
		});

		// Magnific poput
		$('.slide').magnificPopup({
			delegate: 'a',
			type: 'image',
			//removalDelay: 300,
			tLoading: 'Loading image #%curr%...',
			//mainClass: 'mfp-with-zoom',
			mainClass: 'pcv-fade',
			cursor: null,
			//removalDelay: 300,
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return ( item.el.find('img').attr('title') + ' <br> <i>' + item.el.attr('title') + '</i>' );
				}
			},
			overflowY: 'scroll',

		});

		// FitVids
		$(".par_el, .single_post").fitVids();

		// Contact Form
		$('.comment_form').submit(ajaxSubmit);

		function ajaxSubmit() {

			if ( $( '.comment_form' ).parsley('validate') ) {

				var site_url             = pcvData.pcv_wpurl;
				var form_name            = $("#form_name").val();
				var form_email           = $("#form_email").val();
				var form_message         = $("#form_message").val();
				var send_message_receive = $("#send_message_receive").val();
				var form_smart           = $("#smart_men").val();

				if ( form_smart === "" ) {

					$.ajax({
						type: "POST",
						url: site_url + "/wp-admin/admin-ajax.php",
						data: {
							"action"         : "mail_action",
							"name"           : form_name,
							"email"          : form_email,
							"message"        : form_message,
							"recipient_mail" : send_message_receive,
						},
						success: function(data) {
							if (data) {
								alert(data);
							} else {
								alert('An error occured');
							}
						},
						error: function(jqXHR, exception) {
							if (jqXHR.status === 0) {
								alert('Not connect.\n Verify Network.');
							} else if (jqXHR.status == 404) {
								alert('Requested page not found. [404]');
							} else if (jqXHR.status == 500) {
								alert('Internal Server Error [500].');
							} else if (exception === 'parsererror') {
								alert('Requested JSON parse failed.');
							} else if (exception === 'timeout') {
								alert('Time out error.');
							} else if (exception === 'abort') {
								alert('Ajax request aborted.');
							} else {
								alert('Uncaught Error.\n' + jqXHR.responseText);
							}
						}
					});
				}
			}

			return false;

		}

		switch ($('#site_nav ul li').length) {

			case 7:
			$('head').append("<style> @media only screen and (max-width: 630px) { .site_nav { height: 184px !important; } } </style>");
			break;

			case 6:
			$('head').append("<style> @media only screen and (max-width: 630px) { .site_nav { height: 159px !important; } } </style>");
			break;

			case 5:
			$('head').append("<style> @media only screen and (max-width: 630px) { .site_nav { height: 134px !important; } } </style>");
			break;

			case 4:
			$('head').append("<style> @media only screen and (max-width: 630px) { .site_nav { height: 109px !important; } } </style>");
			break;

			case 3:
			$('head').append("<style> @media only screen and (max-width: 630px) { .site_nav { height: 84px !important; } } </style>");
			break;

			case 2:
			$('head').append("<style> @media only screen and (max-width: 630px) { .site_nav { height: 59px !important; } } </style>");
			break;

			case 1:
			$('head').append("<style> @media only screen and (max-width: 630px) { .site_nav { height: 34px !important; } } </style>");
			break;

			default:
			// statements_def
			break;

		}

		$("head").append("<!--[if lt IE 9]><style type=\"text/css\">.site_nav { border-bottom: 1px solid #d4d4d4; }</style><![endif]-->");

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
			FastClick.attach(document.body);
		}

		// Form input focus
		$('.comment_form input, .comment_form textarea, #respond input[type=text], #respond textarea').focus(function () {
			$(this).css({"-webkit-box-shadow": "0px 0px 0px rgba(0, 0, 0, 0)",
				"-moz-box-shadow": "0px 0px 0px rgba(0, 0, 0, 0)",
				"box-shadow": "0px 0px 0px rgba(0, 0, 0, 0)",
				"border": "1px solid #999"});
		});

		$('.comment_form input, .comment_form textarea, #respond input[type=text], #respond textarea').blur(function () {
			$(this).css({"-webkit-box-shadow": "0px 0px 0px rgba(0, 0, 0, 0)",
				"-moz-box-shadow": "0px 0px 0px rgba(0, 0, 0, 0)",
				"box-shadow": "0px 0px 0px rgba(0, 0, 0, 0)",
				"border": "1px solid #e0e0e0"});
		});

		// Scrollup button
		$(window).scroll(function() {
			if ($(this).scrollTop() > 400) {
				$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		});

		$('.scrollup').click(function() {
			$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		});


		// Show line breaks depending on the width
		$(window).on('load resize', function () {
			var current_width = $(window).width();
			if ( current_width < 767 ) {
				$("br").hide();
			} else {
				$("br").show();
			}
		});

		// Cache selectors
		var lastId, topMenu = $("#site_nav");
		var menuItems = topMenu.find("a"),
			topMenuHeight,
			scrollItems;

		if ( $(window).width() > 940 ) {
			topMenuHeight = topMenu.outerHeight()+40;

			// Anchors corresponding to menu items
			scrollItems = menuItems.map(function(){
				var item = $(this).attr("href");

				if (item.length && item.indexOf("http") === -1) {
					return $(item);
				}
			});
		} else {
			topMenuHeight = topMenu.outerHeight()-140,

			// Anchors corresponding to menu items
			scrollItems = menuItems.map(function(){
				var item = $(this).attr("href");

				if (item.length && item.indexOf("http") === -1) {
					return $(item);
				}
			});
		}

        // Bind click handler to menu items so we can get a fancy scroll animation
		menuItems.click(function(e) {
			var href = $(this).attr("href");
			clickScroll(href);
			e.preventDefault();
		});

		function clickScroll(href) {
			var offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight + 1;
			$('html, body').stop().animate({
				scrollTop: offsetTop
			}, 300);
		}

		// Bind to scroll
		$(window).scroll(function() {
			// Get container scroll position
			var fromTop = $(this).scrollTop() + topMenuHeight;

			// Get id of current scroll item
			var cur = scrollItems.map(function() {
				if ($(this).offset().top < fromTop) {
					return this;
				}
			});

			// Get the id of the current element
			cur = cur[cur.length - 1];
			var id = cur && cur.length ? cur[0].id : "";

			if (lastId !== id) {
				lastId = id;

				// Set/remove active class
				menuItems
				.parent().removeClass("active")
				.end().filter("[href=#" + id + "]").parent().addClass("active");
			}
		});

		// scroll to section referenced from non home page
		if (document.URL.indexOf("my_expertise_sec") > -1) {
			window.setTimeout(function() {
				clickScroll('#my_expertise');
			}, 500);
			e.preventDefault();
		} else if (window.location.href.indexOf("experience_sec") > -1) {
			window.setTimeout(function() {
				clickScroll('#experience');
			}, 500);
			e.preventDefault();
		} else if (window.location.href.indexOf("education_sec") > -1) {
			window.setTimeout(function() {
				clickScroll('#education');
			}, 500);
			e.preventDefault();
		} else if (window.location.href.indexOf("portfolio_sec") > -1) {
			window.setTimeout(function() {
				clickScroll('#portfolio');
			}, 500);
			e.preventDefault();
		} else if (window.location.href.indexOf("blog_sec") > -1) {
			window.setTimeout(function() {
				clickScroll('#blog');
			}, 500);
			e.preventDefault();
		}

	});

})(jQuery);