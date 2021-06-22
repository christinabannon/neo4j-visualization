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
    },

    newNode: async (req, res) => {
        console.log('newNode hit');
        res.status(200);
        var number = await createNode('create (n:Person) return ID(n) as nodeId')
        console.log('newNode num')
        console.log(number);
        res.json({ success: true, user_id: number });
    },

    saveSelection: async (req, res) => {
        console.log('saveSelection hit');
        // console.log(req)
        console.log(req.body)
        res.status(200);
        res.json({ success: true })
    }

    

    // ,

    // randomDrinks: async (req, res) => {
    //     let result = {
    //         "error": "didn't work"
    //     }
    //     await axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php')
    //         .then(function (response) {
    //             result = response.data;
    //         })
    //         .catch(function (error) {
    //             result = error;
    //         })
    //     res.json({ success: true, result: result });
    // }
}

async function createNode(query) {
    const neo4j = require('neo4j-driver')
    const uri = 'bolt://localhost:7687'
    const user = 'neo4j'
    const password = 
    const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))
    const session = driver.session()
    let id = -1

    try {
        const result = await session.run(query)
        const singleRecord = result.records[0]
        id = singleRecord.get(0).low

        console.log("query low")
        console.log(id)

    } finally {
        await session.close()
    }
    // on application exit:
    await driver.close()
    return id
}

async function createRelationship(personId, list, drinkId) {
    if (validateId(drinkId)) {
        const neo4j = require('neo4j-driver')
        const uri = 'bolt://localhost:7687'
        const user = 'neo4j'
        const password = 
        const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))
        const session = driver.session()
        let id = -1

        try {
            // let relationship = ''; 
            // if (list == 'great') {
            //     relationship = 'likes'
            // } else {
            //     relationship = 'dislikes'
            // }




            const result = await session.run(query)
            const singleRecord = result.records[0]
            id = singleRecord.get(0).low

            console.log("query low")
            console.log(id)

        } finally {
            await session.close()
        }
        // on application exit:
        await driver.close()
    }
    return personId
}

function validateId(id) {
    return !isNaN(id)
}
