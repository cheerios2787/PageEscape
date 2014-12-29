var mylinks = new Array();
mylinks[0] = "http://stackoverflow.com/?tab=hot"
mylinks[1] = "https://owl.english.purdue.edu/owl/resource/747/01/"
mylinks[2] = "https://www.coursera.org/"
mylinks[3] = "http://www.codecademy.com/"
mylinks[4] = "http://www.wolframalpha.com/input/?i=%28x%5E3+%2B+%28x%2F2%5Ex%29+-+x%5E4%29%2F%283%2Fx%29+%2B+x%5E20"

function myOnClick(tab){

 window.open(mylinks[Math.floor((Math.random() * 100) % 5)], "_blank", "true");
}

chrome.browserAction.onClicked.addListener(myOnClick);


