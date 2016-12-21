var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
    window.open('http://kannadachristiansongs.in/', '_self');
	
	

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
	
	// Should be called once app receive the notification only while the application is open or in background
    window.plugins.PushbotsPlugin.on("notification:received", function(data){
	console.log("received:" + JSON.stringify(data));
	
	//Silent notifications Only [iOS only]
	//Send CompletionHandler signal with PushBots notification Id
	window.plugins.PushbotsPlugin.done(data.pb_n_id);
    });

// Should be called once the notification is clicked
       window.plugins.PushbotsPlugin.on("notification:clicked", function(data){
	   console.log("clicked:" + JSON.stringify(data));
       });
};

app.initialize();