import { PrismaClient, Status } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // === USUÁRIOS REAIS (100) ===
  const usersData = [
    // Turma: Eletroeletrônica - Manhã (1º Módulo) - 25 usuários
    {
      name: "Ana Silva",
      email: "ana.silva@senaisp.org.br",
      phone: "11998765401",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Eletroeletrônica - Manhã",
    },
    {
      name: "Bruno Souza",
      email: "bruno.souza@senaisp.org.br",
      phone: "11998765402",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Eletroeletrônica - Manhã",
    },
    {
      name: "Carlos Oliveira",
      email: "carlos.oliveira@senaisp.org.br",
      phone: "11998765403",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Eletroeletrônica - Manhã",
    },
    {
      name: "Daniela Santos",
      email: "daniela.santos@senaisp.org.br",
      phone: "11998765404",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Eletroeletrônica - Manhã",
    },
    {
      name: "Eduardo Lima",
      email: "eduardo.lima@senaisp.org.br",
      phone: "11998765405",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Eletroeletrônica - Manhã",
    },
    {
      name: "Fernanda Gomes",
      email: "fernanda.gomes@senaisp.org.br",
      phone: "11998765406",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Eletroeletrônica - Manhã",
    },
    {
      name: "Gabriel Rodrigues",
      email: "gabriel.rodrigues@senaisp.org.br",
      phone: "11998765407",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Eletroeletrônica - Manhã",
    },
    {
      name: "Helena Almeida",
      email: "helena.almeida@senaisp.org.br",
      phone: "11998765408",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Eletroeletrônica - Manhã",
    },
    {
      name: "Igor Ferreira",
      email: "igor.ferreira@senaisp.org.br",
      phone: "11998765409",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Eletroeletrônica - Manhã",
    },
    {
      name: "Juliana Pereira",
      email: "juliana.pereira@senaisp.org.br",
      phone: "11998765410",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Eletroeletrônica - Manhã",
    },
    {
      name: "Kauã Martins",
      email: "kaua.martins@senaisp.org.br",
      phone: "11998765411",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Eletroeletrônica - Manhã",
    },
    {
      name: "Laura Costa",
      email: "laura.costa@senaisp.org.br",
      phone: "11998765412",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Eletroeletrônica - Manhã",
    },
    {
      name: "Lucas Ribeiro",
      email: "lucas.ribeiro@senaisp.org.br",
      phone: "11998765413",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Eletroeletrônica - Manhã",
    },
    {
      name: "Manuela Carvalho",
      email: "manuela.carvalho@senaisp.org.br",
      phone: "11998765414",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Eletroeletrônica - Manhã",
    },
    {
      name: "Nicolas Barbosa",
      email: "nicolas.barbosa@senaisp.org.br",
      phone: "11998765415",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Eletroeletrônica - Manhã",
    },
    {
      name: "Olivia Alves",
      email: "olivia.alves@senaisp.org.br",
      phone: "11998765416",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Eletroeletrônica - Manhã",
    },
    {
      name: "Pedro Dias",
      email: "pedro.dias@senaisp.org.br",
      phone: "11998765417",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Eletroeletrônica - Manhã",
    },
    {
      name: "Rafaela Barros",
      email: "rafaela.barros@senaisp.org.br",
      phone: "11998765418",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Eletroeletrônica - Manhã",
    },
    {
      name: "Samuel Mendes",
      email: "samuel.mendes@senaisp.org.br",
      phone: "11998765419",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Eletroeletrônica - Manhã",
    },
    {
      name: "Sofia Moreira",
      email: "sofia.moreira@senaisp.org.br",
      phone: "11998765420",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Eletroeletrônica - Manhã",
    },
    {
      name: "Thiago Nogueira",
      email: "thiago.nogueira@senaisp.org.br",
      phone: "11998765421",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Eletroeletrônica - Manhã",
    },
    {
      name: "Valentina Cunha",
      email: "valentina.cunha@senaisp.org.br",
      phone: "11998765422",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Eletroeletrônica - Manhã",
    },
    {
      name: "Vinicius Pires",
      email: "vinicius.pires@senaisp.org.br",
      phone: "11998765423",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Eletroeletrônica - Manhã",
    },
    {
      name: "Yasmin Azevedo",
      email: "yasmin.azevedo@senaisp.org.br",
      phone: "11998765424",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Eletroeletrônica - Manhã",
    },
    {
      name: "Arthur Castro",
      email: "arthur.castro@senaisp.org.br",
      phone: "11998765425",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Eletroeletrônica - Manhã",
    },

    // Turma: Mecânica - Tarde (1º Módulo) - 25 usuários
    {
      name: "Beatriz Pinto",
      email: "beatriz.pinto@senaisp.org.br",
      phone: "11998765426",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Mecânica - Tarde",
    },
    {
      name: "Davi Rezende",
      email: "davi.rezende@senaisp.org.br",
      phone: "11998765427",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Mecânica - Tarde",
    },
    {
      name: "Esther Viana",
      email: "esther.viana@senaisp.org.br",
      phone: "11998765428",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Mecânica - Tarde",
    },
    {
      name: "Felipe Melo",
      email: "felipe.melo@senaisp.org.br",
      phone: "11998765429",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Mecânica - Tarde",
    },
    {
      name: "Giovanna Farias",
      email: "giovanna.farias@senaisp.org.br",
      phone: "11998765430",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Mecânica - Tarde",
    },
    {
      name: "Heitor Cardoso",
      email: "heitor.cardoso@senaisp.org.br",
      phone: "11998765431",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Mecânica - Tarde",
    },
    {
      name: "Isabella Correia",
      email: "isabella.correia@senaisp.org.br",
      phone: "11998765432",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Mecânica - Tarde",
    },
    {
      name: "João Ramos",
      email: "joao.ramos@senaisp.org.br",
      phone: "11998765433",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Mecânica - Tarde",
    },
    {
      name: "Lara Lopes",
      email: "lara.lopes@senaisp.org.br",
      phone: "11998765434",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Mecânica - Tarde",
    },
    {
      name: "Leonardo Vieira",
      email: "leonardo.vieira@senaisp.org.br",
      phone: "11998765435",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Mecânica - Tarde",
    },
    {
      name: "Maria Clara Sales",
      email: "maria.sales@senaisp.org.br",
      phone: "11998765436",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Mecânica - Tarde",
    },
    {
      name: "Miguel Teixeira",
      email: "miguel.teixeira@senaisp.org.br",
      phone: "11998765437",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Mecânica - Tarde",
    },
    {
      name: "Nicole Fernandes",
      email: "nicole.fernandes@senaisp.org.br",
      phone: "11998765438",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Mecânica - Tarde",
    },
    {
      name: "Otávio Campos",
      email: "otavio.campos@senaisp.org.br",
      phone: "11998765439",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Mecânica - Tarde",
    },
    {
      name: "Rebeca Duarte",
      email: "rebeca.duarte@senaisp.org.br",
      phone: "11998765440",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Mecânica - Tarde",
    },
    {
      name: "Rodrigo Freitas",
      email: "rodrigo.freitas@senaisp.org.br",
      phone: "11998765441",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Mecânica - Tarde",
    },
    {
      name: "Sarah Gonçalves",
      email: "sarah.goncalves@senaisp.org.br",
      phone: "11998765442",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Mecânica - Tarde",
    },
    {
      name: "Theo Macedo",
      email: "theo.macedo@senaisp.org.br",
      phone: "11998765443",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Mecânica - Tarde",
    },
    {
      name: "Vitória Brandão",
      email: "vitoria.brandao@senaisp.org.br",
      phone: "11998765444",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Mecânica - Tarde",
    },
    {
      name: "André Moraes",
      email: "andre.moraes@senaisp.org.br",
      phone: "11998765445",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Mecânica - Tarde",
    },
    {
      name: "Bárbara Neves",
      email: "barbara.neves@senaisp.org.br",
      phone: "11998765446",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Mecânica - Tarde",
    },
    {
      name: "Cauã Rocha",
      email: "caua.rocha@senaisp.org.br",
      phone: "11998765447",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Mecânica - Tarde",
    },
    {
      name: "Cecília Siqueira",
      email: "cecilia.siqueira@senaisp.org.br",
      phone: "11998765448",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Mecânica - Tarde",
    },
    {
      name: "Daniel Lira",
      email: "daniel.lira@senaisp.org.br",
      phone: "11998765449",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Mecânica - Tarde",
    },
    {
      name: "Elisa Peixoto",
      email: "elisa.peixoto@senaisp.org.br",
      phone: "11998765450",
      password: "senha123",
      anoEscolar: "1º Módulo",
      turma: "Mecânica - Tarde",
    },

    // Turma: Eletroeletrônica - Noite (2º Módulo) - 25 usuários
    {
      name: "Enzo Rangel",
      email: "enzo.rangel@senaisp.org.br",
      phone: "11998765451",
      password: "senha123",
      anoEscolar: "2º Módulo",
      turma: "Eletroeletrônica - Noite",
    },
    {
      name: "Gabriela Drummond",
      email: "gabriela.drummond@senaisp.org.br",
      phone: "11998765452",
      password: "senha123",
      anoEscolar: "2º Módulo",
      turma: "Eletroeletrônica - Noite",
    },
    {
      name: "Gustavo Silveira",
      email: "gustavo.silveira@senaisp.org.br",
      phone: "11998765453",
      password: "senha123",
      anoEscolar: "2º Módulo",
      turma: "Eletroeletrônica - Noite",
    },
    {
      name: "Heloísa Guerra",
      email: "heloisa.guerra@senaisp.org.br",
      phone: "11998765454",
      password: "senha123",
      anoEscolar: "2º Módulo",
      turma: "Eletroeletrônica - Noite",
    },
    {
      name: "Isaac Matos",
      email: "isaac.matos@senaisp.org.br",
      phone: "11998765455",
      password: "senha123",
      anoEscolar: "2º Módulo",
      turma: "Eletroeletrônica - Noite",
    },
    {
      name: "Joana Cavalcanti",
      email: "joana.cavalcanti@senaisp.org.br",
      phone: "11998765456",
      password: "senha123",
      anoEscolar: "2º Módulo",
      turma: "Eletroeletrônica - Noite",
    },
    {
      name: "Kevin Moura",
      email: "kevin.moura@senaisp.org.br",
      phone: "11998765457",
      password: "senha123",
      anoEscolar: "2º Módulo",
      turma: "Eletroeletrônica - Noite",
    },
    {
      name: "Lívia Navarro",
      email: "livia.navarro@senaisp.org.br",
      phone: "11998765458",
      password: "senha123",
      anoEscolar: "2º Módulo",
      turma: "Eletroeletrônica - Noite",
    },
    {
      name: "Marcos Paiva",
      email: "marcos.paiva@senaisp.org.br",
      phone: "11998765459",
      password: "senha123",
      anoEscolar: "2º Módulo",
      turma: "Eletroeletrônica - Noite",
    },
    {
      name: "Maria Eduarda Pimentel",
      email: "maria.pimentel@senaisp.org.br",
      phone: "11998765460",
      password: "senha123",
      anoEscolar: "2º Módulo",
      turma: "Eletroeletrônica - Noite",
    },
    {
      name: "Matheus Santana",
      email: "matheus.santana@senaisp.org.br",
      phone: "11998765461",
      password: "senha123",
      anoEscolar: "2º Módulo",
      turma: "Eletroeletrônica - Noite",
    },
    {
      name: "Melissa Fogaça",
      email: "melissa.fogaca@senaisp.org.br",
      phone: "11998765462",
      password: "senha123",
      anoEscolar: "2º Módulo",
      turma: "Eletroeletrônica - Noite",
    },
    {
      name: "Noah Caldeira",
      email: "noah.caldeira@senaisp.org.br",
      phone: "11998765463",
      password: "senha123",
      anoEscolar: "2º Módulo",
      turma: "Eletroeletrônica - Noite",
    },
    {
      name: "Pietra Tavares",
      email: "pietra.tavares@senaisp.org.br",
      phone: "11998765464",
      password: "senha123",
      anoEscolar: "2º Módulo",
      turma: "Eletroeletrônica - Noite",
    },
    {
      name: "Rafael Dantas",
      email: "rafael.dantas@senaisp.org.br",
      phone: "11998765465",
      password: "senha123",
      anoEscolar: "2º Módulo",
      turma: "Eletroeletrônica - Noite",
    },
    {
      name: "Stella Bentes",
      email: "stella.bentes@senaisp.org.br",
      phone: "11998765466",
      password: "senha123",
      anoEscolar: "2º Módulo",
      turma: "Eletroeletrônica - Noite",
    },
    {
      name: "Victor Queiroz",
      email: "victor.queiroz@senaisp.org.br",
      phone: "11998765467",
      password: "senha123",
      anoEscolar: "2º Módulo",
      turma: "Eletroeletrônica - Noite",
    },
    {
      name: "Alice Chaves",
      email: "alice.chaves@senaisp.org.br",
      phone: "11998765468",
      password: "senha123",
      anoEscolar: "2º Módulo",
      turma: "Eletroeletrônica - Noite",
    },
    {
      name: "Bernardo Guedes",
      email: "bernardo.guedes@senaisp.org.br",
      phone: "11998765469",
      password: "senha123",
      anoEscolar: "2º Módulo",
      turma: "Eletroeletrônica - Noite",
    },
    {
      name: "Clara Leal",
      email: "clara.leal@senaisp.org.br",
      phone: "11998765470",
      password: "senha123",
      anoEscolar: "2º Módulo",
      turma: "Eletroeletrônica - Noite",
    },
    {
      name: "Diego Bastos",
      email: "diego.bastos@senaisp.org.br",
      phone: "11998765471",
      password: "senha123",
      anoEscolar: "2º Módulo",
      turma: "Eletroeletrônica - Noite",
    },
    {
      name: "Emanuelly Fontes",
      email: "emanuelly.fontes@senaisp.org.br",
      phone: "11998765472",
      password: "senha123",
      anoEscolar: "2º Módulo",
      turma: "Eletroeletrônica - Noite",
    },
    {
      name: "Francisco Arruda",
      email: "francisco.arruda@senaisp.org.br",
      phone: "11998765473",
      password: "senha123",
      anoEscolar: "2º Módulo",
      turma: "Eletroeletrônica - Noite",
    },
    {
      name: "Isabelly Telles",
      email: "isabelly.telles@senaisp.org.br",
      phone: "11998765474",
      password: "senha123",
      anoEscolar: "2º Módulo",
      turma: "Eletroeletrônica - Noite",
    },
    {
      name: "Joaquim Bezerra",
      email: "joaquim.bezerra@senaisp.org.br",
      phone: "11998765475",
      password: "senha123",
      anoEscolar: "2º Módulo",
      turma: "Eletroeletrônica - Noite",
    },

    // Turma: Mecânica - Noite (3º Módulo) - 25 usuários
    {
      name: "Lorena Pinho",
      email: "lorena.pinho@senaisp.org.br",
      phone: "11998765476",
      password: "senha123",
      anoEscolar: "3º Módulo",
      turma: "Mecânica - Noite",
    },
    {
      name: "Lorenzo Prado",
      email: "lorenzo.prado@senaisp.org.br",
      phone: "11998765477",
      password: "senha123",
      anoEscolar: "3º Módulo",
      turma: "Mecânica - Noite",
    },
    {
      name: "Maitê Franco",
      email: "maite.franco@senaisp.org.br",
      phone: "11998765478",
      password: "senha123",
      anoEscolar: "3º Módulo",
      turma: "Mecânica - Noite",
    },
    {
      name: "Murilo Aguiar",
      email: "murilo.aguiar@senaisp.org.br",
      phone: "11998765479",
      password: "senha123",
      anoEscolar: "3º Módulo",
      turma: "Mecânica - Noite",
    },
    {
      name: "Olívia Furtado",
      email: "olivia.furtado@senaisp.org.br",
      phone: "11998765480",
      password: "senha123",
      anoEscolar: "3º Módulo",
      turma: "Mecânica - Noite",
    },
    {
      name: "Paulo Navarro",
      email: "paulo.navarro@senaisp.org.br",
      phone: "11998765481",
      password: "senha123",
      anoEscolar: "3º Módulo",
      turma: "Mecânica - Noite",
    },
    {
      name: "Rayssa Esteves",
      email: "rayssa.esteves@senaisp.org.br",
      phone: "11998765482",
      password: "senha123",
      anoEscolar: "3º Módulo",
      turma: "Mecânica - Noite",
    },
    {
      name: "Sérgio Lemos",
      email: "sergio.lemos@senaisp.org.br",
      phone: "11998765483",
      password: "senha123",
      anoEscolar: "3º Módulo",
      turma: "Mecânica - Noite",
    },
    {
      name: "Teodoro Barreto",
      email: "teodoro.barreto@senaisp.org.br",
      phone: "11998765484",
      password: "senha123",
      anoEscolar: "3º Módulo",
      turma: "Mecânica - Noite",
    },
    {
      name: "Valentine Assis",
      email: "valentine.assis@senaisp.org.br",
      phone: "11998765485",
      password: "senha123",
      anoEscolar: "3º Módulo",
      turma: "Mecânica - Noite",
    },
    {
      name: "Vicente Avelar",
      email: "vicente.avelar@senaisp.org.br",
      phone: "11998765486",
      password: "senha123",
      anoEscolar: "3º Módulo",
      turma: "Mecânica - Noite",
    },
    {
      name: "Yago Meireles",
      email: "yago.meireles@senaisp.org.br",
      phone: "11998765487",
      password: "senha123",
      anoEscolar: "3º Módulo",
      turma: "Mecânica - Noite",
    },
    {
      name: "Zilda Varejão",
      email: "zilda.varejao@senaisp.org.br",
      phone: "11998765488",
      password: "senha123",
      anoEscolar: "3º Módulo",
      turma: "Mecânica - Noite",
    },
    {
      name: "Breno Amaral",
      email: "breno.amaral@senaisp.org.br",
      phone: "11998765489",
      password: "senha123",
      anoEscolar: "3º Módulo",
      turma: "Mecânica - Noite",
    },
    {
      name: "Catarina Beltrão",
      email: "catarina.beltrao@senaisp.org.br",
      phone: "11998765490",
      password: "senha123",
      anoEscolar: "3º Módulo",
      turma: "Mecânica - Noite",
    },
    {
      name: "Danilo Cordeiro",
      email: "danilo.cordeiro@senaisp.org.br",
      phone: "11998765491",
      password: "senha123",
      anoEscolar: "3º Módulo",
      turma: "Mecânica - Noite",
    },
    {
      name: "Eloá Dornelles",
      email: "eloa.dornelles@senaisp.org.br",
      phone: "11998765492",
      password: "senha123",
      anoEscolar: "3º Módulo",
      turma: "Mecânica - Noite",
    },
    {
      name: "Erick Goulart",
      email: "erick.goulart@senaisp.org.br",
      phone: "11998765493",
      password: "senha123",
      anoEscolar: "3º Módulo",
      turma: "Mecânica - Noite",
    },
    {
      name: "Hadassa Guimarães",
      email: "hadassa.guimaraes@senaisp.org.br",
      phone: "11998765494",
      password: "senha123",
      anoEscolar: "3º Módulo",
      turma: "Mecânica - Noite",
    },
    {
      name: "Ian Novais",
      email: "ian.novais@senaisp.org.br",
      phone: "11998765495",
      password: "senha123",
      anoEscolar: "3º Módulo",
      turma: "Mecânica - Noite",
    },
    {
      name: "Laís Padrão",
      email: "lais.padrao@senaisp.org.br",
      phone: "11998765496",
      password: "senha123",
      anoEscolar: "3º Módulo",
      turma: "Mecânica - Noite",
    },
    {
      name: "Levi Sampaio",
      email: "levi.sampaio@senaisp.org.br",
      phone: "11998765497",
      password: "senha123",
      anoEscolar: "3º Módulo",
      turma: "Mecânica - Noite",
    },
    {
      name: "Maya Valente",
      email: "maya.valente@senaisp.org.br",
      phone: "11998765498",
      password: "senha123",
      anoEscolar: "3º Módulo",
      turma: "Mecânica - Noite",
    },
    {
      name: "Nícolas Xavier",
      email: "nicolas.xavier@senaisp.org.br",
      phone: "11998765499",
      password: "senha123",
      anoEscolar: "3º Módulo",
      turma: "Mecânica - Noite",
    },
    {
      name: "Sabrina Zamboni",
      email: "sabrina.zamboni@senaisp.org.br",
      phone: "11998765500",
      password: "senha123",
      anoEscolar: "3º Módulo",
      turma: "Mecânica - Noite",
    },
  ];

  await prisma.user.createMany({ data: usersData });

  // === ITENS REAIS (100) ===
  const itemsData = [
    {
      title: "Garrafinha térmica Lululemon",
      description:
        "Garrafinha térmica rosa claro, 1 litro. Encontrada na cantina no dia 15/09 (manhã).",
      location: "Cantina",
      imageUrl: "https://i.ibb.co/PswyBTwL/sg-11134201-23020-krw66rsukbnv61.jpg",
      status: "ENCONTRADO",
      category: "Recipientes", // Adicionado
      ownerId: 1,
      foundById: 2,
    },
    {
      title: "Mochila preta Nike",
      description: "Mochila preta com zíper vermelho e etiqueta escolar.",
      location: "Biblioteca",
      imageUrl: "https://i.ibb.co/XxZ3bbhP/download.jpg",
      status: "PERDIDO",
      category: "Acessórios", // Adicionado
      ownerId: 3,
    },
    {
      title: "Carteira marrom de couro",
      description:
        "Carteira de couro marrom com cartões e documentos pessoais.",
      location: "Pátio",
      imageUrl: "https://i.ibb.co/N6dwmXJ2/683130650720739485-slsjij.webp.jpg",
      status: "ENCONTRADO",
      category: "Acessórios", // Adicionado
      ownerId: 4,
      foundById: 5,
    },
    {
      title: "Fone de ouvido JBL preto",
      description: "Fone JBL sem fio esquecido no laboratório de informática.",
      location: "Lab. de Informática",
      imageUrl: "https://i.ibb.co/wrJPdYHp/fone-de-ouvido-bluetooth-jbl-tune-buds-1001723.jpg",
      status: "PERDIDO",
      category: "Eletrônicos", // Adicionado
      ownerId: 6,
    },
    {
      title: "Caderno azul com espiral",
      description: "Caderno azul com etiqueta do SENAI na capa.",
      location: "Sala 104",
      imageUrl: "https://i.ibb.co/8nLdfDSg/caderno-inteligente-universitario-dac-vision-10-materias-com-folhas-tira-e-poe-azul-3995-3093-1-6f10.webp.jpg",
      status: "ENCONTRADO",
      category: "Material Escolar", // Adicionado
      ownerId: 7,
      foundById: 8,
    },
    {
      title: "Chave com chaveiro vermelho",
      description: "Chave pequena com chaveiro em formato de bola.",
      location: "Corredor principal",
      imageUrl: "https://i.ibb.co/zTqBrYsK/12253219-chave-com-chaveiro-vermelho-sobre-fundo-de-madeira-foto.jpg",
      status: "ENCONTRADO",
      category: "Acessórios", // Adicionado
      ownerId: 9,
      foundById: 10,
    },
    {
      title: "Casaco cinza Adidas",
      description: "Casaco de moletom cinza, tamanho M.",
      location: "Cantina",
      imageUrl: "https://i.ibb.co/60hz8zYW/41y-Gqr-Ym-Bu-L-AC.jpg",
      status: "PERDIDO",
      category: "Vestuário", // Adicionado
      ownerId: 11,
    },
    {
      title: "Pen drive Sandisk 32GB",
      description: "Pen drive preto Sandisk, encontrado na sala de aula.",
      location: "Sala 201",
      imageUrl: "https://i.ibb.co/chBHfqnG/download.jpg",
      status: "ENCONTRADO",
      category: "Eletrônicos", // Adicionado
      ownerId: 12,
      foundById: 13,
    },
    {
      title: "Óculos de grau preto",
      description: "Óculos de grau com armação escura, deixado no banheiro.",
      location: "Banheiro feminino",
      imageUrl: "https://i.ibb.co/0y5SPq0r/oculos-de-grau-feminino-preto-polaroid-d432-807-3060fd4552196b3de0b062a12c622ee6.jpg",
      status: "ENCONTRADO",
      category: "Acessórios", // Adicionado
      ownerId: 14,
      foundById: 15,
    },
    {
      title: "Relógio digital Casio",
      description: "Relógio preto Casio esquecido no vestiário.",
      location: "Vestiário masculino",
      imageUrl: "https://i.ibb.co/0jz0sX7p/relogio-casio-digital-masculino-w-800hg-9avdf-preto-557-1-a84263940454fe183dc1075ca5effa08.webp.jpg",
      status: "ENCONTRADO",
      category: "Acessórios", // Adicionado
      ownerId: 16,
      foundById: 17,
    },
    {
      title: "Carregador de celular Samsung",
      description: "Carregador branco, tipo C. Perdido perto do auditório.",
      location: "Auditório",
      imageUrl: "https://i.ibb.co/84fS9kqP/569c0050a261b0bb0f2f6569fd64da08.jpg",
      status: "PERDIDO",
      category: "Eletrônicos", // Adicionado
      ownerId: 18,
    },
    {
      title: "Livro 'Cálculo I'",
      description: "Livro de capa azul, encontrado na biblioteca.",
      location: "Biblioteca",
      imageUrl: "https://example.com/livro-calculo.jpg",
      status: "ENCONTRADO",
      category: "Material Escolar", // Adicionado
      ownerId: 19,
      foundById: 18,
    },
    {
      title: "Guarda-chuva preto",
      description:
        "Guarda-chuva grande, cabo de madeira. Esquecido na entrada.",
      location: "Entrada principal",
      imageUrl: "https://i.ibb.co/c0CzG8J/download.jpg",
      status: "PERDIDO",
      category: "Outros", // Adicionado
      ownerId: 20,
    },
    {
      title: "Calculadora científica HP",
      description: "Calculadora científica cinza, encontrada na sala 202.",
      location: "Sala 202",
      imageUrl: "https://i.ibb.co/bRjZ5Yxq/download.jpg",
      status: "ENCONTRADO",
      category: "Material Escolar", // Adicionado
      ownerId: 21,
      foundById: 19,
    },
    {
      title: "Estojo rosa Tilibra",
      description: "Estojo rosa com muitos adesivos.",
      location: "Pátio",
      imageUrl: "https://i.ibb.co/0RjZ614s/252335572e9f0b78bce.webp.jpg",
      status: "PERDIDO",
      category: "Material Escolar", // Adicionado
      ownerId: 22,
    },
    {
      title: "Boné vermelho Nike",
      description: "Boné de aba curva, logo branco. Encontrado no ginásio.",
      location: "Ginásio",
      imageUrl: "https://example.com/bone-nike.jphttps://i.ibb.co/8DSzY9xP/images.jpg",
      status: "ENCONTRADO",
      category: "Vestuário", // Adicionado
      ownerId: 23,
      foundById: 20,
    },
    {
      title: "Chaves do carro (VW)",
      description: "Chave canivete Volkswagen com chaveiro do Star Wars.",
      location: "Estacionamento",
      imageUrl: "https://i.ibb.co/Mk7DMpLZ/controle-vnp-47-1-4c977a400496e980e5aa8d61679c2198.webp.jpg",
      status: "PERDIDO",
      category: "Acessórios", // Adicionado
      ownerId: 24,
    },
    {
      title: "Agenda 2024 preta",
      description: "Agenda de capa dura preta, encontrada na sala 101.",
      location: "Sala 101",
      imageUrl: "https://i.ibb.co/nqG2vzWc/D-NQ-NP-794953-MLU78799026787-082024-O.webp.jpg",
      status: "ENCONTRADO",
      category: "Material Escolar", // Adicionado
      ownerId: 25,
      foundById: 21,
    },
    {
      title: "Brinco de argola dourado",
      description: "Um brinco de argola (par perdido).",
      location: "Banheiro feminino",
      imageUrl: "https://i.ibb.co/1Y2DktX1/brinco-argola-dourada-lisa-media-21-63d02c11731b63844816810775783336-1024-1024.webp.jpg",
      category: "Acessórios", // Adicionado
      ownerId: 26,
    },
    {
      title: "Pulseira de prata",
      description: "Pulseira fina com um pequeno pingente de coração.",
      location: "Refeitório",
      imageUrl: "https://i.ibb.co/DHv7pkR8/pulseira-de-prata-infinito-com-zirconias-d359f379c4f954b99789a97d9fd70575.jpg",
      status: "ENCONTRADO",
      category: "Acessórios", // Adicionado
      ownerId: 27,
      foundById: 22,
    },
    {
      title: "Anel de formatura",
      description: "Anel com pedra azul, inscrição interna 'A.L. 2023'.",
      location: "Vestiário masculino",
      imageUrl: "https://i.ibb.co/HfrPHsnL/images.jpg",
      status: "PERDIDO",
      category: "Acessórios", // Adicionado
      ownerId: 28,
    },
    {
      title: "Óculos de sol Ray-Ban",
      description: "Modelo Aviador, armação dourada, lente verde.",
      location: "Quadra",
      imageUrl: "https://i.ibb.co/kV8Tm02s/download.jpg",
      status: "ENCONTRADO",
      category: "Acessórios", // Adicionado
      ownerId: 29,
      foundById: 23,
    },
    {
      title: "Pasta de couro sintético",
      description: "Pasta preta com zíper, perdida na secretaria.",
      location: "Secretaria",
      imageUrl: "https://i.ibb.co/rYNSh5X/download.jpg",
      status: "PERDIDO",
      category: "Acessórios", // Adicionado
      ownerId: 30,
    },
    {
      title: "Uniforme (Jaleco)",
      description: "Jaleco branco com logo do SENAI, bolso manchado de caneta.",
      location: "Lab. de Química",
      imageUrl: "https://i.ibb.co/mC5YPnxr/download.jpg",
      status: "ENCONTRADO",
      category: "Vestuário", // Adicionado
      ownerId: 31,
      foundById: 24,
    },
    {
      title: "Squeeze azul",
      description: "Garrafa de água azul, 500 ml, com adesivo 'Hydrate'.",
      location: "Ginásio",
      imageUrl: "https://i.ibb.co/tprfkfrn/download.jpg",
      status: "PERDIDO",
      category: "Recipientes", // Adicionado
      ownerId: 32,
    },
    {
      title: "Caixa de som Bluetooth JBL (Go)",
      description: "Caixinha de som preta, modelo JBL Go. Encontrada no pátio.",
      location: "Pátio",
      imageUrl: "https://i.ibb.co/s9rpT1Lt/download.jpg",
      status: "ENCONTRADO",
      category: "Eletrônicos", // Adicionado
      ownerId: 33,
      foundById: 25,
    },
    {
      title: "Tablet Samsung",
      description: "Tablet com capa rosa, tela trincada no canto.",
      location: "Biblioteca",
      imageUrl: "https://i.ibb.co/0T0jhNr/download.jpg",
      status: "PERDIDO",
      category: "Eletrônicos", // Adicionado
      ownerId: 34,
    },
    {
      title: "Notebook Dell (carregador)",
      description:
        "Carregador de notebook Dell (ponta fina), encontrado na sala 301.",
      location: "Sala 301",
      imageUrl: "https://i.ibb.co/21vPB8TR/download.jpg",
      status: "ENCONTRADO",
      category: "Eletrônicos", // Adicionado
      ownerId: 35,
      foundById: 26,
    },
    {
      title: "Mouse sem fio Logitech",
      description:
        "Mouse preto, pequeno, perdido no laboratório de informática.",
      location: "Lab. de Informática",
      imageUrl: "https://i.ibb.co/99sPbyrk/download.jpg",
      status: "PERDIDO",
      category: "Eletrônicos", // Adicionado
      ownerId: 36,
    },
    {
      title: "Teclado mecânico",
      description: "Teclado com luzes RGB, encontrado na sala 201.",
      location: "Sala 201",
      imageUrl: "https://i.ibb.co/rKFCMgGJ/download.jpg",
      status: "ENCONTRADO",
      category: "Eletrônicos", // Adicionado
      ownerId: 37,
      foundById: 27,
    },
    {
      title: "Jaqueta jeans",
      description: "Jaqueta jeans clara, tamanho P, com botons.",
      location: "Cantina",
      imageUrl: "https://i.ibb.co/CKCC3rMV/download.jpg",
      status: "PERDIDO",
      category: "Vestuário", // Adicionado
      ownerId: 38,
    },
    {
      title: "Livro 'O Pequeno Príncipe'",
      description: "Edição de capa dura, encontrado no corredor B.",
      location: "Corredor B",
      imageUrl: "https://i.ibb.co/wZhSBfkD/download.jpg",
      status: "ENCONTRADO",
      category: "Material Escolar", // Adicionado
      ownerId: 39,
      foundById: 28,
    },
    {
      title: "Chave de casa (simples)",
      description: "Chave prateada única, sem chaveiro.",
      location: "Pátio",
      imageUrl: "https://i.ibb.co/Ndx6KsvV/download.jpg",
      status: "PERDIDO",
      category: "Acessórios", // Adicionado
      ownerId: 40,
    },
    {
      title: "Fone de ouvido Apple (com fio)",
      description: "Fone original da Apple, com conector lightning.",
      location: "Biblioteca",
      imageUrl: "https://i.ibb.co/DDwkGWQf/download.jpg",
      status: "ENCONTRADO",
      category: "Eletrônicos", // Adicionado
      ownerId: 41,
      foundById: 29,
    },
    {
      title: "Carregador de iPhone",
      description: "Cabo e fonte, originais. Perdido na sala 104.",
      location: "Sala 104",
      imageUrl: "https://i.ibb.co/kV7JkBfT/download.jpg",
      status: "PERDIDO",
      category: "Eletrônicos", // Adicionado
      ownerId: 42,
    },
    {
      title: "Bolsa pequena preta",
      description: "Bolsa transversal com alça dourada.",
      location: "Banheiro feminino",
      imageUrl: "https://i.ibb.co/yJWYY8c/download.jpg",
      status: "ENCONTRADO",
      category: "Acessórios", // Adicionado
      ownerId: 43,
      foundById: 30,
    },
    {
      title: "Tênis Adidas (um pé)",
      description: "Pé esquerdo de um tênis Adidas Superstar, branco.",
      location: "Vestiário masculino",
      imageUrl: "hthttps://i.ibb.co/Ps9D2mh2/download.jpg",
      status: "PERDIDO",
      category: "Vestuário", // Adicionado
      ownerId: 44,
    },
    {
      title: "Caderno de desenho",
      description: "Caderno grande, capa preta, com vários esboços.",
      location: "Sala 202",
      imageUrl: "https://i.ibb.co/C5Jn9T03/download.png",
      status: "ENCONTRADO",
      category: "Material Escolar", // Adicionado
      ownerId: 45,
      foundById: 31,
    },
    {
      title: "Blusa de frio (Azul Marinho)",
      description: "Blusa de lã, gola V, tamanho M.",
      location: "Auditório",
      imageUrl: "https://i.ibb.co/chn6Wszt/download.jpg",
      status: "PERDIDO",
      category: "Vestuário", // Adicionado
      ownerId: 46,
    },
    {
      title: "Hollister (Moletom)",
      description: "Moletom cinza com zíper, escrito Hollister em azul.",
      location: "Ginásio",
      imageUrl: "https://i.ibb.co/nqrTpZZp/download.jpg",
      status: "ENCONTRADO",
      category: "Vestuário", // Adicionado
      ownerId: 47,
      foundById: 32,
    },
    {
      title: "Airpods (Case)",
      description: "Caixinha de carregamento Airpods (vazia).",
      location: "Cantina",
      imageUrl: "https://i.ibb.co/JWBRmYrC/download.jpg",
      status: "PERDIDO",
      category: "Eletrônicos", // Adicionado
      ownerId: 48,
    },
    {
      title: "Documento (RG)",
      description: "Carteira de Identidade em nome de 'Carlos E. S.'.",
      location: "Secretaria",
      imageUrl: "https://i.ibb.co/G4NDn17G/download.jpg",
      status: "ENCONTRADO",
      category: "Documentos", // Adicionado
      ownerId: 49,
      foundById: 33,
    },
    {
      title: "Chaveiro (abridor)",
      description: "Chaveiro de metal em formato de abridor de garrafa.",
      location: "Refeitório",
      imageUrl: "https://i.ibb.co/bjNZN0Bh/download.png",
      status: "PERDIDO",
      category: "Acessórios", // Adicionado
      ownerId: 50,
    },
    {
      title: "Bicicleta (Cadeado)",
      description:
        "Cadeado de bicicleta U-lock, preto. Encontrado no bicicletário.",
      location: "Bicicletário",
      imageUrl: "https://i.ibb.co/HLR46zt9/download.jpg",
      status: "ENCONTRADO",
      category: "Acessórios", // Adicionado
      ownerId: 51,
      foundById: 34,
    },
    {
      title: "Kindle",
      description: "Kindle Paperwhite com capa azul.",
      location: "Biblioteca",
      imageUrl: "https://i.ibb.co/B21ZDGng/download.jpg",
      status: "PERDIDO",
      category: "Eletrônicos", // Adicionado
      ownerId: 52,
    },
    {
      title: "Controle de portão",
      description: "Controle preto, marca PPA. Encontrado no estacionamento.",
      location: "Estacionamento",
      imageUrl: "https://i.ibb.co/Mk7c477x/download.jpg",
      status: "ENCONTRADO",
      category: "Eletrônicos", // Adicionado
      ownerId: 53,
      foundById: 35,
    },
    {
      title: "Powerbank",
      description: "Carregador portátil preto, marca Xiaomi.",
      location: "Sala 101",
      imageUrl: "https://i.ibb.co/PGGJkq1G/download.jpg",
      status: "PERDIDO",
      category: "Eletrônicos", // Adicionado
      ownerId: 54,
    },
    {
      title: "Presilha de cabelo",
      description: "Presilha grande (piranha), cor tartaruga.",
      location: "Banheiro feminino",
      imageUrl: "https://i.ibb.co/1J7sfHJ4/images.jpg",
      status: "ENCONTRADO",
      category: "Acessórios", // Adicionado
      ownerId: 55,
      foundById: 36,
    },
    {
      title: "Cartão de transporte (Bilhete Único)",
      description: "Cartão de estudante, nome 'Mariana G.'.",
      location: "Pátio",
      imageUrl: "https://i.ibb.co/gLM3J1mL/download.jpg",
      status: "PERDIDO",
      category: "Documentos", // Adicionado
      ownerId: 56,
    },
    {
      title: "Marmita (Tupperware)",
      description: "Pote de vidro com tampa verde, encontrado no refeitório.",
      location: "Refeitório",
      imageUrl: "https://i.ibb.co/fYB0cT4N/download.jpg",
      status: "ENCONTRADO",
      category: "Recipientes", // Adicionado
      ownerId: 57,
      foundById: 37,
    },
    {
      title: "Protetor labial",
      description: "Nivea azul, perdido na cantina.",
      location: "Cantina",
      imageUrl: "https://i.ibb.co/G3NyBYDP/download.jpg",
      status: "PERDIDO",
      category: "Outros", // Adicionado
      ownerId: 58,
    },
    {
      title: "HD Externo",
      description: "HD Externo Seagate 1TB, cabo azul.",
      location: "Lab. de Informática",
      imageUrl: "https://i.ibb.co/4ZMhnKMr/download.jpg",
      status: "ENCONTRADO",
      category: "Eletrônicos", // Adicionado
      ownerId: 59,
      foundById: 38,
    },
    {
      title: "Par de luvas (preto)",
      description: "Luvas de lã pretas, tamanho único.",
      location: "Corredor principal",
      imageUrl: "https://i.ibb.co/SDHs4TXQ/download.jpg",
      status: "PERDIDO",
      category: "Vestuário", // Adicionado
      ownerId: 60,
    },
    {
      title: "Moeda (antiga)",
      description: "Moeda de 1 real das Olimpíadas (Boxe).",
      location: "Pátio",
      imageUrl: "https://i.ibb.co/gbLWn3tf/download.jpg",
      status: "ENCONTRADO",
      category: "Outros", // Adicionado
      ownerId: 61,
      foundById: 39,
    },
    {
      title: "Violão (Capa)",
      description: "Capa de violão preta, vazia. Esquecida no auditório.",
      location: "Auditório",
      imageUrl: "https://i.ibb.co/x8CyK1CR/download.jpg",
      status: "PERDIDO",
      category: "Acessórios", // Adicionado
      ownerId: 62,
    },
    {
      title: "Escova de cabelo",
      description: "Escova tipo raquete, cor rosa.",
      location: "Vestiário feminino",
      imageUrl: "https://i.ibb.co/8LQBzBtn/download.jpg",
      status: "ENCONTRADO",
      category: "Acessórios", // Adicionado
      ownerId: 63,
      foundById: 40,
    },
    {
      title: "Crachá (sem identificação)",
      description: "Crachá de visitante, número 042.",
      location: "Entrada principal",
      imageUrl: "https://i.ibb.co/zVBcjCKM/download.jpg",
      status: "PERDIDO",
      category: "Documentos", // Adicionado
      ownerId: 64,
    },
    {
      title: "Livro da Biblioteca",
      description: "Livro '1984', com etiqueta da biblioteca.",
      location: "Sala 102",
      imageUrl: "https://i.ibb.co/Txr1pPs9/download.jpg",
      status: "ENCONTRADO",
      category: "Material Escolar", // Adicionado
      ownerId: 65,
      foundById: 41,
    },
    {
      title: "Copo Stanley (Verde)",
      description: "Copo térmico verde, com tampa. Perdido na quadra.",
      location: "Quadra",
      imageUrl: "https://i.ibb.co/5gqYbjRJ/download.jpg",
      status: "PERDIDO",
      category: "Recipientes", // Adicionado
      ownerId: 66,
    },
    {
      title: "Bola de vôlei",
      description: "Bola Mikasa, encontrada no ginásio após o horário.",
      location: "Ginásio",
      imageUrl: "https://i.ibb.co/kgp91St8/download.jpg",
      status: "ENCONTRADO",
      category: "Outros", // Adicionado
      ownerId: 67,
      foundById: 42,
    },
    {
      title: "Adaptador de tomada",
      description: "Adaptador universal, branco.",
      location: "Sala 301",
      imageUrl: "https://i.ibb.co/JRkFd0N6/download.jpg",
      status: "PERDIDO",
      category: "Eletrônicos", // Adicionado
      ownerId: 68,
    },
    {
      title: "Maço de cigarros (fechado)",
      description: "Maço de Marlboro vermelho, encontrado no estacionamento.",
      location: "Estacionamento",
      imageUrl: "https://i.ibb.co/mr92HtwC/download.jpg",
      status: "ENCONTRADO",
      category: "Outros", // Adicionado
      ownerId: 69,
      foundById: 43,
    },
    {
      title: "Óculos de sol (Oakley)",
      description: "Modelo esportivo, armação preta, lente espelhada.",
      location: "Quadra",
      imageUrl: "https://i.ibb.co/LdS44R6x/download.jpg",
      status: "PERDIDO",
      category: "Acessórios", // Adicionado
      ownerId: 70,
    },
    {
      title: "Camiseta de time (Corinthians)",
      description: "Camiseta preta, número 10. Encontrada no vestiário.",
      location: "Vestiário masculino",
      imageUrl: "https://i.ibb.co/PskKGJGV/download.jpg",
      status: "ENCONTRADO",
      category: "Vestuário", // Adicionado
      ownerId: 71,
      foundById: 44,
    },
    {
      title: "Fones de ouvido (com fio, genérico)",
      description: "Fones pretos, simples, marca 'Inova'.",
      location: "Biblioteca",
      imageUrl: "https://i.ibb.co/mCcWvPc3/download.jpg",
      status: "PERDIDO",
      category: "Eletrônicos", // Adicionado
      ownerId: 72,
    },
    {
      title: "Relógio de pulso (Analógico)",
      description: "Relógio dourado, marca 'Orient', pulseira de metal.",
      location: "Banheiro masculino",
      imageUrl: "https://i.ibb.co/YFKN0xTD/download.jpg",
      status: "ENCONTRADO",
      category: "Acessórios", // Adicionado
      ownerId: 73,
      foundById: 45,
    },
    {
      title: "Garrafa de café (térmica)",
      description: "Garrafa de inox, 500ml, com café dentro.",
      location: "Sala dos Professores",
      imageUrl: "https://i.ibb.co/v6GK0PJ6/download.jpg",
      status: "PERDIDO",
      category: "Recipientes", // Adicionado
      ownerId: 74,
    },
    {
      title: "Chaveiro (Pelúcia)",
      description: "Chaveiro do Pikachu, encontrado no corredor B.",
      location: "Corredor B",
      imageUrl: "https://i.ibb.co/HLsFKyPG/download.jpg",
      status: "ENCONTRADO",
      category: "Acessórios", // Adicionado
      ownerId: 75,
      foundById: 46,
    },
    {
      title: "Isqueiro (Bic)",
      description: "Isqueiro azul, perdido perto da entrada.",
      location: "Entrada principal",
      imageUrl: "https://i.ibb.co/HT7ZV3Ly/download.jpg",
      status: "PERDIDO",
      category: "Outros", // Adicionado
      ownerId: 76,
    },
    {
      title: "Câmera (Instax Mini)",
      description: "Câmera instantânea rosa, encontrada na cantina.",
      location: "Cantina",
      imageUrl: "https://i.ibb.co/zWbvx8GY/download.jpg",
      status: "ENCONTRADO",
      category: "Eletrônicos", // Adicionado
      ownerId: 77,
      foundById: 47,
    },
    {
      title: "Livro 'O Hobbit'",
      description: "Edição de bolso, capa verde.",
      location: "Pátio",
      imageUrl: "",
      status: "PERDIDO",
      category: "Material Escolar", // Adicionado
      ownerId: 78,
    },
    {
      title: "Notebook (Capa)",
      description: "Capa de notebook preta, 15 polegadas, zíper quebrado.",
      location: "Sala 201",
      imageUrl: "",
      status: "ENCONTRADO",
      category: "Acessórios", // Adicionado
      ownerId: 79,
      foundById: 48,
    },
    {
      title: "Chapéu (Preto)",
      description: "Chapéu de feltro preto, estilo 'Fedora'.",
      location: "Auditório",
      imageUrl: "",
      status: "PERDIDO",
      category: "Vestuário", // Adicionado
      ownerId: 80,
    },
    {
      title: "Controle de Ar Condicionado",
      description: "Controle universal, encontrado na sala 102.",
      location: "Sala 102",
      imageUrl: "",
      status: "ENCONTRADO",
      category: "Eletrônicos", // Adicionado
      ownerId: 81,
      foundById: 49,
    },
    {
      title: "Tubo de cola (Bastão)",
      description: "Cola Pritt, grande. Perdida na biblioteca.",
      location: "Biblioteca",
      imageUrl: "",
      status: "PERDIDO",
      category: "Material Escolar", // Adicionado
      ownerId: 82,
    },
    {
      title: "Apontador (com depósito)",
      description: "Apontador Faber-Castell, azul. Encontrado na sala 104.",
      location: "Sala 104",
      imageUrl: "",
      status: "ENCONTRADO",
      category: "Material Escolar", // Adicionado
      ownerId: 83,
      foundById: 50,
    },
    {
      title: "Desodorante",
      description:
        "Desodorante aerosol Rexona, masculino. Esquecido no vestiário.",
      location: "Vestiário masculino",
      imageUrl: "",
      status: "PERDIDO",
      category: "Outros", // Adicionado
      ownerId: 84,
    },
    {
      title: "Carimbo (Professor)",
      description: "Carimbo com o nome 'Prof. Helena M.'.",
      location: "Sala dos Professores",
      imageUrl: "",
      status: "ENCONTRADO",
      category: "Material Escolar", // Adicionado
      ownerId: 85,
      foundById: 51,
    },
    {
      title: "Camisa Social (Branca)",
      description: "Camisa branca, tamanho G, dobrada. Perdida no auditório.",
      location: "Auditório",
      imageUrl: "",
      status: "PERDIDO",
      category: "Vestuário", // Adicionado
      ownerId: 86,
    },
    {
      title: "Garrafa de iogurte",
      description: "Garrafa de 'Yakult', encontrada vazia na sala 202.",
      location: "Sala 202",
      imageUrl: "",
      status: "ENCONTRADO",
      category: "Recipientes", // Adicionado
      ownerId: 87,
      foundById: 52,
    },
    {
      title: "Sapato social (preto)",
      description: "Sapato social masculino, pé direito, marca 'Democrata'.",
      location: "Estacionamento",
      imageUrl: "",
      status: "PERDIDO",
      category: "Vestuário", // Adicionado
      ownerId: 88,
    },
    {
      title: "Grampeador",
      description: "Grampeador pequeno, preto. Encontrado na secretaria.",
      location: "Secretaria",
      imageUrl: "",
      status: "ENCONTRADO",
      category: "Material Escolar", // Adicionado
      ownerId: 89,
      foundById: 53,
    },
    {
      title: "Pacote de bolachas (fechado)",
      description: "Pacote de 'Passatempo', recheio de chocolate.",
      location: "Cantina",
      imageUrl: "",
      status: "PERDIDO",
      category: "Outros", // Adicionado
      ownerId: 90,
    },
    {
      title: "Batom (vermelho)",
      description: "Batom da marca MAC, cor Ruby Woo. Encontrado no banheiro.",
      location: "Banheiro feminino",
      imageUrl: "",
      status: "ENCONTRADO",
      category: "Outros", // Adicionado
      ownerId: 91,
      foundById: 54,
    },
    {
      title: "Mousepad",
      description: "Mousepad preto, simples. Perdido no Lab. de Informática.",
      location: "Lab. de Informática",
      imageUrl: "",
      status: "PERDIDO",
      category: "Eletrônicos", // Adicionado
      ownerId: 92,
    },
    {
      title: "Caneta (Marca-texto)",
      description: "Marca-texto amarelo, Faber-Castell.",
      location: "Biblioteca",
      imageUrl: "",
      status: "ENCONTRADO",
      category: "Material Escolar", // Adicionado
      ownerId: 93,
      foundById: 55,
    },
    {
      title: "Touca de natação",
      description: "Touca de silicone preta, marca 'Speedo'.",
      location: "Vestiário masculino",
      imageUrl: "",
      status: "PERDIDO",
      category: "Vestuário", // Adicionado
      ownerId: 94,
    },
    {
      title: "Álcool em gel",
      description: "Frasco pequeno, com chaveiro, 'Giovanna Baby'.",
      location: "Pátio",
      imageUrl: "",
      status: "ENCONTRADO",
      category: "Outros", // Adicionado
      ownerId: 95,
      foundById: 56,
    },
    {
      title: "Óculos de natação",
      description: "Óculos Speedo, lente azul.",
      location: "Vestiário masculino",
      imageUrl: "",
      status: "PERDIDO",
      category: "Acessórios", // Adicionado
      ownerId: 96,
    },
    {
      title: "Dinheiro (R$ 50,00)",
      description: "Uma nota de R$ 50,00 encontrada no corredor.",
      location: "Corredor principal",
      imageUrl: "",
      status: "ENCONTRADO",
      category: "Outros", // Adicionado
      ownerId: 97,
      foundById: 57,
    },
    {
      title: "Caderneta (tipo Moleskine)",
      description: "Caderneta preta, pequena, com elástico.",
      location: "Refeitório",
      imageUrl: "",
      status: "PERDIDO",
      category: "Material Escolar", // Adicionado
      ownerId: 98,
    },
    {
      title: "Band-aid (caixa)",
      description: "Caixa de Band-aid, quase cheia. Encontrada no ginásio.",
      location: "Ginásio",
      imageUrl: "",
      status: "ENCONTRADO",
      category: "Outros", // Adicionado
      ownerId: 99,
      foundById: 58,
    },
    {
      title: "Anel (Bijuteria)",
      description: "Anel de metal prateado com pedra falsa (verde).",
      location: "Banheiro feminino",
      imageUrl: "",
      status: "PERDIDO",
      category: "Acessórios", // Adicionado
      ownerId: 100,
    },
    // --- Itens 101-103 Corrigidos ---
    {
      title: "Carregador Portátil (Powerbank) Branco",
      description:
        "Powerbank branco da marca 'Baseus', deixado na sala de estudos.",
      location: "Sala de Estudos",
      imageUrl: "",
      status: "ENCONTRADO",
      category: "Eletrônicos", // Adicionado
      ownerId: 1, // Corrigido (era 101)
      foundById: 59,
    },
    {
      title: "Cartão de Acesso (Crachá)",
      description:
        "Crachá de aluno com foto, nome 'Lucas R.'. Perdido no corredor principal.",
      location: "Corredor principal",
      imageUrl: "",
      status: "PERDIDO",
      category: "Documentos", // Adicionado
      ownerId: 2, // Corrigido (era 102)
    },
    {
      title: "Livro 'Admirável Mundo Novo'",
      description:
        "Livro de capa mole, edição da 'Biblioteca Azul'. Encontrado no pátio.",
      location: "Pátio",
      imageUrl: "",
      status: "ENCONTRADO",
      category: "Material Escolar", // Adicionado
      ownerId: 3, // Corrigido (era 103)
      foundById: 60,
    },
    {
      title: "Máscara Facial (de tecido)",
      description:
        "Máscara reutilizável azul, com elásticos para as orelhas. Perdida na cantina.",
      location: "Cantina",
      imageUrl: "",
      status: "PERDIDO",
      category: "Vestuário", // Adicionado
      ownerId: 4, // Corrigido (era 104)
    },
    {
      title: "Garrafa Térmica (Inox)",
      description:
        "Garrafa térmica prata, capacidade de 750ml. Encontrada na sala dos professores.",
      location: "Sala dos Professores",
      imageUrl: "",
      status: "ENCONTRADO",
      category: "Recipientes", // Adicionado
      ownerId: 5, // Corrigido (era 105)
      foundById: 61,
    },
    {
      title: "Caderno Universitário (Capa Dura)",
      description:
        "Caderno de capa dura azul, com adesivos na capa. Esquecido na sala 203.",
      location: "Sala 203",
      imageUrl: "",
      status: "PERDIDO",
      category: "Material Escolar", // Adicionado
      ownerId: 6, // Corrigido (era 106)
      foundById: null,
    },
    {
      title: "Fone de Ouvido Bluetooth (Sem Fio)",
      description:
        "Fone de ouvido preto, modelo 'TWS'. Encontrado no laboratório de informática.",
      location: "Lab. de Informática",
      imageUrl: "",
      status: "ENCONTRADO",
      category: "Eletrônicos", // Adicionado
      ownerId: 7, // Corrigido (era 107)
      foundById: 62,
    },
    {
      title: "Relógio de Pulso Digital (Casio)",
      description:
        "Relógio digital preto da marca Casio, com pulseira de borracha. Perdido no vestiário.",
      location: "Vestiário",
      imageUrl: "",
      status: "PERDIDO",
      category: "Acessórios", // Adicionado
      ownerId: 8, // Corrigido (era 108)
      foundById: null,
    },
    {
      title: "Mochila Escolar (Preta com detalhes vermelhos)",
      description:
        "Mochila preta com detalhes vermelhos, marca 'Nike'. Encontrada no pátio.",
      location: "Pátio",
      imageUrl: "",
      status: "ENCONTRADO",
      category: "Acessórios", // Adicionado
      ownerId: 9, // Corrigido (era 109)
      foundById: 63,
    },
  ];

  await prisma.item.createMany({ data: itemsData });

  console.log(
    "✅ Seed criado com sucesso com 100 usuários (senha123) e 100 itens fixos!"
  );
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
