function addTask() {
  let input = document.getElementById('taskInput');
  let task = input.value.trim();
  if (task) {
    let ul = document.getElementById('taskList');
    let li = document.createElement('li');
    li.textContent = task;
    li.onclick = function() {
      this.style.textDecoration = this.style.textDecoration === 'line-through' ? 'none' : 'line-through';
    }
    ul.appendChild(li);
    input.value = '';
  }
}
