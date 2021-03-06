let notify_request_button = null;

function notify_load_button() {
	if (Notification.permission === 'denied' || Notification.permission === 'default')
		notify_request_button.style.display = 'block';
	else
		notify_request_button.style.display = 'none';
}

function notify_ask_permission() {
	if (!('Notification' in window)) {
		console.log("This browser does not support notifications.");
	} else {
		Notification.requestPermission(function(permission) {
			notify_load_button();
		});
	}
}

function notify_send() {
	navigator.serviceWorker.ready.then(function(registration) {
		registration.showNotification( "Hello world", { body:"Here is the body!" } );
	});
}

function notify_load() {
	notify_request_button = document.getElementById("notify_request_button");
	notify_load_button();
	notify_request_button.addEventListener("click", notify_ask_permission);
	let notify_button = document.getElementById("notify_button");
	notify_button.addEventListener("click", notify_send);
}

document.addEventListener("DOMContentLoaded", notify_load);
