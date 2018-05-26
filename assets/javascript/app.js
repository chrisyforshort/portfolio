$(document).ready(function () {

    // On click to send an email //
    $('#gmailLogo').on('click', function (event) {
        var email = 'ChristinaSarahWu@gmail.com';
        window.location = 'mailto:' + email + '?';
    }),

        console.log("hi");
    M.AutoInit();
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy({
        scrollOffset: 100,
    });

});
