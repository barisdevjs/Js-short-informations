
 const a = fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify({ name: "Kyle" }),
    headers: { "Content-Type": "application/json" }
  }).then(res => res.json())
  .then(data => { console.log(data)})

