// Array of all json date objects
var events = [];
var inQuery;
var outQuery;

function buttonClicked(){
    inQuery = $('#search_box').val();
    outQuery = httpGet(inQuery);
    //showResult(outQuery);
    //showResult('{"start":1999,"end":2015}');
}

// 
function showResult(text){
    
    var obj = text;//JSON.parse(text);
    events[events.length] = obj;
    alert(events);
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
        $('<div class="start">' + events[key].start +'</div>').appendTo('#event');
        $('<div class="end">' + events[key].end +'</div>').appendTo('#event');
    }
}

function drawTimeline()
{
    // DOM element where the Timeline will be attached
    var container = document.getElementById('visualization');

  // Create a DataSet (allows two way data-binding)
    var data = new vis.DataSet([]);
    
    var i;
    for(i = 0; i < events.length(); i++){
        data.add({
            id: i+1,
            text: 'Event #' + i,
            start: events[i].start,
            end: events[i].end
        });
    }

    // Configuration for the Timeline
    var options = {};

    // Create a Timeline
    var timeline = new vis.Timeline(container, data, options);
}

// Make GET Request
function httpGet(search)
{
    $.ajax({
        url: document.domain,
        type: "GET", //send it through get method
        data: { 'Search': search},
        dataType: 'json',
        success: function(response) {
            showResult(response);
            drawTimeline();
        },
        error: function(xhr) {
            //Do Something to handle error
        }
    });
}