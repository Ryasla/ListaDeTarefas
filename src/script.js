// Seleciona os elementos da página
let todoForm = document.querySelector('.todo-form');
let todoInput = document.querySelector('.todo-input');
let todoList = document.querySelector('.todo-list');

// Adiciona um evento ao formulário para capturar o envio
todoForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Impede o comportamento padrão de recarregar a página
  
  let taskText = todoInput.value.trim(); // Pega o valor do input e remove espaços extras
  if (taskText !== '') {
    addTask(taskText); // Adiciona a tarefa
    todoInput.value = ''; // Limpa o campo de entrada
  }
});

// Função para adicionar uma nova tarefa
function addTask(taskText) {
  // Cria o item da lista
  let taskItem = document.createElement('li');
  taskItem.classList.add('todo-item');
  
  // Adiciona o texto da tarefa
  let taskContent = document.createElement('span');
  taskContent.textContent = taskText;
  
  // Botão de completar tarefa
  let completeBtn = document.createElement('button');
  completeBtn.innerHTML = '✔';
  completeBtn.classList.add('complete-btn');
  completeBtn.addEventListener('click', () => {
    taskItem.classList.toggle('completed'); // Marca ou desmarca a tarefa como concluída
  });
  
  // Botão de deletar tarefa
  let deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '✖';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', () => {
    taskItem.remove(); // Remove o item da lista
  });

  // Adiciona o conteúdo e os botões ao item da lista
  taskItem.appendChild(taskContent);
  taskItem.appendChild(completeBtn);
  taskItem.appendChild(deleteBtn);
  
  // Adiciona o item à lista
  todoList.appendChild(taskItem);
}
