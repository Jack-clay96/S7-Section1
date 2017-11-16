$(document).on("pagecreate","#pageone",function(){ //Once page is created run code:
     $("#submitButton").on("click", buttonClicked); //listenser for when button is clicked.
    //Once it has run the buttonclicked() fucntion
});



document.addEventListener("deviceready", onDeviceReady, false);

//$(document).ready(onDeviceReady); // used for testing on webpage. document.addeventlisten needs to be commented

var test;

//$ is used in jquery. # = ID. $ is looking at the launched in HTML document. 	
/*function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
}*/


// device APIs are available
//
    function onDeviceReady() {
	
	//updateDisplay();  
	alert("device ready");
        
        
        
    //best to call methods here. As it waits until phone is ready. (Cant test on webpage from here)
    }

function random() {
    
    return !Math.round(Math.random()); //Returns true or flase (its random)
}

function buttonClicked()
{
    test = random();
    console.log("buttonClicked");
    $("#myText").text(test); //myText matches with span
    
    if(test == true)
        {
            navigator.notification.beep(1);
            navigator.vibrate(2000);
        }
    else {
            navigator.notification.beep(2);
        navigator.vibrate(4000);
    }
}