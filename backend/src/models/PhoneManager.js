const AbstractManager = require("./AbstractManager");

class PhoneManager extends AbstractManager {
  constructor() {
    super({ table: "phone" });
  }

  insert(phone) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      phone.title,
    ]);
  }

  update(phone) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [phone.title, phone.id]
    );
  }
}

module.exports = PhoneManager;
