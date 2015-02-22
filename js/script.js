// Array of all json date objects
var events;
var inQuery;
var outQuery;

function buttonClicked(){
    inQuery = $('#search_box').val();
    //alert(inQuery);
    //outQuery = httpGet(inQuery);
    alert(inQuery);
    showResult('{"start":1999,"end":2015,"description":' + inQuery + '"}');
}

// 
function showResult(text){
    
    var obj = JSON.parse(text);
    
    document.getElementById("event").innerHTML = 
        obj.start + " - " +
        obj.end + "<br>" +
        obj.description;
    display();
    events[events.length] = obj;
    display();
}

// Display each of the objects
function display(){
    var empty = true;
    var minYear = -9999;
    var i;
    for(i = 0; i < events.length; i++){
        document.getElementById("added_events").innerHTML = '<div id="event"></div>';
        var key;
        for(key = 0; key < events.length; key++){
            document.getElementById("event").innerHTML = 
                '<div class="description">' + events[key].description + '</div>' +
                '<div class="start">' + events[key].start +'</div>' +
                '<div class="end">' + events[key].end +'</div>';
        }
    }
}

// Make GET Request
function httpGet(search)
{
    var xmlHttp = null;
    
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", '/api/?=' + search, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}