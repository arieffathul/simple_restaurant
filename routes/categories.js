const express = require("express");
const {
  getAllCategories,
  storeCategory,
} = require("../controllers/categoryController");
const router = express.Router();

// routes
// router.get("/", (req, res) => {
//   res.json({
//     message: "List of categories",
//     data: [
//       { id: 1, name: "Appetizers" },
//       { id: 2, name: "Main Course" },
//     ],
//   });
// });

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
