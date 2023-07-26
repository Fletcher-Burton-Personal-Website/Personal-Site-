let today = new Date();
let hourNow = today.getHours();
let greeting;
let greeting2 = " and thanks for checking out my page"

if(hourNow > 18){
greeting = 'Good Evening!'
} else if (hourNow > 12) { 
greeting = 'Good Afternoon'
}else if (hourNow > 0){
greeting = 'Good mourning'
} else {
    greeting = 'welcome'
}

document.write('<h1>' + greeting + greeting2 + '</h1>')