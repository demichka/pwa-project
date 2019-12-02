var deferredPrompt;

if (!window.Promise) {
    window.Promise = Promise;
  }

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/serviceWorker.js')
        .then(function() {
            console.log('Service Worker registered!');
        });
}

window.addEventListener('beforeinstallprompt', function(event) {
    console.log('beforeinstallpromt fired');
    event.preventDefault();
    deferredPrompt = event;
    return false;
});

fetch('https://httpbin.org/ip').then((res) => {
    console.log(res);
    return res.json();
}).then(data => {
    console.log(data);
})