const fs = require("fs");

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/users.json`, "utf-8")
);

exports.getAllUsers = (req, res) => {
  res
    .status(200)
    .json({ status: "success", results: users.length, data: { users } });
};

exports.getSpecificUser = (req, res) => {
  const user = users.find((el) => el.id === +req.params.id);

  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "Invalid ID",
    });
  }
  res.status(200).json({ status: "success", data: { user } });
};

exports.createUser = (req, res) => {
  const newId = users[users.length - 1].id + 1;
  const newUser = Object.assign({ id: newId }, req.body);

  users.push(newUser);

  fs.writeFile(
    `${__dirname}/../data/users.json`,
    JSON.stringify(users),
    (err) => {
      res.status(201).json({ status: "success", data: { user: newUser } });
    }
  );
};

exports.updateUser = (req, res) => {
  if (+req.params.id > users.length) {
    return res.status(404).json({
      status: "error",
      message: "Invalid ID",
    });
  }

  res.status(200).json({ status: "success", data: { user: "<Updated user>" } });
};

exports.deleteUser = (req, res) => {
  if (+req.params.id > users.length) {
    return res.status(404).json({
      status: "error",
      message: "Invalid ID",
    });
  }

  res.status(200).json({ status: "success", data: null });
};
