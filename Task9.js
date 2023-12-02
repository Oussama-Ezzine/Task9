let todotitle = document.querySelector('.todotitle');
let tododescription = document.querySelector('.tododescription');
let tododeadline = document.querySelector('.tododeadline');
let form = document.querySelector('.form');
let list = document.querySelector('.list');

let popup = document.getElementById("popup") 
        function openPopup(){
            popup.classList.add("open-popup")}
        function closePopup(){
            popup.classList.remove("open-popup")
        }


form = document.addEventListener("submit", function(event){
    event.preventDefault();
    
    let NewTodo = document.createElement('div');
    
    let title = todotitle.value;
    NewTodo.innerText=title;
    list.appendChild(NewTodo);
    NewTodo.classList.add('todo');


    let description = document.createElement('desc')
    description.innerText = tododescription.value;
    NewTodo.appendChild(description);

    let deadline = document.createElement('dead');
    deadline.innerText = tododeadline.value;
    NewTodo.appendChild(deadline);
    deadline.style.backgroundColor='blue'
    deadline.style.height='40%'
    deadline.style.width='100px'
    deadline.style.borderRadius='10px'
    deadline.style.color='white'
    deadline.style.alignItems='centre'
    deadline.style.justifyContent='centre'
    deadline.style.padding='5px'
    deadline.style.fontSize='Meduim'











}
)
