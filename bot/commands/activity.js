const App = require('./../../playmate/app.js');

module.exports = {
    name: 'activity',
    description: 'Activity Leaderboard of clan.',
    execute(msg, args) {
      console.log(msg.content);
      console.log(args);
      if(args.length > 0) {
        App.getActivityCommandDetails(args[0], msg.channel);
      }
      console.log('it\'s working');
    },
  };