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
        label: "Week 6 ToDo List Challenge",
        url: "challenges/todo.html"
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
