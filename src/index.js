'use strict';

// Include the serverless-slack bot framework
const slack = require('serverless-slack');


// The function that AWS Lambda will call
exports.handler = slack.handler.bind(slack);


// Slash Command handler
slack.on('/admins', (msg, bot) => {
  let message = {
    text: "Our admins are: <@jschuur> foo"
  };

  // ephemeral reply
  bot.replyPrivate(message);
});
