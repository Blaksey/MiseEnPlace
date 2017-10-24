/* 
Google Spreadsheet Menu 
json
    https://spreadsheets.google.com/feeds/list/1dSSJioqfGgVI2tW7AKWOWt4ZjuRwOqf7pSkcKIZlCm8/1/public/basic?alt=json
csv 
    https://docs.google.com/spreadsheets/d/e/2PACX-1vQCcIj98RPRZJmnGqBb8d0pwpyUhq_PUTB6R6UBhVoibQSEK97nnleap5LV4C6n_K8NUBHGU90tvr8K/pub?gid=0&single=true&output=csv
*/


var Source = $("#foodTemplate").html();
var Template = Handlebars.compile(Source);


var calorieData = {
    Weeks: [ {
        WeekOfMeals: "October 23rd-27th",
        Meal1: "Jerk Chicken w/ Mac & Cheese",
        Meal2: "Ground Turkey Sweet Potato Casserole w/ Peas",
        Meal3: "Ground Turkey Sweet Potato Casserole w/ Peas",
        Meal4: "Lime Pork Carnitas w/ Street Corn",
        Meal5: "Moroccan Chicken w/ Rice, Chickpeas & Broccoli"
    }, {
        WeekOfMeals: "October 30th-November 3rd",
        Meal1: "Turkey Chili Stuffed Sweet Potato",
        Meal2: "Orange Chicken w/ Wheat Rice Noodles & Broccoli",
        Meal3: "Chicken Verde Enchiladas w/ Black Beans",
        Meal4: "Ground Turkey Burger w/ BBQ, Lettuce & Roasted Potatoes",
        Meal5: "Curry Chicken w/ Rice & Peas"
    }, {
        WeekOfMeals: "November 6th-10th",
        Meal1: "Ground Turkey Marinara Pasta w/ Zucchini",
        Meal2: "Italian Steak w/ Roasted Chimichurri Cauliflower",
        Meal3: "Asian Lettuce Wrap w/ Rice",
        Meal4: "Buffalo Chicken Strips w/ Sweet Potatoes & Broccoli",
        Meal5: "Chicken, Cheese & Veggie Quesadilla w/ Corn"
    } ]
};

var vegetarianData = {
    Weeks: [ {
        WeekOfMeals: "October 23rd-27th",
        Meal1: "Jerk Chicken w/ Mac & Cheese",
        Meal2: "Ground Turkey Sweet Potato Casserole w/ Peas",
        Meal3: "Ground Turkey Sweet Potato Casserole w/ Peas",
        Meal4: "Lime Pork Carnitas w/ Street Corn",
        Meal5: "Moroccan Chicken w/ Rice, Chickpeas & Broccoli"
    }, {
        WeekOfMeals: "October 30th-November 3rd",
        Meal1: "Turkey Chili Stuffed Sweet Potato",
        Meal2: "Orange Chicken w/ Wheat Rice Noodles & Broccoli",
        Meal3: "Chicken Verde Enchiladas w/ Black Beans",
        Meal4: "Ground Turkey Burger w/ BBQ, Lettuce & Roasted Potatoes",
        Meal5: "Curry Chicken w/ Rice & Peas"
    }, {
        WeekOfMeals: "November 6th-10th",
        Meal1: "Ground Turkey Marinara Pasta w/ Zucchini",
        Meal2: "Italian Steak w/ Roasted Chimichurri Cauliflower",
        Meal3: "Asian Lettuce Wrap w/ Rice",
        Meal4: "Buffalo Chicken Strips w/ Sweet Potatoes & Broccoli",
        Meal5: "Chicken, Cheese & Veggie Quesadilla w/ Corn"
    } ]
};

$("#calorieMeals").append(Template(calorieData));
$("#vegetarianMeals").append(Template(vegetarianData));



