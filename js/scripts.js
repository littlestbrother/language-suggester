$(document).ready(function() {
    // on submit instructions for intro form
    $("form#intro").submit(function(event) {
        event.preventDefault();
        console.log("quiz has started")
        $("form#intro").hide();
        $("form#q1").show();
    });
});