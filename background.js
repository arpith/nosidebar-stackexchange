chrome.pageAction.onClicked.addListener(function(tab) {
	chrome.tabs.sendMessage(tab.id, {"message": "clicked_page_action"}, function(response) {
		chrome.pageAction.hide(tab.id);
	});
});

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if( request.message === "enable_page_action" ) {
			console.log("enabling page action");
			chrome.pageAction.show(sender.tab.id);
		}
	}
);
