//how much the player starts with
var bank = 20;
//the cost of a cup of lemonade
var lemonadeCost = 0.25;
//how much is purchased each day
var numberOfCups;
//the weather forecast
var theWeather;
//what is sold each day
var sales;
//the random number that determines the weather
var weatherRandom;

//selecting the submit button
var btn1=document.querySelector('#buyLemonade');
btn1.addEventListener('click',purchase);
//how to select the form box
var formBox = document.querySelector('#cups');

function purchase(){
    numberOfCups = formBox.value;
   
    if (!isNaN(numberOfCups)){
        bank = bank-lemonadeCost*numberOfCups;
        document.getElementById('bank').innerHTML="You have $"+bank+" left.";
        weatherRandom = Math.floor(Math.random()*10);
        if (weatherRandom<3){
            theWeather = "sunny";
            sales = Math.ceil(Math.random()*numberOfCups);
        } 
        else if ((weatherRandom>2)&&(weatherRandom<6)){
            theWeather="cloudy";
            sales = Math.floor(Math.random()*numberOfCups*.7);
        } else {
            theWeather="rainy";
            sales = Math.floor(Math.random()*numberOfCups*.3);
        }
        //adding to the sales at $1 per cup.
        bank=bank+sales;
        //toFixed forces an ending zero if the prices is, for example, 18.4. So-->18.40
        bank = bank.toFixed(2);
        //writing the results
        document.getElementById('weather').innerHTML="Forecast: "+theWeather;
        document.getElementById('results').innerHTML="You sold "+sales+" cups. You now have $"+bank+".";
        if (bank<0){
            document.getElementById('gameover').innerHTML = "You have no money. You lose!";
        }
    } 
    //if someone doesn't type a number
    else{
        document.getElementById('weather').innerHTML = "You need to type a number.";
        document.getElementById('results').innerHTML = "";
     }
}