const User = require('../models/User');
const jwt = require('jsonwebtoken');

const handleError = (err) => {
    const errors = { email: '', password: '', firstName: '', lastName:'' };
    // duplicate error code
    if(err.code === 11000) {
        errors.email = 'That email is already registered';
        return errors;
    }
    // validation errors
    if (err.message.includes('users validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        }) 
    }
    return errors;
} 

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT, { expiresIn: 3 * 24 * 60 * 60 })
}

module.exports.signup_post = async (req, res) => {
    // console.log('new', req.body);
    const { email, password, firstName, lastName } = req.body;
    try {
        const user = await User.create({ email, password, firstName, lastName });
        const token = createToken(user._id);
        res.status(201).json({ user, token })
    } catch (err) {
        console.log(err.code)
        const errors = handleError(err);
        console.log('=========================================')
        console.log('ERRRRRRRRRRRRRR', errors);
        // console.log('Err Msg:', err._message);
        // console.log('Err Errors:', err.errors);

        // const error = handleError(err);
        console.log('=========================================')
        // console.log('error: ',error);
        // console.log('=========================================')
        res.status(400).json(errors);
    }
}

module.exports.signin_post = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        console.log('Login success');
        res.status(201).json({ user, token })
    } catch (err) {
        // console.log(err);
        // console.log('=========================================')
        const errors = handleError(err);
        // console.log('thiss is errrorrrr: ',error)
        // console.log('=========================================')
        res.status(400).json(errors);
    }
}

module.exports.get_user = (req, res) => {
    User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user))
}