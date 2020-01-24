$(function() {
    $(document).on("click", ".liDevBtn", function(event) {
        let id = $(this).data("id");
        let newEatenState = {
            devoured: true
        };
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
        let bg = $("#burgTextarea").val().trim();
        console.log("bg: ", bg);
        if (bg === (undefined || null || '')) {
            alert("Please type the burger you would like in the form below.");
        }
        else {
            let newBurger = {
                burger_name: bg
            };

            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(function() {
                console.log("Created new burger");
                location.reload();
            });
        }
    });
});