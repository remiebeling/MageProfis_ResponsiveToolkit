# MageProfis_ResponsiveToolkit

###Mobile toolbar
If the Screen Size matches Bootstraps "xs" viewport,
the default breadcrumb is removed and a Mobile-User friendly dropdown is created.

###Responsive js tools
When this module is active you can use the "responsive"-object.

The isBreakpoint() - Method gives you the ability to exactly match bootstraps 
breakpoints with js easily. Just pass the breakpoint you want to test for.

example:

<pre>
if(responsive.isBreakpoint('xs'))
{
    //Do some mobile Specific stuff here.
}
</pre>

The isTouchDevice Method is a shorthand to find out if the current
Breakpoint is a touch device or not.

example:

<pre>
if(responsive.isTouchDevice())
{
    //Do some Touch Specific stuff here.
}
</pre>

##Recommended Usage (@see responsive_tools.js):
<pre>
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
</pre>
