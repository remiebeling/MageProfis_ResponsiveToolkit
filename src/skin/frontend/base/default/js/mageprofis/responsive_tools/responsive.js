jQuery(document).ready(function () {

    /*******************************************************
     * Large desktop
     *******************************************************/
    if (responsive.isBreakpoint('lg')) {

    }

    /*******************************************************
     * small desktop
     *******************************************************/
    else if (responsive.isBreakpoint('md')) {
        
    }

    /*******************************************************
     * tablet
     *******************************************************/
    else if (responsive.isBreakpoint('sm')) {

    }

    /*******************************************************
     * mobile
     *******************************************************/
    else if (responsive.isBreakpoint('xs')) {

    }
});

jQuery(window).resize(function () {

    /*******************************************************
     * Large Desktop
     *******************************************************/
    if (responsive.isBreakpoint('lg')) {

    }

    /*******************************************************
     * small Desktop
     *******************************************************/
    else if (responsive.isBreakpoint('md')) {

    }

    /*******************************************************
     * tablet
     *******************************************************/
    else if (responsive.isBreakpoint('sm')) {

    }

    /*******************************************************
     * Mobile
     *******************************************************/
    else if (responsive.isBreakpoint('xs')) {

    }
});

var responsive = {
    isBreakpoint: function (size) {
        var item = jQuery('<span class="visible-' + size + '"></span>').appendTo('body');
        var state = item.is(':visible');
        item.remove();
        return state;
    }
}
