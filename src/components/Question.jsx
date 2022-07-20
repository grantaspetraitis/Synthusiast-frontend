import { Link } from "react-router-dom";

const Question = (props) => {

    const shortenedBody = props.data.post_body.substring(0, 100);

    return (
        <Link style={{ textDecoration: "none" }} to={`/questions/${props.data.post_id}`}>
        {
            props.data.isArchived === '1' ? null :
            props.data.isDeletedByAdmin === 'false' &&
            <div className="question-container">
                <h1 style={{ color: "grey" }}>{props.data.post_title}</h1>
                <p style={{ color: "black" }}>{shortenedBody}{props.data.post_body.length > 30 ? ' ...' : ''}</p>
                <span style={{ color: "black" }}>{props.data.like_amount} {props.data.like_amount === '1' ? 'like' : 'likes'} </span>
                <span style={{ position: "relative", left: "80%", color: "red" }}>By {props.data.username}</span>
                <span style={{ color: "black" }}>{props.data.post_date.replace('T', ' ').substring(0, 16)}</span>
            </div>
        }      
        </Link>
    );
}

export default Question;