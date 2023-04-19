const express = require("express");
const ctrl = require("../../controllers");
const ctrlWrapper = require("../../helpers/ctrlWrapper");
const { validation, updateContactValidation } = require("../../middlewares");
const { contactsSchema, addSchema } = require("../../schemas");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

// router.get("/:contactId", ctrlWrapper(ctrl.getById));

// router.post("/", validation(addcSchema), ctrlWrapper(ctrl.add));

// router.delete("/:contactId", ctrlWrapper(ctrl.removeById));

/* router.put(
  "/:contactId",
  updateContactValidation(contactsSchema),
  ctrlWrapper(ctrl.updateById)
); */

module.exports = router;
