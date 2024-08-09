var $submenu = $("<div class='sub-menu'></div>");
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
    $($submenu).toggleClass($submenu);
    
});
