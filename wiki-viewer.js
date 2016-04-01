$(document).ready(function() {


    function runsearch() {
        console.log("start to search...");
        var wiki_api = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
        var tartosearch = document.getElementById("targettosearch").value.toString();
        //console.log(wiki_api+tartosearch);
        var i = 0;
        var row = [];
        $.ajax({
            url: wiki_api + tartosearch,
            dataType: 'jsonp',
            type: 'POST',
            headers: { 'wiki-search-app': 'codepen.io' },
            success: function(result) {
                //console.log(result);
                var wiki = "https://en.wikipedia.org/wiki/";
                var cl = "";
                for (i = 0; i < result[1].length; i++) {
                    cl = 'onClick="' + "window.open('" + wiki + result[1][i] + "', '_blank');" + '"';
                    row += "<div class='item' " + cl + " target='_blank'><h4>" + result[1][i] + "</h4>" + "<p>" + result[2][i] + "</p></div><br>";
                }
                if (result[1].length == 0) {
                    row = "<div class='noresult text-center'><h4>Sorry, there is no result.</h4></div><br>";
                }
                //$("#region01").css('margin-top','calc(5%)');
                $('#region01').animate({ marginTop: '-180px' });
                $('#for_random').css('visibility', 'hidden');
                $('#region02').html(row);
            },
            error: function(xhr, ajaxOptions, thrownError) { console.log(xhr); }
        });
    }

    $(".searchclear").click(function() {
        $('#targettosearch').val('');
        $('#region02').html('');
        //$("#region01").css('margin-top','calc(25%)');
        $('#region01').animate({ marginTop: '0px' });
        $('#for_random').css('visibility', 'visible');
    });

    

    $("#searchform").submit(function(event) {
        event.preventDefault();
        runsearch();
    });

});

function randomwiki() {
        window.open("http://en.wikipedia.org/wiki/Special:Random");
}