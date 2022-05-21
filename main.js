
const input = document.getElementById('input');
const ul = document.getElementById('todos');
const button = document.getElementById('button');

button.addEventListener('click', () => {
    const text = input.value;
    const li = document.createElement('li');
    li.innerText = text;
    const btn = document.createElement('button');
    btn.innerText = 'delete';
    btn.onclick = (evt) => {
        console.log(evt)
        ul.removeChild(evt.path[1]);
    };

    li.appendChild(btn);

    ul.appendChild(li);
});

