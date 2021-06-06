import "../cssfiles/Header.css";

export default function Header(){
    return( 
    <div className="headerbox" >
        <div className="heading">
            <h3>DEMO Streaming</h3>
        </div>
        <div className="objects">
            <a href="#">Log In</a>
            <a href="#" className="button">Start your free trial</a>
        </div>
    </div>
    );
}