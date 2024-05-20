const pool = require("../models/db");

const authorization = (string) => {
  return function (req, res, next) {
    const role_id = req.token.role_id;
    const query = `SELECT * FROM role_permission INNER JOIN permissions ON role_permission.permission_id = permissions.id WHERE role_permission.role_id = (?) AND permissions.permission = (?);`;
    const data = [role_id, string];
    pool
      .query(query, data)
      .then((result) => {
        if (result[1].length) {
          next();
        } else {
          throw Error;
        }
      })
      .catch((err) => {
        res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      });
  };
};

module.exports = authorization;
