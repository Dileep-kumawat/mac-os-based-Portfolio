import { Rnd } from 'react-rnd'
import "./window.scss"

const MacWindow = ({ children, width = "40vw", height = "40vh", x = 300, y = 200, windowName, setWindowsState, top = false, setTopElem }) => {
    return (
        <Rnd
            default={{
                width: width,
                height: height,
                x,
                y
            }}
            style={{ zIndex: top ? 99 : 1}}
            onClick={() => {
                setTopElem(windowName);
            }}
        >
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <div onClick={() => setWindowsState(state => ({ ...state, [windowName]: false }))} className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>

                    <div className="title"><p>dileepkumawat - zsh</p></div>

                </div>
                <div className="main-content">
                    {children}
                </div>
            </div>
        </Rnd>
    )
}

export default MacWindow