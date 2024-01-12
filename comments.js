// Create web server
// 1. npm init -y
// 2. npm i express
// 3. npm i -D nodemon
// 4. npm i cors
// 5. npm i body-parser
// 6. npm i uuid
// 7. npm i jsonwebtoken
// 8. npm i express-validator
// 9. npm i bcryptjs
// 10. npm i multer
// 11. npm i mongoose
// 12. npm i mongoose-unique-validator
// 13. npm i mongoose-paginate-v2
// 14. npm i mongoose-autopopulate
// 15. npm i jsonwebtoken
// 16. npm i dotenv
// 17. npm i hbs
// 18. npm i morgan
// 19. npm i express-session
// 20. npm i connect-mongo
// 21. npm i passport
// 22. npm i passport-local
// 23. npm i passport-local-mongoose
// 24. npm i express-flash
// 25. npm i method-override
// 26. npm i connect-flash
// 27. npm i moment

// 1. Import required modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportLocalMongoose = require('passport-local-mongoose');
const expressSession = require('express-session');
const connectMongo = require('connect-mongo');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const moment = require('moment');

// 2. Create an instance of express
const app = express();

// 3. Setup middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.static('uploads'));
app.use(flash());

// 4. Setup view engine
app.set('view engine', 'hbs');

// 5. Setup mongoose
mongoose.connect('mongodb://localhost:27017/express-blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {}).catch((err) => {
    console.log(err);
});