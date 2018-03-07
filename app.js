
    var queryString = "economy";
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + queryString + "&api-key=3b42f0f619774ed6abb205159eeafd5e";

    $.ajax({
      url: url,
      method: 'GET'
    }).done(function(result) {
      console.log(result);
      var newArticleDiv = $("<div>");
      var data = result.response.docs;
      for (var i=0; i< data.length; i++){
          newArticleDiv.append("<strong>" + data[i].snippet + "</strong><br>");
          newArticleDiv.append("<em>" + data[i].web_url + "</em><br><br>");
      }
      $("#wellSection").prepend(newArticleDiv);
    });