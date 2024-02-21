const SalesData = require('../models/Data');
const axios = require('axios');

module.exports.initializeData = async (req,res) =>{
    try {
        const response = await axios.get(
          "https://s3.amazonaws.com/roxiler.com/product_transaction.json"
        );
        const jsonData = response.data;
        await SalesData.insertMany(jsonData);
        res.send("Database initialized successfully");
      } catch (error) {
        console.error("Error initializing database:", error);
        res.status(500).send("Internal Server Error");
      }
}

module.exports.getAllData = async (req, res) =>{
    try {
        const transactions = await SalesData.find();
        await res.json( transactions );
    } catch (error) {
        console.error('Error fetching transaction data:', error);
        res.status(500).send('Internal Server Error');
    }
}