// queryController.js

const { client } = require('./db');

async function getUsersWithEmailStartingWithJohnDoe() {
  const usersCollection = client.db('myNewApp').collection('users');
  return await usersCollection.find({ email: { $regex: /^johndoe/i } }).sort({ name: 1 }).limit(10).toArray();
}

async function getPostStatsForYear(year) {
  const postsCollection = client.db('myNewApp').collection('posts');
  
  return await postsCollection.aggregate([
    { $match: { created_at: { $gte: new Date(`${year}-01-01`), $lt: new Date(`${year + 1}-01-01`) } } },
    { $group: { _id: '$user_id', count: { $sum: 1 } } },
    { $lookup: { from: 'users', localField: '_id', foreignField: '_id', as: 'user' } },
    { $sort: { count: -1 } }
  ]).toArray();
}

module.exports = { getUsersWithEmailStartingWithJohnDoe, getPostStatsForYear };
