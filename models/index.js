const User = require('./User');
const Saveddrink= require('./Saveddrink');
const Note = require('./Note');

User.hasMany(Saveddrink, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Saveddrink.belongsTo(User, {
  foreignKey: 'user_id'
});

Note.belongsTo(User, {
  foreignKey: 'user_id'
})



module.exports = { User, Saveddrink, Note};
