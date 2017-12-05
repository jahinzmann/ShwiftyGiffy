// API KEY: HGLcvaY72LbRGB4bwBWw0N4xLDivgaAj 

// AJAX call
var queryURL = "https://api.giphy.com/v1/gifs/search?q=Rick+Morty&api_key=HGLcvaY72LbRGB4bwBWw0N4xLDivgaAj&limit=10"

$.ajax({
    url:queryURL,
    method: 'GET'
}).done(function(response) {
    console.log(response);
    
    for (var i = 0; i < 10; i++){
        var myURL = response.data[i].images.original.url
        console.log(myURL);
        var image = $("<img>")
        image.attr("src", myURL);
        $("#rickAndMortyPortal").append(image)
    }



});
