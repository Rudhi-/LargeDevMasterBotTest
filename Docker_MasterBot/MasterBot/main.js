/**
 * Created by Anirudha Simha on 4/10/2017.
 */

var controller = require('./node_modules/botkit').slackbot({
    // interactive replies lets you make buttons
    interactive_replies: true,

    // Send outgoing messages via the RTM instead of using
    // Slack's RESTful API which supports more features
    send_via_rtm:true,

    // Require Delivery Confirmation for RTM Messages, useful for sending
    // many messages or if they have images or etc.
    // send_via_rtm must be TRUE for this to work
    require_delivery: true,

    debug: false,
});



var bot = controller.spawn({
    token: require("./properties.json").slack_token
}).startRTM(function(err, bot, payload) {
    if (err) {
        throw new Error('Could not connect to Slack');
    }
});


controller.hears([/Trello (.+)/i], ['direct_message', 'direct_mention'], function (bot, message) {
    bot.reply(message, "Sorry Trello: "+message.match[1].toLocaleLowerCase().trim()+" functionality has not been developed yet!");
});

controller.hears([/PB WORKS (.+)/i], ['direct_message', 'direct_mention'], function (bot, message) {
    bot.reply(message, "Sorry PB WORKS: "+message.match[1].toLocaleLowerCase().trim()+" functionality has not been developed yet!");
});

controller.hears([/DOCKER (.+)/i], ['direct_message', 'direct_mention'], function (bot, message) {
    bot.reply(message, "Sorry DOCKER: "+message.match[1].toLocaleLowerCase().trim()+" functionality has not been developed yet!");
});

controller.hears([/GITHUB (.+)/i], ['direct_message', 'direct_mention'], function (bot, message) {
    bot.reply(message, "Sorry GITHUB: "+message.match[1].toLocaleLowerCase().trim()+" functionality has not been developed yet!");
});

