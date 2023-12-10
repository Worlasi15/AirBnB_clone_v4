// static/scripts/1-hbnb.js

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
});
