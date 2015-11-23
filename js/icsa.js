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

    });

} (this, jQuery));