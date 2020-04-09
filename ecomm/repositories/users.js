// file manipulation node module
const fs = require("fs");
// node module for cryptography
const crypto = require("crypto");

class UsersRepository {
  // creates repositary instance
  constructor(filename) {
    //   checks if call has filename in it
    if (!filename) {
      throw new Error("Creating a repository requires a filename");
    }

    this.filename = filename;

    // logic for if filename already exist or not
    try {
      fs.accessSync(this.filename);
    } catch (er) {
      fs.writeFileSync(this.filename, "[]");
    }
  }

  //   parses the json and return all the contents of the file
  async getAll() {
    return JSON.parse(
      await fs.promises.readFile(this.filename, {
        encoding: "utf8",
      })
    );
  }

  //   Creates a new record in the file
  async create(attrs) {
    attrs.id = this.randomId();
    const records = await this.getAll();
    records.push(attrs);

    await this.writeAll(records);
  }

  //  writes all users to file
  async writeAll(records) {
    await fs.promises.writeFile(
      this.filename,
      JSON.stringify(records),
      null,
      2
    );
  }

  //   creates random id for records
  randomId() {
    return crypto.randomBytes(4).toString("hex");
  }

  //   returns a record by the given id
  async getOne(id) {
    const records = await this.getAll();
    return records.find((record) => record.id === id);
  }

  //   deletes a record from the file
  async delete(id) {
    const records = await this.getAll();
    const filteredRecords = records.filter((record) => record.id !== id);

    await this.writeAll(filteredRecords);
  }

  //   updates a record by id
  async update(id, attrs) {
    const records = await this.getAll();
    const record = records.find((record) => record.id === id);

    if (!record) {
      throw new Error(`No record with ${id}`);
    }
    Object.assign(record, attrs);
    await this.writeAll(records);
  }

  //   returns a unique record
  async getOneBy(filters) {
    const records = await this.getAll();

    for (let record of records) {
      let found = true;

      for (let key in filters) {
        if (record[key] !== filters[key]) {
          found = false;
        }
      }

      if (found) {
        return record;
      }
    }
  }
}
// =============================================

module.exports = new UsersRepository("users.json");
