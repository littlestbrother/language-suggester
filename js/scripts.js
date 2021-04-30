$(document).ready(function() {
    //programming language variables
    let ruby = 0; //1
    let csharp = 0; //2
    let javaScript = 0; //3
    let go = 0; //4
    let python = 0; //5
    let rust = 0; //6
    let swift = 0; //7
    //is this called the back end?

    // on submit instructions for intro form
    $("form#intro").submit(function(event) {
        event.preventDefault();
        console.log("quiz has started")
            //css manipulation
        $("form#intro").hide();
        $("form#q1").show();

    });

    //dynamically set variables and element locations
    let arr = ['apples', 'oranges', 'bananas'];
    let question = q1
    let int = 0

    // question logic
    $("form#" + "q1").submit(function(event) {
        event.preventDefault();
        while (int <= 2) {
            console.log("counter is at: " + int);
            int++;
            console.log(arr[int]);
        }




        //project
        let question = $('input[name="q1"]:checked').val();
        console.log(question + " has been selected"); //debug

        //switch function because if and then statments are kinda lame imo.
        switch (question) {
            case 'ruby':
                ruby = +1 / 5 //this implemements a point system which is what will determine which language is best for the user
                console.log(ruby + " is added to: " + question); //debug
                break; //to stop the case to save computation power.
            case 'csharp':
                csharp = +1 / 5
                console.log(csharp + " is added to: " + question); //debug
                break;
            case 'javaScript':
                javaScript = +1 / 5
                console.log(javaScript + " is added to: " + question); //debug
                break;
            case 'go':
                go = +1 / 5
                console.log(go + " is added to: " + question); //debug
                break;
            default:
                alert("Please choose something.")
        }

        //css manipulation
        $("form#q1").hide();
        $("form#q2").show();
    });
});