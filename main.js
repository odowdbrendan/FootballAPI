var unirest = require("unirest");

var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/fixtures/date/2020-10-28");

var matches = [];

req.query({
	"timezone": "Europe/London"
});

req.headers({
	"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
	"x-rapidapi-key": "API_KEY",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);
   
   for(var i = 0; i < res.body.api.results; i++){
    if (res.body.api.fixtures[i].league.country == "England"){
        var homeTeam = res.body.api.fixtures[i].homeTeam.team_name;
        var awayTeam = res.body.api.fixtures[i].awayTeam.team_name;
        var result =  res.body.api.fixtures[i].score.fulltime;

        console.log(homeTeam + " vs " + awayTeam);

        var table = document.getElementById("myTable");
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = homeTeam;
        cell2.innerHTML = awayTeam;
        cell3.innerHTML = result;
    }
}
});
