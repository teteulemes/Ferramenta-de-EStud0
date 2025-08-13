function criaCartao(categoria, pergunta, resposta) {
 let container = document.getElementById('container')
let cartao = document.createElement('article')
cartao.className = 'cartao'

  cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>Culinária</h3>
    <div class="cartao__conteudo__pergunta">
        <p>Quem faz a melhor lasanha do mundo</p>
    </div>
    <div class="cartao__conteudo__resposta">
         <p>O Matheus Lemes</p>
    </div>
    </div>
`
}
