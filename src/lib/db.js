const DATA = {
  "B1": { id: "B1", title: "Declaration of Independence", author: "Jefferson, Thomas", price: 99.99, available: 26},
  "B2": { id: "B2", title: "First Folio", author: "Shakespeare, William", price: 99.99, available: 760},
  "B3": { id: "B3", title: "Gutenberg Bible", author: "God", price: 99.99, available: 48},
  "B4": { id: "B4", title: "Codex of Leicester", author: "Da Vinci, Leonardo", price: 99.99, available: 1},
  "B5": { id: "B5", title: "Tales of Beedle the Bard", author: "Rowling, JK", price: 99.99, available: 5},
  "B6": { id: "B6", title: "Necronomicon", author: "Alhazred, Abdul", price: 99.99, available: 13}
};


class ADB {

  constructor(password = "gage") {
    this.data = DATA;
    this.password = password;

    console.dir(this.data);
  }

  getByID(id) {
    return [this.data[id]];
  }

  getByQuery(query) {
    let books = Object.values(this.data).filter((b) => true);
    return books;
  }



  change(id, count = -1) {
    this.data[id].available += count;
    this.data[id] = this.data[id];
    this.data = this.data;
  }

  buy(id, count = 1) {
    this.data[id].available -= count;
  }

  restock(id, count = 1) {
    this.data[id].available += count;
  }

  // forceUpdate() {
  //   this.data = this.data;
  // }

}

export const DB = new ADB();


