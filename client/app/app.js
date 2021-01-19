//criou a instancia do controller
let controller = new NegociacaoController();

//passamos diretamente controller.adiciona

//bind aqui!
document
.querySelector('.form')
.addEventListener('submit', controller.adiciona.bind(controller));
