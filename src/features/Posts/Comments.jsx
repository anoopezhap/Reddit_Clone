function Comments({ comment, likes }) {
  return (
    <div className="space-y-4">
      <div className="flex">
        <div className="flex-shrink-0 mr-3"></div>
        <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
          <strong>{comment.user.userName}</strong>{" "}
          <p className="text-xs sm:text-sm">{comment.comment}</p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
