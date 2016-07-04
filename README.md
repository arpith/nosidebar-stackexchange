# NoSidebar StackExchange

This is a Chrome extension that hides the "Hot Network Questions" sidebar on StackExchange websites. It's extensively commented to be helpful in learning how to write Chrome extensions.

## Functionality

![Functionality Flowchart](functionality.png)

The "Hot Network Questions" sidebar is hidden while the extension icon is visible.

## Implementation

A Chrome extension's icon in the address bar is an *action* the user can interact with. Depending on the extension, it can either be a [Browser Action](https://developer.chrome.com/extensions/browserAction) or a [Page Action](https://developer.chrome.com/extensions/pageAction). A Browser Action is an always visible action the user can perform on any website. A Page Action is disabled (grayed out) by default, and can only be interacted with in certain contexts.

In our case, we want to interact with the extension only if it has hidden the "Hot Network Questions" sidebar.

Implementation in detail:
- The content script is triggered on sites specified in the manifest.
- Once it's triggered, the content script sends a message to the background script to enable Page Action, and hides the sidebar on response.
- The background script listens to clicks on Page Action. On click, it sends a message to content script to show the sidebar, and disables Page Action.

## Other
The tangled cat icon is courtesy of [Iconka](http://iconka.com/).
