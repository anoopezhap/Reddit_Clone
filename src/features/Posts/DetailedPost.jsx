import { useState } from "react";
import AddCommentFrom from "./AddCommentFrom";
import Comments from "./Comments";

function DetailedPost({ post }) {
  const {
    title,
    description,
    user: { userName },
    comments,
    likes,
  } = post;

  const [showAddCommentForm, setShowAddCommentForm] = useState(false);

  if (showAddCommentForm)
    return <AddCommentFrom setShowAddCommentForm={setShowAddCommentForm} />;

  return (
    <div className="antialiased mx-auto max-w-screen-sm">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        Detailed Post
      </h3>

      <div className="space-y-4">
        <div className="flex">
          <div className="flex-shrink-0 mr-3"></div>
          <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
            <strong>{title}</strong>
            <strong className="float-right capitalize">{userName}</strong>

            <p className="text-sm">{description}</p>
            <h4 className="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs">
              Comments : {comments.length}
              <div>
                <button
                  onClick={() => setShowAddCommentForm((data) => !data)}
                  className="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Add Comment
                </button>
              </div>
            </h4>

            {comments.length === 0 ? <h1>No Comments yet</h1> : ""}

            {comments.map((comment, id) => (
              <Comments comment={comment} key={id} likes={likes} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedPost;
