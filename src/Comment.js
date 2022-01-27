const Comment = ({img,username,time,post}) => {
    return (
        <div class="maindiv">
            <div class="imagediv">
                <img class="img" src={img} alt="" srcset=""/>
            </div>
            <div class="contentdiv">
                <h2 class="name">{username}</h2>
                <h4 class="date">{time}</h4>
                <h1 class="post">{post}</h1>
            </div>
        </div>
    );
}
export default Comment;