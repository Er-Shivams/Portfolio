import jarvis from '../../assets/projects_images/jarvis.png'
import chatapp from '../../assets/projects_images/chatapp.png'
import hangman from '../../assets/projects_images/hangman.png'
import Quiz from '../../assets/projects_images/Quiz.png'
import Login from '../../assets/projects_images/Login.png'
import portfolio from '../../assets/projects_images/portfolio.png'

const data_projects = [
    {
        name: 'Quiz App',
        image: Quiz,
        deployed_url: 'https://shivamquiz-app.netlify.app',
        github_url: 'https://github.com/Er-Shivams/Quiz-App/tree/master',
        category: ['react.js']
    },

    {
        name: 'Login Authentication',
        image: Login,
        deployed_url: 'https://er-shivams.github.io/Login-Authentication/',
        github_url: 'https://github.com/Er-Shivams/Login-Authentication/tree/master',
        category: ['node.js', 'mongoDB', 'react.js']
    },

    {
        name: 'Chat App',
        image: chatapp,
        deployed_url: 'https://github.com/Er-Shivams/Flutter-Chat-App',
        github_url: 'https://github.com/Er-Shivams/Flutter-Chat-App',
        category: ['flutter']
    },

    {
        name: 'JARVIS-Digital Assistant',
        image: jarvis,
        deployed_url: 'https://github.com/Er-Shivams/AI-Desktop-Assistant',
        github_url: 'https://github.com/Er-Shivams/AI-Desktop-Assistant',
        category: ['python']
    },

    {
        name: 'Portfolio',
        image: portfolio,
        deployed_url: 'https://github.com/Er-Shivams/Hangman',
        github_url: 'https://github.com/Er-Shivams/Hangman',
        category: ['python']
    },

    {
        name: 'Hangman Game',
        image: hangman,
        deployed_url: 'https://github.com/Er-Shivams/Hangman',
        github_url: 'https://github.com/Er-Shivams/Hangman',
        category: ['python']
    },

    
    

    
]

export default data_projects;