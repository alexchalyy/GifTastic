/*  This is the javascript that executes the game logic for GifTastic.

    Written by Alex Chalyy on 3/2/2019. */

//  This array holds search strings for buttons that are used to search for gifs and output them on screen.

var topics = ["husky", "alaskan malamute", "german shepard", "collie", "pitbull", "sheltie", "bulldog", "rotvajler", "chihuahua", "poodle", "pug"];

//----------------------------------------------------------------------------------------------------------

function PopulateButtons() {

    //  This function adds buttons dynamically to the div with text labels that are the same as topics array element values.

    //$("#buttons").remove(); //  This clears all previous buttons

    for (var c = 0; c < topics.length; c++) {   //  This populated the buttons div with topics array buttons
        console.log(topics[c]);
        //  This function populates the div with buttons
        $("#buttons").append("<button type=\"button\" class=\"btn btn-primary m-1\" id = \"button-" + c.toString() + "\">" + topics[c] + "</button>");
    }
}

//-----------------------------------------------------------------------------------------------------------

function updatePage() {

    console.log("get call works!");
    console.log(response);
}

//----------------------------------------------------------------------------------------------------------

function PopulateGIFs(animal) {

    //  This function populates the bootstrap card with 10 animal gif images of choice.

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=wxu2jPOXlj0bnJJQl4bDrvxy4Og5iADT&q=" + animal + "&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $("#gifs").append("<p>husky<p><img src=\"" + response.data[0].images.downsized.url.toString() + "\">");
    });
}

PopulateButtons();
PopulateGIFs("husky");

$("#sub").on("click",

    function (event) {

        //  This function is called when the user clicks submit button.
        //  It adds a new button to buttons if the text box is not empty, with textbox contents.

        event.preventDefault();
        var a = $("#s").val();
        //var a = document.getElementById("s")
        if (a === "") {
            console.log("User did not enter any string. No search is performed.");
            console.log(a);
        }
        else {
            //console.log(topics);
            topics.push($("#s").val());
            console.log(topics);
            $("#buttons").remove(); //  This clears all previous buttons
            PopulateButtons();
        }
    });