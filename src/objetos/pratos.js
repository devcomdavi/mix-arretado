// Array de pratos extraído das imagens em /public/imagens/cardapio/
const pratos = [
  {
    id: 'pc',
    imagem: '/imagens/template_prato.png',
    nome: 'Purê de Calabresa', // Preencher com o nome do prato
    descricao: 'Delicioso purê de macaxeira com calabresa acebolada', // Preencher com a descrição do prato
    categoria: 'jantar', // Preencher com a categoria do prato
    preco: '29,90' // Preencher com o preço do prato
  },
  {
    id: 'cal',
    imagem: '/imagens/template_prato.png',
    nome: 'Alagos',
    descricao: 'Regado com manteiga da terra',
    categoria: 'cuscuz',
    preco: '8,90'
  },
  {
    id: 'cgo',
    imagem: '/imagens/template_prato.png',
    nome: 'Goiás',
    descricao: 'Ovos fritos: mexidos ou inteiros',
    categoria: 'cuscuz',
    preco: '14,90'
  },
  {
    id: 'crs',
    imagem: '/imagens/template_prato.png',
    nome: 'Rio Grande do Sul',
    descricao: 'Queijo coalho, manteiga ou mussarela',
    categoria: 'cuscuz',
    preco: '18,90'
  },
  {
    id: 'crr',
    imagem: '/imagens/template_prato.png',
    nome: 'Roraima',
    descricao: 'Picado de bode',
    categoria: 'cuscuz',
    preco: '25,90'
  },
  {
    id: 'cba',
    imagem: '/imagens/template_prato.png',
    nome: 'Bahia',
    descricao: 'calabresa e queijo coalho',
    categoria: 'cuscuz',
    preco: '23,90'
  },
  {
    id: 'cmt',
    imagem: '/imagens/template_prato.png',
    nome: 'Mato Grosso',
    descricao: 'Galinha guisada: filé de peito ou sobrecoxa',
    categoria: 'cuscuz',
    preco: '27,90'
  },
  {
    id: 'cpb',
    imagem: '/imagens/template_prato.png',
    nome: 'Paraíba',
    descricao: 'Carne do sol na nata',
    categoria: 'cuscuz',
    preco: '29,90'
  },
  {
    id: 'cce',
    imagem: '/imagens/template_prato.png',
    nome: 'Ceará',
    descricao: 'Cubos de carne de sol frita acebolada e queijo',
    categoria: 'cuscuz',
    preco: '29,90'
  },
  {
    id: 'crn',
    imagem: '/imagens/template_prato.png',
    nome: 'Rio Grande do Norte',
    descricao: 'Carne guisada',
    categoria: 'cuscuz',
    preco: '27,90'
  },
  {
    id: 'cac',
    imagem: '/imagens/template_prato.png',
    nome: 'Acre',
    descricao: 'Bode guisado',
    categoria: 'cuscuz',
    preco: '37,90'
  },
  {
    id: 'cma',
    imagem: '/imagens/template_prato.png',
    nome: 'Maranhão',
    descricao: 'Recheado com coco fresco e regado com leite de coco caseiro, leite Moça e canela',
    categoria: 'cuscuz',
    preco: '24,90'
  },
  {
    id: 'taa',
    imagem: '/imagens/template_prato.png',
    nome: 'Areia',
    descricao: 'Regada com manteiga da terra',
    categoria: 'tapioca-arretada',
    preco: '7,90'
  },
  {
    id: 'tab',
    imagem: '/imagens/template_prato.png',
    nome: 'Bananaeiras',
    descricao: 'Recheado com coco fresco',
    categoria: 'tapioca-arretada',
    preco: '9,90'
  },
  {
    id: 'tabs',
    imagem: '/imagens/template_prato.png',
    nome: 'Beijú Simples',
    descricao: 'Coco fresco ralado, leite Moça',
    categoria: 'tapioca-arretada',
    preco: '13,90'
  },
  {
    id: 'tas',
    imagem: '/imagens/template_prato.png',
    nome: 'Soledade',
    descricao: 'Ovo e vinagrete',
    categoria: 'tapioca-arretada',
    preco: '14,90'
  },
  {
    id: 'taca',
    imagem: '/imagens/template_prato.png',
    nome: 'Cabedelo',
    descricao: 'Queijo ou coco e queijo',
    categoria: 'tapioca-arretada',
    preco: '19,90'
  },
  {
    id: 'tcg',
    imagem: '/imagens/template_prato.png',
    nome: 'Campina Grande',
    descricao: 'Recheada com queijo, presunto e coco',
    categoria: 'tapioca-arretada',
    preco: '22,90'
  },
  {
    id: 'taso',
    imagem: '/imagens/template_prato.png',
    nome: 'Solânea',
    descricao: 'Queijo coalho e calabresa',
    categoria: 'tapioca-arretada',
    preco: '23,90'
  },
  {
    id: 'taga',
    imagem: '/imagens/template_prato.png',
    nome: 'Guarabira',
    descricao: '4 queijos: coalho, manteiga mussarela e catupiry',
    categoria: 'tapioca-arretada',
    preco: '29,90'
  },
  {
    id: 'tajp',
    imagem: '/imagens/template_prato.png',
    nome: 'João Pessoa',
    descricao: 'Frango desfiado, catupiry e orégano',
    categoria: 'tapioca-arretada',
    preco: '29,90'
  },
  {
    id: 'tapo',
    imagem: '/imagens/template_prato.png',
    nome: 'Pombal',
    descricao: 'Carne de sol na nata',
    categoria: 'tapioca-arretada',
    preco: '29,90'
  },
  {
    id: 'tamo',
    imagem: '/imagens/template_prato.png',
    nome: 'Monteiro',
    descricao: 'Carne de sol desfiada com coalho',
    categoria: 'tapioca-arretada',
    preco: '29,90'
  },
  {
    id: 'tacj',
    imagem: '/imagens/template_prato.png',
    nome: 'Cajazeiras',
    descricao: 'Recheada com banan frita, coco ralado, melaço e queijo coalho',
    categoria: 'tapioca-arretada',
    preco: '23,90'
  },
  {
    id: 'taba',
    imagem: '/imagens/template_prato.png',
    nome: 'Beiju Arretado',
    descricao: 'Coco fresco ralado, coalho, leite Moça ou mel de engenho',
    categoria: 'tapioca-arretada',
    preco: '23,90'
  },
  {
    id: 'tasm',
    imagem: '/imagens/template_prato.png',
    nome: 'São Mamede',
    descricao: 'Recheado com coco fresco e regado com leite de coco caseiro, leite Moça e canela',
    categoria: 'tapioca-arretada',
    preco: '24,90'
  },
  {
    id: 'tapi',
    imagem: '/imagens/template_prato.png',
    nome: 'Piancó',
    descricao: 'Recheado e coberto com queijo, banana frita, açucar, Nescau, leite Moça e canela',
    categoria: 'tapioca-arretada',
    preco: '25,90'
  },
  {
    id: 'tmba',
    imagem: '/imagens/template_prato.png',
    nome: 'Bananeiras',
    descricao: 'Recheado com coco fresco ralado',
    categoria: 'tapioquinha',
    preco: '6,90'
  },
  {
    id: 'tmca',
    imagem: '/imagens/template_prato.png',
    nome: 'Cabedelo',
    descricao: 'Queijo ou coco e queijo',
    categoria: 'tapioquinha',
    preco: '10,90'
  },
  {
    id: 'tmpo',
    imagem: '/imagens/template_prato.png',
    nome: 'Pombal',
    descricao: 'Carne de sol na nata',
    categoria: 'tapioquinha',
    preco: '15,90'
  },
  {
    id: 'tmjp',
    imagem: '/imagens/template_prato.png',
    nome: 'João Pessoa',
    descricao: 'Frango desfiado, catupiry e orégano',
    categoria: 'tapioquinha',
    preco: '15,90'
  },
  {
    id: 'tmcg',
    imagem: '/imagens/template_prato.png',
    nome: 'Campina Grande',
    descricao: 'Recheado com queijo, presunto e coco',
    categoria: 'tapioquinha',
    preco: '10,90'
  },
  {
    id: 'tmba',
    imagem: '/imagens/template_prato.png',
    nome: 'Bananeiras',
    descricao: 'Recheado com coco fresco ralado',
    categoria: 'tapioquinha',
    preco: '6,90'
  },
  {
    id: 'tmcb',
    imagem: '/imagens/template_prato.png',
    nome: 'Cabaceiras',
    descricao: 'massa de café recheada com doce de leite e corbetura de brigadeiro',
    categoria: 'tapioquinha',
    preco: '14,90'
  },
  {
    id: 'tmcj',
    imagem: '/imagens/template_prato.png',
    nome: 'Cajazeiras',
    descricao: 'Recheada com banana frita, coco ralado, melaço e coalho',
    categoria: 'tapioquinha',
    preco: '14,90'
  },
  {
    id: 'tmba',
    imagem: '/imagens/template_prato.png',
    nome: 'Beijú Arretado',
    descricao: 'Coco fresco ralado, coalho, leite Moça ou mel de engenho',
    categoria: 'tapioquinha',
    preco: '14,90'
  },
  {
    id: 'tmsm',
    imagem: '/imagens/template_prato.png',
    nome: 'São Mamede',
    descricao: 'Recheado com coco fresco e regado com leite de coco caseiro, leite de Moça e canela',
    categoria: 'tapioquinha',
    preco: '14,90'
  },
  {
    id: 'tmur',
    imagem: '/imagens/template_prato.png',
    nome: 'Uirauna',
    descricao: 'Recheado com brigadeiro caseiro de leite Moça; acompanha M&ms ou Kit Kat',
    categoria: 'tapioquinha',
    preco: '14,90'
  },
  {
    id: 'tmpc',
    imagem: '/imagens/template_prato.png',
    nome: 'Piancó',
    descricao: 'Recheado e coberto com queijo, banana frita, açucar, Nescau, leite Moça e canela',
    categoria: 'tapioquinha',
    preco: '14,90'
  },
  {
    id: 'tmte',
    imagem: '/imagens/template_prato.png',
    nome: 'Texeira',
    descricao: 'Recheada com brigadeiro caseiro de leite Moça e morango',
    categoria: 'tapioquinha',
    preco: '14,90'
  },
  {
    id: 'jtrb',
    imagem: '/imagens/template_prato.png',
    nome: 'Rubacão',
    descricao: 'Feijão verde, arroz refolgado, creme de nata, coalho e carne de sol acebolada',
    categoria: 'jantar',
    preco: '39,90'
  },
  {
    id: 'jtgg',
    imagem: '/imagens/template_prato.png',
    nome: 'Galinha Guizada',
    descricao: 'Filé de peito ou sobrecoxa, macaxeira, vinagrete e farofa',
    categoria: 'jantar',
    preco: '31,90'
  },
  {
    id: 'jtpb',
    imagem: '/imagens/template_prato.png',
    nome: 'Picado de Bode',
    descricao: 'Acompanha macaxeira, vinagrete e farofa',
    categoria: 'jantar',
    preco: '31,90'
  },
  {
    id: 'jtcq',
    imagem: '/imagens/template_prato.png',
    nome: 'Charque',
    descricao: 'Acompanha macaxeira, vinagrete e farofa',
    categoria: 'jantar',
    preco: '34,90'
  },
  {
    id: 'jtrb',
    imagem: '/imagens/template_prato.png',
    nome: 'Rubacão',
    descricao: 'Feijão verde, arroz refolgado, creme de nata, coalho e carne de sol acebolada',
    categoria: 'jantar',
    preco: '39,90'
  },
  {
    id: 'jtrb',
    imagem: '/imagens/template_prato.png',
    nome: 'Rubacão',
    descricao: 'Feijão verde, arroz refolgado, creme de nata, coalho e carne de sol acebolada',
    categoria: 'jantar',
    preco: '39,90'
  }
];

export default pratos;
