
export default function Overlay({ show }) {
    return (
        <div id="overlay" style={ show ? {display: "block"} : { display: "none"}}>
            <div id="text">Loading...</div>
        </div>
    )
}
