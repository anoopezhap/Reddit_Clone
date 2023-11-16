import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { addComment } from "../../services/user";
import { toast } from "react-hot-toast";

function AddCommentFrom({ setShowAddCommentForm }) {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const token = localStorage.getItem("token");

  const { register, handleSubmit } = useForm();

  const params = useParams();
  //console.log(params);

  const addCommentMutation = useMutation({
    mutationFn: ({ id, comment, token }) => addComment(id, comment, token),
    onSuccess: () => {
      toast.success("Comment added");
      queryClient.invalidateQueries(["uniquepost"]);
      setShowAddCommentForm((data) => !data);
    },
    onError: () => {
      toast.error("You don't have the prevelage to delete this post");
    },
  });

  function handleAddComment(data) {
    //console.log(data);
    addCommentMutation.mutate({
      id: params.id,
      comment: data.comment,
      token: token,
    });
  }

  if (addCommentMutation.isError) return <h1>Something Happend</h1>;

  return (
    <form onSubmit={handleSubmit(handleAddComment)}>
      <div className="col-span-full">
        <label
          htmlFor="about"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Comment
        </label>
        <div className="mt-2">
          <textarea
            {...register("comment")}
            id="comment"
            name="comment"
            rows="3"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          ></textarea>
        </div>
        <button
          disabled={addCommentMutation.isLoading}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Add Comment
        </button>
      </div>
    </form>
  );
}

export default AddCommentFrom;
