import store from './store/store';
import { addNote, filterVisibility } from './actions/actions';
import { removeNote } from './actions/actions';

// ------ HTML references ------
let notesUList = document.getElementById('notes');
let addNoteForm = document.getElementById('add-note');
let selectVisibility = document.getElementById('priority');
let addNoteTitle = addNoteForm['title'];
let addNoteContent = addNoteForm['content'];
let addNotePriority = addNoteForm['priority'];

// ------ Redux ------
function deleteNote(index) {
  store.dispatch(removeNote(index));
}

function renderNotes() {
  let notes = store.getState().notes;
  let filter = store.getState().filter;

  notesUList.innerHTML = '';
  notes.forEach((note, index) => {
    if (note.priority == filter || filter == 'all') {
      let noteItem = `
      <li>
        <b>${ note.title}</b>
        <button data-id="${ index}">x</button>
        <br />
        <span>${ note.content}</span>
        <br />
        <small>Priority: ${ note.priority}</small>
      </li>
      `;
      notesUList.innerHTML += noteItem;
    }
  });
  setDeleteNoteButtonsEventListeners();
}

store.subscribe(() => {
  renderNotes();
});

// ------ Event Listeners ------
addNoteForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let title = addNoteTitle.value;
  let content = addNoteContent.value;
  let priority = addNotePriority.value;
  store.dispatch(addNote(title, content, priority));

  addNoteTitle.value = '';
  addNoteContent.value = '';
});

function setDeleteNoteButtonsEventListeners() {
  let buttons = document.querySelectorAll('ul#notes li button');

  for (let button of buttons) {
    button.addEventListener('click', () => {
      deleteNote(button.dataset.id);
    });
  }
}

selectVisibility.addEventListener('change', e => {
  e.preventDefault();

  let filter = selectVisibility.value;

  store.dispatch(filterVisibility(filter));
});

// ------ Render the initial Notes ------
renderNotes();