# history-in-context-front-end

Take in input from search box
Pass in as GET param text

aClient = new HttpClient();
aClient.get('http://some/thing?=arguments', function(answer) {
    // do something with answer
});