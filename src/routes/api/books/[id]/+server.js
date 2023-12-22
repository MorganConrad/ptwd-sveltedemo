
/* api/books/[id] _server.js  */

import { json, redirect } from '@sveltejs/kit'
import { DB } from '$lib/db.js';

export async function GET( { params, request } ) {
  let id = params.id || "none";
  console.log("api/books/[id].GET " + id);

  let books = DB.getByID(id);  // TODO: error checking
  // console.dir(books);

  let response = {
    date: new Date().toISOString(),
    status: "OK",
    path: request.url,
    books
  }

  return json(response);
}

// called by form actions

export async function POST( { params, request } ) {
  let id = params.id;
  let delta = (await request.json()).delta;
  console.log(`api/books/[id].POST ${id} ${delta}`);

  DB.change(id, delta);
  let books = DB.getByID(id);

  return redirect(303, `/books/${id}`);

}
