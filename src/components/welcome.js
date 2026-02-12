function Welcome({ onContinue }) {
    return (
        <div className="card">
            <h1>Hey &lt;3 </h1>
            <p> Welcome welcome welcome! Swagat cha!!</p>

        <button onClick={onContinue}>
            Continue
        </button>
        </div>
    )
}
export default Welcome;