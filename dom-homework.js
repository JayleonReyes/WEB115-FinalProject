function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const myDiv = document.getElementById("myDiv");

const heading = document.createElement("h1");
heading.textContent = "Welcome to DOM homework";
heading.classList.add("highlight");
myDiv.appendChild(heading);

const paragraph = document.createElement("p");
paragraph.textContent = "This is your first DOM homework assignment";
myDiv.appendChild(paragraph);

const ul = document.createElement("ul");
const initialItems = ["Item 1", "Item 2", "Item 3"];
initialItems.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
});
myDiv.appendChild(ul);

const addItemBtn = document.getElementById("addItemBtn");
let newItemCount = 1;

addItemBtn.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = 'New List Item ${newItemCount}';
    li.style.color = getRandomColor();
    ul.appendChild(li);
    newItemCount++;
});

myDiv.addEventListener("click", () => {
    myDiv.style.backgroundColor = getRandomColor();
});