const express = require("express");
const {
  getAllCategories,
  storeCategory,
  detailCategory,
  updateCategory,
} = require("../controllers/categoryController");
const router = express.Router();

// get all
router.get("/", getAllCategories);

// get detail
router.get("/:id", detailCategory);

// post
router.post("/", storeCategory);

// update
router.put("/:id", updateCategory);

// export function router
module.exports = router;
