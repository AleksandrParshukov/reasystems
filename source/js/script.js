function init_menu() {
	const $js_header_catalog_toggle = $('.js_header_catalog_toggle'),
		$js_header_menu_toggle = $('.js_header_menu_toggle'),
		$header_catalog = $('.header-catalog'),
		$header_mobile_menu = $('.header__mobile-menu'),
		$header_catalog_btn = $('.header-catalog__btn'),
		$js_mobile_menu_close = $('.js_mobile_menu_close');

	$js_header_catalog_toggle.on('click', function () {
		$('.bar').toggleClass('animate');
		$header_catalog.toggleClass('open');
		$(document).on('click', document_click_handler);
	});

	$js_header_menu_toggle.on('click', function () {
		$header_mobile_menu.toggleClass('open');
	});

	$js_mobile_menu_close.on('click', function () {
		$('.bar').removeClass('animate');
		$(this).parent().removeClass('open');
		$(document).off('click', document_click_handler);
	});

	function document_click_handler(evt) {
		if (
			!$(evt.target).closest('.header-catalog').length &&
			!$(evt.target).is('.header-catalog') &&
			!$(evt.target).closest('.js_header_catalog_toggle').length &&
			!$(evt.target).is('.js_header_catalog_toggle')
		) {
			$header_catalog.removeClass('open');
			$('.bar').removeClass('animate');
			$(document).off('click', document_click_handler);
		}
	}

	if ($(window).width() >= 1024) {
		$header_catalog_btn.on('click', function () {
			const $btn = $(this);
			if (!$btn.hasClass('active')) {
				$('.header-catalog__submenu.open').removeClass('open');
				$('.header-catalog__btn.active').removeClass('active');
				$btn.addClass('active');
				$btn.closest('li').find('.header-catalog__submenu').addClass('open');
			}
		});
	}
}

function init_carousel() {
	$('.js_banner_slider').owlCarousel({
		loop: true,
		items: 1,
		responsive: {
			// breakpoint from 0 up
			0: {
				dots: false,
			},
			// breakpoint from 480 up
			1024: {
				dots: true,
			},
		},
	});

	if ($(window).width() < 1440) {
		$('.js_cat_filter_carousel').owlCarousel({
			loop: false,
			items: 'auto',
			autoWidth: true,
		});
	}

	const $product_img_carousel = $('.product .js_img_carousel');

	if ($product_img_carousel.length) {
		$('.js_img_carousel').owlCarousel({
			slideBy: 1,
			responsive: {
				0: {
					items: 1,
					dots: true,
					nav: false,
				},
				1024: {
					items: 3,
					dots: false,
					nav: true,
					navText: [
						'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.99995 12C6.99985 12.0985 7.01921 12.196 7.05692 12.287C7.09464 12.378 7.14995 12.4606 7.2197 12.5302L14.7197 20.0302C15.0128 20.3233 15.4873 20.3233 15.7802 20.0302C16.0731 19.7371 16.0733 19.2626 15.7802 18.9697L8.81045 12L15.7802 5.0302C16.0733 4.73714 16.0733 4.26258 15.7802 3.9697C15.4871 3.67683 15.0126 3.67664 14.7197 3.9697L7.2197 11.4697C7.14995 11.5393 7.09464 11.6219 7.05692 11.7129C7.01921 11.8039 6.99985 11.9015 6.99995 12Z" fill="black"/></svg>',
						'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 12C18.0001 12.0985 17.9808 12.196 17.9431 12.287C17.9054 12.378 17.85 12.4606 17.7803 12.5302L10.2803 20.0302C9.98723 20.3233 9.51267 20.3233 9.2198 20.0302C8.92692 19.7371 8.92673 19.2626 9.2198 18.9697L16.1895 12L9.2198 5.0302C8.92673 4.73714 8.92673 4.26258 9.2198 3.9697C9.51286 3.67683 9.98742 3.67664 10.2803 3.9697L17.7803 11.4697C17.85 11.5393 17.9054 11.6219 17.9431 11.7129C17.9808 11.8039 18.0001 11.9015 18 12Z" fill="black"/></svg>',
					],
					autoWidth: true,
				},
				1440: {
					items: 4,
					dots: false,
					nav: true,
					navText: [
						'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.99995 12C6.99985 12.0985 7.01921 12.196 7.05692 12.287C7.09464 12.378 7.14995 12.4606 7.2197 12.5302L14.7197 20.0302C15.0128 20.3233 15.4873 20.3233 15.7802 20.0302C16.0731 19.7371 16.0733 19.2626 15.7802 18.9697L8.81045 12L15.7802 5.0302C16.0733 4.73714 16.0733 4.26258 15.7802 3.9697C15.4871 3.67683 15.0126 3.67664 14.7197 3.9697L7.2197 11.4697C7.14995 11.5393 7.09464 11.6219 7.05692 11.7129C7.01921 11.8039 6.99985 11.9015 6.99995 12Z" fill="black"/></svg>',
						'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 12C18.0001 12.0985 17.9808 12.196 17.9431 12.287C17.9054 12.378 17.85 12.4606 17.7803 12.5302L10.2803 20.0302C9.98723 20.3233 9.51267 20.3233 9.2198 20.0302C8.92692 19.7371 8.92673 19.2626 9.2198 18.9697L16.1895 12L9.2198 5.0302C8.92673 4.73714 8.92673 4.26258 9.2198 3.9697C9.51286 3.67683 9.98742 3.67664 10.2803 3.9697L17.7803 11.4697C17.85 11.5393 17.9054 11.6219 17.9431 11.7129C17.9808 11.8039 18.0001 11.9015 18 12Z" fill="black"/></svg>',
					],
					autoWidth: true,
				},
			},
		});

		const $items = $product_img_carousel.find('.item');

		$items.on('click', function () {
			const $item = $(this),
				$img = $item.find('img'),
				src = $img.attr('src'),
				$big_img = $('.product__big-img img');

			$product_img_carousel.find('.owl-item.current').removeClass('current');
			$item.closest('.owl-item').addClass('current');
			$big_img.attr('src', src);
		});
	}

	/* 	if ($('.product__section').length) {
		init_sync_sliders();
	}

	function init_sync_sliders() {
		var $sync1 = $('.js_big_img_carousel');
		var $sync2 = $('.js_img_carousel');
		var syncedSecondary = true;

		$sync1
			.owlCarousel({
				items: 1,
				nav: false,
				autoplay: false,
				loop: true,
				responsive: {
					0: {
						dots: true,
					},
					600: {
						dots: false,
					},
				},
			})
			.on('changed.owl.carousel', syncPosition);

		$sync2
			.on('initialized.owl.carousel', function () {
				$sync2.find('.owl-item').eq(0).addClass('current');
			})
			.owlCarousel({
				dots: false,
				nav: true,
				navText: [
					'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.99995 12C6.99985 12.0985 7.01921 12.196 7.05692 12.287C7.09464 12.378 7.14995 12.4606 7.2197 12.5302L14.7197 20.0302C15.0128 20.3233 15.4873 20.3233 15.7802 20.0302C16.0731 19.7371 16.0733 19.2626 15.7802 18.9697L8.81045 12L15.7802 5.0302C16.0733 4.73714 16.0733 4.26258 15.7802 3.9697C15.4871 3.67683 15.0126 3.67664 14.7197 3.9697L7.2197 11.4697C7.14995 11.5393 7.09464 11.6219 7.05692 11.7129C7.01921 11.8039 6.99985 11.9015 6.99995 12Z" fill="black"/></svg>',
					'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 12C18.0001 12.0985 17.9808 12.196 17.9431 12.287C17.9054 12.378 17.85 12.4606 17.7803 12.5302L10.2803 20.0302C9.98723 20.3233 9.51267 20.3233 9.2198 20.0302C8.92692 19.7371 8.92673 19.2626 9.2198 18.9697L16.1895 12L9.2198 5.0302C8.92673 4.73714 8.92673 4.26258 9.2198 3.9697C9.51286 3.67683 9.98742 3.67664 10.2803 3.9697L17.7803 11.4697C17.85 11.5393 17.9054 11.6219 17.9431 11.7129C17.9808 11.8039 18.0001 11.9015 18 12Z" fill="black"/></svg>',
				],
				slideBy: 1,
				responsive: {
					0: {
						items: 3,
					},
					1024: {
						items: 4,
					},
				},
				autoWidth: true,
			})
			.on('changed.owl.carousel', syncPosition2);

		function syncPosition(el) {
			//if you set loop to false, you have to restore this next line
			//var current = el.item.index;

			//if you disable loop you have to comment this block
			var count = el.item.count - 1;
			var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

			if (current < 0) {
				current = count;
			}
			if (current > count) {
				current = 0;
			}

			//end block

			$sync2.find('.owl-item').removeClass('current').eq(current).addClass('current');
			var onscreen = $sync2.find('.owl-item.active').length - 1;
			var start = $sync2.find('.owl-item.active').first().index();
			var end = $sync2.find('.owl-item.active').last().index();

			if (current > end) {
				$sync2.data('owl.carousel').to(current, 100, true);
			}
			if (current < start) {
				$sync2.data('owl.carousel').to(current - onscreen, 100, true);
			}
		}

		function syncPosition2(el) {
			if (syncedSecondary) {
				var number = el.item.index;
				$sync1.data('owl.carousel').to(number, 100, true);
			}
		}

		$sync2.on('click', '.owl-item', function (e) {
			e.preventDefault();
			var number = $(this).index();
			$sync1.data('owl.carousel').to(number, 300, true);
		});
	} */
}

function init_articles_short_desc() {
	const $articles_short_desc = $('.articles__short-desc, .news__short-desc');

	if (!$articles_short_desc.length) {
		return false;
	}

	$articles_short_desc.each(function () {
		const $desc = $(this);

		const line_height_prop = $desc.css('line-height'),
			line_height = line_height_prop.substring(0, line_height_prop.indexOf('px'));
		(height = $desc.height()), (lines = Math.floor(height / line_height));

		$desc.attr('style', `-webkit-line-clamp: ${lines};`);
	});
}

function init_sticky_elements() {
	if ($('.catalog__aside').length) {
		const a = document.querySelector('.catalog__fixed'),
			base = document.querySelector('.catalog__section');

		init_sticky_element(a, base);
	}

	if ($('.js_cart_base').length && $(window).width() >= 1024) {
		const a = document.querySelector('.cart__fixed'),
			base = document.querySelector('.js_cart_base');

		init_sticky_element(a, base);
	}

	if ($('.product__wrapper').length) {
		if ($(window).width() >= 1440) {
			const a = document.querySelector('.product__info-block'),
				base = document.querySelector('.product__wrapper');

			init_sticky_element(a, base);
		} else if ($(window).width() >= 1024) {
			const a = document.querySelector('.product__images'),
				base = document.querySelector('.product__info-block');

			init_sticky_element(a, base);
		}
	}

	function init_sticky_element(a, base) {
		var b = null,
			K = null,
			Z = 0,
			P = 24,
			N = 24; // если у P ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента, если у N — нижний край дойдёт до нижнего края элемента. Может быть отрицательным числом
		//window.addEventListener('scroll', Ascroll, false);
		document.body.addEventListener('scroll', Ascroll, false);
		// $cat_menu_caption.on('click', Ascroll);
		function Ascroll() {
			console.log('Ascroll');
			var Ra = a.getBoundingClientRect(),
				R1bottom = base.getBoundingClientRect().bottom;

			if (Ra.bottom < R1bottom) {
				if (b == null) {
					var Sa = getComputedStyle(a, ''),
						s = '';
					for (var i = 0; i < Sa.length; i++) {
						if (
							Sa[i].indexOf('overflow') == 0 ||
							Sa[i].indexOf('padding') == 0 ||
							Sa[i].indexOf('border') == 0 ||
							Sa[i].indexOf('outline') == 0 ||
							Sa[i].indexOf('box-shadow') == 0 ||
							Sa[i].indexOf('background') == 0
						) {
							s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; ';
						}
					}
					b = document.createElement('div');
					b.className = 'stop';
					b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
					a.insertBefore(b, a.firstChild);
					var l = a.childNodes.length;
					for (var i = 1; i < l; i++) {
						b.appendChild(a.childNodes[1]);
					}
					a.style.height = b.getBoundingClientRect().height + 'px';
					a.style.padding = '0';
					a.style.border = '0';
				}
				var Rb = b.getBoundingClientRect(),
					Rh = Ra.top + Rb.height,
					W = document.documentElement.clientHeight,
					R1 = Math.round(Rh - R1bottom),
					R2 = Math.round(Rh - W);

				if (Rb.height > W) {
					if (Ra.top < K) {
						// скролл вниз
						if (R2 + N > R1) {
							// не дойти до низа

							if (Rb.bottom - W + N <= 0) {
								// подцепиться
								b.className = 'sticky';
								b.style.top = W - Rb.height - N + 'px';
								// b.style.top = Ra.top + P + 'px';
								b.style.bottom = '';
								Z = N + Ra.top + Rb.height - W;
							} else {
								b.className = 'stop';
								b.style.top = -Z + 'px';
							}
						} else {
							b.className = 'stop';
							b.style.top = '';
							b.style.bottom = '0';
							Z = R1;
						}
					} else {
						// скролл вверх
						if (Ra.top - P < 0) {
							// не дойти до верха
							if (Rb.top - P >= 0) {
								// подцепиться
								b.className = 'sticky';
								b.style.top = P + 'px';
								b.style.bottom = '';
								Z = Ra.top - P;
							} else {
								b.className = 'stop';
								b.style.top = '';
								b.style.bottom = '0';
							}
						} else {
							b.className = '';
							b.style.top = '';
							Z = 0;
						}
					}
					K = Ra.top;
				} else {
					if (Ra.top - P <= 0) {
						if (Ra.top - P <= R1) {
							b.className = 'stop';
							b.style.top = '';
							b.style.bottom = '0';
						} else {
							b.className = 'sticky';
							b.style.top = -Ra.top + P + 'px';
							b.style.bottom = '';
						}
					} else {
						b.className = '';
						b.style.top = '';
					}
				}
				window.addEventListener(
					'resize',
					function () {
						a.children[0].style.width = getComputedStyle(a, '').width;
					},
					false
				);
			}
		}
	}
}

function init_search() {
	const $header_search = $('.header__search'),
		$input = $header_search.find('.header__search-input'),
		$close = $header_search.find('.header__search-close'),
		$search_result = $header_search.find('.header__search-result');

	$input.on('focus', function () {
		$search_result.addClass('open');
		$close.addClass('open');
		$('.header__wrapper--bottom').addClass('search-open');

		$(document).on('click', document_click_handler);
	});

	$close.on('click', function () {
		$search_result.removeClass('open');
		$close.removeClass('open');
		$('.header__wrapper--bottom').removeClass('search-open');
	});

	function document_click_handler(evt) {
		if (
			!$(evt.target).closest('.header__search').length &&
			!$(evt.target).is('.header__search') &&
			!$(evt.target).closest('.header__search-result').length &&
			!$(evt.target).is('.header__search-result')
		) {
			$search_result.removeClass('open');
			$close.removeClass('open');
			$('.header__wrapper--bottom').removeClass('search-open');
			$(document).off('click', document_click_handler);
		}
	}
}

function init_qty() {
	const $qty = $('.qty');

	if (!$qty.length) {
		return false;
	}

	$qty.each(function () {
		const $item = $(this),
			$decrement = $item.find('.qty__btn--decrement'),
			$text = $item.find('.qty__text'),
			$val = $text.find('span'),
			max_value = $item.data('max') ? $item.data('max') : -1,
			$increment = $item.find('.qty__btn--increment');

		let value = parseInt($val.text());

		update_value();

		$decrement.on('click', function (evt) {
			evt.preventDefault();

			value--;
			update_value();
		});

		$increment.on('click', function (evt) {
			evt.preventDefault();

			value++;
			update_value();
		});

		function update_value() {
			if (value <= 1) {
				$val.text(1);
				value = 1;
				$decrement.prop('disabled', true);
			} else if (value >= max_value && max_value != -1) {
				$val.text(max_value);
				value = max_value;
				$increment.prop('disabled', true);
			} else {
				$val.text(value);
				$decrement.prop('disabled', false);
				$increment.prop('disabled', false);
			}
		}
	});

	const $add2cart = $('.js_add2cart');

	if (!$add2cart.length) {
		return false;
	}

	$add2cart.each(function () {
		const $item = $(this),
			$add2cart_btn = $item.children('button');

		$add2cart_btn.on('click', function (evt) {
			evt.preventDefault();

			$item.addClass('added');
		});
	});
}

function init_price_card() {
	const $price_card_fixed = $('.js_price_card_fixed');

	console.log($price_card_fixed);

	if (!$price_card_fixed.length) {
		return false;
	}

	$('body').on('scroll', function () {
		const PADDING_BOTTOM = 16;
		const $price_card_static = $('.js_price_card_static'),
			position = $price_card_static[0].getBoundingClientRect();

		console.log('asd');

		if (position.bottom <= PADDING_BOTTOM) {
			$price_card_fixed.addClass('show');
		} else {
			$price_card_fixed.removeClass('show');
		}
	});
}

function init_form_groups() {
	const $form_groups = $('.form-group');

	if (!$form_groups.length) {
		return false;
	}

	$form_groups.each(function () {
		const $form_group = $(this);
		$input = $(this).find('label + input, label + textarea');

		$input.on('focus', function () {
			$form_group.addClass('open focus');
		});

		$input.on('blur', function () {
			$form_group.removeClass('focus');

			if ($(this).val() == '') {
				$form_group.removeClass('open');
			}
		});

		if ($input.val() != '') {
			$form_group.addClass('open');
		}
	});

	const $textarea = $form_groups.find('textarea');

	$textarea.on('input', function () {
		this.style.height = 0;
		this.style.height = this.scrollHeight + 'px';

		if ($(this).val() == '') {
			this.style.height = '';
		}
	});
}

function init_order_form() {
	const $order_form = $('.checkout__form');

	if (!$order_form.length) {
		return false;
	}

	$('.js_card_number').on('keydown', function (evt) {
		$(this).mask('0000 0000 0000 0000');
	});

	$('.js_card_expiry_date').on('keydown', function (evt) {
		$(this).mask('00/00');
	});

	$('.js_card_cvc').on('keydown', function (evt) {
		$(this).mask('000');
	});

	$('.cart__buy').on('click', function (evt) {
		evt.preventDefault();

		$order_form.submit();
	});
}

function init_tabs() {
	$('.js_tabs').tabs({
		classes: {
			'ui-tabs-active': 'active',
			'ui-tabs-panel': 'tabs__item',
		},
	});
}

function init_account_form() {
	const $account_form = $('.account__form');

	if (!$account_form.length) {
		return false;
	}

	const $input = $account_form.find('.account__input'),
		$submit = $account_form.find('.account__submit'),
		$reset = $account_form.find('.account__reset');

	$input.on('keyup change', function () {
		const val1 = $input.filter('[name="change-name"]').val(),
			val2 = $input.filter('[name="change-email"]').val();

		if (val1 || val2) {
			$submit.addClass('show');
			$reset.addClass('show');
		} else {
			$submit.removeClass('show');
			$reset.removeClass('show');
		}
	});
	$reset.on('click', function () {
		$submit.removeClass('show');
		$reset.removeClass('show');
	});
}

function init_copy_to_clipboard() {
	const $js_copy = $('.js_copy');

	if (!$js_copy.length) {
		return false;
	}

	$js_copy.on('click', function (evt) {
		evt.preventDefault();

		const textToCopy = $(this).prev('.js_for_copy').text();
		const tempTextarea = $('<textarea>');
		$('body').append(tempTextarea);
		tempTextarea.val(textToCopy).select();
		document.execCommand('copy');
		tempTextarea.remove();
	});
}

function init_allow_cookie() {
	const $js_allow_cookie = $('.js_allow_cookie');

	/* Нужно переделать под проверку cookie */

	$js_allow_cookie.on('click', function (evt) {
		evt.preventDefault();

		$('.cookie').remove();
	});
}

function init_modals() {
	const $js_modal_open = $('.js_modal_open'),
		$js_modal_close = $('.js_modal_close');

	$js_modal_open.on('click', function (evt) {
		evt.preventDefault();

		const $modal = $($(this).attr('href'));

		$('.modal.open').removeClass('open');
		$modal.addClass('open');
		$('body').addClass('modal_open');
	});

	$js_modal_close.on('click', function (evt) {
		evt.preventDefault();

		const $modal = $(this).closest('.modal');

		$modal.removeClass('open');
		$('body').removeClass('modal_open');
	});
}

function init_auth_confirm() {
	const $auth_confirm_form = $('#auth-confirm-form'),
		$inputs = $auth_confirm_form.find('.modal__input');

	$inputs.on('keydown', function (evt) {
		$(this).mask('0');
	});

	$inputs.on('keyup', function () {
		let value = $(this).val();
		let len = value.length;
		let curTabIndex = parseInt($(this).attr('tabindex'));
		let nextTabIndex = curTabIndex + 1;
		let prevTabIndex = curTabIndex - 1;
		if (len > 0) {
			$('[tabindex=' + nextTabIndex + ']').trigger('focus');
		} else if (len == 0 && prevTabIndex !== 0) {
			$('[tabindex=' + prevTabIndex + ']').trigger('focus');
		}
	});
}

function init_add_testimonial() {
	const $testimonials_add_block = $('.testimonials__add-block');

	if (!$testimonials_add_block.length) {
		return false;
	}

	const $form = $testimonials_add_block.find('.testimonials__form'),
		$success = $testimonials_add_block.find('.testimonials__success'),
		$submit = $form.find('.testimonials__submit'),
		$close = $success.find('.testimonials__close');

	$submit.on('click', function (evt) {
		evt.preventDefault();

		$form.removeClass('open');
		$success.addClass('open');
	});

	$close.on('click', function (evt) {
		evt.preventDefault();

		$success.removeClass('open');
	});
}

function init_contact_form() {
	const $contact_form = $('.contact_form');

	if (!$contact_form.length) {
		return false;
	}

	$('input[name="phone"]').on('keydown', function (evt) {
		if ($(this).val() == '' && evt.originalEvent.key == '8') {
			evt.preventDefault();

			$(this).val('+7 ');
		}

		$(this).mask('+7 000 000-00-00');
	});

	$contact_form.each(function () {
		const $form = $(this);
		$form.validate({
			rules: {
				name: 'required',
				email: {
					required: true,
					email: true,
				},
				phone: 'required',
				'card-number': 'required',
				'card-expiry-date': 'required',
				cvc: 'required',
				'callback-message': 'required',
			},
			messages: {
				name: 'Введите ваше имя',
				email: {
					required: 'Введите адрес электронной почты',
					email: 'Введите почту, в формате х@x.xx',
				},
				phone: 'Введите ваш телефон',
				'card-number': 'Введите номер карты',
				'card-expiry-date': 'Введите срок действия карты',
				cvc: 'Введите CVV/CVC код',
				'callback-message': 'Введите комментарий',
			},
			submitHandler: function (form) {
				form.submit();
			},
		});
	});
}

function init_favorite() {
	const $favorite = $('.js_favorite');

	if (!$favorite.length) {
		return false;
	}

	$favorite.on('click', function (evt) {
		evt.preventDefault();

		$(this).toggleClass('active');
	});
}

function init_hovers() {
	if ($('.acc-order__top').length) {
		const $acc_order_top = $('.acc-order__top');

		$acc_order_top.on({
			mouseenter: function () {
				$(this).closest('.acc-order').addClass('hover');
			},
			mouseleave: function () {
				$(this).closest('.acc-order').removeClass('hover');
			},
		});
	}
}

/* Исключительно на время вёрстки */
function init_order() {
	/* Поиск */
	$('.js_city_form_group .checkout__input').on('focus', function () {
		$('.checkout__search-result').addClass('open');

		$(document).on('click', document_click_handler);
	});

	$('.js_city_form_group .search-result__link').on('click', function (evt) {
		evt.preventDefault();

		$('.js_hidden').removeClass('hidden');
		$('.checkout__search-result').removeClass('open');
	});

	function document_click_handler(evt) {
		if (
			!$(evt.target).closest('.js_city_form_group').length &&
			!$(evt.target).is('.js_city_form_group') &&
			!$(evt.target).closest('.checkout__search-result').length &&
			!$(evt.target).is('.checkout__search-result')
		) {
			$('.checkout__search-result').removeClass('open');
			$(document).off('click', document_click_handler);
		}
	}

	/* Доставка и оплата */
	const $payments = $('[data-payment]');

	$payments.on('click', function (evt) {
		evt.preventDefault();

		$payments.removeClass('active');
		$(this).addClass('active');
	});
}

function init_callback_form() {
	const $callback_form = $('#callback-modal-form');

	$callback_form.on('submit', function (evt) {
		evt.preventDefault();

		$('#callback-modal').removeClass('open');
		$('#callback-success-modal').addClass('open');
	});
}

/* ============================== */

$(document).ready(function () {
	init_menu();
	init_carousel();
	init_sticky_elements();
	init_search();
	init_qty();
	init_form_groups();
	init_order_form();
	init_tabs();
	init_account_form();
	init_copy_to_clipboard();
	init_allow_cookie();
	init_modals();
	init_auth_confirm();
	init_add_testimonial();
	init_contact_form();
	init_favorite();
	init_hovers();

	if ($(window).width() < 1024) {
		init_price_card();
	}

	/* Исключительно на время вёрстки */
	init_order();
	init_callback_form();
	/* ============================== */
});

$(window).on('load', function () {
	init_articles_short_desc();
});
