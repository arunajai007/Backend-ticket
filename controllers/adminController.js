const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.updateUserRole = async (req, res) => {
  const { userId, role } = req.body;
  await User.findByIdAndUpdate(userId, { role });
  res.json({ message: "Role updated" });
};

exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};