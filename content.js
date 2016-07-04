chrome.runtime.sendMessage({"message": "enable_page_action"}, function() {
	document.getElementById('hot-network-questions').style.visibility = 'hidden';
	console.log("NoSidebar StackExchange: triggered");
});

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if( request.message === "clicked_page_action" ) {
			console.log("clicked page action");
			document.getElementById('hot-network-questions').style.visibility = 'visible';
		}
	}
);
