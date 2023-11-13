//http://localhost:3000/api/v1/threads/getAllThreads

export async function getAllPosts() {
  const res = await fetch("http://localhost:3000/api/v1/threads/getAllThreads");

  const data = await res.json();

  //console.log(res);

  return data;
}

export async function login(email, password) {
  console.log(email);
  console.log(password);
  const res = await fetch("http://localhost:3000/api/v1/users/login", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });

  const data = await res.json();
  console.log(data);

  return data;
}
