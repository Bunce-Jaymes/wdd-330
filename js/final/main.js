import petController from './petController.js';

const petControllerInstance = new petController("#mainDisplay", "#petListDiv");

petControllerInstance.init();