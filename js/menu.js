/* 
Google Spreadsheet Menu 
json
    https://spreadsheets.google.com/feeds/list/1dSSJioqfGgVI2tW7AKWOWt4ZjuRwOqf7pSkcKIZlCm8/1/public/basic?alt=json
    https://spreadsheets.google.com/feeds/cells/1dSSJioqfGgVI2tW7AKWOWt4ZjuRwOqf7pSkcKIZlCm8/1/public/basic?alt=json
csv 
    https://docs.google.com/spreadsheets/d/e/2PACX-1vQCcIj98RPRZJmnGqBb8d0pwpyUhq_PUTB6R6UBhVoibQSEK97nnleap5LV4C6n_K8NUBHGU90tvr8K/pub?gid=0&single=true&output=csv
*/
$.getJSON("https://spreadsheets.google.com/feeds/list/1dSSJioqfGgVI2tW7AKWOWt4ZjuRwOqf7pSkcKIZlCm8/1/public/basic?alt=json", function (data) {

    var Source = $("#foodTemplate").html();
    var Template = Handlebars.compile(Source);
    
    var arr = data.feed.entry;
    var content = arr[0].content.$t;
    var split; 
    var values = [];
    var calorieData = {};
    calorieData.Weeks = [];
    var vegetarianData = {};
    vegetarianData.Weeks = [];

    //calorieData.Weeks.push({Dates:"Week1", Meal1: "Item1",Meal2: "Item2",Meal3: "Item3",Meal4: "Item4",Meal5: "Item5"});
    

    
    for(i in arr) {

        content = arr[i].content.$t;
        split = content.split(",");
        values = [];

        for(j in split) {
            values[j] = split[j].replace(/^[^:]*:\s*/, "");
            //console.log("Array index: " + j + " Value = " + values[j]);
        }


        if(arr[i].title.$t == "Calorie Counted"){
            //do a push into the weeks array instead of +=
            calorieData.Weeks.push({Dates:values[0], Meal1: values[1],Meal2: values[2],Meal3:values[3],Meal4: values[4],Meal5: values[5]});

            
            //ADD TO CALORIE DATA HERE
            //console.log("Calorie Counted meal #" + i);
        } else if(arr[i].title.$t == "Vegetarian") {
            //ADD TO VEGETARIAN DATA HERE
            vegetarianData.Weeks.push({Dates:values[0], Meal1: values[1],Meal2: values[2],Meal3:values[3],Meal4: values[4],Meal5: values[5]});
        } else {
            console.log("Unsure what this is #" + i);
            //TOSS IT OUT AND DO NOTHING WITH IT
        }
    }


    $("#calorieMeals").append(Template(calorieData));
    $("#vegetarianMeals").append(Template(vegetarianData));
});


