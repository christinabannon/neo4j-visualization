//New Cookie Stuff
// var ObjectId = require('mongodb').ObjectID;
// var jwt = require('jsonwebtoken');
// const UserModel = require("../models/UserModel");

module.exports = {
    //after the user completes the survey this endpoint is called
    afterSurvey: async (req, res) => {
        //console.log(req.body.surveyData);
        let userid = createuser(req.body.surveyData)
        //console.log("USER " + userid)
        res.cookie('jwtoken', createjwt(userid))
        res.status(200);
        //res.send("Survey endpoint submitted by user " + userid);
        res.json({ success: true, result: userid });
    },

    //get user by ID
    getUser: async (req, res) => {
        // //console.log(req.cookies);
        // let userid = req.query.userid;
        // //console.log(userid);
        // UserModel.findById(ObjectId(userid))
        // .then( user => {
        //     //console.log(user)
        //     if(!user) {
        //         res.json({success: false, result: "User does not exist."})
        //     }
        //     else {
        //         //user was found
        //         res.json({success: true, result: user})
        //     }
        // })
        // .catch(err => {
        //     res.json({success: false, result: err})
        // })
    },

    //get All Users
    getAllUsers: async (req, res) => {
        // UserModel.find()
        // .then( user => {
        //     //console.log(user)
        //     if(!user) {
        //         res.json({success: false, result: "User does not exist."})
        //     }
        //     else {
        //         //user was found
        //         res.json({success: true, result: user})
        //     }
        // })
        // .catch(err => {
        //     res.json({success: false, result: err})
        // })
    },

    //add an uploaded drink to a user document
    addDrinkToUser: async (req,res) => {
        // let userid = req.body.userid;
        // let drinkObj = req.body.drinkObj;
        // //console.log(drinkObj)
        // UserModel.findById(ObjectId(userid))
        // .then( user => {
        //     if(!user) {
        //         res.json({success: false, result: "User does not exist."})
        //     }
        //     else {
        //         //user was found
        //         user.uploadedDrinks.push(drinkObj);
        //         user.save();
        //         res.json({success: true, result: user})
        //     }
        // })
        // .catch(err => {
        //     res.json({success: false, result: err})
        // })
    },

    //update user's weightings
    updateWeightings: async (req,res) => {
        // //console.log("updating weights");
        // let userid = req.body.userid;
        // let newWeightings = req.body.newWeightings;
        // //console.log(newWeightings)
        // UserModel.findById(ObjectId(userid))
        // .then( user => {
        //     if(!user) {
        //         res.json({success: false, result: "User does not exist."})
        //     }
        //     else {
        //         //user was found
        //         user.ingredientWeightings = [newWeightings];
        //         user.save();
        //         res.json({success: true, result: user})
        //     }
        // })
        // .catch(err => {
        //     res.json({success: false, result: err})
        // })
    }
}



// createuser = function (surveyData) {
//     //console.log(surveyData);
//     //console.log("Writing survey data into database and creating a user")
//     let user = new UserModel(
//         {
//             uploadedDrinks: [],
//             ingredientWeightings: surveyData
//         }
//     )
//     user.save();
//     let userid = user._id;  // User id returned by database stored procedure
//     return userid
// }

// createjwt = function (userid) {
//     const secret = "zWkh]M7J_?3F:@kXEr,)kKHk" // JWT secret key
//     return jwt.sign({ "userid": userid }, secret)
// }