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