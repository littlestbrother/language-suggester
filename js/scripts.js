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
    console.log("current question int: " + arr[int]);

    // on submit instructions for intro form
    $("form#intro").submit(function(event) {
        event.preventDefault();
        console.log("quiz has started")
            //css manipulation
        $("form#intro").hide();
        $("form#q1").show();

    });

    function myFunction() {

        // question logic
        $("form#" + arr[int]).submit(function(event) {
            event.preventDefault();
            console.log("counter is at: " + int);

            //project
            let question = $('input[name=' + '"' + arr[0] + '"' + ']:checked').val();
            console.log(question + " has been selected"); //debug


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
                case 'python':
                    javaScript = +1 / 5
                    console.log(python + " is added to: " + question); //debug
                    break;
                case 'rust':
                    rust = +1 / 5
                    console.log(rust + " is added to: " + question); //debug
                    break;
                case 'swift':
                    swift = +1 / 5
                    console.log(swift + " is added to: " + question); //debug
                    break;
                default:
                    alert("Something went wrong.")
            }
            int++

            //css manipulation
            $("form#" + arr[int - 1]).hide();
            $("form#" + arr[int]).show();
            console.log("next submit form= " + "form#" + arr[int])

            myFunction()

        });

    }
    myFunction()
});