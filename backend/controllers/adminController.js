// backend/controllers/adminController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const Centre = require('../models/Centre');

const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the admin exists
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Check if the password is correct
    const isPasswordCorrect = await bcrypt.compare(password, admin.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: admin._id }, 'secret', { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const addCentre = async (req, res) => {
  try {
    const { name, workingHours } = req.body;

    // Check if the centre already exists
    const existingCentre = await Centre.findOne({ name });
    if (existingCentre) {
      return res.status(400).json({ message: 'Centre already exists' });
    }

    // Create a new centre
    const newCentre = new Centre({ name, workingHours });
    await newCentre.save();

    res.status(201).json({ message: 'Centre added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const getDosageDetails = async (req, res) => {
  try {
    const dosageDetails = await Centre.aggregate([
      { $group: { _id: null, totalDosage: { $sum: '$slotsAvailable' } } },
    ]);

    res.status(200).json(dosageDetails);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const removeCentre = async (req, res) => {
  try {
    const { centreId } = req.params;

    await Centre.findByIdAndDelete(centreId);

    res.status(200).json({ message: 'Centre removed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = {
  adminLogin,
  addCentre,
  getDosageDetails,
  removeCentre,
};
