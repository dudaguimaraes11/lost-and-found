const BASE = "http://localhost:3000"; // TROQUE se sua API estiver em outra porta
const out = document.getElementById("resultado");

document.getElementById("btnAll").addEventListener("click", getAllItems);
document.getElementById("btnById").addEventListener("click", getItemById);

function show(obj) {
  out.textContent = JSON.stringify(obj, null, 2);
}

async function getAllItems() {
  try {
    const url = `${BASE}/items`;
    console.log("GET ->", url);

    const res = await fetch(url);

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Erro HTTP ${res.status} - ${text}`);
    }

    const data = await res.json();
    show({ ok: true, data });
  } catch (err) {
    console.error("ERRO getAllItems:", err);
    show({ ok: false, message: err.message });
  }
}

async function getItemById() {
  const id = document.getElementById("itemId").value;
  if (!id) return alert("Digite um ID!");

  try {
    const url = `${BASE}/items/${id}`;
    console.log("GET ->", url);

    const res = await fetch(url);

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Erro HTTP ${res.status} - ${text}`);
    }

    const data = await res.json();
    show({ ok: true, data });
  } catch (err) {
    console.error("ERRO getItemById:", err);
    show({ ok: false, message: err.message });
  }
}
