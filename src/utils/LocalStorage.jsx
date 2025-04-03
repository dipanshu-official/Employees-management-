const employees = [
    {
        "id": 1,
        "name": "John Doe",
        "email": "johndoe@example.com",
        "password": "123",
        "tasks": [
            {
                "task_title": "Project Kickoff Meeting",
                "task_description": "Attend the kickoff meeting for Project Alpha.",
                "task_date": "2025-04-03",
                "category": "Meeting",
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false
            },
            {
                "task_title": "Client Feedback Review",
                "task_description": "Analyze feedback from client meeting.",
                "task_date": "2025-04-04",
                "category": "Review",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "email": "janesmith@example.com",
        "password": "123",
        "tasks": [
            {
                "task_title": "Code Refactoring",
                "task_description": "Refactor legacy codebase for optimization.",
                "task_date": "2025-04-05",
                "category": "Development",
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false
            },
            {
                "task_title": "Bug Fixing Sprint",
                "task_description": "Resolve critical bugs in sprint backlog.",
                "task_date": "2025-04-06",
                "category": "Bug Fixing",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "name": "Mike Johnson",
        "email": "mikejohnson@example.com",
        "password": "123",
        "tasks": [
            {
                "task_title": "Database Migration",
                "task_description": "Migrate database to new cloud environment.",
                "task_date": "2025-04-07",
                "category": "Database",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false
            },
            {
                "task_title": "Server Maintenance",
                "task_description": "Perform scheduled maintenance on servers.",
                "task_date": "2025-04-08",
                "category": "IT",
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "name": "Emily Davis",
        "email": "emilydavis@example.com",
        "password": "123",
        "tasks": [
            {
                "task_title": "UI/UX Review",
                "task_description": "Conduct usability test for new UI design.",
                "task_date": "2025-04-09",
                "category": "Design",
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false
            },
            {
                "task_title": "Prototype Testing",
                "task_description": "Test new mobile app prototype.",
                "task_date": "2025-04-10",
                "category": "Testing",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "name": "Robert Wilson",
        "email": "robertwilson@example.com",
        "password": "123",
        "tasks": [
            {
                "task_title": "Market Analysis",
                "task_description": "Research competitor products and strategies.",
                "task_date": "2025-04-11",
                "category": "Research",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            },
            {
                "task_title": "Report Submission",
                "task_description": "Submit quarterly sales report.",
                "task_date": "2025-04-12",
                "category": "Reporting",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false
            }
        ]
    }
]

const admin = [{
    "id": 0,
    "email": "admin@example.com",
    "password": "123"
}]

export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return{
        employees,
        admin
    }
}