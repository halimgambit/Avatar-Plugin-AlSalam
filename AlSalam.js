exports.action = function(data, callback){

	let client = setClient(data);
	info("AlSalam from:", data.client, "To:", client);
	alSalam (data, client);
	callback();
 
}

function alSalam (data, client) {
		Avatar.speak("Ouah aleykoum Salam oua RahmatoLa oua barakatou", data.client, () => {
			Avatar.Speech.end(data.client);
		});
}

function setClient (data) {
	let client = data.client;
	if (data.action.room)
	client = (data.action.room != 'current') ? data.action.room : (Avatar.currentRoom) ? Avatar.currentRoom : Config.default.client;
	if (data.action.setRoom)
	client = data.action.setRoom;
	return client;
	}