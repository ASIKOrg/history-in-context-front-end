// Array of all json date objects
var events = [];
var inQuery;
var outQuery;

function buttonClicked(){
    text = $('#search_box').val();
    inQuery = {"Search":text};
    alert(inQuery);
    outQuery = httpGet(inQuery);
    showResult(outQuery);
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

function drawTimeline()
{
    
}

// Make GET Request
function httpGet(search)
{
    $.(ajax({
        type: "GET",
        url: "",
        content: search,
        success: function(data){
            showResult(data);
        }
    });
    )
}

