import "./mobileBlocker.scss"

const MobileBlocker = () => {
    return (
        <div id="mobileBlocker">
            <div className="mobile-message">
                <h2>Desktop Required</h2>
                <p>This Portfolio only works on desktop or laptop screens.</p>
                <p>Please switch to a larger device.</p>
                <p>(Greater than 700px width)</p>
            </div>
        </div>
    )
}

export default MobileBlocker
