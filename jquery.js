
var steveDescription = "Steve is a hardworking individual who has been with us since 2018. Specializing in every service we offer, he's been of great help "  +
                       "ever since the first day he's joined. Described by customers as a great person to work with and always going the extra mile to ensure everyone is left " +
                       "satisfied by the end of the day!";

var catherineDescription = "Catherine has been a part of the team since the very first day we began. She has consistently come in clutch to help everybody, employees and customers" +
                           " included. She specializes in phone and laptop repair, but still is able to provide basic support for all of the other services we offer, she is  " + 
                           "always happy to help!";

var mattDescription = "The newest member of the Mickey's Marvels team and specializing in data recovery, although you may think otherwise because there is no " +
                      "data recovery problem he cannot solve. But because of how time intensive data recovery is, you'd better be quick to book an appointment with him. He is always " +
                      "available for a FREE consultation however!";

var kimDescription = "Kim joined us back in 2020 around the time COVID started. Specializing in damage control, she has yet to find a computer virus that has left her " +
                     "stumped. Because she joined us around the time COVID became rampant, she specializes in online counselling should a face-to-face interaction be difficult." + 
                     "To book an online appointment, please mention that in the comments of your appointment booking and we'll get back to you shortly!";

$('#carouselExampleControls').on('slide.bs.carousel', function (e) {
    // Depending on the direction, we have to change which description is logged
    var currentIndex = $('div.active').index() + 1;

    switch(currentIndex) {
        case 1:
            // This means we are on the second page
            if (e.direction == "right"){
                $("#name").html("Kim");
                $("#description").html(kimDescription);
            } else {
                $("#name").html("Catherine");
                $("#description").html(catherineDescription);
            }
            break;
        case 2:
            // This means that we are on the third page now
            if (e.direction == "right"){
                $("#name").html("Steve")
                $("#description").html(steveDescription);
            } else {
                $("#name").html("Matt");
                $("#description").html(mattDescription);
            }
            break;
        case 3:
            // This means that we are on the fourth page now
            if (e.direction == "right"){
                $("#name").html("Catherine");
                $("#description").html(catherineDescription);
            } else {
                $("#name").html("Kim");
                $("#description").html(kimDescription);
            }
            break;
        case 4:
            // This means we are back on the first page
            if (e.direction == "right"){
                $("name").html("Matt");
                $("#description").html(mattDescription);
            } else {
                $("#name").html("Steve");
                $("#description").html(steveDescription);
            }
            break;
    }
  })
