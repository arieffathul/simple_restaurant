exports.getAllCategories = (req, res) => {
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

exports.storeCategory = (req, res) => {
  let name = req.body.name;
  let description = req.body.description;

  if (!name && !description) {
    return res.status(400).json({
      status: "failed",
      message: "Name and description are required",
    });
  }

  return res.status(200).json({
    data: {
      name: name,
      description: description,
    },
    status: "success",
    message: "Category created successfully",
  });
};
