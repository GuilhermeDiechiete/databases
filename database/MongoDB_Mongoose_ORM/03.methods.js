// import User == schema
const User = require('../database/entities/User');

// consult a user by id
await User.findOne({ _id: id });

// consult a user by email
await User.findOne({ email }); // email : email

// consult users database, -password
await User.find({}, '-password').sort('-createdAt');

// create a new user
const user = new User({ name, email, phone, password: passwordHash });
await user.save(); // save user

// update user
await User.findByIdAndUpdate({ _id: user.id }, { $set: user }, { new: true });

// remove user
await User.findOneAndRemove({ _id: id });


