import "./nav.scss"
import DateTime from './DateTime'

const Nav = ({ setWindowsState }) => {
    return (
        <nav>
            <div className="left">
                <div className="apple-icon">
                    <img src="./navbar-icons/apple.svg" alt="" />
                </div>

                <div className="nav-item">
                    <p>Dileep kumawat</p>
                </div>

                <div className="nav-item external-links">
                    <a href="https://github.com/Dileep-kumawat" target="_blank"><p>Github</p></a>
                </div>
                <div className="nav-item external-links">
                    <a href="https://drive.google.com/file/d/167o84GoJwFpJOoHxwLiOoCjsbiv95U3u/view" target="_blank"><p>Resume</p></a>
                </div>
                <div className="nav-item external-links">
                    <a href="https://www.linkedin.com/in/dileep-kumawat/" target="_blank"><p>LinkedIn</p></a>
                </div>
                <div
                    onClick={() => { setWindowsState(state => ({ ...state, cli: true })) }}
                    className="nav-item terminal">
                    <p>Terminal</p>
                </div>

            </div>
            <div className="right">
                <div className="nav-icon">
                    <img src="/navbar-icons/wifi.svg" alt="" />
                </div>
                <div className="nav-item">
                    <DateTime />
                </div>

            </div>
        </nav>
    )
}

export default Nav