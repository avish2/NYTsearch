

var search = 'politics';
var number = 10
var apiKey =  '46643c75550d4fe782fb8fbb30db1235';
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" + search;


$.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) { 
        	console.log(response);

        }).fail(function(err) {
  throw err;
});



