/*  This is the javascript that executes the game logic for GifTastic.

    Written by Alex Chalyy on 3/2/2019. */

//  This array holds search strings for buttons that are used to search for gifs and output them on screen.

var topics = ["husky", "alaskan malamute", "german shepard", "collie", "pitbull", "shih tzu", "bulldog", "greyhound", "chihuahua", "poodle"];

//----------------------------------------------------------------------------------------------------------

function PopulateButtons() {

    //  This function adds buttons dynamically to the div with text labels that are the same as topics array element values.

    $("#buttons").empty();
    for (var c = 0; c < topics.length; c++) {   //  This populated the buttons div with topics array buttons
        console.log(topics[c]);
        //  This function populates the div with buttons
        $("#buttons").append("<button type=\"button\" class=\"btn btn-primary m-1 submitBtn\">" + topics[c] + "</button>");
    }
}

//-----------------------------------------------------------------------------------------------------------

function PopulateGIFs(animal) {

    //  This function populates the bootstrap card with 10 animal gif images of choice.

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=wxu2jPOXlj0bnJJQl4bDrvxy4Og5iADT&q=" + animal + 
                   "&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (var c = 0; c < 10; c++) {
            var still = response.data[c].images.fixed_width_small_still.url.toString();
            var motion = response.data[c].images.fixed_width_small.url.toString();
            $("#gifs").prepend("<div class=\"col-sm-2\"><p>Rating: G<p><img src=\"" + still + "\"id=\"" + animal + c.toString() + 
                              "\" data-animate=\"" + motion + "\" data-still=\"" + still + "\" data-state=\"still\" class = \"gif\"></div>");
        }
    });
}

//----------------------------------------------------------------------------------------------------------

$("#sub").on("click",

    function (event) {

        //  This function is called when the user clicks submit button.
        //  It adds a new button to buttons if the text box is not empty, with textbox contents.

        event.preventDefault();

        if ($("#s").val() === "") {
            console.log("User did not enter any string. No search is performed.");
            console.log(a);
        }
        else {
            topics.push($("#s").val());
            console.log(topics);
            $("#s").val("");
            PopulateButtons();
        }
    });

//----------------------------------------------------------------------------------------------------------

$(document).on('click', ".submitBtn", function () {

    // Do something on an existent or future dynamicElement

    var n = $(this).text();

    $("#gifs").empty();
    PopulateGIFs(n);
    console.log(n);
});

//----------------------------------------------------------------------------------------------------------

$(document).on("click", ".gif",

    function ()

    //  This function toggles between still and motion gif when it is clicked.

    {
        var state = $(this).attr("data-state");
        console.log(state);
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
    });

//----------------------------------------------------------------------------------------------------------

PopulateButtons();

