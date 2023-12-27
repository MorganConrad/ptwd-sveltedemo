
/** /books/[id]/+page.server.js  */

/* In a real app you'd probably be using this code
   in page.SERVER.js  so as to protect any database secrets

   Also, only a server can use form actions

   For the demo we use +page.js instead for simplicity
*/

//  not for actions!   export const prerender = true;

export async function load({params, fetch}) {
  let id = params.id || "";
  const response = await fetch(`/api/books/${id}`);
  let { books } = await response.json();  // No error checking

  console.dir(books);

  return { books }
}

/* Form actions - they use the helper buysell() below */
export const actions = {
  buy: (event) => { buysell(event, -1); },
  restock: (event) => { buysell(event, 1); }
};


async function buysell(event, delta) {

  let id = event.params.id;

  console.log(`buysell ${id} ${delta}`)
  let response = await event.fetch(`/api/books/${id}`, {
    method: 'POST',
    body: JSON.stringify({ id, delta }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return response;

}



