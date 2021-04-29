$(document).ready(function() {
    // on submit instructions for intro form
    $("form#intro").submit(function(event) {
        event.preventDefault();
        console.log("quiz has started")
        $("form#intro").hide();
        $("form#q1").show();
    });
    // q1 functionality to next question
    $("form#q1").submit(function(event) {
        event.preventDefault();
        console.log("q1 answer recieved")
        $("form#q1").hide();
        $("form#q2").show();
    });
    // q2 functionality to next function
    $("form#q2").submit(function(event) {
        event.preventDefault();
        console.log("q1 answer recieved")
        $("form#q2").hide();
        $("form#q3").show();
    });
    // q3 functionality to next question
    $("form#q3").submit(function(event) {
        event.preventDefault();
        console.log("q1 answer recieved")
        $("form#q3").hide();
        $("form#q4").show();
    });
    // q4 functionality to next function
    $("form#q4").submit(function(event) {
        event.preventDefault();
        console.log("q1 answer recieved")
        $("form#q4").hide();
        $("form#q5").show();
    });
    // q5 functionality to next function
    $("form#q5").submit(function(event) {
        event.preventDefault();
        console.log("q1 answer recieved")
        $("form#q5").hide();
        $("form#q6").show();
    });

});