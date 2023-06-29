const AbstractManager = require("./AbstractManager");

class PhoneRefManager extends AbstractManager {
  constructor() {
    super({ table: "phone_ref" });
  }

  insert(phoneRef) {
    return this.database.query(
      `insert into ${this.table} (brand, model, ram, storage, state, img, price) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        phoneRef.brand,
        phoneRef.model,
        phoneRef.ram,
        phoneRef.storage,
        phoneRef.state,
        phoneRef.img,
        phoneRef.price,
      ]
    );
  }
}

module.exports = PhoneRefManager;
