$(document).ready(function() {
    //programming language variables
    let ruby = 0; //1
    let csharp = 0; //2
    let javaScript = 0; //3
    let go = 0; //4
    let python = 0; //5
    let rust = 0; //6
    let swift = 0; //7


    // on submit instructions for intro form
    $("form#intro").submit(function(event) {
        event.preventDefault();
        console.log("quiz has started")
            //css manipulation
        $("form#intro").hide();
        $("form#q1").show();

    });
    // question logic
    $("form#q1").submit(function(event) {
        event.preventDefault();
        let q1 = $('input[name="q1"]:checked').val();
        console.log(q1 + " has been selected"); //debug

        //switch function because if and then statments are kinda lame imo.
        switch (q1) {
            case 'ruby':
                ruby = +1 / 5 //this implemements a point system which is what will determine which language is best for the user
                console.log(ruby + " is added to: " + q1); //debug
                break; //to stop the case to save computation power.
            case 'csharp':
                csharp = +1 / 5
                console.log(csharp + " is added to: " + q1); //debug
                break;
            case 'javaScript':
                javaScript = +1 / 5
                console.log(javaScript + " is added to: " + q1); //debug
                break;
            case 'go':
                go = +1 / 5
                console.log(go + " is added to: " + q1); //debug
                break;
            default:
                alert("Please choose something.")
        }

        //css manipulation
        $("form#q1").hide();
        $("form#q2").show();

    });
});