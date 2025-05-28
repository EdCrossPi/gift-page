export type Presente = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  categoria:
    | "Cozinha"
    | "Quarto"
    | "Eletrônicos"
    | "Experiências e Viagens"
    | "Organização"
    | "Humor e Brincadeiras"
    | "Lavanderia"
    | "Sala de Estar"
    | "Casa Inteligente"
    | "Eletrodomésticos"
    | "Banheiro"
    | "Sala de Jantar"
    | "Casa e Manutenção"
    | "Decoração"
    | "Lazer e Aventura"
    | "Entretenimento";
};

export const presentes: Presente[] = [
  {
    id: 1,
    title: "Taxa pra noiva não jogar o buquê pra sua namorada",
    price: 200,
    imageUrl: "/presentes/taxa-buque-namorada.jpg",
    categoria: "Experiências e Viagens",
  },
  {
    id: 2,
    title: "Ajuda para pagar o café com pão de queijo do aeroporto",
    price: 100,
    imageUrl: "/presentes/cafe-pao-queijo-aeroporto.jpeg",
    categoria: "Experiências e Viagens",
  },
  {
    id: 3,
    title: "Jogo de Cama Queen",
    price: 350,
    imageUrl: "/presentes/jogo-cama-queen.jpg",
    categoria: "Quarto",
  },
  {
    id: 4,
    title: "Sapateira",
    price: 400,
    imageUrl: "/presentes/sapateira.jpg",
    categoria: "Organização",
  },
  {
    id: 6,
    title: "Tábua de Passar",
    price: 250,
    imageUrl:
      "https://studio1202.com.br/wp-content/uploads/2016/02/organiza%C3%A7%C3%A3o-t%C3%A1bua-passar-guardar-4.jpg",
    categoria: "Lavanderia",
  },
  {
    id: 7,
    title: "Conjunto de Panelas Inox",
    price: 600,
    imageUrl:
      "https://www.viainox.com/upload/produto/imagem/jogo-de-panelas-tramontina-solar-com-fervedor-em-inox-6-pe-as.webp",
    categoria: "Cozinha",
  },
  {
    id: 8,
    title: "Fruteira",
    price: 200,
    imageUrl:
      "https://carpetino.com.br/cdn/shop/files/imagem_2024-08-24_030616762_grande.png?v=1729191498",
    categoria: "Cozinha",
  },
  {
    id: 9,
    title: "Mesa de centro",
    price: 300,
    imageUrl:
      "https://images.tcdn.com.br/img/img_prod/634712/mesa_de_centro_com_espelho_riad_decorativa_sala_de_estar_freijo_preto_g26_gran_belo_88311_1_5610a6e05424633d96e9bf1d60eac5ad.jpg",
    categoria: "Sala de Estar",
  },
  {
    id: 10,
    title: "Jogo de Refresco",
    price: 150,
    imageUrl: "https://img.camicado.com.br/item/100039130/zoom/1.jpg",
    categoria: "Cozinha",
  },
  {
    id: 11,
    title: "Sofá",
    price: 2000,
    imageUrl:
      "https://images-americanas.b2w.io/produtos/7483248150/imagens/sofa-retratil-4-lugares-220-cm-braco-fino-mola-ensacada-italia-veludo-cinza-claro-ns/7483248150_1_large.jpg",
    categoria: "Sala de Estar",
  },
  {
    id: 12,
    title: "Fechadura Digital",
    price: 400,
    imageUrl:
      "https://dcdn-us.mitiendanube.com/stores/002/315/384/products/titan-img-041-4cfdc64b6d4a81218c16813996607795-1024-1024.png",
    categoria: "Casa Inteligente",
  },
  {
    id: 13,
    title: "Painel para Tv",
    price: 500,
    imageUrl:
      "https://www.armazemparaiba.com.br/ccstore/v1/images/?source=/file/v2579531120771490243/products/0100051965609185.3a699384a8fce5f36941102d6bf19ffcc4e317a4.gif&height=100&width=100",
    categoria: "Sala de Estar",
  },
  {
    id: 14,
    title: "Máquina Lava e Seca",
    price: 3000,
    imageUrl:
      "https://carrefourbr.vtexassets.com/arquivos/ids/141157561/6686915_11.jpg?v=638476790884830000",
    categoria: "Lavanderia",
  },
  {
    id: 15,
    title: "Máquina de Café Mini Me Preta",
    price: 400,
    imageUrl:
      "https://www.nescafe-dolcegusto.com.br/media/wysiwyg/minime-black.jpg",
    categoria: "Cozinha",
  },
  {
    id: 16,
    title: 'Televisão 55"',
    price: 3100,
    imageUrl:
      "https://s2-casaejardim.glbimg.com/o2f0GjEZ3DCdO2P3bnAWYfqg_A0=/0x0:620x455/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_a0b7e59562ef42049f4e191fe476fe7d/internal_photos/bs/2023/u/3/XbAYORRdefjJ3DBU3b5Q/painel-de-tv-projeto-gabriela-prado.webp",
    categoria: "Eletrônicos",
  },
  {
    id: 17,
    title: "Aspirador de Pó Vertical",
    price: 300,
    imageUrl:
      "https://lojasguaibim.vtexassets.com/arquivos/ids/173824/861137aspiradordepoverticalfiltrocyclone1l1100wmondialap35turbocycle-1.jpg?v=638635804927200000",
    categoria: "Eletrodomésticos",
  },
  {
    id: 18,
    title: "Air Fryer",
    price: 450,
    imageUrl:
      "https://walitastore.vtexassets.com/arquivos/ids/160663-800-800?v=638754803029300000&width=800&height=800&aspect=true",
    categoria: "Cozinha",
  },
  {
    id: 19,
    title: "Aparelho de Fondue Grande",
    price: 330,
    imageUrl:
      "https://images.tcdn.com.br/img/img_prod/1085759/aparelho_de_fondue_8pc_de_ferro_e_ceramica_vermelho_1576_2_dad4100f8b2386443b7e87946b3078ad.jpg",
    categoria: "Cozinha",
  },
  {
    id: 20,
    title: "Dinheiro para um jantar (porque o noivo só sabe fazer pipoca)",
    price: 250,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfc40w5RMPUyc64SBz7eyQPc_u5foaTIkLg&s",
    categoria: "Experiências e Viagens",
  },
  {
    id: 21,
    title: "Mini Processador de Alimentos",
    price: 200,
    imageUrl:
      "https://philco.vtexassets.com/arquivos/ids/156631/Mini-Processador-2P.jpg?v=636288842410300000",
    categoria: "Cozinha",
  },
  {
    id: 22,
    title: "Kit de 2 semanas de café para a noiva",
    price: 300,
    imageUrl: "/presentes/cafe.jpg",
    categoria: "Humor e Brincadeiras",
  },
  {
    id: 23,
    title: "Depurador de Ar",
    price: 500,
    imageUrl:
      "https://www.portaldoseller.com.br/images/products/66d76a8b96bd520240903195907.webp",
    categoria: "Cozinha",
  },
  {
    id: 24,
    title: "Microondas",
    price: 600,
    imageUrl:
      "https://kzacompleta.com.br/wp-content/uploads/elementor/thumbs/Microondas-Panasonic-Ambientado-q9ewoq5kk8akmwq79fnnvvqzexjqcmiqcvat880psk.png",
    categoria: "Cozinha",
  },
  {
    id: 25,
    title: "Brunch honeymoon no quarto",
    price: 160,
    imageUrl:
      "https://images.unsplash.com/photo-1641924676578-ed2792eb24de?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmJUMzJUE5JTIwZGElMjBtYW5oJUMzJUEzJTIwbmElMjBjYW1hfGVufDB8fDB8fHww",
    categoria: "Experiências e Viagens",
  },
  {
    id: 26,
    title: "Champanhe para brindar a lua de mel",
    price: 200,
    imageUrl:
      "https://forbes.com.br/wp-content/uploads/2020/12/Colunas_Champanhe_301220_Getty.jpg",
    categoria: "Experiências e Viagens",
  },
  {
    id: 27,
    title: "Panela de Pressão Elétrica",
    price: 500,
    imageUrl:
      "https://presentesrodriguez.vtexassets.com/arquivos/ids/167217/PANELA-DE-PRESSAO-ELETRICA-6-LITROS-COM-15-RECEITAS-PRe-PROGRAMADAS-PCC20-PRETO-E-ACO-INOX-110V-ELECTROLUX-4.jpg?v=635996230900400000",
    categoria: "Cozinha",
  },
  {
    id: 28,
    title: "Conjunto de Toalhas",
    price: 280,
    imageUrl: "https://lojalmpeter.com.br/wp-content/uploads/2023/02/1-2.jpg",
    categoria: "Banheiro",
  },
  {
    id: 29,
    title: "Forno de Embutir",
    price: 1000,
    imageUrl:
      "https://panoverse-cdn.com.br/img.panorama/produto/60894/armario-de-cozinha-para-forno-de-embutir-evelin-duna-cristal-henn-396924-large.jpg",
    categoria: "Cozinha",
  },
  {
    id: 30,
    title: "Capacete contra rolo de macarrão para o noivo",
    price: 180,
    imageUrl:
      "https://www.greengridiron.com/cdn/shop/files/GreenBayPackersRiddellSpeedAuthentic01.webp?v=1747963918",
    categoria: "Humor e Brincadeiras",
  },
  {
    id: 31,
    title: "Kit de sobrevivência para o noivo (dura 10 ciclos de TPM)",
    price: 400,
    imageUrl: "/presentes/kit-sobrevivencia-noivo.jpg",
    categoria: "Humor e Brincadeiras",
  },
  {
    id: 32,
    title: "Ar Condicionado",
    price: 2000,
    imageUrl:
      "https://img.odcdn.com.br/wp-content/uploads/2023/10/shutterstock_1469002481.jpg",
    categoria: "Eletrônicos",
  },
  {
    id: 33,
    title: "Aparador",
    price: 350,
    imageUrl:
      "https://www.moveisbomdepreco.com.br/media/tmp/webp/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/a/p/aparador_opala.webp",
    categoria: "Sala de Estar",
  },
  {
    id: 34,
    title: "Kit Faqueiro",
    price: 450,
    imageUrl:
      "https://http2.mlstatic.com/D_NQ_NP_761259-MLB75240607759_032024-O-porta-talheres-gaveta-cozinha-sob-medida-faqueiro-em-madeira.webp",
    categoria: "Cozinha",
  },
  {
    id: 35,
    title: "Aparelho de Jantar",
    price: 400,
    imageUrl:
      "https://cdn.iset.io/assets/66634/produtos/226/3f2fa1dfff02390f4681c073215de63e6671856fa4117.png",
    categoria: "Cozinha",
  },
  {
    id: 36,
    title: "Jogo com 6 Taças para Sorvete",
    price: 250,
    imageUrl:
      "https://images.tcdn.com.br/img/img_prod/553261/jogo_6_tacas_de_cristal_sobremesa_angel_260ml_2671_1_ff7a38bfdf3d066f7f3ba0d50281a49c.jpg",
    categoria: "Cozinha",
  },
  {
    id: 37,
    title: "Mesa de Jantar",
    price: 1500,
    imageUrl:
      "https://homedock.com.br/cdn/shop/files/Off-White-Moveis-Provincia-310703875.jpg?v=1709652935",
    categoria: "Sala de Jantar",
  },
  {
    id: 38,
    title: "Contribuições para aula de gastronomia para o noivo",
    price: 150,
    imageUrl: "https://leschefsacademia.com.br/upload/09092020124641.png",
    categoria: "Experiências e Viagens",
  },
  {
    id: 39,
    title: "Ferro a Vapor",
    price: 200,
    imageUrl:
      "https://media.istockphoto.com/id/1368091437/pt/foto/young-woman-ironing-close-up.jpg?s=612x612&w=0&k=20&c=8a7u3aoBxupchYS9EzyDL_uYQQeSvHKUcQSmmbzW7SI=",
    categoria: "Lavanderia",
  },
  {
    id: 40,
    title: "Passeio de casal na lua de mel",
    price: 200,
    imageUrl:
      "https://bemvindosabordo.com.br/blog/images/posts/phpZ1jh4r_5cf16b1316b0e.jpg",
    categoria: "Experiências e Viagens",
  },
  {
    id: 41,
    title: "Filtro de Água",
    price: 1200,
    imageUrl:
      "https://s2-techtudo.glbimg.com/_y70yQ743aaHsS1jMmL7tZe4hCE=/0x0:1241x698/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2024/P/x/E1QfmWRW2o9adBA2cwRw/header.jpeg",
    categoria: "Cozinha",
  },
  {
    id: 42,
    title: "Chaleira Elétrica",
    price: 150,
    imageUrl:
      "https://www.estadao.com.br/recomenda/wp-content/uploads/2024/04/chaleiraCapa-1.jpg.webp",
    categoria: "Cozinha",
  },
  {
    id: 43,
    title: "Guarda-Roupas",
    price: 1800,
    imageUrl:
      "https://panoverse-cdn.com.br/img.panorama/produto/96586/guarda-roupa-casal-severo-6-portas-6-gavetas-branco-panorama-moveis-719505-large.jpg",
    categoria: "Quarto",
  },
  {
    id: 44,
    title: "Lixeira para Cozinha",
    price: 150,
    imageUrl:
      "https://www.ctvnews.ca/content/dam/ctv-ecommerce/uploadImg/2025/04/16/kitchen-trash-cans.jpg",
    categoria: "Cozinha",
  },
  {
    id: 45,
    title: "Jogo de Facas",
    price: 300,
    imageUrl:
      "https://www.torneirasbrasil.com.br/cdn/shop/files/Porta-Facas-de-Madeira-Acacia-2.jpg?v=1720454241",
    categoria: "Cozinha",
  },
  {
    id: 46,
    title: "Cafeteira Elétrica Programável",
    price: 380,
    imageUrl:
      "https://lojawap.vtexassets.com/arquivos/ids/172954/WAP-CAFETEIRA-DIGITAL-AROMA-WCD1500-1.jpg?v=638788599388430000",
    categoria: "Cozinha",
  },
  {
    id: 47,
    title: "Sanduicheira",
    price: 180,
    imageUrl:
      "https://down-br.img.susercontent.com/file/sg-11134201-7rfff-m3ryg5bq4oivf1",
    categoria: "Cozinha",
  },
  {
    id: 48,
    title: "Batedeira",
    price: 700,
    imageUrl:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_950,h_618/https://blog.britania.com.br/wp-content/uploads/2023/07/qual-melhor-tigela-batedeira-1024x666.png",
    categoria: "Cozinha",
  },
  {
    id: 49,
    title: "Liquidificador",
    price: 450,
    imageUrl:
      "https://casaeconstrucao.vivadecora.com.br/wp-content/uploads/2020/09/cozinha-moderna-decorada-com-liquidificador-com-copo-de-vidro-Foto-Pinterest-1.jpg",
    categoria: "Cozinha",
  },
  {
    id: 50,
    title: "Torradeira Elétrica",
    price: 120,
    imageUrl: "https://ehgomes.com.br/wp-content/uploads/2025/05/1MM-1052.webp",
    categoria: "Cozinha",
  },
  {
    id: 51,
    title: "Conjunto de Potes Herméticos",
    price: 150,
    imageUrl:
      "https://pratikasa.com.br/cdn/shop/files/KitPotesHermeticos4pecas2_1200x.webp?v=1724545400",
    categoria: "Cozinha",
  },
  {
    id: 52,
    title: "Processador de Alimentos Completo",
    price: 600,
    imageUrl:
      "https://dicas.olx.com.br/wp-content/uploads/2024/09/melhor-processador-de-alimentos.jpg",
    categoria: "Cozinha",
  },
  {
    id: 53,
    title: "Pipoqueira pro noivo não levar a da mãe",
    price: 220,
    imageUrl:
      "https://http2.mlstatic.com/D_Q_NP_702966-MLU75410068867_032024-O.webp",
    categoria: "Cozinha",
  },
  {
    id: 54,
    title: "Geladeira Frost Free",
    price: 2800,
    imageUrl:
      "https://electrolux.vtexassets.com/arquivos/ids/228147-800-800?v=638233989193500000&width=800&height=800&aspect=true",
    categoria: "Eletrodomésticos",
  },
  {
    id: 55,
    title: "Máquina de Lavar Louça",
    price: 2500,
    imageUrl:
      "https://blog.lojasmm.com/upload/blog/capa/1714423059_lou%C3%A7a_01.png",
    categoria: "Eletrodomésticos",
  },
  {
    id: 56,
    title: "Cortina blackout",
    price: 500,
    imageUrl:
      "https://http2.mlstatic.com/D_NQ_NP_619625-MLB78364583450_082024-O-persiana-100-blackout-quarto-escuro-medida-110x110.webp",
    categoria: "Lavanderia",
  },
  {
    id: 57,
    title: "Cooktop 4 bocas",
    price: 1200,
    imageUrl:
      "https://a-static.mlcdn.com.br/800x600/fogao-cooktop-4-bocas-mesa-vidro-atlas-agile-up-bivolt/techshop/fogatl00016/b925cf3a1b3c8f765660a7ef7942b374.jpeg",
    categoria: "Cozinha",
  },
  {
    id: 58,
    title: "Robô Aspirador de Pó",
    price: 900,
    imageUrl:
      "https://s.zst.com.br/cms-assets/2022/01/robo-aspirador-barato.webp",
    categoria: "Casa Inteligente",
  },
  {
    id: 59,
    title: "Cama para o Rafa não dormir no chão ao visitar os noivos",
    price: 1900,
    imageUrl: "https://m.media-amazon.com/images/I/61iofZXjHRL.jpg",
    categoria: "Quarto",
  },
  {
    id: 60,
    title: "Soundbar para a noiva não perder nenhum diálogo da série",
    price: 1200,
    imageUrl:
      "https://s2-casaejardim.glbimg.com/OjCAu_TNgk7tRSFJjcWLBnuWZDE=/0x0:924x616/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_a0b7e59562ef42049f4e191fe476fe7d/internal_photos/bs/2022/e/w/fSTo46RxALFmd3bNE3vQ/bose-soundbar-500-home-theater-1-1-.jpg",
    categoria: "Eletrônicos",
  },
  {
    id: 61,
    title: "'Alexa' para a noiva ter mais alguém para mandar ",
    price: 350,
    imageUrl:
      "https://assets.aboutamazon.com/dims4/default/9410869/2147483647/strip/true/crop/5760x3242+0+846/resize/1240x698!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F19%2Fd5%2F7984ef304f9ea01c5ca711e6fc91%2Fecho-lifestyle.png",
    categoria: "Casa Inteligente",
  },
  {
    id: 62,
    title: "Kit Ferramentas Completo",
    price: 400,
    imageUrl:
      "https://blog.coremma.com.br/wp-content/uploads/2022/08/qual-kit-de-ferramentas-mais-completo.jpg",
    categoria: "Casa e Manutenção",
  },
  {
    id: 64,
    title: "Vasos Decorativos",
    price: 280,
    imageUrl:
      "https://i.pinimg.com/736x/f8/61/45/f861459f1790399e8a34e52d091242b9.jpg",
    categoria: "Decoração",
  },
  {
    id: 65,
    title: "Luminária de Chão",
    price: 300,
    imageUrl:
      "https://cdn.leroymerlin.com.br/products/luminaria_chao_moderna_slim_led_integrado_espiral_1,40m_pre_1572132033_eb26_600x600.jpg",
    categoria: "Decoração",
  },
  {
    id: 5,
    title: "Conjunto de controle remotos para não ter briga",
    price: 170,
    imageUrl: "/presentes/controle-remoto-sem-briga.jpg",
    categoria: "Humor e Brincadeiras",
  },
  {
    id: 66,
    title: "Kit Taças de Vinho Cristal",
    price: 250,
    imageUrl:
      "https://agourmetutilidades.com.br/cdn/shop/products/TacasvinhotintoWindsor250ml_ND7128.png?v=1681154796",
    categoria: "Cozinha",
  },
  {
    id: 67,
    title: "Jogo de Copos Long Drink",
    price: 150,
    imageUrl:
      "https://www.lazershop.com.br/img/products/kit-12-copos-lapidado-whisky-longdrink-show-schott-zwiesel_3_1200.jpg",
    categoria: "Cozinha",
  },
  {
    id: 68,
    title: "Assadeira de Vidro Refratário (Conjunto)",
    price: 140,
    imageUrl:
      "https://images.tcdn.com.br/img/img_prod/977231/assadeira_retangular_media_de_vidro_com_tampa_plastica_2_2_litros_nadir_1157_2_e4d04400ab6689f2b919c96d59537696.jpg",
    categoria: "Cozinha",
  },
  {
    id: 69,
    title: "Escorredor e organizador",
    price: 200,
    imageUrl:
      "https://a-static.mlcdn.com.br/800x560/escorredor-e-organizador-kitchen-rack-pia-cozinha-65cm-aco-mrs/alojadoleo/jf5101/34f1e8d0aef1a3ec792cddcd8b976cfa.jpeg",
    categoria: "Cozinha",
  },
  {
    id: 70,
    title: "Rack organizador",
    price: 160,
    imageUrl:
      "https://ae-pic-a1.aliexpress-media.com/kf/S908822337122456fb9fb6fa4e8ec4ac2C.jpg_960x960q75.jpg_.avif",
    categoria: "Cozinha",
  },
  {
    id: 71,
    title: "Churrasqueira Elétrica",
    price: 400,
    imageUrl:
      "https://lumienergy.vtexassets.com/arquivos/ids/167152/churrasqueira-eletrica-fischer-grill-2.jpg?v=638091490798600000",
    categoria: "Cozinha",
  },
  {
    id: 72,
    title: "Conjunto de Utensílios de Silicone",
    price: 170,
    imageUrl:
      "https://a-static.mlcdn.com.br/1500x1500/kit-12-utensilios-cozinha-silicone-cabo-de-madeira-premium-vermelho-globalmix/lsmcomercio/15985423891/c596554fa41689836a08f611fa5d87c2.jpeg",
    categoria: "Cozinha",
  },
  {
    id: 73,
    title: "Travesseiros",
    price: 300,
    imageUrl:
      "https://homedock.com.br/cdn/shop/files/Homedock-Travesseiro-de-Corpo-Micropercal-Toque-de-Pluma-Sleeps-Branco---150-x-50-cm-Lavive-1685561228.jpg?v=1685561230&width=1946",
    categoria: "Quarto",
  },
  {
    id: 74,
    title: "Edredom Queen Size",
    price: 450,
    imageUrl:
      "https://a-static.mlcdn.com.br/1500x1500/edredom-queen-300-fios-kacyumara-liso-cinza-satinee-acetinado/madrigalenxovais/8787p/c73a9dd3ab6e413b2821c119929608ad.jpeg",
    categoria: "Quarto",
  },
  {
    id: 75,
    title: "Almofadas",
    price: 240,
    imageUrl:
      "https://acdn-us.mitiendanube.com/stores/001/035/509/products/design-sem-nome-3231-2e88773d883610ba2d16325727566261-1024-1024.png",
    categoria: "Sala de Estar",
  },
  {
    id: 76,
    title: "Puffs Decorativos",
    price: 260,
    imageUrl:
      "https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2020/06/17/puffs-decorativos-bau-para-sala-pequena.jpg",
    categoria: "Sala de Estar",
  },
  {
    id: 77,
    title: "Espelho Orgânico",
    price: 260,
    imageUrl:
      "https://cdn.leroymerlin.com.br/products/espelho_organico_grande_90_x_65_moderno_lapidado_com_suporte_1571682183_1295_600x600.jpg",
    categoria: "Lazer e Aventura",
  },
  {
    id: 78,
    title: "Mochila para o noivo carregar a roupa extra da noiva.",
    price: 300,
    imageUrl:
      "https://media.istockphoto.com/id/916474916/pt/foto/travel-backpack-full-of-clothes-on-a-bed-in-a-hostel.jpg?s=612x612&w=0&k=20&c=mL9eBf2Le4vcx5CAuFVdfQaIMjsc0oeymMn-uIGxEn8=",
    categoria: "Lazer e Aventura",
  },
  {
    id: 79,
    title: "Kit Primeiros Socorros Completo (para a vida a dois)",
    price: 120,
    imageUrl: "/presentes/kit-primeiros-socorros-vida-a-dois.png",
    categoria: "Humor e Brincadeiras",
  },
  {
    id: 80,
    title: "Kit Abridor de Garrafas",
    price: 155,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0737/7118/8543/files/abridor-de-vinho-novo.png?v=1722538470",
    categoria: "Cozinha",
  },
  {
    id: 81,
    title: "Balde de Gelo Inox",
    price: 100,
    imageUrl:
      "https://static.mobly.com.br/p/Zanline-Balde-de-Gelo-TC3A9rmico-Inox-22C3l-AlC3A7a-em-Couro-Com-Pegador-e-Container-0539-488887-2.jpg",
    categoria: "Cozinha",
  },
  {
    id: 82,
    title: "Mixer de Mão",
    price: 220,
    imageUrl:
      "https://www.eletrolar.com/wp-content/uploads/2021/04/varejo-scaled-2400x1524_c-850x560.jpg",
    categoria: "Cozinha",
  },
  {
    id: 83,
    title: "Tábua de Corte",
    price: 95,
    imageUrl:
      "https://storage.googleapis.com/jm-gcp-bethestory-p-12po-bucket/uploads/tabuas-corte.jpg",
    categoria: "Cozinha",
  },
  {
    id: 84,
    title: "Frigideira Antiaderente",
    price: 180,
    imageUrl:
      "https://m.media-amazon.com/images/I/61hY6NKWcGL._AC_UF894,1000_QL80_.jpg",
    categoria: "Cozinha",
  },
  {
    id: 85,
    title: "Panela de Arroz Elétrica",
    price: 290,
    imageUrl: "https://m.media-amazon.com/images/I/710CJwvrtyL._AC_SX425_.jpg",
    categoria: "Cozinha",
  },
  {
    id: 86,
    title: "Toalhas de Rosto e Mão (Conjunto)",
    price: 150,
    imageUrl:
      "https://images.tcdn.com.br/img/img_prod/335857/kit_toalha_de_banho_gigante_e_rosto_unika_karsten_11987_1_20200317153242.jpg",
    categoria: "Banheiro",
  },
  {
    id: 87,
    title: "Tapete para Sala",
    price: 230,
    imageUrl:
      "https://static.mobly.com.br/p/Saturs-Tapetes-Tapete-Pelo-Alto-Felpudo-Macio-Anti-Derrapante-Anti-AlC3A9rgico-Mesclado-Cinza---120-x-200-cm-Tapete-para-Sala-e-Quartos-8576-924214-1.jpg",
    categoria: "Sala de Estar",
  },
  {
    id: 88,
    title: "Pendentes decorativos para a mesa",
    price: 300,
    imageUrl:
      "https://livdecora.com.br/wp-content/uploads/2018/11/lustres-pendentes-estilos.png",
    categoria: "Quarto",
  },
  {
    id: 89,
    title: "1 ano de streaming para maratonar juntos",
    price: 200,
    imageUrl:
      "https://jpimg.com.br/uploads/2025/03/5-series-curtas-para-maratonar-na-netflix.jpg",
    categoria: "Entretenimento",
  },
];
