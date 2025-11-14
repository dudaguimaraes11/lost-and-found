const BASE = "http://localhost:3000";
const out = document.getElementById("resultado");

document.getElementById("btnAll").addEventListener("click", getAllUsers);
document.getElementById("btnById").addEventListener("click", findById);

function show(obj) {
  out.textContent = JSON.stringify(obj, null, 2);
}

async function getAllUsers() {
  try {
    const url = `${BASE}/users`;
    console.log("Fetch ->", url);
    const res = await fetch(url);
    console.log("Resposta fetch:", res);

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Status ${res.status} - ${text}`);
    }

    const data = await res.json();
    show({ ok: true, status: res.status, data });
  } catch (err) {
    console.error("Erro getAllUsers:", err);
    show({ ok: false, message: err.message });
  }
}

async function findById() {
  const id = document.getElementById("userId").value;
  if (!id) {
    alert("Digite um ID!");
    return;
  }

  try {
    const url = `${BASE}/users/${id}`;
    console.log("Fetch ->", url);
    const res = await fetch(url);
    console.log("Resposta fetch:", res);

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Status ${res.status} - ${text}`);
    }

    const data = await res.json();
    show({ ok: true, status: res.status, data });
  } catch (err) {
    console.error("Erro findById:", err);
    show({ ok: false, message: err.message });
  }
}
