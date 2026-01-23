import { useState } from "react";
import "./contextMenu.scss"

const ContextMenu = ({ setWindowsState }) => {
    const [open, setOpen] = useState(false);
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

    document.addEventListener("contextmenu", function (event) {
        event.preventDefault();
        setOpen(true);
        setCoordinates({ x: event.clientX + "px", y: event.clientY + "px" });
    });
    return (
        <section id="Context" style={{ display: open ? "block" : "none" }} onClick={() => { setOpen(false) }}>
            <ul id="menu" style={{ left: coordinates.x, top: coordinates.y }}>
                <li
                    onClick={() => { window.location.reload(); }}
                ><span className="icon"><i className="ri-reset-right-line"></i></span>Reload</li>
                <li
                    onClick={() => { setWindowsState(state => ({ ...state, github: true })) }}
                ><span className="icon">📁</span>Open Projects</li>
                <li
                    onClick={() => { setWindowsState(state => ({ ...state, spotify: true })) }}
                ><span className="icon">🎶</span>Play Music</li>
                <li
                    onClick={() => { setWindowsState(state => ({ ...state, resume: true })) }}
                ><span className="icon">📄</span>See Resume</li>
                <li
                    onClick={() => { setWindowsState(state => ({ ...state, cli: true })) }}
                ><span className="icon"><i className="ri-terminal-line"></i></span>Open Terminal</li>

                <div className="divider"></div>

                <li><span className="icon">🗑️</span>Delete</li>

                <div className="divider"></div>

                <li
                    onClick={() => { setWindowsState(state => ({ ...state, note: true })) }}
                ><span className="icon">ℹ️</span>Properties</li>
            </ul>
        </section>
    )
}

export default ContextMenu
