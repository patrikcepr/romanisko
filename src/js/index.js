console.log('hello ma\'am');

// #title services list collapsing
$('li.list-services-item').click(function () {
    if ($(this).children().not('i').not('span').is(':visible')) {
        // is visible do this
        $(this).children().not('i').not('span').hide('slow');
    } else {
        //is hidden do this
        $('ul.list-issues').hide('slow');
        $(this).children().not('i').not('span').toggle('slow');
    }
});

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementsByClassName("navbar").style.top = "0";
    } else {
        document.getElementsByClassName("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}