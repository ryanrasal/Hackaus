const models = require("../models");

const browse = (req, res) => {
  models.phone_ref
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.phone_ref
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

async function edit(req, res) {
  const { status, message } = await models.phone_ref.update(
    req.body,
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

const add = (req, res) => {
  const phoneRef = JSON.parse(req.body.phoneRef);
  const { renamedFile } = req;
  phoneRef.img = renamedFile;

  // TODO validations (length, format...)

  models.phone_ref
    .insert(phoneRef)
    .then(([result]) => {
      res.location(`/phone-ref/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.phone_ref
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
