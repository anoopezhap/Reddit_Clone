//http://localhost:3000/api/v1/threads/getAllThreads

export async function getAllPosts() {
  const res = await fetch("http://localhost:3000/api/v1/threads/getAllThreads");

  const data = await res.json();
  //console.log(data);

  //console.log(res);

  return data;
}

export async function login(email, password) {
  const res = await fetch("http://localhost:3000/api/v1/users/login", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });

  const data = await res.json();

  if (data.status === "fail") {
    throw new Error("Invalid email or password");
  }

  return data;
}

export async function getMyPosts(token) {
  //console.log("token", token);
  const res = await fetch(
    "http://localhost:3000/api/v1/users/getAllMyThreads",
    {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await res.json();

  if (data.status === "error") {
    throw new Error("Your password just changed recently");
  }

  if (data.status === "success") {
    //console.log(data);
    return data;
  }
}

export async function createPost(title, description, token) {
  //console.log(title, description);

  const res = await fetch("http://localhost:3000/api/v1/threads/createThread", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      description: description,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (data.status === "fail") {
    throw new Error("Please login to continue");
  }

  return data;
}

export async function getPostWithId(id, token) {
  //console.log(id);
  //console.log("token", token);
  const res = await fetch(`http://localhost:3000/api/v1/threads/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await res.json();

  if (data.status === "error") {
    throw new Error("Something happend");
  }

  if (data.status === "success") {
    return data;
  }
}

export async function addComment(id, comment, token) {
  //console.log(id, comment, token);
  const res = await fetch(
    `http://localhost:3000/api/v1/comments/${id}/addComment`,
    {
      method: "POST",
      body: JSON.stringify({
        comment: comment,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await res.json();
  console.log(data);

  if (data.status === "fail") {
    throw new Error("Please login to continue");
  }

  return data;
}

export async function deletePost(id, token) {
  console.log(id, token);
  const res = await fetch(`http://localhost:3000/api/v1/threads/${id}`, {
    method: "PATCH",

    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  console.log(data);

  if (data.status === "fail") {
    throw new Error("You dont have access to delete this post");
  }

  return data;
}

export async function signUp(userName, email, password, confirmPassword) {
  console.log(userName, email, password, confirmPassword);
  const res = await fetch("http://localhost:3000/api/v1/users/signup", {
    method: "POST",
    body: JSON.stringify({
      userName: userName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await res.json();

  if (data.status === "error") {
    //console.log(data.error.errors);

    const errorList = data.error.errors;

    const messagesArray = errorList.map((el) => el.message);

    const messages = messagesArray.toString();

    //console.log(messages.toString());

    throw new Error(messages);
  }

  console.log(data);

  return data;
}

export async function editPost(title, description, token, id) {
  console.log(title, "$$$", description, "$$$", token, "$$$", id);
  const res = await fetch(
    "http://localhost:3000/api/v1/threads/{id}/updateThread",
    {
      method: "PATCH",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await res.json();

  console.log(data);

  if (data.status === "error") {
    throw new Error("This thread doesn't belongs to you");
  }

  console.log(data);

  return data;
}
