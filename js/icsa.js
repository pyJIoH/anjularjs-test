(function(root, $, undefined) {
    'use strict';

    jQuery.fn.sortElements = (function () {
        var sort = [].sort;
        return function (comparator, getSortable) {
            getSortable = getSortable || function () {
                    return this;
                };
            var placements = this.map(function () {
                var sortElement = getSortable.call(this),
                    parentNode = sortElement.parentNode,
                    nextSibling = parentNode.insertBefore(
                        document.createTextNode(''),
                        sortElement.nextSibling
                    );
                return function () {

                    if (parentNode === this) {
                        throw new Error(
                            "You can't sort elements if any one is a descendant of another."
                        );
                    }
                    parentNode.insertBefore(this, nextSibling);
                    parentNode.removeChild(nextSibling);
                };
            });
            return sort.call(this, comparator).each(function (i) {
                placements[i].call(getSortable.call(this));
            });
        };
    })();

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

            $('.grid').masonry();
        }.bind(this));

        $('#btn-load-more').on('click', function(data){
            //$('.grid-item').sortElements(function(a, b){
            //    return $(a).data('relevant') > $(b).data('relevant') ? 1 : -1;
            //});
            var $divs = $("div.grid-item");
            var orderedTabs = $divs.sort(function (a, b) {
                return $(a).data('relevant') < $(b).data('relevant');
            });
            $(".grid").html(orderedTabs);
        })

    });

} (this, jQuery));