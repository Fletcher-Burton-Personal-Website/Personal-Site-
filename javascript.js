let today = new Date();
let hourNow = today.getHours();
let greeting;

if(hourNow > 18){
greeting = 'Good Evening!'
} else if (hourNow > 12) { 
greeting = 'Good Afternoon'
}else if (hourNow > 0){
greeting = 'Good Mourning'
} else {
    greeting = 'welcome'
}

document.write('<h1>' + greeting + '</h1>')