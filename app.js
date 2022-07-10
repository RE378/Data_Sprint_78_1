$(document).ready(function(){
    $(".dd").hover(function(){
        var dropdownMenu = $(this).children(".dd");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
});

$(document).ready(function() {
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
});



