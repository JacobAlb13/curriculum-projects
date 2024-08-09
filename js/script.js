var $submenu = $("<div id='sub-menu'></div>");
var $button = $("<div class='button-link'><a class='icon'><i class='fa fa-bars'></i></a></div>");
$("nav").append($button);
$("nav").append($submenu);
$("nav li a").each(function(){
    var $link = $("<a></a>");
    $submenu.append($link);
    $link.attr("href",$(this).attr("href"));
    $link.text($(this).text());
});
$button.click(function(){
    $submenu.toggle();
    });
$(window).resize(function(){
    var windowWidth = $(window).width();
    if (windowWidth >= 769) {  // Dimensioni desktop
        $submenu.show();  // Mostra il menu
    } else {   
            $submenu.hide();  // Nascondi il menu solo se non è aperto
        }
});
