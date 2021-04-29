$(document).ready(function() {
    // on submit instructions for intro form
    $("form#intro").submit(function(event) {
        event.preventDefault();
        console.log("started")
        $("div#intro").hide();
    });
});