const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt'),
    SALT = 10;

const UserSchema = new Schema(
    {
        username: {
            type: String,
            minLength: 3,
            maxLength: 10,
            required: [true, "Username is required"],
            validate: {validator: usernameValidator, message},
            unique: true,
        },
        password: {
            type: String,
            minLength: 8,
            maxLength: 128,
            required: [true, "Password is required"],
            validate: {validator: passwordValidator, message},
        },
        email: {
            type: String,
            minLength: 6,
            maxLength: 254,
            required: [true, "Email is required"],
            validate: {validator: emailValidator, message},
            unique: true,
        },
    }
);

function passwordValidator(val){
    // Check if val has atleast 1 lowercase letter
    if(!/[a-z]/.test(val))
        throw new Error("Password must have atleast 1 lowercase character");
    // Check if val has atleat 1 uppercase letter
    if(!/[A-Z]/.test(val))
        throw new Error("Password must have atleast 1 uppercase character");
    // Check if val has atleast 1 digit
    if(!/\d/.test(val))
        throw new Error("Password must have atleast 1 numeric character");
    // Check for invalid characters
    if(/[^\w!@#$%^&*()\[\]{}\-_.`]/.test(val))
        throw new Error("Password contains unsupported characters. Special characters allowed are: !@#$%^&*()[]{}-_.`");
}
function usernameValidator(val){
    // Check if val consists only of alphanumeric characters
    if(/[^\w]/.test(val))
        throw new Error("Username can only contain letters, numbers, or underscores");
}
function emailValidator(val){
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!emailRegex.test(val))
        throw new Error("Email is invalid");
}
function message(props){
    return props.reason.message;
}

// Hash Password before saving
UserSchema.pre('save', function(next) {
    let user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
    // generate a salt
    bcrypt.genSalt(SALT, function(err, salt) {
        if (err) return next(err);
        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

//Export model
module.exports = mongoose.model('User', UserSchema);