const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        trim: true,
        minlength: [3, 'Username must be at least 3 characters long']
    }
    // Note: We're removing the password field from here
});

UserSchema.plugin(passportLocalMongoose, {
    // This will allow us to define our own password validation
    passwordValidator: function(password, cb) {
        if (!password || password.length < 6) {
            return cb(new Error('Password must be at least 6 characters long'));
        }
        return cb();
    }
});

module.exports = mongoose.model('User', UserSchema);