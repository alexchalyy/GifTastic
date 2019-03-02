/*  This is the javascript that executes the game logic for GifTastic.

    Written by Alex Chalyy on 3/2/2019. */

//  This array holds search strings for buttons that are used to search for gifs and output them on screen.

var topics = ["husky", "alaskan malamute", "german shepard", "collie", "pitbull", "sheltie", "bulldog", "rotvajler", "chihuahua", "poodle", "pug"];

function PopulateButtons() {

    //  This function clears button div and adds buttons dynamically to the div with text labels that are the same as topics array element values.

    //$("#buttons").remove(); //  This clears all previous buttons

    for (var c = 0; c < topics.length; c++) {   //  This populated the buttons div with topics array buttons
        console.log(topics[c]);
        //  This function populates the div with buttons
        $("#buttons").append("<button type=\"button\" class=\"btn btn-primary m-1\" id = \"button-" + c.toString() + "\">" + topics[c] + "</button>");
    }   
}

PopulateButtons();