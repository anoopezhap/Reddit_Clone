import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../services/user";
import PostRow from "./PostRow";

function AllPosts() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
  });

  if (!data) return;

  const { count, status, data: posts } = data;

  if (status !== "Success") return;

  if (isLoading) return;

  return (
    <div>
      <div>Total number of posts : {count}</div>
      <div>
        {posts?.map((post) => (
          <PostRow post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default AllPosts;
