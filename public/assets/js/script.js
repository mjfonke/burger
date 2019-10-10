$("#submit-btn").on("click", function(event) {
    event.preventDefault();

    var newBurger = {
        burger_name: $("#burger-input").val().trim(),
        devoured: 0
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            console.log("Added New Burger")
            location.reload();
        }
    );
});

$(".devour-btn").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour")

    var devourStatus = {
        devoured: 1
    };

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devourStatus
    }).then(
        function() {
            console.log("Devoured it");
            location.reload();
        }
    )
});

