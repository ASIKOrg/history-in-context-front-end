// Array of all json date objects
var events[];
var inQuery;
var outQuery;

function 

function buttonClicked(){
    inQuery = $('#search').val();
    outQuery = httpGet(inQuery);
    showResult();
}

// 
function showResult(){
    
    var text = '{"start":1999,"end":2015,"description":' + query + '"}';
    
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
    var wrapper = $('#timeline_box');
    var empty = true;
    var minYear = -9999;
    for(var event: events){
        for(var key in event){
            item = $('<div id="event" class="event"></div>');
            wrapper.append(item);
            item.append('<div class="description">' + events[key].description +'</div>');
            item.append('<div class="start">' + events[key].start +'</div>');
            item.append('<div class="end">' + events[key].end +'</div>');
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