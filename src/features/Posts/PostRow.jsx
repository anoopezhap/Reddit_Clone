import { Link } from "react-router-dom";
import AddCommentFrom from "./AddCommentFrom";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "../../services/user";
import { toast } from "react-hot-toast";
import EditPostForm from "./EditPostForm";

function PostRow({ post }) {
  const { id, title, description, user, likes, comments } = post;

  const [showEditPost, setShowEditPost] = useState(false);

  const token = localStorage.getItem("token");

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: ({ id, token }) => deletePost(id, token),
    onSuccess: () => {
      toast.success("The post is deleted");
      queryClient.invalidateQueries(["myPosts"]);
      queryClient.invalidateQueries(["posts"]);
    },
    onError: () => {
      toast.error("You don't have access to delete this post");
    },
  });

  function handleDelete() {
    deleteMutation.mutate({ id, token });
  }

  function handleEditPost() {
    setShowEditPost((state) => !state);
  }

  if (showEditPost)
    return (
      <EditPostForm
        setShowEditPost={setShowEditPost}
        title={title}
        description={description}
        id={id}
      />
    );

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {user?.userName}
          </div>
          <Link
            to={`/dashboard/myposts/${id}`}
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {title}
          </Link>
          <p className="mt-2 text-gray-500">{description}</p>
          <div className="mt-4 flex items-center">
            <div className="flex items-center text-gray-600">
              <span className="mr-2">Likes : {likes?.length}</span>
              <span className="">Comments :{comments?.length}</span>
              <button
                onClick={handleDelete}
                type="button"
                className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Delete
              </button>
              <button
                onClick={handleEditPost}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Edit Post
              </button>
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
