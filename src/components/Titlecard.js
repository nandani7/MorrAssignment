export default function TitleCard(props){
    return(
        <div className="card">
            <div className="img">
                <div className="layer"></div>
                <img src="https://cdn0.iconfinder.com/data/icons/video-editing/100/5-512.png" alt="{props.cardname}" />
                <div className="centered">{props.cardname}</div>
            </div>
            Popular {props.cardname}
        </div>
    );
}