import MacWindow from './MacWindow'
import "./resume.scss"

const Resume = ({ windowName, setWindowsState, topElem, setTopElem  }) => {
    return (
        <MacWindow width='60vw' height='70vh' x={100} y={50} top={topElem === windowName ? true : false} windowName={windowName} setWindowsState={setWindowsState} setTopElem={setTopElem} >
            <div className="resume-window">
                <embed src="/resume.pdf" frameborder="0"></embed>
            </div>
        </MacWindow>
    )
}

export default Resume