$(function() {
    $(document).on("click", ".liDevBtn", function(event) {
        let id = $(this).data("id");
        let newEaten = $(this).data("devoured");
        let newEatenState = {
            devoured: newEaten
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(function() {
            console.log("Changed devoured to", newEaten);
            location.reload();
        });
    });

    $(document).on("click", "#newBurg",function(event) {
        event.preventDefault();

        let newBurger = {
            name: $("#burgTextarea").val().trim()
        };

        console.log(newBurger);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Created new burger");
            location.reload();
        });
    });
});