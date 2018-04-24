var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required.'],
        trim: true
    },
    dob: {
        type: String,
        required: [true, 'Dob is required.'],
        trim: true
    },
    class: {
        type: Number,
        required: [true, 'Class is required.'],
        trim: true
    },
    email_id: {
        type: String,
        validate: {
            validator: function (v) {
                return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(v);
            },
            message: '{VALUE} is not a valid email id.'
        },
        required: [true, 'Email Id is required.'],
        unique: true,
        trim: true
    },
    mobile_number: {
        type: String,
        validate: {
            validator: function (v) {
                return /^\d{10}$/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
        },
        required: [true, 'Mobile Number is required.'],
        trim: true
    },
    user_name: {
        type: String,
        required: [true, 'User Name is required.'],
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Password is required.'],
        trim: true
    },
});

var User = mongoose.model('User', userSchema);

userSchema.path('email_id').validate(function(value, done) {
	console.log(1);
    mongoose.model('User').count({ email_id: value }, function(err, count) {
		console.log(2);
        if (err) {
            return done(err);
        }
        // If `count` is greater than zero, "invalidate"
        done(false);
		return true;
    });
	//return false;
}, 'Email already exists');

var Register = function (data) {
    return new Promise((resolve, reject) => {
        var user = new User();
        user.name = data.name;
        user.dob = data.dob;
        user.class = data.class;
        user.email_id = data.email_id;
        user.mobile_number = data.mobile_number;
        user.user_name = data.user_name;
        user.password = data.password;
        user.save(function (err, result) {
            if (err) {                
                var errors = [];
                //console.log(err);
                if (err.name === 'ValidationError') {
                    for (field in err.errors) {
                        errors.push({ [field]: err.errors[field].message });
                    }
                    reject(errors);
                } else if (err.name === 'Error') {
                    reject(err);
                } else {
                    reject(err);
                }
            } else {
                resolve('Successfully added data.');
            }
            return 'Respose Return';
        });
    });
}

module.exports = {
    Register
}
