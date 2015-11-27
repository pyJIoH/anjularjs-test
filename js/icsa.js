(function(root, $, undefined) {
    'use strict';

    jQuery.fn.openDetails = function(){
        //this.each(function(){
        //    $(this).css("color","blue");
        //});
    }

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
        }.bind(this));

        $('#btn-load-more').on('click', function(data){
            var $divs = $("div.grid-item");
            var orderedTabs = $divs.sort(function (a, b) {
                return $(a).data('relevant') < $(b).data('relevant');
            });
            $(orderedTabs).each(function(index) {
                this.style.left = '0px';
                this.style.top = '0px';
            });

            $(".grid").html(orderedTabs);
        })

    });

} (this, jQuery));