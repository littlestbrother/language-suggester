$(document).ready(function() {
    let ruby = 0;
    let csharp = 0;
    let javaScript = 0;
    let go = 0;
    let python = 0;
    let rust = 0;
    let swift = 0;


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
        let q1 = $('input[name="q1"]:checked').val();
        console.log(q1);
        $("form#q1").hide();
        $("form#q2").show();

    });
    // q2 functionality to next function
    $("form#q2").submit(function(event) {
        event.preventDefault();
        let q2 = $('input[name="q2"]:checked').val();
        console.log(q2);
        $("form#q2").hide();
        $("form#q3").show();
    });
    // q3 functionality to next question
    $("form#q3").submit(function(event) {
        event.preventDefault();
        let q3 = $('input[name="q3"]:checked').val();
        console.log(q3);
        $("form#q3").hide();
        $("form#q4").show();
    });
    // q4 functionality to next function
    $("form#q4").submit(function(event) {
        event.preventDefault();
        let q4 = $('input[name="q4"]:checked').val();
        console.log(q4);
        $("form#q4").hide();
        $("form#q5").show();
    });
    // q5 functionality to next function
    $("form#q5").submit(function(event) {
        event.preventDefault();
        let q5 = $('input[name="q5"]:checked').val();
        console.log(q5);
        $("form#q5").hide();
        $("form#results").show();
    });

});