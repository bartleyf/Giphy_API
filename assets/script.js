




var cartoons = ["The Simpsons", "Family Guy", "Tom and Jerry", "Teenage Mutant Ninja Turtles", "G.I. Joe", "Fraggle Rock"];

function alertCartoonName() {
    console.log($(this).data("name"));
  }

  // Function for displaying movie data
  function renderButtons() {

    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise we will have repeat buttons)
    $(".buttons").empty();

    for (var i = 0; i < cartoons.length; i++) {
        
        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class
        a.addClass("cartoon");
        // Added a data-attribute
        a.attr("data-name", cartoons[i]);
        // Provided the initial button text
        a.text(cartoons[i]);
        // Added the button to the HTML
        $(".buttons").append(a);
        }
    }

    $("#add-cartoon").on("click", function(event) {
        event.preventDefault();
    
        // This line grabs the input from the textbox
        var cartoon = $("#cartoon-input").val().trim();
    
        // The movie from the textbox is then added to our array
        cartoons.push(cartoon);
    
        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });
    
      // Function for displaying the movie info
      // We're adding a click event listener to all elements with the class "movie"
      // We're adding the event listener to the document itself because it will
      // work for dynamically generated elements
      // $(".movies").on("click") will only add listeners to elements that are on the page at that time
      $(document).on("click", ".cartoon", alertCartoonName);
    
      // Calling the renderButtons function to display the intial buttons
      renderButtons();

//     $("button").on("click", function() {
//         var cartoon = $(this).attr("data-cartoon");
//         var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//         cartoon + "&api_key=dc6zaTOxFJmzC&limit=10";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//       })
//       .done(function(response) {
//         var results = response.data;

//         for (var i = 0; i < results.length; i++) {
//           var gifDiv = $("<div class='item'>");

//           var cartoonImage = $("<img>");
//           cartoonImage.attr("src", results[i].images.fixed_height.url);

//           gifDiv.prepend(p);
//           gifDiv.prepend(cartoonImage);

//           $("#gifs").prepend(gifDiv);
//         }
//       });
//   });
