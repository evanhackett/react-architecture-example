const input = document.getElementById('input');
const ul = document.getElementById('todos');
const button = document.getElementById('button');

let todos = [];

button.addEventListener('click', () => {
    const text = input.value;
    setState(todos.concat(text));
});

function setState(newTodos) {
   todos = newTodos;
    render(todos);
}

function render(todos) {
    ul.innerHTML = '';

    const lis = todos.map((text, index) => {
        const li = document.createElement('li');
        li.innerText = text;
        const btn = document.createElement('button');
        btn.innerText = 'delete';
        btn.onclick = (evt) => {
            todos.splice(index, 1);
            setState(todos);
        };

        li.appendChild(btn);

        return li;
    });

    ul.append(...lis);
}

