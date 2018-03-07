
$("#runSearch").on("click", function (){
    var queryString = $("#searchTerm").val().trim();
    var queryURL="https://api.nytimes.com/svc/books/v3/lists/overview.json?q=" + queryString + "&api-key=3b42f0f619774ed6abb205159eeafd5e";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        
    });
})
