function openLink() {
    window.location.replace('paymoo.github.io');

    setTimeout(
        function () { window.location.replace("https://itunes.apple.com/app/id12345678"); },
        5000
    );
    //
    //
    // const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    //
    // if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
    //     window.location.href = 'applinks:';
    //
    //     setTimeout(
    //         () => { window.location = 'paymoo.github.io';},
    //         5000
    //     );
    // } else {
    //     window.location = 'https://www.google.com'
    // }
}
