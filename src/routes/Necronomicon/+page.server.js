import { DB } from '$lib/db.js';

const ID = 6;

export async function load() {
    return DB.get(ID)[0];
}

export const actions = {

  buy: (event) => { DB.buy(ID); console.log("bought"); },
  restock: (event) => { DB.restock(ID) }
};
