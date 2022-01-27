import img from './user.jpeg'
import Comment from './Comment';
const Comments = () => {
    return (
        <div>
            <h2>45 comments</h2>
            <Comment img={img} username="Rahul gupta" time="2 months ago" post="This is a great post!" />
            <Comment img={img} username="Rahul gupta" time="2 months ago" post="This is a great post!" />
        </div>
    );
}
export default Comments;