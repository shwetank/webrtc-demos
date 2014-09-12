# WebRTC-Demos

These are just my experiments with using WebRTC with other HTML5 technologies. The intention is to see whats possible in WebRTC from the front-end perspective. 

## Running the demos

Just clone the repo and run it on a local server. Make sure you have a WebRTC capable browser (preferebly the latest version). If you have the *developer* stream of the browser (Like Chrome Canary, Opera Developer, or Firefox Aurora) then thats even better. 

## gUM with CSS
This demo basically explores how you can use various things like CSS filters, blend modes and CSS Masks to achieve fun effects with real-time video. 

## Basic Video Chat

This demo is a straight basic video chat demo which uses PubNub for signalling, and does Audio+Video chat along with using Data Channels for text based chat. It also uses CSS Masks to acheive a *circle* effect which can be reflected on the other side using data channels. I also use HTML5 Notifications along with the Page Visibility API so that if you're on some other tab when the user connects, it shows you a notification. 