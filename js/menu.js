/* 
Google Spreadsheet Menu 
json
    https://spreadsheets.google.com/feeds/list/1dSSJioqfGgVI2tW7AKWOWt4ZjuRwOqf7pSkcKIZlCm8/1/public/basic?alt=json
csv 
    https://docs.google.com/spreadsheets/d/e/2PACX-1vQCcIj98RPRZJmnGqBb8d0pwpyUhq_PUTB6R6UBhVoibQSEK97nnleap5LV4C6n_K8NUBHGU90tvr8K/pub?gid=0&single=true&output=csv
*/

var source = $("#some-template").html(); 
var template = Handlebars.compile(source); 

var data = { 
    users: [ { 
        person: {
            firstName: "Garry", 
            lastName: "Finch"
        },
        jobTitle: "Front End Technical Lead",
        twitter: "gazraa" 
    }, {
        person: {
            firstName: "Garry", 
            lastName: "Finch"
        }, 
        jobTitle: "Photographer",
        twitter: "photobasics"
    }, {
        person: {
            firstName: "Garry", 
            lastName: "Finch"
        }, 
        jobTitle: "LEGO Geek",
        twitter: "minifigures"
    } ]
}; 

Handlebars.registerHelper('fullName', function(person) {
  return person.firstName + " " + person.lastName;
});

$('body').append(template(data));