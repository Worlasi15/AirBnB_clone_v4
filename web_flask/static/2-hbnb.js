// static/scripts/2-hbnb.js

$(document).ready(function() {
    const amenityDict = {};

    $('input[type="checkbox"]').change(function() {
        const amenityId = $(this).data('id');
        const amenityName = $(this).data('name');

        if ($(this).is(':checked')) {
            amenityDict[amenityId] = amenityName;
        } else {
            delete amenityDict[amenityId];
        }

        const amenitiesList = Object.values(amenityDict).join(', ');
        $('#amenities h4').text('Amenities: ' + amenitiesList);
    });

    // Check API status on page load
    $.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
        if (data.status === 'OK') {
            $('#api_status').addClass('available');
        } else {
            $('#api_status').removeClass('available');
        }
    });
});

