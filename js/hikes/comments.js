class CommentsModel {
    constructor(type, commentElementId){
        this.type = type;
        this.commentsArray = getLocal(this.type) || [];
        console.log(this.commentsArray);
    }
    
    getComments (hikeName){
        return this.commentsArray.filter(cItem => cItem.name === hikeName);
    }
    
    addComment (hikeName){
        const text = (document.getElementById('commentText')).value;
        
        const newComment = {
            name: hikeName,
            comment: text,
            date: new Date()
        };
        
        this.commentsArray.push(newComment);
        setLocal(this.type, this.commentsArray);
    }
}

function getLocal(key){
    return JSON.parse(localStorage.getItem(key));
}

function setLocal(key, data){
    window.localStorage.setItem(key, JSON.stringify(data));
}

const commentUI = `<div class="addComment">
<h2>Add a comment</h2>
<input type="text" id="commentText" />
<button id="submitComment">Comment</button>
</div>
<h2>Comments</h2>
<ul class="commentsUL"></ul>`;

class Comments {
    constructor(type, commentElementId) {
        this.type = type;
        this.commentElementId = commentElementId;
        this.model = new CommentsModel(this.type, this.commentElementId);
        this.nameOfHike;
    }
    
    showCommentsList(NameOfHike) {
        this.removeCommentsList();
        this.nameOfHike = NameOfHike;
        
        const buildDiv = document.getElementById(this.commentElementId);
        buildDiv.innerHTML = commentUI;
        
        const submitButton = document.getElementById('submitComment');
        
        submitButton.addEventListener('click', () => {
            this.model.addComment(this.nameOfHike)
        });
        
        submitButton.addEventListener('click', () => {
            this.showCommentsList(this.nameOfHike)
        });
        
        const ulElement = document.querySelector('.commentsUL');
        
        const commentsArray = this.model.getComments(NameOfHike);
        
        commentsArray.forEach(item => {
            let liItem = document.createElement('li');
            liItem.innerHTML = `${item.name}: ${item.comment}`
            ulElement.appendChild(liItem);
        });
    }
    
    removeCommentsList() {
        const buildDiv = document.getElementById(this.commentElementId);
        buildDiv.innerHTML = " ";
    }
}

export default Comments;
