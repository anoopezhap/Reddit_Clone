function PostRow({ post }) {
  const { id, title, description, user, likes, comments } = post;

  console.log(post);

  return (
    <div>
      <div>
        <h2> User Name :{user.userName}</h2>
        <h2>Title : {title}</h2>
        <h2>Description :{description}</h2>
        <h2>Likes {likes.length}</h2>
        <h2>Comments {comments.length}</h2>
        <br />
      </div>
    </div>
  );
}

export default PostRow;
