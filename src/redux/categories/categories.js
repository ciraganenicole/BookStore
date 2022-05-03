const ADDCATEGORY = 'ADD_CATEGORY';
const REMOVECATEGORY = 'REMOVE_CATEGORY';
const CHECKSTATUS = 'CHECK_STATUS';
const initialCategory = [];

export function reducer(categories = initialCategory, action) {
  switch (action.type) {
    case ADDCATEGORY:
      return [...categories, action.book];
    case REMOVECATEGORY:
      return [...categories].filter((book) => book.id !== action.id);
    case CHECKSTATUS:
      return 'Under Construction';
    default:
      return categories;
  }
}

export function addCategory(category) {
  return { ADDCATEGORY, category };
}

export function removeCategory(id) {
  return { type: REMOVECATEGORY, id };
}

export function checkStatus() {
  return { type: CHECKSTATUS };
}
