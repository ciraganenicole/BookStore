const ADD_CATEGORY = 'ADD_CATEGORY';
const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
const CHECK_STATUS = 'CHECK_STATUS';

export default function reducer(categories = [], action) {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...categories, action.book];
    case REMOVE_CATEGORY:
      return [...categories].filter((book) => book.id !== action.id);
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return categories;
  }
}

export function addCategory(category) {
  return { ADD_CATEGORY, category };
}

export function removeCategory(id) {
  return { type: REMOVE_CATEGORY, id };
}

export function checkStatus() {
  return { type: CHECK_STATUS };
}
