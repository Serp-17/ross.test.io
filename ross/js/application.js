$(function(){
    $('.menu_btn').click(function(){
        $('header').toggleClass('active');
    });
});

$(function(){
    $('.sort_btn').click(function(){
        $('.sorting_menu').toggleClass('active-s');
    });
});

$(function(){
    $('.load_btn').click(function(){
        $('.load').css('display','block');
    });
});