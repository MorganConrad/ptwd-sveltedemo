import { json } from '@sveltejs/kit'
import { DB } from '$lib/db.js';

export async function GET( { params, request } ) {
  let id = params.id;
  console.log("api/books/ GET " + id);

  let books = DB.getByQuery();
  console.dir(books);


  let response = {
    date: new Date().toISOString(),
    status: "OK",
    path: request.url,
    books
  }

  return json(response);
}

