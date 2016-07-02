document.getElementById('hot-network-questions').style.visibility = 'hidden'
console.log("NoSidebar StackExchange: triggered")

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if( request.message === "clicked_browser_action" ) {
			console.log("clicked browser action");
			document.getElementById('hot-network-questions').style.visibility = 'visible'
		}
	}
);
