let ruby = null;
let cSharp = null;
let javaScript = null;
let go = null;
let python = null;
let rust = null;
let swift = null;
let arr = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];
let int = 0;

$(document).ready(function () {
    $("form#intro").submit(function (event) {
        event.preventDefault();
        console.log("quiz has started.")
        $("form#intro").hide();
        $("form#q1").show();
    });

    function iterateLogic() {
        $("form#" + arr[int]).submit(function (event) {
            event.preventDefault();
            let question = $('input[name=' + '"' + arr[int] + '"' + ']:checked').val(); //convert user input from html to js string
            console.log(question + " has been selected from radio at: " + "form#" + arr[int]);

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
                default:
                    alert("you somehow broke it.")
                    location.reload();
            }

                int++
                $("form#" + arr[int - 1]).hide();
                $("form#" + arr[int]).show();
            
            console.log("current quesiton: " +
                arr[int]);

            if (arr[int] == 'q6') {
                let scores = { 'Ruby': ruby, 'C#': cSharp, 'JavaScript': javaScript, 'Go': go, 'Python': python, 'Rust': rust, 'Swift': swift }
                let result = Object.entries(scores).sort(([, a], [, b]) => b - a);
                result = result.splice(0, 3);
                console.log("results being shown: " + result);
                let first = String(result[0]).replace(/[12345,]/g, '');
                let second = String(result[1]).replace(/[12345,]/g, '');
                let third = String(result[2]).replace(/[12345,]/g, '');
                $("#first").text("1. " + first);
                $("#second").text("2. " + second);
                $("#third").text("3. " + third);

            } else {
                iterateLogic()
            }
        });
    }
    iterateLogic();
});