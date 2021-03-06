// Three Variables for Searching String, Year, Tilte
var search_String = document.getElementById("string_search")
var search_Title = document.getElementById("title_search")
var search_Year = document.getElementById("year_search")


//creating function for submit button
$(document).ready(function () {
  $('#submit').click(function() {
  
    $('#results').html("");//API calls from omdb
    $.getJSON( "http://www.omdbapi.com/?s=" + search_String.value + "&t=" + search_Title.value + "&y=" + search_Year.value, function(data) {
      if (search_String.value.length > 0) {
       
        $.each(data.Search, function(index, value) {
          $.each(data.Search[index], function(index, value) {
            if (value == "N/A" || index == "Response") {
            
            } else if (index == "Title") {
              $('#results').append("<p><strong>" + index + ": " + value + "</strong></p>");
             } else if (index == "Poster") {
              $('#results').append("<img src=" + value + "</img>");
            } else if (index == "imdbID") {
              $('#results').append("<a href='http://www.imdb.com/title/" + value + "'>Link to this result on imdb</a>");
            } else if (index == "Type") {
              $('#results').append("<br><br><br>");
            } else {
              $('#results').append("<p>" + index + ": " + value + "</p>");
            }
          })
        });
      } else {
       
        $.each(data, function(index, value) {
          if (value == "N/A" || index == "Response" || index == "Type") {
            
          } else if (index == "Title") {
            $('#results').append("<p><strong>" + index + ": " + value + "</strong></p>");
          } else if (index == "Poster") {
            $('#results').append("<img src=" + value + "</img>");
          } else if (index == "Website") {
            $('#results').append("<a href=\"" + value + "\">Link to this result's website</a>");
          } else if (index == "imdbID") {
            $('#results').append("<a href='http://www.imdb.com/title/" + value + "'>Link to this result on imdb</a>");
          } else {
            $('#results').append("<p>" + index + ": " + value + "</p>");
          }
        });
      }
    });
  });
});

