const form = document.querySelector('#Add-todo')
const AddBtn =  document.querySelector('#Add-btn')
const  SaveBtn   =       document.querySelector('#save-todo-btn')
 const ListBox =             document.querySelector('#listBox')
 const SaveTodo =      document.querySelector('#saveIndex')
 
 let TodoArr = [];

 AddBtn.addEventListener('click' , (e) => {
    e.preventDefault();
     let todo = localStorage.getItem('todo');
     if(todo === null){
   TodoArr = [];
   NotPushArr();
     }else{
        TodoArr =JSON.parse(todo)
     }
 
    TodoArr.push(form.value);
          form.value= '';
          localStorage.setItem('todo',JSON.stringify(TodoArr))
         displayTodo() 
 })



 const displayTodo = () => {
    let todo = localStorage.getItem('todo');
     if(todo === null){
        TodoArr=[];
     }else{
        TodoArr =JSON.parse(todo)
     }
    
    let htmlCode = '';
    TodoArr.forEach((list, ind) => {
      htmlCode += `<div class=' flex mb-4 items-center list'>
   <p class='w-full text-grey-darkest Our-list'>${list}</p>
   <button onclick='edit(${ind})' class='flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-white text-grey bg-green-600'>Edit</button>
   <button onclick='deleteTodo(${ind})' class='flex-no-shrink p-2 ml-2 border-2 rounded text-white bg-red-500'>Delete</button>
</div>`;
    });
    
  ListBox.innerHTML = htmlCode; 
    
 
 }

 const deleteTodo = (ind) => {
      let todo = localStorage.getItem('todo');
      TodoArr = JSON.parse(todo);
      TodoArr.splice(ind, 1)
      localStorage.setItem('todo', JSON.stringify(TodoArr));
      displayTodo();
 }

 const NotPushArr = () => {
       let todo = localStorage.getItem('todo')
       
       TodoArr = JSON.parse(todo);
      if (TodoArr=== null){
         ListBox.style.display = 'none'
      }
       localStorage.setItem('todo', JSON.stringify(TodoArr), JSON.stringify(noEmptyString));
        displayTodo();
 }

 const edit = (ind) => {
    SaveTodo.value = ind;
    let todo = localStorage.getItem('todo')
    TodoArr = JSON.parse(todo);
     form.value = TodoArr[ind];
     AddBtn.style.display = 'none'
     SaveBtn.style.display = 'block';
     localStorage.setItem('todo', JSON.stringify(TodoArr));
 }

 SaveBtn.addEventListener('click', () => {
    let todo = localStorage.getItem('todo');
    TodoArr =JSON.parse(todo)
    let id = SaveTodo.value;
    TodoArr[id] = form.value;
    AddBtn.style.display = 'block';
    SaveBtn.style.display = 'none';
    form.value = '';
    localStorage.setItem('todo', JSON.stringify(TodoArr));
    displayTodo();
 })
 
 
