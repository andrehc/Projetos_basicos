//Criando as variaveis para pegar os elementos HTML pelo id
let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

//uma variavel para o localStorage pra salvar os itens e JSON.parse();
let todos = JSON.parse(localStorage.getItem('list_todos')) 
|| [];

//Criando uma função para listar os to-dos e dentro da função criar um for para percorrer o array
function renderTodos() {
//    indicara que quando for adicionado um novo to-do o HTML será reescrito
    listElement.innerHTML = '';

//  for especifico para percorrer o to-dos
    for(todo of todos) {
        let todoElement = document.createElement('li');
        let todoText = document.createTextNode(todo);

        let linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');
        
        let pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
        
        let linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}
renderTodos();

function addTodo() {
    let todoText = inputElement.value;
    
    todos.push(todoText); 
    inputElement.value = '';
    renderTodos();
    save();
}
 
buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    save();
}

function save () {
    
    localStorage.setItem('list_todos', JSON.stringify(todos));

}