console.log("background running");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
	let msg = {
		txt: "Hello"
	};
	
	console.log("sending message...")
	chrome.tabs.sendMessage(tab.id, msg);
}