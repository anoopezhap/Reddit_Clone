function PostRow({ post }) {
  //const { id, title, description, user, likes, comments } = post;

  //console.log(post);

  return (
    // <div>
    //   {/* <div>
    //     <h2> User Name :{user.userName}</h2>
    //     <h2>Title : {title}</h2>
    //     <h2>Description :{description}</h2>
    //     <h2>Likes {likes.length}</h2>
    //     <h2>Comments {comments.length}</h2>
    //     <br />
    //   </div> */}
    //   Anoo
    // </div>

    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            anoopezhap
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            This is my first ppost
          </a>
          <p className="mt-2 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            maiores! Totam hic in ipsum. Amet quae reiciendis nemo dicta fugit
            enim nostrum dignissimos, aliquam inventore quidem corrupti!
            Obcaecati, maxime et?
          </p>
          <div className="mt-4 flex items-center">
            <div className="flex items-center text-gray-600">
              <svg
                className="h-5 w-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
              <span className="mr-2">Likes</span>
              <span className="font-semibold">42</span>
            </div>
            <div className="flex items-center ml-6 text-gray-600">
              <svg
                className="h-5 w-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
              <span className="mr-2">Comments</span>
              <span className="font-semibold">15</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostRow;
