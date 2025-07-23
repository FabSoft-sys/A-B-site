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
    renderizarCatalogo(produtos);
  });

// Campo de busca
/* Código removido para eliminar a barra de busca dinâmica */
// const buscaInput = document.createElement('input');
// buscaInput.type = 'search';
// buscaInput.placeholder = 'Buscar óculos...';
// buscaInput.className = 'catalog-search';
// buscaInput.setAttribute('aria-label', 'Buscar óculos');
// document.querySelector('main').insertBefore(buscaInput, document.getElementById('gallery'));

/* Removido listener do campo de busca pois o campo foi removido */

// Exemplo de função para adicionar ao carrinho
function adicionarAoCarrinho(produto) {
  console.log('Produto adicionado ao carrinho:', produto);
  Swal.fire('Produto adicionado ao carrinho!');
}