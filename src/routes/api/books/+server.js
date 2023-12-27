import { json } from '@sveltejs/kit'
import { DB } from '$lib/db.js';

// needed???  export const prerender = true;

export async function GET( { params, request } ) {
  let id = params.id;
  console.log("api/books/ GET " + id);

  // for a "real" API you might look at the request queryParams...
  let books = DB.getByQuery();
  // console.dir(books);


  let response = {
    date: new Date().toISOString(),
    status: "OK",
    path: request.url,
    books
  }

  return json(response);
}

