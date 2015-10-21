/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');

//Create a Card with title and subtitle
//var card = new UI.Card({
	//title:'Medication',
	//subtitle:'Fetching...'
	//button type ="button"
//})

//Display the Card
//card.show();

//Make a list of menue items
var Medication = [
	{
		title: "Dafalgan",
		subtitle: "Tabl"
	},
	{
		title: "Aspirin",
		subtitle: "Brause Tabl"
	},
	{
		title: "Pantozol",
		subtitle: " Tabl"
	}
];

//Create the Menu, supplying the list of fruits
var mediMenu = new UI.Menu ({
	sections: [{
		title: 'Medication List',
		items: Medication
	}]
});

//Show the Menu
mediMenu.show();

//Add a click listeneer for selection button click
mediMenu.on('select', function(event){
	
	//Show a card with clicked item details
	var detailCard = new UI.Card({
		title: Medication = [event.itemIndex].title,
		body: Medication = [event.itemIndex].subtitle
	});
	
	//Show the new Card
	detailCard.show();
});
