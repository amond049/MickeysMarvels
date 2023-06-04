// TODO: ADD THE TEXT THAT WILL CHANGE WITH EACH SLIDE!
$('#carouselExampleControls').on('slide.bs.carousel', function (e) {
    // Depending on the direction, we have to change which description is logged
    var currentIndex = $('div.active').index() + 1;

    switch(currentIndex) {
        case 1:
            // This means we are on the second page
            if (e.direction == "right"){
                $("#description").html("Description-4");
            } else {
                $("#description").html("Description-2");
            }
            break;
        case 2:
            // This means that we are on the third page now
            if (e.direction == "right"){
                $("#description").html("Description-1");
            } else {
                $("#description").html("Description-3");
            }
            break;
        case 3:
            // This means that we are on the fourth page now
            if (e.direction == "right"){
                $("#description").html("Description-2");
            } else {
                $("#description").html("Description-4");
            }
            break;
        case 4:
            // This means we are back on the first page
            if (e.direction == "right"){
                $("#description").html("Description-3");
            } else {
                $("#description").html("Description-1");
            }
            break;
    }
  })
