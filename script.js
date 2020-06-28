function openLink() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
        window.location.href = 'applinks:';

        setTimeout(
            () => { window.location = 'https://paymoo.github.io';},
            2000
        );
    } else {
        window.location = 'https://www.google.com'
    }
}
