// since we are not
try {
  window;
} catch (err) {
  console.log("Oops, `window` is not defined");
  throw new Error("Can't do this since we are not in the browser");
}

window.localStorage.setItem("name", "Barış");
window.localStorage.getItem("name");

window.localStorage.setItem("age", "25");
window.localStorage.removeItem("age");
window.localStorage.clear(); // clears everything
