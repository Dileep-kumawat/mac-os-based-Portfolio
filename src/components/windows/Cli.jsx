import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss"

const Cli = ({ windowName, setWindowsState, topElem, setTopElem }) => {
    const commands = {
        about: {
            description: 'About me',
            usage: 'about',
            fn: () => 'I am a full-stack web developer passionate about building modern web applications with React, Node.js, and cloud technologies.'
        },
        skills: {
            description: 'List technical skills',
            usage: 'skills',
            fn: () => `Frontend: React, Vanilla JS, Scss, HTML/CSS
Backend: Node.js, Express, Python
Databases: MongoDB, MySQL
Tools: Git, Docker, Webpack, Vite`
        },
        experience: {
            description: 'Display work experience',
            usage: 'experience',
            fn: () => `Web Developer @ Freelancing (2025 - Present)
  - Led development of 2+ React applications
  - Mentored junior developers

Full Stack Developer (2025 - present)
  - Built scalable APIs with Node.js
  - Designed responsive UIs with React`
        },
        contact: {
            description: 'Get contact information',
            usage: 'contact',
            fn: () => `Email: dileepkumawat525@gmail.com
Phone: +91 79813 00325
Location: Tirupati-AP,India`
        },
        github: {
            description: 'Open GitHub profile',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/Dileep-kumawat', '_blank')
                return 'Opening GitHub...'
            }
        },
        social: {
            description: 'View social media links',
            usage: 'social',
            fn: () => `Twitter: @dilsecode
LinkedIn: in/dileep-kumawat/
Instagram: dileep.52`
        },
        echo: {
            description: 'Echo a passed string',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        }
    }

    const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to My Portfolio CLI!       ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
  • about     - Learn about me
  • skills    - View my technical skills
  • experience - See my career history
  • contact   - Get in touch
  • github   - To open my github profile
  • social   - See where I am active

Happy exploring! 🚀
`

    return (
        <MacWindow top={topElem === windowName ? true : false} width='40vw' height='70vh' x={150} y={70} windowName={windowName} setWindowsState={setWindowsState} setTopElem={setTopElem} >
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'dileepkumawat:~$'}
                    promptLabelStyle={{ color: '#00ff00' }}
                />
            </div>
        </MacWindow>
    )
}

export default Cli