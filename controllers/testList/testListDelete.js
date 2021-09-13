const Test = require("../../modules/testListModel");

module.exports = (req, res) => {
  const id = req.params.id;

  Test.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Failed to Delete/Already Deleted` });
      } else {
        res.send({
          message: "Data deleted successfully!",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete data",
        err: err.message,
      });
    });
};
