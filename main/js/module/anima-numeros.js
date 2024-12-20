export default class AnimaNumeros {
  constructor(numeros, observeTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observeTarget = document.querySelector(observeTarget);
    this.observerClass = observerClass;

    // bind o this do objeto ao call da mutação
    this.handleMutation = this.handleMutation.bind(this)
  }

  // Recebe um elemento do dom, com numero em seu texto
  // incrementa a partir de 0 até o número final
  // static porque a função não precisa diretamente do objeto para funcionar , porem tenho que define constructor
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start = start + incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // ativa incrementar numero para cada numero selecionado do dom
  animaNumeros() {
    this.numeros.forEach((numero) => {
      this.constructor.incrementarNumero(numero)
    })
  }


  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }


  // quando a classe ativarS é ativado ao animar o scroll , vai observar se caso for true vai ativar a função handleMutation() , e assim ativar a função animaNumeros()
  addMutationObserver() {
    this.observer = new MutationObserver (this.handleMutation);
    this.observer.observe(this.observeTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observeTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
