const express = require('express');
const {handleGetAllUser, handleCreateUser, handleGetUserById, handleUpdateUserById, handleDeleteUserById} = require("../controllers/user");
const router = express.Router();

// router.get('/', (req, res) => {
//     res.send('Hello from home page!');
// });
// router.get('/about', (req, res) => {
//     res.send('Hello from about page!');
// });
// router.get('/contact', (req, res) => {
//     res.send('Hello from contact page!');
// });
// router.get('/users', async (req, res) => {
//     const allusers = await User.find({});
//     html = '<h1>Users</h1><ul>';
//     allusers.forEach(user => {
//         html += `<li>${user.first_name} ${user.last_name} - ${user.job_title}</li>`;
//     });
//     html += '</ul>';
//     res.send(html);
// });

router.route("/").get(handleGetAllUser).post(handleCreateUser);

router.route("/:id")
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById);

module.exports = router;