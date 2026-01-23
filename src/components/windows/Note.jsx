import { useEffect,useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MacWindow from './MacWindow'
import "./note.scss"


const Note = ({ windowName, setWindowsState, topElem, setTopElem }) => {

    const [ markdown, setMarkdown ] = useState(null)

    useEffect(() => {
        fetch("/note.txt")
            .then(res => res.text())
            .then(text => setMarkdown(text))
    }, [])

    return (
        <MacWindow width='50vw' height='60vh' x={200} y={100} right={true} top={topElem === windowName ? true : false} windowName={windowName} setWindowsState={setWindowsState} setTopElem={setTopElem} >
            <div className="note-window">
                { markdown ? <SyntaxHighlighter language='typescript' style={atelierDuneDark} >{markdown}</SyntaxHighlighter> : <p>Loading...</p> }
            </div>
        </MacWindow>
    )
}

export default Note