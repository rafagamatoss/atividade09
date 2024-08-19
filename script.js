function addNote() {
  const noteInput = document.getElementById('noteInput');
  const noteText = noteInput.value.trim();

  if (noteText !== "") {
      const noteList = document.getElementById('noteList');
      
      const li = document.createElement('li');
      li.innerHTML = `
          <span>${noteText}</span>
          <button onclick="removeNote(this)">Excluir</button>
      `;
      
      noteList.appendChild(li);
      noteInput.value = "";
  }
}

function removeNote(button) {
  const li = button.parentElement;
  li.remove();
}