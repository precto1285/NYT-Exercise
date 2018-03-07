
$("#runSearch").on("click", function () {
    var queryString = $("#searchTerm").val().trim();
    var beginDate = $("#startYear").val().trim();
    var endDate = $("#endYear").val().trim();
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "3b42f0f619774ed6abb205159eeafd5e",
        'q': queryString,
        'begin_date': beginDate,
        'end_date': endDate
    });

    $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

        });

});