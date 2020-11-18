import quakesController from './QuakesController.js';

const quakesControllerInstance = new quakesController("#quakeList");

const radiusElement = document.querySelector("input");

if (radiusElement.value !== null){
            radiusElement.defaultValue = 100;
            quakesControllerInstance.init(radiusElement.value);
}

radiusElement.addEventListener('input', function(){
            quakesControllerInstance.init(this.value);
});

