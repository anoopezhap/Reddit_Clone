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

  const { isLoading, data, error, isError } = useQuery({
    queryKey: ["myPosts"],
    queryFn: () => getMyPosts(token),
    onError: (error) => {},
    onSuccess: () => {},
  });

  if (!data) return;

  const { status, data: posts } = data;

  return (
    <div>
      {isError ? (
        " please login again to continue "
      ) : (
        <div>
          {posts?.map((post) => (
            <PostRow post={post} key={post.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyPosts;
