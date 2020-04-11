export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const FILTER_VISIBILITY = 'FILTER_VISIBILITY';

export function filterVisibility(filter) {
  return { type: FILTER_VISIBILITY, filter: filter };
}

export function removeNote(id) {
  return { type: REMOVE_NOTE, id: id };
};

export function addNote(title, content, priority) {
  return { type: ADD_NOTE, title: title, content: content, priority: priority };
};