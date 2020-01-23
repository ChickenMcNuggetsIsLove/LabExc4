function rock() {
    document.getElementById("one").src = "./assets/rock.png";
    let player = 2;
    let ai;
    let randai = Math.floor(Math.random() * 3) + 1;
    if (randai == 1) {
        ai = 1;
        document.getElementById("two").innerHTML = ai;
        document.getElementById("two").src = "./assets/scissors.png";
        setTimeout(function(){ alert("You win!"); }, 100);
    }
    else if (randai == 2) {
        ai = 2;
        document.getElementById("two").innerHTML = ai;
        document.getElementById("two").src = "./assets/rock.png";
        setTimeout(function(){ alert("Draw!"); }, 100);
    }

    else{
        ai = 3;
        document.getElementById("two").innerHTML = ai;
        document.getElementById("two").src = "./assets/paper.png";
        setTimeout(function(){ alert("You Lose!"); }, 100);
    }
}

function paper() {
    document.getElementById("one").src = "./assets/paper.png";
    let player = 2;
    let ai;
    let randai = Math.floor(Math.random() * 3) + 1;
    if (randai == 1) {
        ai = 1;
        document.getElementById("two").innerHTML = ai;
        document.getElementById("two").src = "./assets/rock.png";
        setTimeout(function(){ alert("You win!"); }, 100);
    }
    else if (randai == 2) {
        ai = 2;
        document.getElementById("two").innerHTML = ai;
        document.getElementById("two").src = "./assets/paper.png";
        setTimeout(function(){ alert("Draw!"); }, 100);
    }

    else{
        ai = 3;
        document.getElementById("two").innerHTML = ai;
        document.getElementById("two").src = "./assets/scissors.png";
        setTimeout(function(){ alert("You Lose!"); }, 100);
    }
}

function scissor() {
    document.getElementById("one").src = "./assets/scissors.png";
    let player = 2;
    let ai;
    let randai = Math.floor(Math.random() * 3) + 1;
    if (randai == 1) {
        ai = 1;
        document.getElementById("two").innerHTML = ai;
        document.getElementById("two").src = "./assets/paper.png";
        setTimeout(function(){ alert("You win!"); }, 100);
    }
    else if (randai == 2) {
        ai = 2;
        document.getElementById("two").innerHTML = ai;
        document.getElementById("two").src = "./assets/scissors.png";
        setTimeout(function(){ alert("Draw!"); }, 100);
    }

    else{
        ai = 3;
        document.getElementById("two").innerHTML = ai;
        document.getElementById("two").src = "./assets/rock.png";
        setTimeout(function(){ alert("You Lose!"); }, 100);
    }
}