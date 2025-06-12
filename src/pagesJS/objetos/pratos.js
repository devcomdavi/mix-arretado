// Array de pratos extraído das../public imagens em /public../public/imagens/cardapio/
const pratos = [
  {
    id: 'cal',
    imagem: '../imagens/template_prato.png',
    nome: 'Alagoas',
    descricao: 'Regado com manteiga da terra',
    categoria: 'cuscuz',
    preco: '8,90'
  },
  {
    id: 'cgo',
    imagem: '../imagens/template_prato.png',
    nome: 'Goiás',
    descricao: 'Ovos fritos: mexidos ou inteiros',
    categoria: 'cuscuz',
    preco: '14,90'
  },
  {
    id: 'crs',
    imagem: '../imagens/template_prato.png',
    nome: 'Rio Grande do Sul',
    descricao: 'Queijo coalho, manteiga ou mussarela',
    categoria: 'cuscuz',
    preco: '18,90'
  },
  {
    id: 'crr',
    imagem: '../imagens/template_prato.png',
    nome: 'Roraima',
    descricao: 'Picado de bode',
    categoria: 'cuscuz',
    preco: '25,90'
  },
  {
    id: 'cba',
    imagem: '../imagens/template_prato.png',
    nome: 'Bahia',
    descricao: 'calabresa e queijo coalho',
    categoria: 'cuscuz',
    preco: '23,90'
  },
  {
    id: 'cmt',
    imagem: '../imagens/template_prato.png',
    nome: 'Mato Grosso',
    descricao: 'Galinha guisada: filé de peito ou sobrecoxa',
    categoria: 'cuscuz',
    preco: '27,90'
  },
  {
    id: 'cpb',
    imagem: '../imagens/template_prato.png',
    nome: 'Paraíba',
    descricao: 'Carne do sol na nata',
    categoria: 'cuscuz',
    preco: '29,90'
  },
  {
    id: 'cce',
    imagem: '../imagens/template_prato.png',
    nome: 'Ceará',
    descricao: 'Cubos de carne de sol frita acebolada e queijo',
    categoria: 'cuscuz',
    preco: '29,90'
  },
  {
    id: 'crn',
    imagem: '../imagens/template_prato.png',
    nome: 'Rio Grande do Norte',
    descricao: 'Carne guisada',
    categoria: 'cuscuz',
    preco: '27,90'
  },
  {
    id: 'cac',
    imagem: '../imagens/template_prato.png',
    nome: 'Acre',
    descricao: 'Bode guisado',
    categoria: 'cuscuz',
    preco: '37,90'
  },
  {
    id: 'cma',
    imagem: '../imagens/template_prato.png',
    nome: 'Maranhão',
    descricao: 'Recheado com coco fresco e regado com leite de coco caseiro, leite Moça e canela',
    categoria: 'cuscuz',
    preco: '24,90'
  },
  {
    id: 'taa',
    imagem: '../imagens/template_prato.png',
    nome: 'Areia',
    descricao: 'Regada com manteiga da terra',
    categoria: 'tapiocas arretadas',
    preco: '7,90'
  },
  {
    id: 'tab',
    imagem: '../imagens/template_prato.png',
    nome: 'Bananaeiras',
    descricao: 'Recheado com coco fresco',
    categoria: 'tapiocas arretadas',
    preco: '9,90'
  },
  {
    id: 'tabs',
    imagem: '../imagens/template_prato.png',
    nome: 'Beijú Simples',
    descricao: 'Coco fresco ralado, leite Moça',
    categoria: 'tapiocas arretadas',
    preco: '13,90'
  },
  {
    id: 'tas',
    imagem: '../imagens/template_prato.png',
    nome: 'Soledade',
    descricao: 'Ovo e vinagrete',
    categoria: 'tapiocas arretadas',
    preco: '14,90'
  },
  {
    id: 'taca',
    imagem: '../imagens/template_prato.png',
    nome: 'Cabedelo',
    descricao: 'Queijo ou coco e queijo',
    categoria: 'tapiocas arretadas',
    preco: '19,90'
  },
  {
    id: 'tcg',
    imagem: '../imagens/template_prato.png',
    nome: 'Campina Grande',
    descricao: 'Recheada com queijo, presunto e coco',
    categoria: 'tapiocas arretadas',
    preco: '22,90'
  },
  {
    id: 'taso',
    imagem: '../imagens/template_prato.png',
    nome: 'Solânea',
    descricao: 'Queijo coalho e calabresa',
    categoria: 'tapiocas arretadas',
    preco: '23,90'
  },
  {
    id: 'taga',
    imagem: '../imagens/template_prato.png',
    nome: 'Guarabira',
    descricao: '4 queijos: coalho, manteiga mussarela e catupiry',
    categoria: 'tapiocas arretadas',
    preco: '29,90'
  },
  {
    id: 'tajp',
    imagem: '../imagens/template_prato.png',
    nome: 'João Pessoa',
    descricao: 'Frango desfiado, catupiry e orégano',
    categoria: 'tapiocas arretadas',
    preco: '29,90'
  },
  {
    id: 'tapo',
    imagem: '../imagens/template_prato.png',
    nome: 'Pombal',
    descricao: 'Carne de sol na nata',
    categoria: 'tapiocas arretadas',
    preco: '29,90'
  },
  {
    id: 'tamo',
    imagem: '../imagens/template_prato.png',
    nome: 'Monteiro',
    descricao: 'Carne de sol desfiada com coalho',
    categoria: 'tapiocas arretadas',
    preco: '29,90'
  },
  {
    id: 'tacj',
    imagem: '../imagens/template_prato.png',
    nome: 'Cajazeiras',
    descricao: 'Recheada com banan frita, coco ralado, melaço e queijo coalho',
    categoria: 'tapiocas arretadas',
    preco: '23,90'
  },
  {
    id: 'taba',
    imagem: '../imagens/template_prato.png',
    nome: 'Beiju Arretado',
    descricao: 'Coco fresco ralado, coalho, leite Moça ou mel de engenho',
    categoria: 'tapiocas arretadas',
    preco: '23,90'
  },
  {
    id: 'tasm',
    imagem: '../imagens/template_prato.png',
    nome: 'São Mamede',
    descricao: 'Recheado com coco fresco e regado com leite de coco caseiro, leite Moça e canela',
    categoria: 'tapiocas arretadas',
    preco: '24,90'
  },
  {
    id: 'tapi',
    imagem: '../imagens/template_prato.png',
    nome: 'Piancó',
    descricao: 'Recheado e coberto com queijo, banana frita, açucar, Nescau, leite Moça e canela',
    categoria: 'tapiocas arretadas',
    preco: '25,90'
  },
  {
    id: 'tmba',
    imagem: '../imagens/template_prato.png',
    nome: 'Bananeiras',
    descricao: 'Recheado com coco fresco ralado',
    categoria: 'tapioquinhas',
    preco: '6,90'
  },
  {
    id: 'tmca',
    imagem: '../imagens/template_prato.png',
    nome: 'Cabedelo',
    descricao: 'Queijo ou coco e queijo',
    categoria: 'tapioquinhas',
    preco: '10,90'
  },
  {
    id: 'tmpo',
    imagem: '../imagens/template_prato.png',
    nome: 'Pombal',
    descricao: 'Carne de sol na nata',
    categoria: 'tapioquinhas',
    preco: '15,90'
  },
  {
    id: 'tmjp',
    imagem: '../imagens/template_prato.png',
    nome: 'João Pessoa',
    descricao: 'Frango desfiado, catupiry e orégano',
    categoria: 'tapioquinhas',
    preco: '15,90'
  },
  {
    id: 'tmcg',
    imagem: '../imagens/template_prato.png',
    nome: 'Campina Grande',
    descricao: 'Recheado com queijo, presunto e coco',
    categoria: 'tapioquinhas',
    preco: '10,90'
  },
  {
    id: 'tmba',
    imagem: '../imagens/template_prato.png',
    nome: 'Bananeiras',
    descricao: 'Recheado com coco fresco ralado',
    categoria: 'tapioquinhas',
    preco: '6,90'
  },
  {
    id: 'tmcb',
    imagem: '../imagens/template_prato.png',
    nome: 'Cabaceiras',
    descricao: 'massa de café recheada com doce de leite e corbetura de brigadeiro',
    categoria: 'tapioquinhas',
    preco: '14,90'
  },
  {
    id: 'tmcj',
    imagem: '../imagens/template_prato.png',
    nome: 'Cajazeiras',
    descricao: 'Recheada com banana frita, coco ralado, melaço e coalho',
    categoria: 'tapioquinhas',
    preco: '14,90'
  },
  {
    id: 'tmba',
    imagem: '../imagens/template_prato.png',
    nome: 'Beijú Arretado',
    descricao: 'Coco fresco ralado, coalho, leite Moça ou mel de engenho',
    categoria: 'tapioquinhas',
    preco: '14,90'
  },
  {
    id: 'tmsm',
    imagem: '../imagens/template_prato.png',
    nome: 'São Mamede',
    descricao: 'Recheado com coco fresco e regado com leite de coco caseiro, leite de Moça e canela',
    categoria: 'tapioquinhas',
    preco: '14,90'
  },
  {
    id: 'tmur',
    imagem: '../imagens/template_prato.png',
    nome: 'Uirauna',
    descricao: 'Recheado com brigadeiro caseiro de leite Moça; acompanha M&ms ou Kit Kat',
    categoria: 'tapioquinhas',
    preco: '14,90'
  },
  {
    id: 'tmpc',
    imagem: '../imagens/template_prato.png',
    nome: 'Piancó',
    descricao: 'Recheado e coberto com queijo, banana frita, açucar, Nescau, leite Moça e canela',
    categoria: 'tapioquinhas',
    preco: '14,90'
  },
  {
    id: 'tmte',
    imagem: '../imagens/template_prato.png',
    nome: 'Texeira',
    descricao: 'Recheada com brigadeiro caseiro de leite Moça e morango',
    categoria: 'tapioquinhas',
    preco: '14,90'
  },
  {
    id: 'jtrb',
    imagem: '../imagens/template_prato.png',
    nome: 'Rubacão',
    descricao: 'Feijão verde, arroz refolgado, creme de nata, coalho e carne de sol acebolada',
    categoria: 'jantar',
    preco: '39,90'
  },
  {
    id: 'jtgg',
    imagem: '../imagens/template_prato.png',
    nome: 'Galinha Guizada',
    descricao: 'Filé de peito ou sobrecoxa, macaxeira, vinagrete e farofa',
    categoria: 'jantar',
    preco: '31,90'
  },
  {
    id: 'jtpb',
    imagem: '../imagens/template_prato.png',
    nome: 'Picado de Bode',
    descricao: 'Acompanha macaxeira, vinagrete e farofa',
    categoria: 'jantar',
    preco: '31,90'
  },
  {
    id: 'jtcq',
    imagem: '../imagens/template_prato.png',
    nome: 'Charque',
    descricao: 'Acompanha macaxeira, vinagrete e farofa',
    categoria: 'jantar',
    preco: '34,90'
  },
  {
    id: 'jtsn',
    imagem: '../imagens/template_prato.png',
    nome: 'Carne de sol na Nata',
    descricao: 'Acompanha macaxeira, vinagre e farofa',
    categoria: 'jantar',
    preco: '34,90'
  },
  {
    id: 'jtsa',
    imagem: '../imagens/template_prato.png',
    nome: 'Carne de sol Acebolada',
    descricao: 'Acompanha macaxeira, vinagrete e farofa',
    categoria: 'jantar',
    preco: '34,90'
  },
  {
    id: 'jtbg',
    imagem: '../imagens/template_prato.png',
    nome: 'Bode guizado',
    descricao: 'Acompanha macaxeira, vinagrete e farofa',
    categoria: 'jantar',
    preco: '41,90'
  },
  {
    id: 'jtpf',
    imagem: '../imagens/template_prato.png',
    nome: 'Purê de Frango desfiado',
    descricao: '',
    categoria: 'jantar',
    preco: '26,90'
  },
  {
    id: 'jtpc',
    imagem: '../imagens/template_prato.png',
    nome: 'Purê de Calabresa',
    descricao: '',
    categoria: 'jantar',
    preco: '26,90'
  },
  {
    id: 'jtpn',
    imagem: '../imagens/template_prato.png',
    nome: 'Purê de Carne de sol na Nata',
    descricao: '',
    categoria: 'jantar',
    preco: '29,90'
  },
  {
    id: 'jtps',
    imagem: '../imagens/template_prato.png',
    nome: 'Purê de Carne de sol',
    descricao: 'Carne de sol frita ou desfiada',
    categoria: 'jantar',
    preco: '34,90'
  },
  {
    id: 'jtpc',
    imagem: '../imagens/template_prato.png',
    nome: 'Purê de Charque',
    descricao: '',
    categoria: 'jantar',
    preco: '34,90'
  },
  {
    id: 'jtpp',
    imagem: '../imagens/template_prato.png',
    nome: 'Purê de Picado',
    descricao: '',
    categoria: 'jantar',
    preco: '26,90'
  },
  {
    id: 'ncpa',
    imagem: '../imagens/template_prato.png',
    nome: 'Pamonha na chapa',
    descricao: '',
    categoria: 'jantar',
    preco: '15,90'
  },
  {
    id: 'ncpa',
    imagem: '../imagens/template_prato.png',
    nome: 'Queijo coalho na chapa',
    descricao: '',
    categoria: 'jantar',
    preco: '13,90'
  },
  {
    id: 'ncpa',
    imagem: '../imagens/template_prato.png',
    nome: 'Queijo com melaço na chapa',
    descricao: '',
    categoria: 'jantar',
    preco: '16,90'
  },
      {
    id: 'ncpa',
    imagem: '../imagens/template_prato.png',
    nome: 'Pamonha com queijo na chapa',
    descricao: '',
    categoria: 'jantar',
    preco: '25,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Pão Francês na chapa',
    descricao: '',
    categoria: 'sanduíches',
    preco: '6,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Pão Francês com Ovo',
    descricao: '',
    categoria: 'sanduíches',
    preco: '8,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Pão Francês com queijo',
    descricao: '',
    categoria: 'sanduíches',
    preco: '9,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Pão Francês Misto',
    descricao: '',
    categoria: 'sanduíches',
    preco: '12,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Pão Francês Americano',
    descricao: 'Queijo, presunto, ovo e salada',
    categoria: 'sanduíches',
    preco: '17,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Pão Francês e frango',
    descricao: 'Frango desfiado e queijo',
    categoria: 'sanduíches',
    preco: '17,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Pão Macaxeira na chapa',
    descricao: '',
    categoria: 'sanduíches',
    preco: '9,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Pão Macaxeira com Ovo',
    descricao: '',
    categoria: 'sanduíches',
    preco: '9,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Pão Macaxeira com queijo',
    descricao: '',
    categoria: 'sanduíches',
    preco: '12,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Pão Macaxeira Misto',
    descricao: '',
    categoria: 'sanduíches',
    preco: '16,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Pão Macaxeira Americano',
    descricao: 'Queijo, presunto, ovo e salada',
    categoria: 'sanduíches',
    preco: '19,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Pão Macaxeira e frango',
    descricao: 'Frango desfiado e queijo',
    categoria: 'sanduíches',
    preco: '9,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Bode Rei',
    descricao: 'Pão de macaxeira, bode desfiado, queijo manteiga, cebola caramelizada, e chips regional',
    categoria: 'sanduíches',
    preco: '29,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Moranguinho do Nordeste',
    descricao: 'Pão de macaxeira com carne de sol na nata',
    categoria: 'sanduíches',
    preco: '27,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Boi Quente',
    descricao: 'Pão de macaxeira com carne de sol, quijo manteiga, cebola caramelizada e chips regional',
    categoria: 'sanduíches',
    preco: '36,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Galinha Inxirida',
    descricao: 'Pão de macaxeira com frango desfiado, catupiry, mussarela, batata palha, salada e chips regional',
    categoria: 'sanduíches',
    preco: '36,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Mix Arretado',
    descricao: 'Pão de macaxeira com carne de sol desfiada, frango desfiado, presunto, queijo, ovo, catupiry, batata plaha e chips regional',
    categoria: 'sanduíches',
    preco: '39,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Queijo',
    descricao: 'Mussarela, coalho ou manteiga',
    categoria: 'pastéis',
    preco: '15,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Misto',
    descricao: 'Queijo mussarela e presunto de peru',
    categoria: 'pastéis',
    preco: '15,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Carne moída',
    descricao: '',
    categoria: 'pastéis',
    preco: '21,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Frango',
    descricao: 'Frango desfiado refolgado',
    categoria: 'pastéis',
    preco: '17,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Frango com Catupiry',
    descricao: 'Frango desfiado refolgado com Catupiry original',
    categoria: 'pastéis',
    preco: '19,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Lombinho com Cream Chese',
    descricao: '',
    categoria: 'pastéis',
    preco: '22,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Carde de sol',
    descricao: 'Carne de sol desfiada com queijo',
    categoria: 'pastéis',
    preco: '24,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Ouro Branco',
    descricao: '',
    categoria: 'pastéis',
    preco: '23,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Diamente Negro',
    descricao: '',
    categoria: 'pastéis',
    preco: '23,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Diamente Laka',
    descricao: '',
    categoria: 'pastéis',
    preco: '23,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Laka Oreo',
    descricao: '',
    categoria: 'pastéis',
    preco: '23,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Brigadeiro de colher',
    descricao: '150g de brigadeiro caseiro de leite Moça',
    categoria: 'sobremesas',
    preco: '12,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Cartola tradicional',
    descricao: 'Queijo manteiga, banana frita, açucar, Nescau, canela e leite Moça',
    categoria: 'sobremesas',
    preco: '24,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Cartola especial',
    descricao: 'Queijo manteiga, banana frita, brigadeiro e morango',
    categoria: 'sobremesas',
    preco: '39,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Cartolinha tradicional',
    descricao: 'Queijo manteiga, banana frita, açucar, Nescau, canela e leite Moça',
    categoria: 'sobremesas',
    preco: '12,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Cartolinha especial',
    descricao: 'Queijo manteiga, banana frita, brigadeiro e morango',
    categoria: 'sobremesas',
    preco: '18,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Queijo',
    descricao: '40g',
    categoria: 'adicionais',
    preco: '4,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Catupiry original',
    descricao: '50g',
    categoria: 'adicionais',
    preco: '7,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Presunto',
    descricao: '40g',
    categoria: 'adicionais',
    preco: '4,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Ovo',
    descricao: '1 unidade',
    categoria: 'adicionais',
    preco: '2,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Frango desfiado',
    descricao: '60g',
    categoria: 'adicionais',
    preco: '9,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Calabresa',
    descricao: '80g',
    categoria: 'adicionais',
    preco: '6,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Leite Moça',
    descricao: '50g',
    categoria: 'adicionais',
    preco: '3,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Banana frita',
    descricao: '1 Unidade',
    categoria: 'adicionais',
    preco: '2,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Vinagrete',
    descricao: '',
    categoria: 'adicionais',
    preco: '4,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Farofa',
    descricao: '',
    categoria: 'adicionais',
    preco: '4,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Torradas',
    descricao: '5 Unidades',
    categoria: 'adicionais',
    preco: '3,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Copo sem leite',
    descricao: 'Acerola | Abacaxi com hortelã | Cajá | Caju | Graviola | Goiaba | Laranja (fruta) | Limão (fruta) | Maracujá | Morango | Manga | Mangaba | Uva',
    categoria: 'bebidas',
    preco: '10,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Copo sem leite',
    descricao: 'Acerola | Abacaxi com hortelã | Cajá | Caju | Graviola | Goiaba | Laranja (fruta) | Limão (fruta) | Maracujá | Morango | Manga | Mangaba | Uva',
    categoria: 'bebidas',
    preco: '10,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Copo com leite',
    descricao: 'Acerola | Abacaxi com hortelã | Cajá | Caju | Graviola | Goiaba | Laranja (fruta) | Limão (fruta) | Maracujá | Morango | Manga | Mangaba | Uva',
    categoria: 'bebidas',
    preco: '12,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Jarra sem leite',
    descricao: 'Acerola | Abacaxi com hortelã | Cajá | Caju | Graviola | Goiaba | Laranja (fruta) | Limão (fruta) | Maracujá | Morango | Manga | Mangaba | Uva',
    categoria: 'bebidas',
    preco: '20,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Café P.',
    descricao: '',
    categoria: 'bebidas',
    preco: '3,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Café G.',
    descricao: '',
    categoria: 'bebidas',
    preco: '4,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Café com leite P.',
    descricao: '',
    categoria: 'bebidas',
    preco: '4,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Café com leite G.',
    descricao: '',
    categoria: 'bebidas',
    preco: '6,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Nescau gelado.',
    descricao: '',
    categoria: 'bebidas',
    preco: '10,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Capuccino',
    descricao: '',
    categoria: 'bebidas',
    preco: '12,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Agua sem gás',
    descricao: '500mg',
    categoria: 'bebidas',
    preco: '5,00'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Agua com gás',
    descricao: '500mg',
    categoria: 'bebidas',
    preco: '5,50'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Coca KS',
    descricao: '',
    categoria: 'bebidas',
    preco: '7,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Refri lata',
    descricao: '',
    categoria: 'bebidas',
    preco: '8,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Refri litro',
    descricao: '',
    categoria: 'bebidas',
    preco: '14,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Vitamina de açaí',
    descricao: '',
    categoria: 'bebidas',
    preco: '17,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Vitamina de banana',
    descricao: '',
    categoria: 'bebidas',
    preco: '12,90'
  },
  {
    id: '',
    imagem: '../imagens/template_prato.png',
    nome: 'Long neck',
    descricao: '',
    categoria: 'bebidas',
    preco: '14,90'
  }
];
export default pratos;
