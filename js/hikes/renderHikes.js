import hikeList from './hikes.js'
import Comments from './comments.js'
const imgBasePath = "//byui-cit.github.io/cit261/examples/";

const commentObject = new Comments();

export default class Hikes {
    constructor(elementId) {
        this.parentElement = document.getElementById(elementId);
        this.backButton = this.buildBackButton();
        this.comments = new Comments('hikes', 'commentsDiv');
    }

    showHikeList() {
        this.parentElement.innerHTML = "";
        renderHikeList(hikeList, this.parentElement);
        this.addListener();
        this.backButton.classList.add('hidden');
        this.comments.removeCommentsList();
    }

    showOneHike(hikeName) {
        const hike = hikeList.find(hike => hike.name === hikeName);
        this.parentElement.innerHTML = '';
        this.parentElement.appendChild(renderFullHike(hike));
        this.backButton.classList.remove('hidden');
        this.comments.showCommentsList(hikeName);
    }

    addListener() {
        const childernArray = Array.from(this.parentElement.children);
        childernArray.forEach(child => {
            child.addEventListener('click', i => {
                this.showOneHike(i.currentTarget.dataset.name);
            });
        });
    }

    buildBackButton() {
        const backButton = document.createElement('button');
        backButton.innerHTML = 'All Hikes';
        backButton.addEventListener('click', () => {
            this.showHikeList();
        });
        backButton.classList.add('hidden');
        this.parentElement.before(backButton);
        return backButton;
    }

}

function renderHikeList(hikes, parent) {
    hikes.forEach(hike => {
        parent.appendChild(renderOneHike(hike));
    });
}

function renderOneHike(hike) {
    const item = document.createElement("li");
    item.classList.add('less');
    item.setAttribute('data-name', hike.name)

    item.innerHTML = ` <h2>${hike.name}</h2>
        <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
        <div>
                <div>
                    <h3>Distance</h3>
                    <p>${hike.distance}</p>
                </div>
                <div>
                    <h3>Difficulty</h3>
                    <p>${hike.difficulty}</p>
                </div>
        </div>`;

    return item;
}


function renderFullHike(hike) {
    const item = document.createElement('li');
    item.classList.add('more');
    item.innerHTML = ` 
    
        <img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}">
        <h2>${hike.name}</h2>
        <div>
            <h3>Distance</h3>
            <p>${hike.distance}</p>
        </div>
        <div>
            <h3>Difficulty</h3>
            <p>${hike.difficulty}</p>
        </div>
        <div>
            <h3>Description</h3>
            <p>${hike.description}</p>
        </div>
        <div>
            <h3>How to get there</h3>
            <p>${hike.directions}</p>
        </div>
    
    `;
    return item;
}
