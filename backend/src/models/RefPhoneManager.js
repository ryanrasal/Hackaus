const AbstractManager = require("./AbstractManager");

class PhoneManager extends AbstractManager {
  constructor() {
    super({ table: "phone_ref" });
  }

  insert(phone) {
    return this.database.query(
      `insert into ${this.table} (brand,model,ram,storage,state,img) values (?,?,?,?,?,?)`,
      [
        phone.brand,
        phone.model,
        phone.ram,
        phone.storage,
        phone.state,
        phone.img,
      ]
    );
  }
}

module.exports = PhoneManager;