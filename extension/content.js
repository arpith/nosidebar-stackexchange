chrome.runtime.sendMessage({"message": "enable_page_action"}, function() {
	document.getElementByClassName('unread_marker slow_fade').style.visibility = 'hidden';
});

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if( request.message === "clicked_page_action" ) {
			document.getElementByClassName('unread_marker slow_fade').style.visibility = 'visible';
		}
	}
);
