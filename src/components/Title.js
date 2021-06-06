import "../cssfiles/Title.css"

export default function Title(props){
    return(
        <div className="title">
            {props.title}
        </div>
    );
}