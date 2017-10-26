// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true

 // In-App Browser Start
var ref = cordova.InAppBrowser.open(url, target, options);
//In-App Browser End

});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log("window.open works well");     
}



// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "Messages" page in this case) (recommended way):
myApp.onPageInit('Messages', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'Messages') {
        // Following code will be executed for page with data-page attribute equal to "Messages"
        myApp.alert('Here comes Messages page');
    }
})
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // In-App Browser Start
         
//        var ref = cordova.InAppBrowser.open(url, target, options);
  //  };
//function readFile(fileEntry) {

//    fileEntry.file(function (file) {
//        var reader = new FileReader();
//
 //       reader.onloadend = function() {
  //          console.log("Successful file read: " + this.result);
    //        displayFileData(fileEntry.fullPath + ":csv/sample.txt " + this.result);
      //  };

    //    reader.readAsText(file);

//    }, onErrorReadFile);
//}
    //In-App Browser End