var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BFGqz-z20pWNOj9832p9DpafposqoIa5l5MJWioew5V4GudQT8vm5qZucPrFy2tXziUnFQkyLk17q-UObvvqTq8",
    "privateKey": "BNIc7giSFQ0QWy0nBEJENcuA-ASQ0ZsYflYKHelQ0lU"
}

webPush.setVapidDetails(
    'mailto:agusmertha.am@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

var pushSubscription = {
    endpoint: "https://fcm.googleapis.com/fcm/send/cB8vrKJEh2c:APA91bFUTErzjY4cQif2895OHPoyghQzup0M8UhMCWYccpV3szNPXG7YvlRxURf6hRhSZNz3osTnIRM1d3S7wQ39RCgdJq_BHOA68BSH3irceXpgrMxPpYZgAneqCEedzxlP9ZMN7c-c",
    keys: {
        p256dh: "BKZSFhh/VqifJhfS9mMPXso7QeMcIste21t+iE/ZzWdBOe6StIoNQOaXoReMR8tHjLyQwe3WbOONnhQ3QVA2VGw=",
        auth: "Jq01NvekHqVmSvyPucaHzw=="
    }
};

var payload = "Selamat! Aplikasi anda sudah dapat menerima push notifikasi";
var options = {
    gcmAPIKey: "738298744027",
    TTL: 60
};

webPush.sendNotification(pushSubscription, payload, options);