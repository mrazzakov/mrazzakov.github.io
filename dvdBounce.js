 
 
 function moveLogo() {
    var logo = document.getElementById("logo");
    var logoDoc = logo.contentDocument;
    var logoProp = logoDoc.getElementsByClassName("icon");
    var width = window.innerWidth - logo.width;
    var height = window.innerHeight - logo.height;
    var xPos = Math.floor(Math.random() * width);
    var yPos = Math.floor(Math.random() * height);
    var xSpeed = 1;
    var ySpeed = 1;

    console.log(logoProp);
    
    setInterval(frame, 5);
    
    function frame() {
        ratio = logo.width/250;
        xSpeed = Math.sign(xSpeed) * ratio;
        ySpeed = Math.sign(ySpeed) * ratio;

        width = window.innerWidth - logo.clientWidth;
        height = window.innerHeight - logo.clientHeight;
        
        if(xPos > width || xPos < 0) {
            xSpeed = -xSpeed;
            xPos = Math.min(xPos + xSpeed, width + xSpeed);
            logoProp.style.fill = "red";
        }
        else {
            xPos += xSpeed;
            logo.style.left = xPos + "px";
        }

        if(yPos > height || yPos < 0) {
            ySpeed = -ySpeed;
            yPos = Math.min(yPos + ySpeed, height + ySpeed);
        }
        else {
            yPos += ySpeed;
            logo.style.top = yPos + "px";
        }
    }
 }




// function myMove() {
//     var logo = document.getElementById("logo");
//     var pos = 0;
//     var id = setInterval(frame, 5);
//     function frame() {
//       if (pos >= (document.body.clientWidth - logo.width + PADDING_OFFSET)) {
//         clearInterval(id);
//       } else {
//         pos++; 
//         logo.style.top = pos + "px"; 
//         logo.style.left = pos + "px"; 
//       }
//     }
//   }