$(function() {
    $(document).on("click", ".liDevBtn", function(event) {
        let id = $(this).data("id");
        let newEatenState = {
            devoured: true
        };
        console.log(newEatenState);
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(function() {
            console.log("Changed devoured to", true);
            location.reload();
        });
    });

    $(document).on("click", "#newBurg",function(event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#burgTextarea").val().trim()
        };
        // let newBurger = $("#burgTextarea").val().trim();

        // console.log(newBurger);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Created new burger");
            location.reload();
        });
    });
});