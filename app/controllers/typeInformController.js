const express = require("express");
const router = express.Router();
const middle = require("../middleware/authentication");

const TypeInform = require("../models/typeInform");

class TypeInformController {
  Inform(req, res, next) {
    const { nameType } = req.body;

    const typeInform = new TypeInform({
      name: nameType,
    });

    typeInform.save();

    return res.redirect("back");
  }
}

module.exports = new TypeInformController();
