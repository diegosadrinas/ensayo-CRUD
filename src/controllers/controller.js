const fs = require ('fs');
const path = require ('path');

const usersPath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));

const controller = {
    read: (req, res) => {
        res.render('usuarios')
    }
}

module.exports = controller;