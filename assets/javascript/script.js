/*  This is the javascript that executes the game logic for GifTastic.

    Written by Alex Chalyy on 3/2/2019. */

//  This array holds search strings for buttons that are used to search for gifs and output them on screen.

var topics = ["husky", "alaskan malamute", "german shepard", "collie", "pitbull", "sheltie", "bulldog", "rotvajler", "chihuahua", "poodle", "pug"];

//----------------------------------------------------------------------------------------------------------

function PopulateButtons() {

    //  This function adds buttons dynamically to the div with text labels that are the same as topics array element values.

    $("#buttons").empty();
    for (var c = 0; c < topics.length; c++) {   //  This populated the buttons div with topics array buttons
        console.log(topics[c]);
        //  This function populates the div with buttons
        $("#buttons").append("<button type=\"button\" class=\"btn btn-primary m-1\" id = \"button-" + c.toString() + " name = \"" + topics[c] + "\">" + topics[c] + "</button>");
    }
}

//-----------------------------------------------------------------------------------------------------------

function updatePage() {

    console.log("get call works!");
    console.log(response);
}

//-----------------------------------------------------------------------------------------------------------

function PopulateGIFs(animal) {

    //  This function populates the bootstrap card with 10 animal gif images of choice.

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=wxu2jPOXlj0bnJJQl4bDrvxy4Og5iADT&q=" + animal + "&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (var c = 0; c < 10; c++) {
            $("#gifs").append("<div class=\"col-sm-2\"><p>Rating: G<p><img src=\"" + response.data[c].images.fixed_width_small.url.toString() + "\"id = \"" + animal + c.toString() + "\"></div>");
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
/*
$(".btn btn-primary m-1").on("click",

    function (event) {

        //  This function retrieves new animal gif images and puts them out on screen based on the button clicked.

        event.preventDefault();

        //var element = $(this).attr("name");
        var element = $(this).text();

        console.log(element);
        /*console.log("I am here");
        $("#gifs").empty();
        console.log($(this).text());
        PopulateGIFs($(this).text());*/
 //   }
//);

$('#buttons').on('click', function() {
    // Do something on an existent or future dynamicElement
    event.preventDefault();
    var n = $(this).text();

    console.log(n);
});

//----------------------------------------------------------------------------------------------------------

PopulateButtons();
PopulateGIFs("bulldog");

