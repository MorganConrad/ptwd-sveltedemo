
/* /books/+page.js   */

/*
  Currently returns all books
  TODO: use id, url.queryParams for a "real" query?
  TODO: error checking
*/

export async function load({ params, fetch, url }) {
  const response = await fetch(`/api/books`);
  let { books } = await response.json();

  // console.dir(books);

  return {
    books,
    pageTitle: "All Books Available"
  }
}
