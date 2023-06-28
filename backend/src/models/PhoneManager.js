const AbstractManager = require("./AbstractManager");

class PhoneManager extends AbstractManager {
  constructor() {
    super({ table: "phone" });
  }

  insert(phone) {
    return this.database.query(
      `insert into ${this.table} (brand,model,ram,storage,state,img,category) values (?,?,?,?,?,?,?)`,
      [
        phone.brand,
        phone.model,
        phone.ram,
        phone.storage,
        phone.state,
        phone.img,
        phone.category,
      ]
    );
  }
}

module.exports = PhoneManager;
