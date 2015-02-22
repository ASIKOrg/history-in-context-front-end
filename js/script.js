// Array of all json date objects
var events = [];
var inQuery;
var outQuery;

function buttonClicked(){
    inQuery = $('#search_box').val();
    //alert(inQuery);
    //outQuery = httpGet(inQuery);
    showResult('{"start":1999,"end":2015,"description":"' + inQuery + '"}');
}

// 
function showResult(text){
    
    var obj = JSON.parse(text);
    
    events[events.length] = obj;
    display();
}

// Display each of the objects
function display(){
    var empty = true;
    var minYear = -9999;
    
    $(".added_events").html('<div id="event"></div>');
    
    $('<div id="event"></div>').appendTo(".added_events");
    var key;
    for(key = 0; key < events.length; key++){
        $('<div class="description">' + events[key].description + '</div>').appendTo('#event');
        $('<div class="start">' + events[key].start +'</div>').appendTo('#event');
        $('<div class="end">' + events[key].end +'</div>').appendTo('#event');
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