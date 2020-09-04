const mongoose = require("mongoose");
var db = mongoose.connection;

// input a string (the question ID), returns question entry
function getQuestion(Ques, id) {
    return Ques.findById(id).exec();
}

// input a rating range (as floor and ceiling values), returns a range of questions
async function getQuestions (Ques, ratingFloor, ratingCeiling, subject, units) {
    const gotQ = Ques.find({subject: [subject], rating: { $gte: ratingFloor, $lte: ratingCeiling } });
    var tempQ = await gotQ.exec();
    for(i = 0; i < tempQ.length; i++){
        const found = units.some(r=> tempQ[i].units.includes(r));
        if(!found){
            tempQ.splice(i, 1);
            i--;
        }
    }
    return tempQ;
}

// return rating of the user logged in right now
function getRating (subject, req) {
    return req.user.rating[subject.toLowerCase()];
}

// set the rating of the user logged in right now
function setRating (subject, newRating, req) {
    req.user.rating[subject.toLowerCase()] = newRating;
    db.collection("users").findOneAndUpdate({ username: req.user.username }, { $set: { rating: req.user.rating } });
}

// modify the correct/wrong counter for users, and the pass/fail counter for questions, as well as tag collector tags

function updateAll (req, question, correct) {
    updateCounters(req, question, correct);
    updateTracker(req, question, correct);
    updateLastAnswered(req, question, correct);
}
function updateCounters (req, question, correct) {
    if (correct) {
        // update counters
        req.user.stats.correct++;
        question.stats.pass++;
        // update tag collector
        question.tags.forEach((tag) => {
            if(!req.user.stats.collectedTags.includes(tag)) {
                req.user.stats.collectedTags.push(tag);
            }
        });
    } else if (!correct) {
        req.user.stats.wrong++;
        question.stats.fail++;
    }
    db.collection("users").findOneAndUpdate({ username: req.user.username }, { $set: { stats: req.user.stats } });
    db.collection("questions").findOneAndUpdate({ _id: question._id }, { $set: { stats: { pass: question.stats.pass, fail: question.stats.fail } } });
}
function updateTracker (req, question, correct) {
    // update rating tracker
    var tracker;
    if(req.user.stats.ratingTracker === undefined) {
        req.user.stats.ratingTracker = {};
    }
    try {
        // try to update the tracker
        tracker = req.user.stats.ratingTracker[question.subject[0].toLowerCase()];
        tracker.push(req.user.rating[question.subject[0].toLowerCase()]);
        while(tracker.length > 20) {
            tracker.shift();
        }
    } catch(err) {
        // tracker doesn't exist (yet), so create one!
        tracker = [req.user.rating[question.subject[0].toLowerCase()]];
        req.user.stats.ratingTracker[question.subject[0].toLowerCase()];
    }
    req.user.stats.ratingTracker[question.subject[0].toLowerCase()] = tracker;
}
function updateLastAnswered (req, question, correct) {
    // updated "last answered" field with question ID
    req.user.stats.lastAnswered = question._id;
}

// set question rating
function setQRating (antsy, newQRate){
    antsy.rating = newQRate;
    db.collection("questions").findOneAndUpdate({ _id: antsy._id }, { $set: {rating: antsy.rating} });
}

// generate a leaderboard for a certain subject; count is the number of people on board
function generateLeaderboard (User, subject, count) {
    var query = { rating: { physics: {}, biology: {}, chemistry: {}}};
    query.rating[subject] = { $gte: 500 };
    User.find(query).lean().exec(function(err, arr) {
        console.log(arr);
    });
    //var leaderboard = User.find( { rating: { $exists: true}} ).sort({points : -1}).limit(count).toArray();
}

module.exports = { getQuestion: getQuestion, getQuestions: getQuestions, getRating: getRating, setRating: setRating, setQRating: setQRating, updateAll: updateAll, generateLeaderboard: generateLeaderboard};
