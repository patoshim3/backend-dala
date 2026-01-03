const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

// Users route
app.use('/api/users', require('./routes/user.routes'));

// Tours route
app.use('/api/tours', require('./routes/tour.routes'));

// Benefits route
app.use('/api/benefits', require('./routes/benefit.routes'));

// TeamMembers route
app.use('/api/team-members', require('./routes/teamMember.routes'));

// MongoDB қосу
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB қосылды'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server ${PORT} портында`);
});
