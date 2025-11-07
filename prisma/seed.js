import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed fixo...");

  // --------------------------
  // 1️⃣ Usuários reais (100)
  // --------------------------
  const usersData = [
    {
      name: "João Silva",
      email: "joao.silva@example.com",
      phone: "11987654321",
    },
    {
      name: "Maria Oliveira",
      email: "maria.oliveira@example.com",
      phone: null,
    },
    {
      name: "Carlos Pereira",
      email: "carlos.pereira@example.com",
      phone: "21912345678",
    },
    { name: "Ana Costa", email: "ana.costa@example.com", phone: null },
    {
      name: "Rafael Souza",
      email: "rafael.souza@example.com",
      phone: "48998761234",
    },
    {
      name: "Fernanda Lima",
      email: "fernanda.lima@example.com",
      phone: "31999887766",
    },
    { name: "Lucas Mendes", email: "lucas.mendes@example.com", phone: null },
    {
      name: "Juliana Rocha",
      email: "juliana.rocha@example.com",
      phone: "61991234567",
    },
    {
      name: "Pedro Almeida",
      email: "pedro.almeida@example.com",
      phone: "81987651234",
    },
    {
      name: "Patrícia Gomes",
      email: "patricia.gomes@example.com",
      phone: null,
    },
    {
      name: "Rodrigo Carvalho",
      email: "rodrigo.carvalho@example.com",
      phone: "21988776655",
    },
    {
      name: "Camila Santos",
      email: "camila.santos@example.com",
      phone: "11996325874",
    },
    { name: "André Nunes", email: "andre.nunes@example.com", phone: null },
    {
      name: "Beatriz Teixeira",
      email: "beatriz.teixeira@example.com",
      phone: "51988771234",
    },
    {
      name: "Felipe Martins",
      email: "felipe.martins@example.com",
      phone: "47991231234",
    },
    { name: "Larissa Alves", email: "larissa.alves@example.com", phone: null },
    {
      name: "Thiago Ferreira",
      email: "thiago.ferreira@example.com",
      phone: "61999998888",
    },
    {
      name: "Vanessa Ribeiro",
      email: "vanessa.ribeiro@example.com",
      phone: "85999887711",
    },
    { name: "Marcos Pinto", email: "marcos.pinto@example.com", phone: null },
    {
      name: "Débora Castro",
      email: "debora.castro@example.com",
      phone: "71988776655",
    },
    // 👇 até 100 nomes
    ...Array.from({ length: 80 }).map((_, i) => ({
      name: `Usuário ${i + 21}`,
      email: `usuario${i + 21}@example.com`,
      phone: i % 2 === 0 ? `1199${String(i).padStart(6, "0")}` : null,
    })),
  ];

  await prisma.user.createMany({ data: usersData });
  console.log("✅ 100 usuários criados.");

  // --------------------------
  // 2️⃣ Itens reais (100)
  // --------------------------
  const itemsBase = [
    {
      title: "iPhone 13",
      description: "Celular preto perdido no metrô",
      location: "São Paulo",
      status: "PERDIDO",
    },
    {
      title: "Carteira de couro",
      description: "Carteira marrom com documentos",
      location: "Rio de Janeiro",
      status: "PERDIDO",
    },
    {
      title: "Notebook Dell",
      description: "Notebook preto deixado em coworking",
      location: "Belo Horizonte",
      status: "ENCONTRADO",
    },
    {
      title: "Relógio Casio",
      description: "Relógio prateado esquecido em academia",
      location: "Curitiba",
      status: "ENCONTRADO",
    },
    {
      title: "Bolsa feminina preta",
      description: "Bolsa de couro deixada em restaurante",
      location: "Florianópolis",
      status: "DEVOLVIDO",
    },
    {
      title: "Chave de carro Honda",
      description: "Chave com chaveiro vermelho",
      location: "Porto Alegre",
      status: "PERDIDO",
    },
    {
      title: "Óculos Ray-Ban",
      description: "Óculos escuro preto",
      location: "Recife",
      status: "ENCONTRADO",
    },
    {
      title: "Mochila Nike",
      description: "Mochila azul com livros",
      location: "Campinas",
      status: "PERDIDO",
    },
    {
      title: "Carteira de motorista (CNH)",
      description: "CNH em nome de Pedro Almeida",
      location: "Natal",
      status: "ENCONTRADO",
    },
    {
      title: "Chaveiro com 3 chaves",
      description: "Perdido próximo ao supermercado",
      location: "Brasília",
      status: "PERDIDO",
    },
  ];

  const expandedItems = Array.from({ length: 90 }).map((_, i) => {
    const base = itemsBase[i % itemsBase.length];
    return {
      ...base,
      title: `${base.title} ${i + 1}`,
      ownerId: (i % 100) + 1,
      foundById: i % 3 === 0 ? ((i * 2) % 100) + 1 : null,
      imageUrl: `https://picsum.photos/seed/item${i}/400/400`,
    };
  });

  const itemsData = [
    ...itemsBase.map((item, i) => ({
      ...item,
      ownerId: i + 1,
      foundById: i % 2 === 0 ? null : i + 2,
      imageUrl: `https://picsum.photos/seed/base${i}/400/400`,
    })),
    ...expandedItems,
  ];

  await prisma.item.createMany({ data: itemsData });
  console.log("✅ 100 itens criados.");

  console.log("🌟 Seed completo!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Erro no seed:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
