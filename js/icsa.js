(function(root, $, undefined) {
    'use strict';

    $(function () {
        $('#tokenfield').tokenfield();

        $('#tokenfield')
            .on('tokenfield:createtoken', function (e) {
                alert('Token has been added! Token value is: ' + e.attrs.value)
            })
            .on('tokenfield:edittoken', function (e) {
                //alert('Token has been edited! Token value is: ' + e.attrs.value)
            })
            .on('tokenfield:removedtoken', function (e) {
                alert('Token has been removed! Token value was: ' + e.attrs.value)
            })
            .tokenfield()

        $('.panel-heading').on('click', function(data){
            var header = $(data.target);
            var panel = header.parents('.grid-item');
            var isExpanded = panel.hasClass('expanded');
            $('.grid-item').each(function(index, element){
                $(element).removeClass('expanded');
            });

            if (!isExpanded)
                panel.addClass('expanded');

            var grid = header.parents('.grid');
            grid.masonry();
        }.bind(this));

    });

} (this, jQuery));