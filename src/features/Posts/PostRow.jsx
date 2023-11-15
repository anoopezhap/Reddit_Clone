function PostRow({ post }) {
  const { id, title, description, user, likes, comments } = post;

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {user?.userName}
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {title}
          </a>
          <p className="mt-2 text-gray-500">{description}</p>
          <div className="mt-4 flex items-center">
            <div className="flex items-center text-gray-600">
              <svg
                className="h-5 w-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
              <span className="mr-2">Likes : {likes?.length}</span>
              <span className="font-semibold">
                Comments :{comments?.length}
              </span>
            </div>
            <div className="flex items-center ml-6 text-gray-600">
              <svg
                className="h-5 w-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
              <span className="mr-2"></span>
              <span className="font-semibold"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostRow;
