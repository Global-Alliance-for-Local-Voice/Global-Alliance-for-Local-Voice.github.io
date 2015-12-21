$(window).scroll(function(){
    $("#brand-copy, #scroll-tip").css("opacity", 1 - $(window).scrollTop() / 250);

});

function rot13(s) {
    return (s ? s : this).split('').map(function(_)
     {
        if (!_.match(/[A-Za-z]/)) return _;
        c = Math.floor(_.charCodeAt(0) / 97);
        k = (_.toLowerCase().charCodeAt(0) - 83) % 26 || 26;
        return String.fromCharCode(k + ((c == 0) ? 64 : 96));
     }).join('');
 }

function sendmail() {
    s="vasb@";
    e="znvygb:";
    g="tnyi.jbeyq";

    window.location = rot13(e) + rot13(s) + rot13(g);

}

$("#scroll-tip > a").click(function(e) { 
      // Prevent a page reload when a link is pressed
    e.preventDefault(); 
      // Call the scroll function
    $('html,body').animate({
      scrollTop: $("#main").offset().top
    }, 1000);          
});