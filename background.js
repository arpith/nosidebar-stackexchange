// make Hot Network Questions visible and disable page action on click on extension image
//FIXME toggle instead: https://developer.chrome.com/extensions/pageAction
chrome.pageAction.onClicked.addListener(function(tab) {
	// Send a message to the active tab
	console.log("Page Action clicked");
	// security considerations: https://developer.chrome.com/extensions/content_scripts#pi
	chrome.tabs.executeScript({
		code: 'document.getElementById("hot-network-questions").style.visibility = "hidden";'
	});
	// FIXME what is my state? chrome.pageAction doesn't seem to have one, unless I set it via title
	chrome.pageAction.hide(tab.id); // https://developer.chrome.com/extensions/tabs#type-Tab
});

// rules
// https://developer.chrome.com/extensions/declarativeContent#type-PageStateMatcher
var se_rule = {
	id: 'stackexchange',
	conditions: [
		new chrome.declarativeContent.PageStateMatcher({
			pageUrl: { hostSuffix: '.stackexchange.com', schemes: ['http', 'https'] } //add css; "*://stackoverflow.com/*", "*://serverfault.com/*"
		})
	],
	actions: [ new chrome.declarativeContent.ShowPageAction() ]
};

// added rules are persistent across browser restarts, so only register them on installation/update
chrome.runtime.onInstalled.addListener(function() {
	// clear installed rules
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		// add rules
		chrome.declarativeContent.onPageChanged.addRules([se_rule]);
    });
});
