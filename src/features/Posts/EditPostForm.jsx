import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { editPost } from "../../services/user";

function EditPostForm({ setShowEditPost, title, description, id }) {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: { title, description },
  });

  const token = localStorage.getItem("token");

  const editPostMutation = useMutation({
    mutationFn: ({ title, description, token, id }) =>
      editPost(title, description, token, id),
  });

  function onSubmit(data) {
    const { title, description } = data;

    editPostMutation.mutate({ title, description, token, id });
    setShowEditPost((data) => !data);
  }

  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen bg-white">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl">Edit Post</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Post Title"
                  {...register("title")}
                />
              </div>
              <div className="my-4">
                <textarea
                  placeholder="Post Description*"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  {...register("description")}
                ></textarea>
              </div>
              <div className="my-2 w-1/2 lg:w-1/4">
                <button
                  className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                focus:outline-none focus:shadow-outline"
                >
                  Edit Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPostForm;
