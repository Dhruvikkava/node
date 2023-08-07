const { mongoose } = require("mongoose");
const setErrors = require("../errors/errors");
const rolesModels = require("../models/roles.models");
const usersModels = require("../models/users.models");
const ObjectId = mongoose.Types.ObjectId;


class userController {
    constructor() { }
    async createUser(req, res) {
        try {
            const { first_name, last_name, email, password } = req.body;

            let newArr = [];
            for (let i = 0; i < req.body.role.length; i++) {
                let isExistRole = await rolesModels.findOne({ 'role': req.body.role[i] });
                if (isExistRole) {
                    newArr.push(isExistRole.id);
                } else {
                    let createRole = await rolesModels.create({
                        'role': req.body.role[i],
                        'address': 'Gujarat'
                    })
                    if (createRole) {
                        newArr.push(createRole.id);
                    }
                }
            }
            let userData = {
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: password,
                roleId: newArr
            }
            let insertRecord = await usersModels.create(userData);
            if (insertRecord) {
                setErrors(res, 200, 'Inserted successfully');
            } else {
                setErrors(res, 500, 'Not Inserted');
            }

        } catch (error) {
            console.log(error);
        }
    }

    async getUserData(req, res) {
        try {
            const getData = await usersModels.find();
            if (getData) {
                setErrors(res, 200, 'fetched successfully', getData);
            } else {
                setErrors(res, 500, 'Not Inserted');
            }
        } catch (error) {

        }
    }

    async getOneUserData(req, res) {
        try {
            // const getData = await usersModels.findById(req.params.id).populate('roleId', 'role address');
            let id = new mongoose.Types.ObjectId(req.params.id);
            const getData = await usersModels.aggregate([
                {
                    $match: { _id: id }
                },
                {
                    '$lookup': {
                        'from': 'roles',
                        'let': { roleId: '$roleId' },
                        'pipeline': [
                            { '$match': { '$expr': { '$in': ["$_id", "$$roleId"] } } }
                        ],
                        'as': 'roleObjects',
                    }
                },
                // {
                //     $lookup: {
                //         from: 'roles',
                //         localField: 'roleId',
                //         foreignField: '_id',
                //         as: 'myUserData'
                //     }
                // },
                // { $unwind: "$myUserData" },
                // {
                //     $match: {
                //         $or: [
                //             { first_name: { $regex: req.body.first_name } },
                //             { "myUserData.address": { $regex: req.body.first_name } },
                //         ]
                //     }
                // },
                // {
                //     $match: {"myUserData.role": "A"}
                // },
                // { $sort: { "myUserData.address": -1 } },
                {
                    $project: {
                        first_name: '$$ROOT.first_name',
                        last_name: '$$ROOT.last_name',
                        email: '$$ROOT.email',
                        roles: '$roleObjects',
                        isAdmin: {
                            "$cond": {
                                "if": { "$eq": ["$myUserData.role", "A"] },
                                "then": true,
                                "else": false
                            }
                        },
                    }
                }

            ])
            console.log(getData)
            if (getData) {
                setErrors(res, 200, 'fetched successfully', getData);
            } else {
                setErrors(res, 500, 'Not fetched');
            }
        } catch (error) {
            console.log(error)
        }
    }

    async updateUserData(req, res) {
        let obj = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
        }
        try {
            const getData = await usersModels.findByIdAndUpdate(req.params.id, obj, { new: true });
            if (getData) {
                setErrors(res, 200, 'updated successfully', getData);
            } else {
                setErrors(res, 500, 'Not updated');
            }
        } catch (error) {

        }
    }
}

module.exports = userController;