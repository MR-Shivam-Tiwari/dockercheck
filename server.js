const express = require('express');
const app = express();
const PORT = 5003;

// Middleware to parse JSON
app.use(express.json());

// Rich dummy data with detailed user profiles
let users = [
    { 
        id: 1, 
        name: 'Shivam Tiwari', 
        email: 'shivam@example.com', 
        phone: '+91-9876543210',
        role: 'Full Stack Developer',
        department: 'Engineering',
        salary: 850000,
        location: 'Mumbai',
        joinDate: '2023-01-15',
        isActive: true,
        skills: ['React', 'Node.js', 'MongoDB', 'Docker'],
        profile: { age: 25, education: 'B.Tech CSE', experience: 3 }
    },
    { 
        id: 2, 
        name: 'Ravi Kumar', 
        email: 'ravi@example.com', 
        phone: '+91-9765432109',
        role: 'DevOps Engineer',
        department: 'Infrastructure',
        salary: 950000,
        location: 'Bangalore',
        joinDate: '2022-08-10',
        isActive: true,
        skills: ['AWS', 'Kubernetes', 'Jenkins', 'Terraform'],
        profile: { age: 28, education: 'M.Tech', experience: 5 }
    },
    { 
        id: 3, 
        name: 'Amit Sharma', 
        email: 'amit@example.com', 
        phone: '+91-9654321098',
        role: 'Backend Developer',
        department: 'Engineering',
        salary: 750000,
        location: 'Delhi',
        joinDate: '2023-03-20',
        isActive: true,
        skills: ['Python', 'Django', 'PostgreSQL', 'Redis'],
        profile: { age: 26, education: 'B.Tech IT', experience: 3 }
    },
    { 
        id: 4, 
        name: 'Neha Agarwal', 
        email: 'neha@example.com', 
        phone: '+91-9543210987',
        role: 'Frontend Developer',
        department: 'Engineering',
        salary: 700000,
        location: 'Pune',
        joinDate: '2023-06-01',
        isActive: true,
        skills: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
        profile: { age: 24, education: 'B.Tech CSE', experience: 2 }
    },
    { 
        id: 5, 
        name: 'Priya Singh', 
        email: 'priya@example.com', 
        phone: '+91-9432109876',
        role: 'Product Manager',
        department: 'Product',
        salary: 1200000,
        location: 'Mumbai',
        joinDate: '2022-01-15',
        isActive: true,
        skills: ['Product Strategy', 'User Research', 'Analytics', 'Agile'],
        profile: { age: 30, education: 'MBA', experience: 7 }
    },
    { 
        id: 6, 
        name: 'Rahul Gupta', 
        email: 'rahul@example.com', 
        phone: '+91-9321098765',
        role: 'Data Scientist',
        department: 'Analytics',
        salary: 1000000,
        location: 'Bangalore',
        joinDate: '2023-02-10',
        isActive: true,
        skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL'],
        profile: { age: 27, education: 'M.Sc Data Science', experience: 4 }
    },
    { 
        id: 7, 
        name: 'Sonal Joshi', 
        email: 'sonal@example.com', 
        phone: '+91-9210987654',
        role: 'UI/UX Designer',
        department: 'Design',
        salary: 650000,
        location: 'Delhi',
        joinDate: '2023-04-12',
        isActive: true,
        skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
        profile: { age: 23, education: 'B.Des', experience: 1.5 }
    },
    { 
        id: 8, 
        name: 'Manish Patel', 
        email: 'manish@example.com', 
        phone: '+91-9109876543',
        role: 'QA Engineer',
        department: 'Quality Assurance',
        salary: 600000,
        location: 'Ahmedabad',
        joinDate: '2022-11-08',
        isActive: true,
        skills: ['Selenium', 'Jest', 'API Testing', 'Automation'],
        profile: { age: 29, education: 'B.Tech CSE', experience: 5 }
    },
    { 
        id: 9, 
        name: 'Anita Mishra', 
        email: 'anita@example.com', 
        phone: '+91-9098765432',
        role: 'HR Manager',
        department: 'Human Resources',
        salary: 800000,
        location: 'Chennai',
        joinDate: '2021-05-20',
        isActive: true,
        skills: ['Recruitment', 'Employee Relations', 'Performance Management'],
        profile: { age: 32, education: 'MBA HR', experience: 8 }
    },
    { 
        id: 10, 
        name: 'Karan Malhotra', 
        email: 'karan@example.com', 
        phone: '+91-8987654321',
        role: 'Mobile Developer',
        department: 'Engineering',
        salary: 780000,
        location: 'Hyderabad',
        joinDate: '2023-01-30',
        isActive: true,
        skills: ['React Native', 'Flutter', 'iOS', 'Android'],
        profile: { age: 26, education: 'B.Tech CSE', experience: 3 }
    },
    { 
        id: 11, 
        name: 'Ritika Sharma', 
        email: 'ritika@example.com', 
        phone: '+91-8876543210',
        role: 'Business Analyst',
        department: 'Business',
        salary: 700000,
        location: 'Noida',
        joinDate: '2022-09-15',
        isActive: true,
        skills: ['Requirements Analysis', 'SQL', 'Tableau', 'Process Mapping'],
        profile: { age: 28, education: 'MBA', experience: 4 }
    },
    { 
        id: 12, 
        name: 'Deepak Yadav', 
        email: 'deepak@example.com', 
        phone: '+91-8765432109',
        role: 'Security Engineer',
        department: 'Security',
        salary: 1100000,
        location: 'Mumbai',
        joinDate: '2022-04-01',
        isActive: true,
        skills: ['Cyber Security', 'Penetration Testing', 'Network Security'],
        profile: { age: 31, education: 'M.Tech Cyber Security', experience: 6 }
    },
    { 
        id: 13, 
        name: 'Simran Kaur', 
        email: 'simran@example.com', 
        phone: '+91-8654321098',
        role: 'Marketing Manager',
        department: 'Marketing',
        salary: 850000,
        location: 'Delhi',
        joinDate: '2021-12-10',
        isActive: true,
        skills: ['Digital Marketing', 'SEO', 'Content Strategy', 'Social Media'],
        profile: { age: 29, education: 'MBA Marketing', experience: 5 }
    },
    { 
        id: 14, 
        name: 'Vikram Singh', 
        email: 'vikram@example.com', 
        phone: '+91-8543210987',
        role: 'Solutions Architect',
        department: 'Engineering',
        salary: 1400000,
        location: 'Bangalore',
        joinDate: '2020-07-15',
        isActive: true,
        skills: ['System Design', 'AWS', 'Microservices', 'Architecture'],
        profile: { age: 35, education: 'M.Tech', experience: 10 }
    },
    { 
        id: 15, 
        name: 'Pooja Agrawal', 
        email: 'pooja@example.com', 
        phone: '+91-8432109876',
        role: 'Finance Manager',
        department: 'Finance',
        salary: 950000,
        location: 'Mumbai',
        joinDate: '2021-08-25',
        isActive: true,
        skills: ['Financial Planning', 'Budget Management', 'Tax Planning'],
        profile: { age: 33, education: 'CA + MBA Finance', experience: 8 }
    },
    { 
        id: 16, 
        name: 'Aditya Verma', 
        email: 'aditya@example.com', 
        phone: '+91-8321098765',
        role: 'Cloud Engineer',
        department: 'Infrastructure',
        salary: 900000,
        location: 'Pune',
        joinDate: '2023-05-12',
        isActive: true,
        skills: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
        profile: { age: 27, education: 'B.Tech CSE', experience: 4 }
    },
    { 
        id: 17, 
        name: 'Rohan Khanna', 
        email: 'rohan@example.com', 
        phone: '+91-8210987654',
        role: 'Technical Writer',
        department: 'Documentation',
        salary: 550000,
        location: 'Remote',
        joinDate: '2023-07-01',
        isActive: true,
        skills: ['Technical Writing', 'Documentation', 'API Docs', 'Markdown'],
        profile: { age: 25, education: 'B.Tech + English Honors', experience: 2 }
    },
    { 
        id: 18, 
        name: 'Isha Patel', 
        email: 'isha@example.com', 
        phone: '+91-8109876543',
        role: 'Sales Executive',
        department: 'Sales',
        salary: 600000,
        location: 'Ahmedabad',
        joinDate: '2022-10-20',
        isActive: true,
        skills: ['B2B Sales', 'Lead Generation', 'CRM', 'Negotiation'],
        profile: { age: 26, education: 'MBA Sales', experience: 3 }
    },
    { 
        id: 19, 
        name: 'Nikhil Jain', 
        email: 'nikhil@example.com', 
        phone: '+91-8098765432',
        role: 'Database Administrator',
        department: 'Infrastructure',
        salary: 750000,
        location: 'Chennai',
        joinDate: '2022-03-15',
        isActive: false,  // Inactive user
        skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Database Optimization'],
        profile: { age: 30, education: 'M.Sc Computer Science', experience: 6 }
    },
    { 
        id: 20, 
        name: 'Meera Shah', 
        email: 'meera@example.com', 
        phone: '+91-7987654321',
        role: 'Operations Manager',
        department: 'Operations',
        salary: 800000,
        location: 'Kolkata',
        joinDate: '2021-11-01',
        isActive: true,
        skills: ['Operations Management', 'Process Improvement', 'Vendor Management'],
        profile: { age: 34, education: 'MBA Operations', experience: 9 }
    },
    { 
        id: 21, 
        name: 'Arjun Reddy', 
        email: 'arjun@example.com', 
        phone: '+91-7876543210',
        role: 'ML Engineer',
        department: 'AI/ML',
        salary: 1150000,
        location: 'Hyderabad',
        joinDate: '2023-08-10',
        isActive: true,
        skills: ['PyTorch', 'TensorFlow', 'MLOps', 'Computer Vision'],
        profile: { age: 28, education: 'M.Tech AI', experience: 4 }
    }
];

// Enhanced Routes with additional features

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        version: '1.0.0'
    });
});

// Get all users with pagination and filtering
app.get('/users', (req, res) => {
    const { page = 1, limit = 10, department, role, location, isActive } = req.query;
    let filteredUsers = users;

    // Apply filters
    if (department) {
        filteredUsers = filteredUsers.filter(u => 
            u.department.toLowerCase().includes(department.toLowerCase())
        );
    }
    if (role) {
        filteredUsers = filteredUsers.filter(u => 
            u.role.toLowerCase().includes(role.toLowerCase())
        );
    }
    if (location) {
        filteredUsers = filteredUsers.filter(u => 
            u.location.toLowerCase().includes(location.toLowerCase())
        );
    }
    if (isActive !== undefined) {
        filteredUsers = filteredUsers.filter(u => 
            u.isActive === (isActive === 'true')
        );
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

    res.json({
        users: paginatedUsers,
        totalCount: filteredUsers.length,
        totalPages: Math.ceil(filteredUsers.length / limit),
        currentPage: parseInt(page),
        hasNextPage: endIndex < filteredUsers.length,
        hasPrevPage: page > 1
    });
});

// Get user by ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
});

// Create new user
app.post('/users', (req, res) => {
    const { name, email, phone, role, department, salary, location, skills, profile } = req.body;
    
    // Validation
    if (!name || !email || !role) {
        return res.status(400).json({ message: 'Name, email and role are required' });
    }

    const newUser = { 
        id: Math.max(...users.map(u => u.id)) + 1,
        name, 
        email, 
        phone: phone || '',
        role,
        department: department || 'General',
        salary: salary || 500000,
        location: location || 'Not specified',
        joinDate: new Date().toISOString().split('T')[0],
        isActive: true,
        skills: skills || [],
        profile: profile || { age: null, education: '', experience: 0 }
    };
    
    users.push(newUser);
    res.status(201).json(newUser);
});

// Update user
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });

    const updates = req.body;
    Object.keys(updates).forEach(key => {
        if (updates[key] !== undefined) {
            user[key] = updates[key];
        }
    });

    res.json(user);
});





// Delete user
app.delete('/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'User not found' });

    const deleted = users.splice(index, 1);
    res.json({ message: 'User deleted successfully', user: deleted[0] });
});

// Get users by department
app.get('/departments/:dept/users', (req, res) => {
    const deptUsers = users.filter(u => 
        u.department.toLowerCase() === req.params.dept.toLowerCase()
    );
    res.json(deptUsers);
});

// Get salary statistics
app.get('/stats/salary', (req, res) => {
    const salaries = users.map(u => u.salary);
    res.json({
        totalEmployees: users.length,
        averageSalary: Math.round(salaries.reduce((a, b) => a + b, 0) / salaries.length),
        minSalary: Math.min(...salaries),
        maxSalary: Math.max(...salaries),
        totalPayroll: salaries.reduce((a, b) => a + b, 0)
    });
});

// Search users
app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) return res.status(400).json({ message: 'Query parameter is required' });

    const results = users.filter(user => 
        user.name.toLowerCase().includes(q.toLowerCase()) ||
        user.email.toLowerCase().includes(q.toLowerCase()) ||
        user.role.toLowerCase().includes(q.toLowerCase()) ||
        user.department.toLowerCase().includes(q.toLowerCase())
    );

    res.json({
        query: q,
        count: results.length,
        results: results
    });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📊 Total users: ${users.length}`);
    console.log(`🏢 Departments: ${[...new Set(users.map(u => u.department))].join(', ')}`);
});
