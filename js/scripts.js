$(document).ready(function() {
    //programming language variables
    let ruby = 0; //1
    let csharp = 0; //2
    let javaScript = 0; //3
    let go = 0; //4
    let python = 0; //5
    let rust = 0; //6
    let swift = 0; //7

    //dynamically set variables and element locations
    let arr = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];
    let int = 0

    // on submit instructions for intro form
    $("form#intro").submit(function(event) {
        event.preventDefault();
        console.log("quiz has started.")
            //css manipulation
        $("form#intro").hide();
        $("form#q1").show();

    });

    function myFunction() {

        // question logic
        $("form#" + arr[int]).submit(function(event) {
            event.preventDefault();
            //project
            let question = $('input[name=' + '"' + arr[0] + '"' + ']:checked').val();
            console.log(question + " has been selected"); //debug

            switch (question) {
                case 'ruby':
                    ruby++ //this implemements a point system which is what will determine which language is best for the user
                    console.log(1 + " is added to: " + question + ", " + question + " is now at: " + ruby); //debug

                    break; //to stop the case to save computation power.
                case 'csharp':
                    csharp++
                    console.log(1 + " is added to: " + question + ", " + question + " is now at: " + csharp); //debug
                    break;
                case 'javaScript':
                    javaScript++
                    console.log(1 + " is added to: " + question + ", " + question + " is now at: " + javaScript); //debug
                    break;
                case 'go':
                    go++
                    console.log(1 + " is added to: " + question + ", " + question + " is now at: " + go); //debug
                    break;
                case 'python':
                    python++
                    console.log(1 + " is added to: " + question + ", " + question + " is now at: " + python); //debug
                    break;
                case 'rust':
                    rust++
                    console.log(1 + " is added to: " + question + ", " + question + " is now at: " + rust); //debug
                    break;
                case 'swift':
                    swift++
                    console.log(1 + " is added to: " + question + ", " + question + " is now at: " + swift); //debug
                    break;
                    // default:
                    //     alert("Something went wrong.")
            }

            int++
            //check if nothing was pressed.
            if (question == null) {
                alert("Please type something");
                //this alerts the user and cuts off progression of the quiz.
            } else {
                //if all goes well then the user will progress.
                //css manipulation
                $("form#" + arr[int - 1]).hide();
                $("form#" + arr[int]).show();
            }
            myFunction()

        });

    }
    myFunction();
});