// получим элемент по id//
const title = document.getElementById("main-title");
console.log(title);
console.log(title.textContent);

// получим элемент по class//
const descriptions = document.getElementsByClassName("description");
console.log(descriptions);

// получим элемент по class//
Array.from(descriptions).forEach((descr, index) => {
  console.log(`Paragraph ${index + 1} ${descr.textContent}`);
});

//Получение элементов по тегу
const listItems = document.getElementsByTagName("li");
console.log(listItems);
if (listItems.length > 0) {
  listItems[0].textContent = "Element 1 new";
}

//использование селекторов (1 элемент)
const button = document.querySelector("#action-btn");
console.log(button);

//использование селекторов (> 1 элемента)

const allDescriptions = document.querySelectorAll(".description");
console.log(allDescriptions);

//Перебор Nodelist
allDescriptions.forEach((descr, index) => {
  console.log(`Paragraph ${index + 1} ${descr.textContent}`);
});

// взаимодействие с элементами
button.addEventListener("click", () => {
  alert("button was clicked!")
  title.textContent = "Заголовок был изменен!"
  title.style.color = "blue"
})
