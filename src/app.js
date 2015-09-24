/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var ajax = required('ajax');
var Vector2= required('vector2');

// Show splash screen while waiting for Mediupdate
var splashWindow = new UI.Window();

//Test elemt to inform user
var text = new UI.Text({
	position: new Vector2(0, 0),
	size: new Vector2(144, 168),
	text: 'Updateing your Medication...',
	font: 'GOTHIC_28_BOLD'
	color:'black',
	textOverflow:'warp'
	textAlign:'center',
	backgroundColor:'white'
});

//Add to splashWindow and show
splashWindow.add(text);
splashWindow.show();