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
  // console.log("token", token);
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
  console.log(title, description);

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
