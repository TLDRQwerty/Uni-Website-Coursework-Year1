function example(){
    // Get the canvas from the page
    let window = document.getElementById("javascriptExample");
    window.style.backgroundColor = getRandomColor();
}
// Creates a hex color
function getRandomColor() {
    // All the different elements in a hex color
    let letters = '0123456789ABCDEF';
    // The start of the hex color
    let color = '#';
    // Length of the hex color
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
