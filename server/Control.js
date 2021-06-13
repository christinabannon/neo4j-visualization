//New Cookie Stuff
// var ObjectId = require('mongodb').ObjectID;
// var jwt = require('jsonwebtoken');
// const UserModel = require("../models/UserModel");

module.exports = {
    //after the user completes the survey this endpoint is called
    showAll: async (req, res) => {
        //console.log(req.body.surveyData);
        //let userid = createuser(req.body.surveyData)
        console.log('showAll hit');
        //console.log("USER " + userid)
    //    res.cookie('jwtoken', createjwt(userid))
        res.status(200);
        //res.send("Survey endpoint submitted by user " + userid);
        res.json({ success: true, result: 'hello world' });
    }
}
