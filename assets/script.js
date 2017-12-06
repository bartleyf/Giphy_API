$(document).ready(function () {
    var cartoons = ["The Simpsons", "Family Guy", "Tom and Jerry", "Teenage Mutant Ninja Turtles", "GI Joe", "Fraggle Rock"];

    function alertCartoonName() {
        console.log($(this).data("name"));
    }

    function renderButtons() {

        $(".buttons").empty();

        for (var i = 0; i < cartoons.length; i++) {
            var a = $("<button>");
            a.addClass("cartoon");
            a.attr("data-name", cartoons[i]);
            a.text(cartoons[i]);
            $(".buttons").append(a);
        }
    }

    $("#add-cartoon").on("click", function (event) {
        event.preventDefault();
        var cartoon = $("#cartoon-input").val().trim();
        cartoons.push(cartoon);
        renderButtons();
        console.log(cartoons);
    });

    renderButtons();

    $(document).on("click", ".cartoon", alertCartoonName);

    $(document).on("click", "button", function () {
        var cartoon = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            cartoon + "&api_key=dc6zaTOxFJmzC&limit=10";

        $(".images").empty();

        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .done(function (response) {
                var results = response.data;
                console.log(queryURL);

                for (var i = 0; i < results.length; i++) {

                    var cartoonImage = $("<img>");
                    cartoonImage.attr("src", results[i].images.fixed_height_still.url);
                    cartoonImage.attr("data-still", results[i].images.fixed_height_still.url);
                    cartoonImage.attr("data-animate", results[i].images.fixed_height.url);
                    cartoonImage.attr("data-state", "still");
                    cartoonImage.addClass("gif");

                    $(".images").append(cartoonImage);
                }

                $(".gif").on("click", function () {

                    var state = $(this).attr("data-state");

                    if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }
                });
            });
    });
});