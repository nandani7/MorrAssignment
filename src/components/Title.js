import "../cssfiles/Title.css";

export default function Title(props){
    return( 
    <div className="titlebox">
        Popular {props.title}
    </div>
    );
}