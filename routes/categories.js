const express = require("express");
const {
  getAllCategories,
  storeCategory,
} = require("../controllers/categoryController");
const router = express.Router();

// get all
router.get("/", getAllCategories);

// router.post("/", (req, res) => {
//   res.send("Create a new category");
// });

router.post("/", storeCategory);

// get with params
router.get("/:nama", (req, res) => {
  res.send(`Get category with name: ${req.params.nama}`);
});

// export function router
module.exports = router;
