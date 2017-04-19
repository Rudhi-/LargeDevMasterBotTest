/**
 * Created by Anirudha Simha on 4/10/2017.
 */

var controller = require('./node_modules/botkit').slackbot({
    // interactive replies lets you make buttons
    interactive_replies: true,

    // Send outgoing messages via the RTM instead of using
    // Slack's RESTful API which supports more features
    send_via_rtm: true,

    // Require Delivery Confirmation for RTM Messages, useful for sending
    // many messages or if they have images or etc.
    // send_via_rtm must be TRUE for this to work
    require_delivery: true,

    debug: true,
    scopes: ['bot', 'users:read'],
});

var bot = controller.spawn({
    token: require("./properties.json").slack_token
}).startRTM(function (err, bot, payload) {
    if (err) {
        throw new Error('Could not connect to Slack');
    }
});

//the regex will only match pokemon names
controller.hears("trello", ['direct_message', 'direct_mention'], function (bot, message) {
    var masterbot_id = "";
    bot.api.users.list({token: require("./properties.json").slack_token}, function (err, response) {
        //console.log(JSON.stringify(response, null, 4));
        for (var i = 0; i < response["members"].length; i++) {
            //console.log(response["members"][i]);
            if (response["members"][i]["name"] == "masterbot") {
                masterbot_id = response["members"][i]["id"];

                break;
            }
        }
        //console.log("MASTER BOT ID "+masterbot_id);
        //console.log(JSON.parse(user_list));
        bot.reply(message, "STARTING TRELLO TEST");
        bot.reply(message, "<@" + masterbot_id + "|masterbot> Trello get actions");
        bot.reply(message, "<@" + masterbot_id + "|masterbot> Trello get boards");
        bot.reply(message, "<@" + masterbot_id + "|masterbot> Trello get cards");
        bot.reply(message, "<@" + masterbot_id + "|masterbot> Trello get checklists");
        bot.reply(message, "<@" + masterbot_id + "|masterbot> Trello get lists");
        bot.reply(message, "<@" + masterbot_id + "|masterbot> Trello get members");

        bot.reply(message, "<@" + masterbot_id + "|masterbot> Trello update actions");
        bot.reply(message, "<@" + masterbot_id + "|masterbot> Trello update boards");
        bot.reply(message, "<@" + masterbot_id + "|masterbot> Trello update cards");
        bot.reply(message, "<@" + masterbot_id + "|masterbot> Trello update checklists");
        bot.reply(message, "<@" + masterbot_id + "|masterbot> Trello update lists");
        bot.reply(message, "<@" + masterbot_id + "|masterbot> Trello update members");

        bot.reply(message, "<@" + masterbot_id + "|masterbot> Trello info on organizations");
        bot.reply(message, "<@" + masterbot_id + "|masterbot> Trello info on notifications");
        bot.reply(message, "<@" + masterbot_id + "|masterbot> Trello info on searches");

    });

});

controller.hears("pb", ['direct_message', 'direct_mention'], function (bot, message) {
    var masterbot_id = "";
    bot.api.users.list({token: require("./properties.json").slack_token}, function (err, response) {
        //console.log(JSON.stringify(response, null, 4));
        for (var i = 0; i < response["members"].length; i++) {
            //console.log(response["members"][i]);
            if (response["members"][i]["name"] == "masterbot") {
                masterbot_id = response["members"][i]["id"];

                break;
            }
        }
        //console.log("MASTER BOT ID "+masterbot_id);
        //console.log(JSON.parse(user_list));
        bot.reply(message, "STARTING PB WORKS TEST");

        bot.reply(message, "<@" + masterbot_id + "|masterbot> PB WORKS create task");
        bot.reply(message, "<@" + masterbot_id + "|masterbot> PB WORKS modify task");
        bot.reply(message, "<@" + masterbot_id + "|masterbot> PB WORKS delete task");

        bot.reply(message, "<@" + masterbot_id + "|masterbot> PB WORKS create user");
        bot.reply(message, "<@" + masterbot_id + "|masterbot> PB WORKS delete user");

        bot.reply(message, "<@" + masterbot_id + "|masterbot> PB WORKS create milestone");
        bot.reply(message, "<@" + masterbot_id + "|masterbot> PB WORKS modify milestone");
        bot.reply(message, "<@" + masterbot_id + "|masterbot> PB WORKS delete milestone");

        bot.reply(message, "<@" + masterbot_id + "|masterbot> PB WORKS get task list");

        bot.reply(message, "<@" + masterbot_id + "|masterbot> PB WORKS get updates on users");

    });

});

controller.hears("docker", ['direct_message', 'direct_mention'], function (bot, message) {
    var masterbot_id = "";
    bot.api.users.list({token: require("./properties.json").slack_token}, function (err, response) {
        //console.log(JSON.stringify(response, null, 4));
        for (var i = 0; i < response["members"].length; i++) {
            //console.log(response["members"][i]);
            if (response["members"][i]["name"] == "masterbot") {
                masterbot_id = response["members"][i]["id"];

                break;
            }
        }
        //console.log("MASTER BOT ID "+masterbot_id);
        //console.log(JSON.parse(user_list));
        bot.reply(message, "STARTING DOCKER TEST");

        bot.reply(message, "<@" + masterbot_id + "|masterbot> DOCKER create dockerfile");
        bot.reply(message, "<@" + masterbot_id + "|masterbot> DOCKER initialize repo");
        bot.reply(message, "<@" + masterbot_id + "|masterbot> DOCKER push to repo");
    });

});

controller.hears("git", ['direct_message', 'direct_mention'], function (bot, message) {
    var masterbot_id = "";
    bot.api.users.list({token: require("./properties.json").slack_token}, function (err, response) {
        //console.log(JSON.stringify(response, null, 4));
        for (var i = 0; i < response["members"].length; i++) {
            //console.log(response["members"][i]);
            if (response["members"][i]["name"] == "masterbot") {
                masterbot_id = response["members"][i]["id"];

                break;
            }
        }


        //console.log("MASTER BOT ID "+masterbot_id);
        //console.log(JSON.parse(user_list));
        bot.reply(message, "STARTING GIT TEST");

        bot.reply(message, "<@" + masterbot_id + "|masterbot> GITHUB create repo");
        bot.reply(message, "<@" + masterbot_id + "|masterbot> GITHUB push to repo");
        bot.reply(message, "<@" + masterbot_id + "|masterbot> GIHUB delete repo");
        bot.reply(message, "<@" + masterbot_id + "|masterbot> GIHUB show repo commits");
        bot.reply(message, "<@" + masterbot_id + "|masterbot> GIHUB show repo branches");
    });

});