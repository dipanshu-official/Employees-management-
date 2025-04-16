const employees = [
    {
        "id": 1,
        "name": "Dipanshu employee",
        "email": "dipanshu@me.com",
        "password": "123",
        "age": 28,
        "task_show": {
            "active": 3,
            "completed": 0,
            "new_task": 2,
            "failed": 0
        },
        "tasks": [
            {
                "task_title": "Project Kickoff Meeting",
                "task_description": "Attend the kickoff meeting for Project Alpha.",
                "task_date": "2025-04-03",
                "category": "Meeting",
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false,
                "priority": "High"
            },
            {
                "task_title": "Client Feedback Review",
                "task_description": "Analyze feedback from client meeting.",
                "task_date": "2025-04-04",
                "category": "Review",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "priority": "Medium"
            },
            {
                "task_title": "Team Standup",
                "task_description": "Daily team progress meeting.",
                "task_date": "2025-04-05",
                "category": "Meeting",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "priority": "Low"
            }
        ]
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "email": "janesmith@example.com",
        "password": "123",
        "age": 32,
        "task_show": {
            "active": 3,
            "completed": 0,
            "new_task": 2,
            "failed": 0
        },
        "tasks": [
            {
                "task_title": "Code Refactoring",
                "task_description": "Refactor legacy codebase for optimization.",
                "task_date": "2025-04-05",
                "category": "Development",
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false,
                "priority": "High"
            },
            {
                "task_title": "Bug Fixing Sprint",
                "task_description": "Resolve critical bugs in sprint backlog.",
                "task_date": "2025-04-06",
                "category": "Bug Fixing",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "priority": "Critical"
            },
            {
                "task_title": "Code Review",
                "task_description": "Review pull requests for quality assurance.",
                "task_date": "2025-04-07",
                "category": "Development",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "priority": "Medium"
            }
        ]
    },
    {
        "id": 3,
        "name": "Mike Johnson",
        "email": "mikejohnson@example.com",
        "password": "123",
        "age": 35,
        "task_show": {
            "active": 2,
            "completed": 1,
            "new_task": 1,
            "failed": 0
        },
        "tasks": [
            {
                "task_title": "Database Migration",
                "task_description": "Migrate database to new cloud environment.",
                "task_date": "2025-04-07",
                "category": "Database",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false,
                "priority": "High"
            },
            {
                "task_title": "Server Maintenance",
                "task_description": "Perform scheduled maintenance on servers.",
                "task_date": "2025-04-08",
                "category": "IT",
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false,
                "priority": "Medium"
            },
            {
                "task_title": "Security Audit",
                "task_description": "Perform security assessment on infrastructure.",
                "task_date": "2025-04-09",
                "category": "Security",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "priority": "High"
            }
        ]
    },
    {
        "id": 4,
        "name": "Emily Davis",
        "email": "emilydavis@example.com",
        "password": "123",
        "age": 29,
        "task_show": {
            "active": 3,
            "completed": 0,
            "new_task": 2,
            "failed": 0
        },
        "tasks": [
            {
                "task_title": "UI/UX Review",
                "task_description": "Conduct usability test for new UI design.",
                "task_date": "2025-04-09",
                "category": "Design",
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false,
                "priority": "Medium"
            },
            {
                "task_title": "Prototype Testing",
                "task_description": "Test new mobile app prototype.",
                "task_date": "2025-04-10",
                "category": "Testing",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "priority": "High"
            },
            {
                "task_title": "User Interviews",
                "task_description": "Conduct interviews to understand user needs.",
                "task_date": "2025-04-11",
                "category": "Research",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "priority": "High"
            }
        ]
    },
    {
        "id": 5,
        "name": "Robert Wilson",
        "email": "robertwilson@example.com",
        "password": "123",
        "age": 41,
        "task_show": {
            "active": 2,
            "completed": 1,
            "new_task": 2,
            "failed": 0
        },
        "tasks": [
            {
                "task_title": "Market Analysis",
                "task_description": "Research competitor products and strategies.",
                "task_date": "2025-04-11",
                "category": "Research",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "priority": "High"
            },
            {
                "task_title": "Report Submission",
                "task_description": "Submit quarterly sales report.",
                "task_date": "2025-04-12",
                "category": "Reporting",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false,
                "priority": "Low"
            },
            {
                "task_title": "Marketing Strategy",
                "task_description": "Develop new marketing campaign strategy.",
                "task_date": "2025-04-13",
                "category": "Marketing",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "priority": "Medium"
            }
        ]
    }
];




const admin = [
    {
        "id": 0,
        "name": "admin",
        "email": "admin@example.com",
        "password": "123",
        "age": 40
    },
    {
        "id": 0,
        "name": "Dipanshu admin",
        "email": "dipanshu@admin.com",
        "password": "123",
        "age": 28
    },
];


const superAdmin = [

    {
        "id": 0,

        "name": "Dipanshu Kumar",
        "email": "dipanshu@super.com",
        "password": "123"
    },
    {
        "id": 1,

        "name": "Shiva Kumar",
        "email": "dipanshu.k@example.com",
        "password": "123"
    },

]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
    localStorage.setItem('superAdmin',JSON.stringify(superAdmin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    const superAdmin = JSON.parse(localStorage.getItem('superAdmin'))
    return {
        employees,
        admin,
        superAdmin
    }
}