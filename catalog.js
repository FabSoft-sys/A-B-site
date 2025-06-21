<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catálogo de Produtos</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Montserrat', Arial, sans-serif; }
    </style>
</head>
<body>
    <header class="bg-primary text-white text-center py-3">
        <h1>Catálogo de Óculos</h1>
    </header>
    <main class="container my-4">
        <div id="gallery" class="row"></div>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script>
        AOS.init();
        
        function criarCardProduto(produto) {
          const col = document.createElement('div');
          col.className = 'col-12 col-sm-6 col-md-4 col-lg-3';
          col.innerHTML = `
            <div class="card h-100 shadow-sm animate__animated animate__fadeInUp" data-aos="fade-up">
              <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}" loading="lazy">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">${produto.nome}</h5>
                <p class="card-text">${produto.descricao}</p>
                <div class="mt-auto">
                  <span class="fw-bold text-primary">${produto.preco}</span>
                  <button class="btn btn-outline-primary btn-sm ms-2" onclick="verDetalhes('${produto.nome}', '${produto.descricao}', '${produto.preco}', '${produto.imagem}')">
                    <i class="fa fa-search"></i> Ver Detalhes
                  </button>
                </div>
              </div>
            </div>
          `;
          return col;
        }

        function renderizarCatalogo(produtos) {
          const gallery = document.getElementById('gallery');
          gallery.innerHTML = '';
          produtos.forEach(produto => gallery.appendChild(criarCardProduto(produto)));
        }

        function filtrarProdutos(produtos, termo) {
          termo = termo.toLowerCase();
          return produtos.filter(p =>
            p.nome.toLowerCase().includes(termo) ||
            p.descricao.toLowerCase().includes(termo)
          );
        }

        // Modal de detalhes com SweetAlert2
        window.verDetalhes = function(nome, descricao, preco, imagem) {
          Swal.fire({
            title: nome,
            text: descricao + ' | ' + preco,
            imageUrl: imagem,
            imageWidth: 240,
            imageAlt: nome,
            confirmButtonText: 'Fechar',
            confirmButtonColor: '#007bff'
          });
        };

        // Carregar produtos do JSON
        let produtosOriginais = [];
        fetch('produtos.json')
          .then(res => res.json())
          .then(produtos => {
            produtosOriginais = produtos;
            renderizarCatalogo(produtos);
          });

        // Campo de busca
        const buscaInput = document.createElement('input');
        buscaInput.type = 'search';
        buscaInput.placeholder = 'Buscar óculos...';
        buscaInput.className = 'catalog-search';
        buscaInput.setAttribute('aria-label', 'Buscar óculos');
        document.querySelector('main').insertBefore(buscaInput, document.getElementById('gallery'));

        buscaInput.addEventListener('input', () => {
          const termo = buscaInput.value;
          renderizarCatalogo(filtrarProdutos(produtosOriginais, termo));
        });

        // Adicionar produto ao carrinho (exemplo de função)
        function adicionarAoCarrinho(produto) {
          // Lógica para adicionar o produto ao carrinho
          console.log('Produto adicionado ao carrinho:', produto);
          Swal.fire('Produto adicionado ao carrinho!');
        }
    </script>
</body>
</html>