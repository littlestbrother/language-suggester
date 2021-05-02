$(document).ready(function() {
    //Back-end begins here 👇

    //Programming language variables:
    let ruby = null; //These variables use integers. We'll get to why in a bit.
    let cSharp = null;
    let javaScript = null;
    let go = null;
    let python = null;
    let rust = null;
    let swift = null;

    //An array of "q + ineger". This allows us to use the same 
    let arr = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];
    let int = 0

    // Back-end ends here 👆

    //Front-end starts here 👇 (kinda...)

    //On intro form submit =>
    $("form#intro").submit(function(event) {
        event.preventDefault(); //We're not pulling from a database so we interupt the usual form process. 
        console.log("quiz has started.") //debug
            //CSS manipulation
        $("form#intro").hide(); //Hide intro
        $("form#q1").show(); //Show Question 1
    });


    //The function iterateLogic() uses the array from line 14 to distribute the phrases "q + integer" appropriately.
    //This method of distributing phrases from an array throughout the function below saves us from rewriting the same form submit logic.

    //Create the function:
    function iterateLogic() {
        //On the form submit of form "q1"-the 0th spot of the array "arr". Run the code starting on line 38.
        $("form#" + arr[int]).submit(function(event) {
            event.preventDefault();
            //Pull the user input from whatever string "q + integer"  is using in the array "arr".
            let question = $('input[name=' + '"' + arr[int] + '"' + ']:checked').val();
            //If user doesn't select anything, throw error and reload page.
            if (question == undefined) {
                location.reload();
                alert("Please select an option.")
            } else {}
            //So we know if the code did everthing right:
            console.log(question + " has been selected from radio at: " + "form#" + arr[int]); //debug


            //This is like an if and then statment. But just more efficient. 
            switch (question) {
                case 'ruby': //If the case is the string 'ruby', 'chsharp', etc... it will-
                    ruby++ //run the code beneath it... In this case it adds 1 to the variables we listed on line 5 through 11.
                    console.log(1 + " is added to: " + question + ", " + question + " is now at: " + ruby); //More debugging code.

                    break; //This stops the case (current process) to save computation power.
                case 'csharp':
                    cSharp++
                    console.log(1 + " is added to: " + question + ", " + question + " is now at: " + cSharp); //debug
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
            }
            //If all goes well then the user will progress.
            //The line below adds 1 to the varbiable integer. This will then tell the code what string to pull for the array in the next pass of the code.
            int++
            //CSS manipulation
            $("form#" + arr[int - 1]).hide();
            $("form#" + arr[int]).show();
            //I guess here 👆 is where the front-end stops.
            console.log("current quesiton array: " +
                arr[int]);
            if (arr[int] == 'q6') {

                let scores = { ruby: ruby, cSharp: cSharp, javaScript: javaScript, go: go, python: python, rust: rust, swift: swift }

                let result = Object.entries(scores).sort(([, a], [, b]) => b - a); //Sort the object scores from greatest to least.
                //shorten the JavaScript object to three elements.
                result = result.splice(0, 3);

                //For debugging
                console.log("results being shown: " + result);

                $("#first").text("1. " + result[0].replace(/[,12345]/g, ""));
                // $("#second").text("2." +);
                // $("#third").text("3." +);
            } else {
                //Parse another pass of the function with the values re-determined.
                iterateLogic()
            }

        });

    }
    //The code knows when to stop because the final array is "q6" which pulls the "Final Results" form from the HTML.
    iterateLogic();
});