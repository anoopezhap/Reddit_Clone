import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPostWithId } from "../../services/user";
import DetailedPost from "./DetailedPost";
import { useState } from "react";

function Post() {
  const { id } = useParams();
  const token = localStorage.getItem("token");

  const postWithIdQuery = useQuery({
    queryKey: ["uniquepost", id],
    queryFn: () => getPostWithId(id, token),
  });

  if (postWithIdQuery.isLoading) return <h1>is loading</h1>;

  if (postWithIdQuery.isError) return <h1>Something happend</h1>;

  return (
    <div>
      <div>
        <DetailedPost post={postWithIdQuery.data.data} />
      </div>
    </div>
  );
}

export default Post;
