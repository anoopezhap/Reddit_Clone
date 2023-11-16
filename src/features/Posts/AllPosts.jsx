import { isError, useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../services/user";
import PostRow from "./PostRow";
import { useState } from "react";
import AddCommentFrom from "./AddCommentFrom";

function AllPosts() {
  const allPostsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
  });

  if (allPostsQuery.isLoading) return <h1>Is Loading</h1>;

  if (allPostsQuery.isError) return <h1>{allPostsQuery.error.message}</h1>;

  const { count, status, data: posts } = allPostsQuery.data;

  if (count === 0) {
    return <h1>You dont have any posts yet</h1>;
  }

  return (
    <div>
      <div>Total number of posts : {count}</div>
      <div>
        {posts?.map((post) => (
          <>
            <PostRow post={post} key={post.id} />
          </>
        ))}
      </div>
    </div>
  );
}

export default AllPosts;
