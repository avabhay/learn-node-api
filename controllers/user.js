const User = require('../models/user');
const bcrypt = require('bcrypt');

async function handleGetAllUser(req, res) {
    try {
        const allusers = await User.find({});
        if (allusers) {
            res.json(allusers);
        } else {
            res.status(404).send('Data not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
    
}

async function handleCreateUser(req, res) {
    try {
        const body = req.body;
        console.log("body", body);
        if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
            return res.status(400).json({msg:"All fields required"});        
        }

        const result = await User.create({
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            password: bcrypt.hashSync(body.password, 10),
            gender: body.gender,
            job_title: body.job_title,
        });
        
        return res.status(201).json({status:"success"});
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({msg:"Internal server error"});
        
    }
}

async function handleGetUserById(req, res) {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
    
}

async function handleUpdateUserById(req, res) {
    try {
        const updateuser = await User.findByIdAndUpdate(req.params.id, {
            last_name: "last name update",
        });
        return res.status(201).json({status: "success"});
    } catch (error) {
        res.status(500).send('Server error');
    }
    
}

async function handleDeleteUserById(req, res) {
    try {
        const deleteuser = await User.findByIdAndDelete(req.params.id);
        if (deleteuser) {
            return res.status(200).json({status: "success"});
        } else {
            return res.status(404).json({status: "User not found"});
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
    
}

module.exports = {
    handleGetAllUser,
    handleCreateUser,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById
};