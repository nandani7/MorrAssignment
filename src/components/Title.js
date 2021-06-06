import "../cssfiles/Title.css";

export default function Title(props){
    return( 
    <div className="titlebox">
        {props.title}
    </div>
    );
}