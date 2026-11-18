const { Category } = require("../models");

exports.getAllCategories = (req, res) => {
  // Menampilkan waktu request
  console.log(`Request Time: ${req.requestTime}`);
  res.status(200).json({
    status: "success",
    data: [
      {
        id: 1,
        name: "Appetizers",
      },
      {
        id: 2,
        name: "Main Course",
      },
    ],
  });
};

exports.storeCategory = async (req, res) => {
  // let name = req.body.name;
  // let description = req.body.description;

  try {
    let { name, description } = req.body;

    const newCategory = await Category.create({
      nama: name,
      deskripsi: description,
    });

    res.status(201).json({
      status: "Success",
      data: newCategory,
    });
  } catch (error) {
    return res.status(400).json({
      status: "Fail",
      message: error.message,
    });
  }
};
