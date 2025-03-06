window.onload = function () {
    document.getElementById("address").innerHTML = words[Math.floor(Math.random() * words.length)];
  };

let words = [ "Penguin", "Seal", "Murphy", "Sleep", "Happy", "Spool", "Big Spool"]

let allcolors = ["blue", "green", "yellow", "red", "black", "white", "pink", "purple", "navy", "orange", "turquoise"]

document.getElementById("para1").onclick = function () {
    document.getElementById("address").style.color = allcolors[Math.floor(Math.random() * words.length)];
};


document.getElementById("incontrast").onmouseover = function() {
    this.style.backgroundColor = allcolors[Math.floor(Math.random() * words.length)];
};

document.getElementById("para2").onmouseenter = function() {
    this.style.backgroundImage = "url(ice.jpg)";
    this.style.opacity = ".7";
    document.getElementById("title").style.color = "blue";
};

document.getElementById("para2").onmouseleave = function() {
    this.style.backgroundImage = "none";
    this.style.opacity = "1";
    document.getElementById("title").style.color = "white";
    document.getElementById("para2").style.backgroundImage = "conic-gradient(blue, green, yellow, white, green, blue";
};
