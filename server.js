const express = require('express');
const app = express();
const PORT = 5003;

// Middleware to parse JSON
app.use(express.json());

// Dummy data (20+ users for testing)
let users = [
    { id: 1, name: 'Shivam', email: 'shivam@example.com' },
    { id: 2, name: 'Ravi', email: 'ravi@example.com' },
    { id: 3, name: 'Amit', email: 'amit@example.com' },
    { id: 4, name: 'Neha', email: 'neha@example.com' },
    { id: 5, name: 'Priya', email: 'priya@example.com' },
    { id: 6, name: 'Rahul', email: 'rahul@example.com' },
    { id: 7, name: 'Sonal', email: 'sonal@example.com' },
    { id: 8, name: 'Manish', email: 'manish@example.com' },
    { id: 9, name: 'Anita', email: 'anita@example.com' },
    { id: 10, name: 'Karan', email: 'karan@example.com' },
    { id: 11, name: 'Ritika', email: 'ritika@example.com' },
    { id: 12, name: 'Deepak', email: 'deepak@example.com' },
    { id: 13, name: 'Simran', email: 'simran@example.com' },
    { id: 14, name: 'Vikram', email: 'vikram@example.com' },
    { id: 15, name: 'Pooja', email: 'pooja@example.com' },
    { id: 16, name: 'Aditya', email: 'aditya@example.com' },
    { id: 17, name: 'Rohan', email: 'rohan@example.com' },
    { id: 18, name: 'Isha', email: 'isha@example.com' },
    { id: 19, name: 'Nikhil', email: 'nikhil@example.com' },
    { id: 20, name: 'Meera', email: 'meera@example.com' },
];



// Routes

app.get('/users', (req, res) => res.json(users));

app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
});

app.post('/users', (req, res) => {
    const { name, email } = req.body;
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });

    const { name, email } = req.body;
    if (name) user.name = name;
    if (email) user.email = email;

    res.json(user);
});

app.delete('/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'User not found' });

    const deleted = users.splice(index, 1);
    res.json(deleted[0]);
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
