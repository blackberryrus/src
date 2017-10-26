

$('.tire-selection-select').selectpicker({
    size: 10,
    noneSelectedText : 'Ничего не найдено',
    noneResultsText : 'Ничего не найдено'
});

$('.tire-selection-line-big, .tire-selection-line-small').selectpicker({
    size: 10
});

$(".tire-selection-select .bs-searchbox .form-control").attr("placeholder", "Введите запрос");


//ФИЛЬТР ПО    АВТОМОБИЛЯМ
function selectAuto(classSelect, pathJson) {
    $('select.' + classSelect).find('option').remove();
    $.getJSON(pathJson, function (data) {
        $.each( data, function( key, val ) {
            $('select.' + classSelect).append( "<option>" + val + "</option>" );
        });
    });
    setTimeout(function() {
        $('.tire-selection-select.' + classSelect).attr('disabled', false).selectpicker('refresh');
    }, 200)
};

$(document).on('click', '.select-mark .dropdown-menu > li', function(){
    selectAuto('select-model', 'js/json/models.json');
});

$(document).on('click', '.select-model .dropdown-menu > li' , function(){
    selectAuto('select-year', 'js/json/year.json', 'Год');
});

$(document).on('click', '.select-year .dropdown-menu > li' , function(){
    selectAuto('select-engine', 'js/json/engine.json', 'Двигатель');
});

$(document).on('click', '.select-engine .dropdown-menu > li' , function(){
    selectAuto('select-bodytype', 'js/json/bodytype.json', 'Кузов');
});

//ВЫБОР ЦВЕТА АВТОМОБИЛЯ
$(document).on('click', '.tire-selection-color__item', function() {
    $(this).parents('.tire-selection-color').prev().find('img').attr('src', $(this).data('color-url'));
});

/*СЛАЙДЕР ЦЕНЫ*/
$(function(){
    var $range = $("#range");
    var track = function () {
        var value = this.value.split(";");
        jQuery("input#pricefrom").val(value[0]);
        jQuery("input#priceto").val(value[1]);
    };
    $range.ionRangeSlider({
        hide_min_max: true,
        min: 100,
        max: 10000,
        from: 500,
        to: 7000,
        type: 'double',
        step: 100,
        postfix: " руб",
        grid: false,
        prettify_enabled: true,
        values_separator: ""
    });
    $range.on("change", track).change();
    var slider = $("#range").data("ionRangeSlider");
    jQuery("input#pricefrom").on("change", function () {
        slider.update({from: this.value})
    })
    jQuery("input#pricefrom").val() && jQuery("input#pricefrom").change()

    jQuery("input#priceto").on("change", function () {
        slider.update({to: this.value})
    })
    jQuery("input#priceto").val() && jQuery("input#priceto").change()
});

$('.filter-item-content-brand').scrollbar();

$('.select-sort').selectpicker({
    size: 10
});


function сlearFromSystemClasses (el) {
    $(el).each(function(index, element) {
        var classes = element.className.split(' '),
            result = [];

        for (var i = 0; i < classes.length; i++) {
            if (classes[i].indexOf('js-') != 0) {
                result.push(classes[i]);
            }
        }

        element.className = result.join(' ');
    });
}