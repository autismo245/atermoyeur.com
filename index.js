$(".btn").on("click", function () {
    $(".name").val('');
    var random = Math.floor(Math.random() * 100) + 1;
    $(".number").text(random + "%")
})



