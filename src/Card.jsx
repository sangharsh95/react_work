import profilePic from "./assets/OIP.jpg"

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture" />
            <h2 className="card-title">Sangharsh</h2>
            <p className="card-text">My name is Sangharsh Singh Yadav.</p>
        </div>
    );
}

export default Card;