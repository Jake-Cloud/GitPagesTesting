$(document).ready(function () {
    // $("#navbar").load("/navbar.html");
    var url = window.location.pathname;
    $('ul.nav a[href="'+ url +'"]').addClass('active');
    $('ul.nav a').filter(function() {
            return this.href == url;
    }).addClass('active');
});
