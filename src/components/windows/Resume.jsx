import MacWindow from './MacWindow'
import "./resume.scss"

const Resume = ({ windowName, setWindowsState, topElem, setTopElem  }) => {
    return (
        <MacWindow top={topElem === windowName ? true : false} windowName={windowName} setWindowsState={setWindowsState} setTopElem={setTopElem} >
            <div className="resume-window">
                <embed src="/resume.pdf" frameborder="0"></embed>
            </div>
        </MacWindow>
    )
}

export default Resume