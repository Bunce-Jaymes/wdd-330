const links = [
    {
        label: "Week 1 Notes/Code",
        url: "week1/index.html"
    },
    {
        label: "Week 2 Notes/Code",
        url: "week2/index.html"
    },
    {
        label: "Week 3 Notes/Code",
        url: "week3/index.html"
    },
    {
        label: "Week 4 Notes/Code",
        url: "week4/index.html"
    },
    {
        label: "Week 5 Notes/Code",
        url: "week5/index.html"
    },
    {
        label: "To-Do List Challenge",
        url: "challenges/todo.html"
    },
    {
        label: "Week 7 Notes/Code",
        url: "week7/index.html"
    },
    {
        label: "Week 8 Notes/Code",
        url: "week8/index.html"
    },
    {
        label: "Week 9 Notes/Code",
        url: "week9/index.html"
    } ,
    {
        label: "Week 10 Notes/Code",
        url: "week10/index.html"
    },
    {
        label: "Week 11 Notes/Code",
        url: "week11/index.html"
    },
//    {
//        label: "Week 12 Notes/Code",
//        url: "week12/index.html"
//    },
    {
        label: "Final Project",
        url: "final/index.html"
    }
];

const myList = document.getElementById("weekList");

for (let i = 0; i < links.length; i++) {
    let listItem = document.createElement("li");
    let anchor = document.createElement("a");

    anchor.setAttribute("href", links[i].url);
    anchor.innerHTML = links[i].label;

    listItem.appendChild(anchor);
    myList.appendChild(listItem);
}
