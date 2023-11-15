import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPostWithId } from "../../services/user";

function Post() {
  const { id } = useParams();
  const token = localStorage.getItem("token");

  const { isLoading, data, error, isError } = useQuery({
    queryKey: ["uniquepost"],
    queryFn: getPostWithId(id, token),
  });

  return <div>post with specific {id}</div>;
}

export default Post;
