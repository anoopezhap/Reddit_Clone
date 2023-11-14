//http://localhost:3000/api/v1/threads/getAllThreads

export async function getAllPosts() {
  const res = await fetch("http://localhost:3000/api/v1/threads/getAllThreads");

  const data = await res.json();
  console.log(data);

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
