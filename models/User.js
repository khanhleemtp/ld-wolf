const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bycrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'Please enter an email'],
        lowercase: true,
        validate: [isEmail, 'Please enter an valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minium password length is 6 character']
    },
    firstName: {
        type: String,
        required: [true, 'Please enter a first name']
    },
    lastName: {
        type: String,
        required: [true, 'Please enter a last name']
    }
})

// fire a function before doc saved to db
userSchema.pre('save', async function(next) {
    console.log('User about to be created and saved in db');
    const salt = await bycrypt.genSalt();
    this.password = await bycrypt.hash(this.password, salt);
    next();
})

// static method to login user
userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if(user) {
        const auth = await bycrypt.compare(password, user.password);
        if(auth) {
            return user;
        }
        throw Error('Incorrect password');
    }
    throw Error('Incorrect email');
};



const User = mongoose.model('users', userSchema);

module.exports = User;