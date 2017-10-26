function initMap() {
    var optionsMap = {
        center: {lat: 55.752, lng: 37.621},
        zoom: 10,
        scrollwheel: false,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e9e9e9"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]
    };
    var optionsMapModal = {
        center: {lat: 55.752, lng: 37.621},
        zoom: 10
    }
    var mapModal = new google.maps.Map(document.getElementById('map-modal'), optionsMapModal);
    //Карта №2
    var markModal1LatLng = {lat: 55.644, lng: 37.590};
    var markModal2LatLng = {lat: 55.886, lng: 37.493};
    var contentMark1Modal = "<div style='font-size: 16px'>Бусиновская горка, д. 2</div><br><div style='font-size: 16px'>Пн-Пт: с 08:00 до 22:00<br>Сб-Вс: с 09:00 до 18:00</div>";
    var contentMark2Modal = "<div style='font-size: 16px'>Балаклавский пр-кт,д. 28б, стр. 1</div><br><div style='font-size: 16px'>Пн-Пт: с 08:00 до 22:00<br>Сб-Вс: с 09:00 до 18:00</div>";
    var infowindow1Modal = new google.maps.InfoWindow({
        content: contentMark1Modal,
        maxWidth: 200
    });
    var infowindow2Modal = new google.maps.InfoWindow({
        content: contentMark2Modal,
        maxWidth: 200
    });
    var marker1Modal = new google.maps.Marker({
        position: markModal1LatLng,
        map: mapModal,
        icon: "http://belkevicha.beget.tech/marker.png"
    });
    marker1Modal.addListener('click', function() {
        infowindow1Modal.open(mapModal, marker1Modal);
    });
    var marker2Modal = new google.maps.Marker({
        position: markModal2LatLng,
        map: mapModal,
        icon: "http://belkevicha.beget.tech/marker.png"
    });
    marker2Modal.addListener('click', function() {
        infowindow2Modal.open(mapModal, marker2Modal);
    });
    var map = new google.maps.Map(document.getElementById('map'), optionsMap);

    //Карта №1
    var mark1LatLng = {lat: 55.644, lng: 37.590};
    var mark2LatLng = {lat: 55.886, lng: 37.493};
    var contentMark1 = "<div style='font-size: 16px'>Бусиновская горка, д. 2</div><br><div style='font-size: 16px'>Пн-Пт: с 08:00 до 22:00<br>Сб-Вс: с 09:00 до 18:00</div>";
    var contentMark2 = "<div style='font-size: 16px'>Балаклавский пр-кт,д. 28б, стр. 1</div><br><div style='font-size: 16px'>Пн-Пт: с 08:00 до 22:00<br>Сб-Вс: с 09:00 до 18:00</div>";
    var infowindow1 = new google.maps.InfoWindow({
        content: contentMark1,
		maxWidth: 200
    });
    var infowindow2 = new google.maps.InfoWindow({
        content: contentMark2,
        maxWidth: 200
    });
    var marker1 = new google.maps.Marker({
        position: mark1LatLng,
        map: map,
        icon: "http://belkevicha.beget.tech/marker.png"
    });
    marker1.addListener('click', function() {
        infowindow1.open(map, marker1);
    });
    var marker2 = new google.maps.Marker({
        position: mark2LatLng,
        map: map,
        icon: "http://belkevicha.beget.tech/marker.png"
    });
    marker2.addListener('click', function() {
        infowindow2.open(map, marker2);
    });
}

(function ($) {
    /**
    *  // Вызов события
    *  $.publish('updateCart', [arg1, arg2, ...]);
    *
    *  // Регистрация обработчика
    *  $.subscribe('updateCart', function((event, arg1, arg2, ...){
    *      // ...
    *  });
    *
    *  // Удаляет обработчик
    *  $.unsubscribe('updateCart', function(){
    *      // ...
    *  });
    */

   var o = $({});

   $.subscribe = function () {
       o.on.apply(o, arguments);
   };

   $.unsubscribe = function () {
       o.off.apply(o, arguments);
   };

   $.publish = function () {
       o.trigger.apply(o, arguments);
   };

}(jQuery));

jQuery(document).ready(function($) {
    //UI KIT
    $('.select-default').selectpicker({}).on('loaded.bs.select', function (e) {
        сlearFromSystemClasses($(this).data('selectpicker').$newElement);
    });
    $(document).on('click', '.checkout-title-for-tab', function () {
       $(this).toggleClass('active');
       $(this).next().slideToggle();
    });
	//ТАБЫ
	$('ul.popular-product-tabs').on('click', '.popular-product-tabs-name:not(.active)', function() {
	    $(this)
	      .addClass('active').siblings().removeClass('active')
	      .closest('.popular-model-container').find('div.popular-product-block').removeClass('active').eq($(this).index()).addClass('active');
  	});
  	$('ul.tire-selection-block-names').on('click', '.tire-selection-block-names-element:not(.active)', function() {
	    $(this)
	      .addClass('active').siblings().removeClass('active')
	      .closest('.tire-selection-block').find('div.tire-selection-block-section').removeClass('active').eq($(this).index()).addClass('active');
  	});

  	$('.header-car-content').on('click', function () {
        $(this).parent().find('.header-car-popup').toggleClass('active');
    });
  	$('.close-car').on('click', function () {
        $('.header-car-popup').removeClass('active');
    });

  	//СТИЛИЗАЦИЯ ИНПУТОВ И СЕЛЕКТОВ
    $('input').styler({
        onFormStyled: function() {
            сlearFromSystemClasses($('.jq-checkbox, .jq-radio'));
        }
    });

    $('.not-stylize').styler('destroy');

 	$(".dropdown-toggle").each(function() {
	    var $this = $(this);
	    $this.html($this.html().replace(/&nbsp;/g, ''));
	});

	$('.filter-item__name').on('click', function(){
		$(this).next().slideToggle();
		$(this).toggleClass('filter-item__name_hide');
	});

    $('.js-scroll').click(function (e) {
        e.preventDefault();

        var $source = $(this),
            $target = $source.attr('href').indexOf('#') === 0 && $($source.attr('href'));

        if ($target && $target.length) {
            $('html, body').animate({
                scrollTop: $target.offset().top
            }, 500);
        }
    });

	$('.select-languages__input').selectpicker({
	}).on('loaded.bs.select', function (e) {
        сlearFromSystemClasses($(this).data('selectpicker').$newElement);
    });

	$(document).on('click', '.select-languages', function(){
		$('.select-languages-popup').toggleClass('active');
	});

	$(document).on('click', '.select-languages-popup__close', function(){
		$('.select-languages-popup').removeClass('active');
	});

	$(document).on('click', '.select-city-content', function(){
		$(this).toggleClass('active');
		$('.list-cities, .overlay-city').toggleClass('active');
	});

	$('.overlay-city').on('click', function(){
		$(this).removeClass('active');
		$('.select-city-content, .list-cities').removeClass('active');
        $('.modal-issue').css('visibility','hidden');
        $('.modal-issue').css('opacity','0');
	});

	$('.close-popup-list-cities').on('click', function() {
		$('.select-city-content, .list-cities, .overlay-city').removeClass('active');
	});

	if( $(window).width() > 1279) {
        $('[mag-thumb="inner"]').mag();
    }

    $(document).on('click', '.catalog-item-like', function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
    })

    $(document).on('click', '.catalog-detail-small-image__link', function (event) {
        event.preventDefault();
        var href = $(this).attr("href");
        $('.catalog-detail-small-image__link').removeClass('active');
        $(this).addClass('active');
        $('.catalog-detail-big-image__img').attr('src', href);
        $('.catalog-detail-big-image__img-zoom').attr('src', href);
    });
    $(document).on('click', '.catalog-detail-big-image-arrows__next.arrow-not-slider', function (event) {
        event.preventDefault();
        $('.catalog-detail-small-image').find('.catalog-detail-small-image__link.active').removeClass('active')
            .next('.catalog-detail-small-image__link').addClass('active');
        if (!$('.catalog-detail-small-image').find('.catalog-detail-small-image__link.active').length) {
            $('.catalog-detail-small-image').find('.catalog-detail-small-image__link').first().addClass('active');
        }
        $('.catalog-detail-big-image__img').attr('src', $('.catalog-detail-small-image__link.active').attr("href"));
        $('.catalog-detail-big-image__img-zoom').attr('src', $('.catalog-detail-small-image__link.active').attr("href"));
    });
    $(document).on('click', '.catalog-detail-big-image-arrows__prev.arrow-not-slider', function (event) {
        event.preventDefault();
        $('.catalog-detail-small-image').find('.catalog-detail-small-image__link.active').removeClass('active')
            .prev('.catalog-detail-small-image__link').addClass('active');
        if (!$('.catalog-detail-small-image').find('.catalog-detail-small-image__link.active').length) {
            $('.catalog-detail-small-image').find('.catalog-detail-small-image__link').last().addClass('active');
        }
        $('.catalog-detail-big-image__img').attr('src', $('.catalog-detail-small-image__link.active').attr("href"));
        $('.catalog-detail-big-image__img-zoom').attr('src', $('.catalog-detail-small-image__link.active').attr("href"))
    });
    if ($('.catalog-detail-small-image__link-slider.active').length) {
        $('.catalog-detail-small-image__link-slider.active')[0].click();
    }
    $(document).on('click', '.catalog-detail-big-image-arrows__next.arrow-yes-slider', function (event) {
        event.preventDefault();
        if ($('.catalog-detail-small-image__link-slider.active').parents('.slick-slide').next().is('.slick-slide')) {
            $('.catalog-detail-small-image-slider').find('.catalog-detail-small-image__link-slider.active').removeClass('active').parents('.slick-slide').next('.slick-slide').find('.catalog-detail-small-image__link-slider').addClass('active');
            $('.catalog-detail-big-image__img').attr('src', $('.catalog-detail-small-image__link.active').attr("href"));
            $('.catalog-detail-big-image__img-zoom').attr('src', $('.catalog-detail-small-image__link.active').attr("href"));
        }
    });
    $(document).on('click', '.catalog-detail-big-image-arrows__prev.arrow-yes-slider', function (event) {
        event.preventDefault();
        if ($('.catalog-detail-small-image__link-slider.active').parents('.slick-slide').prev().is('.slick-slide')) {
            $('.catalog-detail-small-image-slider').find('.catalog-detail-small-image__link-slider.active').removeClass('active').parents('.slick-slide').prev('.slick-slide').find('.catalog-detail-small-image__link').addClass('active');
            $('.catalog-detail-big-image__img').attr('src', $('.catalog-detail-small-image__link.active').attr("href"));
            $('.catalog-detail-big-image__img-zoom').attr('src', $('.catalog-detail-small-image__link.active').attr("href"));
        }
    });

    $(document).on('click', '.catalog-detail-more-colors__link', function () {
        $(this).next('.catalog-detail-more-colors-list').slideToggle();
    });

    $('.catalog-detail-small-image-slider').slick({
    	infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1919,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1680,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
	});

    $('.catalog-detail__price-count, .cart-table__price-count').selectpicker({}).on('loaded.bs.select', function (e) {
        сlearFromSystemClasses($(this).data('selectpicker').$newElement);
    });
    $('.checkout-date-select').selectpicker({});

    $(document).on('click', '.catalog-detail-goods-stock__title', function () {
		$(this).next().slideToggle();
    });

    $('[data-toggle="tooltip"]').tooltip();

    $(document).on('click', '.catalog-detail-socials__text', function () {
        $(this).next().slideToggle();
    });

    $(document).on('click', '.close-notification', function () {
        $(this).parent().fadeOut();
    });

    $(document).on('click', '.js_showpickup_point', function () {
        $('.overlay-city').addClass('active');
        $('.modal-issue').css('visibility','visible');
        $('.modal-issue').css('opacity','1');
    });

    $(document).on('click', '.modal-issue-as', function () {
        var modalPopup = $(this).parents('.modal-issue-item').find('.modal-issue-item-popup').toggle();
        $('.modal-issue-item-popup').hide();
        if(modalPopup.is(':visible')) {
            modalPopup.hide();
        } else {
            modalPopup.show();
        }
    });

    $(document).on('click', '.modal-issue-item-popup__close', function () {
        $(this).parents('.modal-issue-item-popup').hide();
    });

    $('.modal-issue-content-scroll').scrollbar();

    $(document).on('click', '.modal-issue-close', function () {
        $('.modal-issue').css('visibility','hidden');
        $('.modal-issue').css('opacity','0');
        $('.overlay-city').removeClass('active');
    })

    $('.phone').mask("+7 (999)999-99-99");

    $(document).on('click', '.checkout-add-number', function () {
        $('.checkout-contacts-input-hide.phone').show();
        $('.checkout-add-number').hide();
    })

    $('.checkout-delivery-city-select').selectpicker({
        size: 4,
        noneSelectedText : 'Ничего не найдено',
        noneResultsText : 'Ничего не найдено'
    }).on('loaded.bs.select', function (e) {
        сlearFromSystemClasses($(this).data('selectpicker').$newElement);
    });

    $(".checkout-delivery-city-select .bs-searchbox .form-control").attr("placeholder", "Введите город");

    $('input[name="daterange"]').daterangepicker({
        ranges: {
            'Сегодня': [moment(), moment()],
            'Последние 7 дней': [moment().subtract(6, 'days'), moment()],
            'Последние 30 дней': [moment().subtract(29, 'days'), moment()],
            'Этот месяц': [moment().startOf('month'), moment().endOf('month')],
            'Предыдущий месяц': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        "locale": {
            "format": "DD/MM/YYYY",
            "separator": " - ",
            "applyLabel": "Выбрать",
            "cancelLabel": "Отмена",
            "fromLabel": "С",
            "toLabel": "По",
            "customRangeLabel": "Выбрать дату",
            "daysOfWeek": [
                "ВС",
                "ПН",
                "ВТ",
                "СР",
                "ЧТ",
                "ПТ",
                "СБ"
            ],
            "monthNames": [
                "Январь",
                "Февраль",
                "Март",
                "Апрель",
                "Май",
                "Июнь",
                "Июль",
                "Август",
                "Сентябрь",
                "Октябрь",
                "Ноябрь",
                "Декабрь"
            ],
            "firstDay": 1
        }
    });

    $('#datetimepicker1').each(function(){
        $(this).datetimepicker({
            format: 'DD.MM.YYYY',
            locale: 'ru'
        });
    });
    $('.datetimepicker').each(function(){
        $(this).datetimepicker({
            format: 'DD.MM.YYYY',
            locale: 'ru'
        });
    });

    $(document).on('click', '.type-payments-label', function () {
        $('.type-payments-label').removeClass('active');
        $(this).addClass('active');
    });

    $(document).on('click', '.comment-delivery__text', function () {
        $(this).next().slideToggle();
    });
    $(document).on('click', '.delivery-bottom__span-comment', function () {
        $(this).parent().next().find('.comment-delivery__textarea').slideToggle();
    });

    $(document).on('click', '.delivery-bottom__span-time', function () {
        $(this).parent().next().find('.checkout-time-bottom').slideToggle();
    });

    $(document).on('click', '.checkout-info-bottom__link', function (event) {
        event.preventDefault();
        $('.cart-table-checkout').slideToggle();
    });

    $(document).on('click', '#copy-address', function () {
        var textInput = $('#legal-address').val();
        $(this).parent().next().val(textInput);
    });

    $(document).on('click', '.entity-row-number-col-add', function () {
        $(this).hide();
        $('.checkout-delivery-title__input-hide').show();
    })

    $(document).on('click', '.personal-info-add-number', function () {
        $(this).hide();
        $('.checkout-delivery-title__input-hide').show();
    })

    $(document).on('click', '.catalog-item__best-price.catalog-detail', function () {
        $( '.modal-best-price-content' ).load( "local/templates/kolesatyt/js/json/bestprice.html" );
    })

    $(document).on('click', '#form-1-label', function () {
        $('.modal-best-price-form').hide();
        $('.modal-best-price-form.form1').show();
    })

    $(document).on('click', '#form-2-label', function () {
        $('.modal-best-price-form').hide();
        $('.modal-best-price-form.form2').show();
    })

    $(document).on('click', '.catalog-detail-big-image', function () {
         $('.catalog-detail-big-image').toggleClass('active');
	});

	$(document).on('click', '.stores-list-inline', function () {
		$('.modal-issue-map-col').addClass('active');
   });
	
	$(document).on('click', '.modal-best-price-btn', function () {
		$('#modalBestPrice').modal('hide');
		$('#modalBestPriceForms').modal('show');
   });

    var submenuPosition = $('.header-submenu').offset().left;
    $('.header-submenu-container').css('left', -submenuPosition)
    $('.header-submenu-container').css('right', -submenuPosition)
    $( window ).resize(function() {
        var submenuPosition = $('.header-submenu').offset().left;
        $('.header-submenu-container').css('left', -submenuPosition)
        $('.header-submenu-container').css('right', -submenuPosition)
    });

    $(document).on('click', '.left-header-tablet-menu', function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().next().toggleClass('active');
    })

    $(document).on('click', '.mobile-menu-top-close', function (event) {
        event.preventDefault();
        $('.mobile-menu').hide();
    })
    $(document).on('click', '.header-mobile-icon-menu', function (event) {
        event.preventDefault();
        $('.mobile-menu').show();
    })

    $(document).on("click", ".personal-page-mobile-item-title:not('.search-page-tab-title')", function(event) {
        $(this).toggleClass('active')
        $(this).next().slideToggle();
    });
    $(document).on('click', '.modal-issue-as', function () {
        var modalIssuePopup = $(this).parents('.modal-issue-item').find('.modal-issue-item-popup').outerHeight();
        var modalIssueScroll = $('.modal-issue-content-scroll').scrollTop();
        $('.modal-issue-content-scroll').scrollTop(modalIssuePopup + modalIssueScroll);
    })

    $(document).on('click', '.close-panel', function () {
        $(this).parents('.panel-head-mobile').hide();
    })

    $(document).on('click', '.title-model-and-city-arrow', function () {
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });

    $(document).on('hidden.bs.modal', function (event) {
     if ($('.modal:visible').length) {
        $('body').addClass('modal-open');
     }
    });

    $('#modalBestPrice').on('hidden', function () {
      $('#modalBestPriceForms').modal('show')
    })

    $(document).on('click', '.modal-login-link__registration', function () {
        $('#modal-login').modal('hide');
        $('#modal-registration').modal('show');
    });

    $(document).on('click', '.modal-login-link__password', function () {
        $('#modal-login').modal('hide');
        $('#modal-password').modal('show');
    });

    $(document).on('click', '.js-modal-login', function (event) {
        event.preventDefault();
        $('#modal-login').modal('show');
    });

    if ($(window).width() < 768) {
        $(document).on('click', '.left-menu-text-item__title', function (event) {
            event.preventDefault();
            $(this).next().slideToggle();
            $(this).toggleClass('active');
        });
        $(document).on('click', '.catalog-detail-small-image__btn', function (event) {
          event.preventDefault();
          $('html, body').animate({ scrollTop: $('.catalog-detail-mobile-title2d').offset().top - 20 }, 1000);
          $('.catalog-detail-mobile-title2d').next().slideToggle();
        });
        $('#modalCityMobile').modal('show');
        $('#modalSearchCity').modal('hide');
        $(document).on('click', '#yes-city', function (event) {
          $('#modalCityMobile').modal('hide');
        });
        $(document).on('click', '#no-city', function (event) {
          $('#modalCityMobile').modal('hide');
          $('#modalSearchCity').modal('show');
        });
    }
    if ($(window).width() > 767) {
      //$('#modalSearchCity').modal('show');
      $(document).on('click', '.catalog-detail-small-image__btn', function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: $('.catalog-detail-tabs').offset().top - 20 }, 1000);
        $('.catalog-detail-tabs a[href="#2d"]').tab('show');
      });
    }

    $(document).on('click', '.mobile-menu-search__submit', function (event) {
        if($('.header-car-mobile').hasClass('active')) {
            $(this).submit();
        } else {
          event.preventDefault();
          $('.header-car-mobile').addClass('active');
        }
    });

    $(document).on('click', '.catalog-item__tocart, .mobile-catalog-item-buttons__add-to-cart', function (event) {
        event.preventDefault();
        $('#modalCart').modal('show');
    });

    $(document).on('click', '.catalog-detail-delivery-and-payment-mobile > a', function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $(this).next().slideToggle();
    })

});

if (!jQuery.fn.daterangepicker) {
    jQuery.fn.daterangepicker = function () {
        return this.each();
    };
}

if (!$('.header-submenu').length) {
    $('<div/>', {
        'class': 'header-submenu',
        'style': 'display: none'
    }).appendTo('body');
}

(function($){
   var reloadSvg = function() {
       $('img[src$=".svg"]').each(function () {
           var $img = $(this);

           if ($img.data('initedReloadSvg')) {
               return;
           }
           $img.data('initedReloadSvg', true);

           var imgURL = $img.attr('src'),
               attributes = $img.prop('attributes');

           $.get(imgURL, function (data) {
               var $svg = $(data).find('svg');

               $svg = $svg.removeAttr('xmlns:a');

               $.each(attributes, function () {
                   $svg.attr(this.name, this.value);
               });
               $img.replaceWith($svg);
           }, 'xml');
       });
   };

   $(function($) {
       reloadSvg();
       $.subscribe('app.component.list.update', reloadSvg);
   });
})(jQuery);
