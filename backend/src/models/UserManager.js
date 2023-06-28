const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, email, password, isAdmin) values (?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.hashedPassword,
        user.isAdmin || 0,
      ]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [user.title, user.id]
    );
  }

  findByEmailWithPassword(email) {
    return this.database.query(`select * from  ${this.table} where email = ?`, [
      email,
    ]);
  }
}

module.exports = UserManager;
