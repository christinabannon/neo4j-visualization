

module.exports = {
    //after the user completes the survey this endpoint is called
    showAll: async (req, res) => {
        //console.log(req.body.surveyData);
        console.log('showAll hit');
        res.status(200);
        //res.send("Survey endpoint submitted by user " + userid);
        res.json({ success: true, result: 'hello world' });
    },

    newNode: async (req, res) => {
        console.log('newNode hit');
        let userName = req.body.userName
        res.status(200);
        // var number = await createNode('create (n:Person) return ID(n) as nodeId')
        var number = await createPerson(userName); 
        console.log('newNode num')
        console.log(number);
        res.json({ success: true, user_id: number });
    },

    saveSelection: async (req, res) => {
        console.log('saveSelection hit');
        // console.log(req.body)
        let userId = req.body.userId; 
        let greatDrinks = req.body.greatDrinks; 
        let grossDrinks = req.body.grossDrinks; 
        if (validateId(userId)) {
            let relationship = 'Likes'; 
            for (const i in greatDrinks) {
                let currentDrink = greatDrinks[i]; 
                createRelationship(userId, relationship, currentDrink); 
            }

            relationship = 'Dislikes'; 
            for (const i in grossDrinks) {
                let currentDrink = grossDrinks[i]; 
                createRelationship(userId, relationship, currentDrink); 
            }
        } else {
            res.json({success: false, message: 'invalid user id'})
        }
        res.status(200);
        res.json({ success: true })
    },


    matchByOtherUsers: async (req, res) => {
    //match(p1:Person)-[r1:Likes]->(d1:Drink)<-[r2:Likes]-(p2:Person)-[r3:Likes]->(d2:Drink) where ID(p1) = 127 return d2
    }
}

async function createPerson(userName) {
    const neo4j = require('neo4j-driver')
    const uri = 'bolt://localhost:7687'
    const user = 'neo4j'
    const password = 'DrinkDB'
    const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))
    const session = driver.session()
    let id = -1
    let query = 'create (n:Person {name: \'' + validateString(userName) + '\'}) return ID(n) as nodeId'
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

async function createNode(query) {
    const neo4j = require('neo4j-driver')
    const uri = 'bolt://localhost:7687'
    const user = 'neo4j'
    const password = 'DrinkDB'
    const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))
    const session = driver.session()
    let id = -1

    try {
        const result = await session.run(query)
        const singleRecord = result.records[0]
        id = singleRecord.get(0).low
    } 
    finally {
        await session.close()
    }
    // on application exit:
    await driver.close()
    return id
}

async function createRelationship(userId, relationship, drink) {
    let drinkId = drink.drink_id
    if (validateId(drinkId)) {
        const neo4j = require('neo4j-driver')
        const uri = 'bolt://localhost:7687'
        const user = 'neo4j'
        const password = 'DrinkDB'
        const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))
        const session = driver.session()
        let id = -1

        try { 
            let drinkName = validateString(drink.drink_name)

            let matchQuery = 'match (n:Drink) where n.drink_id = \'' + drinkId + '\'return n'; 
            const matchResult = await session.run(matchQuery)
            if (matchResult.records.length == 0) {
                const createDrinkQuery = 'create (n:Drink {name:\'' + drinkName + '\', drink_id: \'' + drinkId + '\'})'; 
                const createDrinkResult = await session.run(createDrinkQuery)
                let ingredientList = drink.drink_ingredients; 
                for (let i in ingredientList) {
                    const ingredient = validateString(ingredientList[i])
                    const checkIngredientQuery = 'match (n:Ingredient) where n.name = \'' + ingredient + '\' return n'
                    const checkIngredientResult  = await session.run(checkIngredientQuery)
                    if (checkIngredientResult.records.length == 0) {
                        const createIngredientQuery = 'create (n:Ingredient {name:\'' + ingredient + '\'}) return n';
                        const createIngredientResult = await session.run(createIngredientQuery);
                    } else {
                    }
                    const createIngredientRelationshipQuery = 'MATCH (d:Drink), (i:Ingredient) WHERE d.drink_id = \'' 
                    + drinkId + '\' AND i.name = \'' + ingredient + '\' CREATE (d)-[r:Contains]->(i) return d'; 
                    const createIngredientRelationshipResult = await session.run(createIngredientRelationshipQuery);
                }
            } 
            // todo account for when someone changes their mind
            let checkRelationshipQuery = 'MATCH (p:Person)-[r]->(d:Drink) WHERE ID(p) = ' + userId + 
            ' AND d.drink_id = \'' + drinkId + '\' return p'; 
            const checkRelationshipResult = await session.run(checkRelationshipQuery)
            if (checkRelationshipResult.records.length == 0) {
                let createRelationshipQuery = 'MATCH (p:Person), (d:Drink) WHERE ID(p) = ' + userId + 
                ' AND d.drink_id = \'' + drinkId + '\' CREATE (p)-[r:' + relationship + ']->(d) return p'; 
                const createRelationshipQueryResult = await session.run(createRelationshipQuery)
            }

        } catch(err) {
            console.log(err)
            userId = -1
        } finally {
            await session.close()
        }
        // on application exit:
        await driver.close()
    }
    return userId
}


function validateId(id) {
    return !isNaN(id)
}

function validateString(questionableString) {
    questionableString = questionableString.replace(/[^a-zA-Z ]/g, "");
    questionableString = questionableString.trim(); 
    if (questionableString.length > 20) {
        questionableString = questionableString.substring(0, 20); 
    }
    return questionableString; 
}
