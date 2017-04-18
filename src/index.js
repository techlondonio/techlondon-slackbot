'use strict';

// Include the serverless-slack bot framework
const slack = require('serverless-slack');


// The function that AWS Lambda will call
exports.handler = slack.handler.bind(slack);


// Slash Command handler
slack.on('/admins', (msg, bot) => {
  let message = {
    text: "Our community admins are: <@adamturnbulluk> (lead), <@simonredwards>, <@gusferguson>, <@jerome>, <@philefstat>, <@sheppyc>, <@joostschuur> and <@jonbstrong>. How can we help?"
  };

  // ephemeral reply
  bot.replyPrivate(message);
});
