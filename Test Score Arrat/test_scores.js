var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { 
	return document.getElementById(id); 
};

//Display results function
function displayResults() {
    //Use the calculateAverage function on the scores array
    var avgScore = calculateAverage(scores);
    //Find the top score of scores array
    var topScore = Math.max(...scores);
    //Find the name at index of the top score
    var topName = names[scores.indexOf(topScore)];
    //Display results in the HTML page
    $("results").innerHTML = '<h2>Results</h2>\
    <p>Average score = ' + avgScore + '</p>\
    <p>High score = ' + topName + ' with a score of ' + topScore + '</p>';
    };

//Calulate Average function
function calculateAverage(scores) {
    if (scores.length > 0) {
        return Math.round(scores.reduce(function(a, b) 
        {return a + b; }, 0) / scores.length);
    } 
    else {
        return 0;
    }
    };


//Display Scores Function
function displayScores() {
    var scoresList = '';
    //Display the scores and names in table
    names.forEach(function(name, i) {
        scoresList += '<tr><td><center>' + name + '</center></td><td><center>' 
        + scores[i] + '<center></td></tr>'
    });
    //Add the score and names table to the HYML
    $("scores_table").innerHTML = '<h2>Scores</h2>\
        <tr><th>Name</th><th>Score</th></tr>' + scoresList;
    };

//Add Score Function
function addScore() {
    //Grabe values for name and score
    var name = $("name").value;
    var score = parseInt($("score").value);
    //Data Validations
    if (isNaN(score) || score > 100 || score <= 0 || name.length == 0) {
        alert("You must enter a name and a valid score!");
    } else {
        //Success, add name and score to arrays
        names.push(name);
        scores.push(score);
        $("name").value = "";
        $("score").value = "";
        };
    //Move back to name
    document.getElementById('name').focus()
};
    

//On load
window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
    //Move mouse to name on start
    document.getElementById('name').focus()
};


