$(document).ready(function () {
    let ruby = null; //start backend, define necessary variables 👇
    let cSharp = null;
    let javaScript = null;
    let go = null;
    let python = null;
    let rust = null;
    let swift = null;
    let arr = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];
    let int = 0; //end backend 👆

    serverForm();//run the serve form function to get the question progression working
    $("form#intro").submit(function (event) { //start frontend 👇
        event.preventDefault();
        console.log("quiz has started.")
        $("form#intro").hide(); //hide intro form
        $("form#q1").show(); //show first question
    });

    function serverForm() { //create function serveForm, this will serve user new appropriate form
        $("form#" + arr[int]).submit(function (event) {
            event.preventDefault();
            let question = $('input[name=' + '"' + arr[int] + '"' + ']:checked').val(); //convert user input from html to js string
            console.log(question + " has been selected from radio at: " + "form#" + arr[int]); //debug
            console.log("current quesiton: " + arr[int]); //more debug

            int++ //add 1 to int, so the next form can be served
            $("form#" + arr[int - 1]).hide(); //hide the current question
            $("form#" + arr[int]).show(); //show next question

            if (arr[int] == 'q6') {//if the the array position has reached question 6 starts the tally process
                finalTally()
            } else { //if not keep serving forms
                serverForm()
            }

            countScore()
            function countScore() { //create countScore, this will keep track of which language is the most popular.
                switch (question) {
                    case 'ruby':
                        ruby++
                        console.log(1 + " is added to: " + question + ", " + question + " is now at: " + ruby);
                        break;
                    case 'csharp':
                        cSharp++
                        console.log(1 + " is added to: " + question + ", " + question + " is now at: " + cSharp);
                        break;
                    case 'javaScript':
                        javaScript++
                        console.log(1 + " is added to: " + question + ", " + question + " is now at: " + javaScript);
                        break;
                    case 'python':
                        python++
                        console.log(1 + " is added to: " + question + ", " + question + " is now at: " + python);
                        break;
                    case 'rust':
                        rust++
                        console.log(1 + " is added to: " + question + ", " + question + " is now at: " + rust);
                        break;
                    case 'swift':
                        swift++
                        console.log(1 + " is added to: " + question + ", " + question + " is now at: " + swift);
                        break;
                    case 'go':
                        go++
                        console.log(1 + " is added to: " + question + ", " + question + " is now at: " + go);
                        break;
                    default://if the user somehow submits an error reload the page
                        alert("awww shit you broke something.")
                        location.reload();
                }
            }

            function finalTally() {
                let scores = { 'Ruby': ruby, 'C#': cSharp, 'JavaScript': javaScript, 'Go': go, 'Python': python, 'Rust': rust, 'Swift': swift }//attach variables to object
                let result = Object.entries(scores).sort(([, a], [, b]) => b - a); //sort object from least to greatest based on variables score
                result = result.splice(0, 3); //pull the first 3 elements from result
                console.log("results being shown: " + result);
                let first = String(result[0]).replace(/[12345,]/g, ''); //convert element in object to string and use regex to remove any characters 1-5 or commas
                let second = String(result[1]).replace(/[12345,]/g, '');
                let third = String(result[2]).replace(/[12345,]/g, '');
                $("#first").text("1. " + first); //show first second and third place
                $("#second").text("2. " + second);
                $("#third").text("3. " + third); //frontends ends here 👆
            }
        });
    }

});
