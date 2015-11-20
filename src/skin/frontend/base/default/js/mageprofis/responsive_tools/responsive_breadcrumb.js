jQuery(window).resize(function () {

    if (responsive.isBreakpoint('xs')) {
        breadcrumb.createMobileBreadcrumb();
    } else {
        breadcrumb.destroyMobileBreadcrumb();
    }
});
jQuery(document).ready(function () {
    /*******************************************************
     * mobile
     *******************************************************/
    if (responsive.isBreakpoint('xs')) {
        breadcrumb.createMobileBreadcrumb();
    }
});
var breadcrumb = {
    state: 'default',
    breadcrumb: '',
    mobileBreadcrumb: '',
    fillSelect: function () {
        var breadcrumbObject = this;
        var breadcrumb = this.getBreadcrumb();
        breadcrumb.find('li').each(function () {
            var href = jQuery(this).find('a').attr('href');
            if (typeof href != 'undefined') {
                breadcrumbObject.addOption(jQuery(this).text(), href);
            }

        });
    },
    createMobileBreadcrumb: function () {
        if (this.getState() == 'default') {
            jQuery('<select id="mobile-breadcrumb"></select>"').insertAfter(this.getBreadcrumb());
            this.fillSelect();
            this.hideBreadcrumb();
            this.setState('mobile');
            var breadcrumbObject = this;
            this.getMobileBreadcrumb().bind('change', function () {
                breadcrumbObject.goto(jQuery(this).val());
            });
        }
    },
    destroyMobileBreadcrumb: function () {
        if (this.getState() == 'mobile') {
            this.showBreadCrumb();
            this.getMobileBreadcrumb().remove();
            this.setState('default');
        }
    },
    addOption: function (label, value) {
        var mobileBreadCrumb = this.getMobileBreadcrumb();
        mobileBreadCrumb.prepend('<option value="' + value + '">' + label + '</option>')
    },
    goto: function (target) {
        window.location.href = target;
    },
    hideBreadcrumb: function () {
        this.storeBreadcrumb();
        this.getBreadcrumb().remove();
    },
    showBreadCrumb: function () {
        this.getStoredBreadcrumb().insertBefore(this.getMobileBreadcrumb());
    },
    getMobileBreadcrumb: function () {
        return jQuery('#mobile-breadcrumb');
    },
    setState: function (state) {
        this.state = state;
    },
    getState: function () {
        return this.state;
    },
    getBreadcrumb: function () {
        return jQuery('ul.breadcrumb');
    },
    storeBreadcrumb: function () {
        this.breadcrumb = this.getBreadcrumb().clone();
    },
    getStoredBreadcrumb: function () {
        return this.breadcrumb;
    }
}
