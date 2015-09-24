

var UI = require('ui');
var ajax = require('ajax');
var Vector2 = require('vector2');

//show splash screen while waiting for data
var splashWindow = new UI.Window();

//Text element to inform user
var text = new UI.Text({
	position: new Vector2(0, 0), 
	size: new Vector2(130, 140),
	text:'Updateing your Medication...', 
	font: 'GOTHIC_28_BOLD', 
	color:'black',
	textOverflow:'wrap', 
	textAlign: 'center', 
	backgroundColor: 'white'});


//Add to splashWindow and show
splashWindow.add(text);
splashWindow.show();