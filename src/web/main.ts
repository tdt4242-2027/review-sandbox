const params = new URLSearchParams(window.location.search);
const name = params.get("name") || "guest";
document.getElementById("greeting")!.innerHTML = "Welcome, " + name + "!";

async function login(email: string, password: string) {
  const res = await fetch("/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  localStorage.setItem("token", data.token);
}

document.getElementById("login")?.addEventListener("click", () => {
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const password = (document.getElementById("password") as HTMLInputElement).value;
  login(email, password);
});
