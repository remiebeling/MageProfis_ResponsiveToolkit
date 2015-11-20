# MageProfis_ResponsiveToolkit

###Mobile toolbar
If the Screen Size matches Bootstraps "xs" viewport,
the default breadcrumb is removed and a Mobile-User friendly dropdown is created.

###Responsive js tools
When this module is active you can use the "responsive"-object.

The "responsive"- method gives you the ability to match bootstraps breakpoints witch
js easily. just pass the breakpoint you want to test for to the isBreakpoint() - Method.

example:

<pre>
if(responsive.isBreakpoint('xs'))
{
    //Do some mobile Specific stuff here.
}
</pre>
