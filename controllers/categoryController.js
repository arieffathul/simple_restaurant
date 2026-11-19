const { Category } = require("../models");

// get all
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    return res.status(200).json({
      status: "Success",
      data: categories,
    });
  } catch (error) {
    return res.status(500).json({
      status: "Fail",
      message: "Unexpected error",
    });
  }
};

// get detail
exports.detailCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const category = await Category.findByPk(id);

    if (!category) {
      return res.status(404).json({
        status: "Fail",
        message: "Kategori tidak ditemukan",
      });
    }

    return res.status(200).json({
      status: "Success",
      data: category,
    });
  } catch (error) {
    return res.status(500).json({
      status: "Fail",
      message: "Unexpected error",
    });
  }
};

// store
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

// update
exports.updateCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({
        status: "Fail",
        message: "Kategori tidak ditemukan",
      });
    }

    await Category.update(req.body, {
      where: {
        id: id,
      },
    });

    return res.status(200).json({
      status: "Success",
      data: category,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "Fail",
      message: "Unexpected error",
    });
  }
};
