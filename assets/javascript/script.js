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

function updatePage()   {

    console.log("get call works!");
    console.log(response);
}

//----------------------------------------------------------------------------------------------------------

function Submit()   {

    //  This function is called when the user clicks submit button.
    //  It adds a new button to buttons if the text box is not empty, with textbox contents.

    topics.push($("s").text());
    $("#buttons").remove(); //  This clears all previous buttons
    PopulateButtons();
}

//----------------------------------------------------------------------------------------------------------

function PopulateGIFs(animal)   {

    //  This function populates the bootstrap card with 10 animal gif images of choice.

    //below query connects to giphy API with key

    //var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=wxu2jPOXlj0bnJJQl4bDrvxy4Og5iADT&limit=10");
    
    //xhr.done(function(data) { console.log("success got data", data); });

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=wxu2jPOXlj0bnJJQl4bDrvxy4Og5iADT&limit=10";

    var q = "http://api.giphy.com/v1/gifs/feqkVgjJpYtjy?api_key=wxu2jPOXlj0bnJJQl4bDrvxy4Og5iADT&limit=10"

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response.data[0].images.downsized.url);
        console.log(response);
        $("#gifs").append("<img src=\"" + response.data[0].images.downsized.url.toString() + "\">");
        console.log(response.data[0]);
        console.log("akira asa");
      });
}

PopulateButtons();
PopulateGIFs("akira asa");

//$("#sub").click();