import "../cssfiles/Footer.css";

export default function Footer(){
    return( 
    <div className="footer">
        <div className="sectionA">
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>|</li>
            <li>
                <a href="#">Terms and Conditions</a>
            </li>
            
            <li>|</li>
            <li>
                <a href="#">Privacy Policy</a>
            </li>
            <li>|</li>
            <li>
                <a href="#">Collection Statement</a>
            </li>
            <li>|</li>
            <li>
                <a href="#">Help</a>
            </li>
            <li>|</li>
            <li>
                <a href="#">Manage Account</a>
            </li>
        </ul>
    </div>
        <p>Copyright &copy; 2016 DEMO Streaming. All Rights Reserved.</p>
        <div className="sectionB">
        <div className="icons">
        <a href="#"><i title="Facebook" class="fa fa-facebook"></i></a>
        <a href="#"><i title="Twitter" class="fa fa-twitter"></i></a>
        <a href="#"><i title="Instagram" class="fa fa-instagram"></i></a>
        </div>
        <div className="right">
        <img className="apple" src={"https://www.atc-logistics.ie/wp-content/uploads/2017/12/apple-app-store-download.png"} />
        <img className="play" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/640px-Google_Play_Store_badge_EN.svg.png"} />
        <img className="micro" src={"data:image/png;base64,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"} />
        </div>
        </div>
    </div>
    );
}