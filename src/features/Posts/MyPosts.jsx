import { useQuery } from "@tanstack/react-query";
import { getMyPosts } from "../../services/user";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import PostRow from "./PostRow";
import { useNavigate } from "react-router";

function MyPosts() {
  const token = localStorage.getItem("token");
  //console.log(token);

  const navigate = useNavigate();

  if (!token) {
    navigate("/login");
  }

  const myPostsQuery = useQuery({
    queryKey: ["myPosts"],
    queryFn: () => getMyPosts(token),
    onError: (error) => {},
    onSuccess: () => {},
  });

  if (myPostsQuery.isLoading) return <h1>is loading</h1>;

  if (myPostsQuery.isError) return <h1>{myPostsQuery.error.message}</h1>;

  const { status, data: posts } = myPostsQuery.data;

  if (myPostsQuery.data.count === 0)
    return <h1>You dont have any posts yet</h1>;

  return (
    <div>
      <div>Total Number of posts : {myPostsQuery.data.count}</div>
      <div>
        {posts?.map((post) => (
          <PostRow post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default MyPosts;
