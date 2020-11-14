function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');
    
    const style = getComputedStyle(key);
    
    let topValue = 0;
    
    if (style.top === "auto"){
        topValue = 0;
    }else {
        topValue = parseInt((style.top).replace(/px/,""));
    }
    
    if (style.position === "static"){
        key.style.position = 'relative';
    }
    if (topValue === 0){
        key.style.top = "10px";
    }if (topValue > 0 && topValue <= 80){
        key.style.top = (String(topValue + 10) + "px");
    } if (topValue === 90){
        key.style.top = "0px";
    }
}

window.addEventListener('keydown', playSound);

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;

    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
