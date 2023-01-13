export class ClasseToastify {
    static criarAvisos(p, cor, color) {
      Toastify({
        text: p,
        className: cor,
        duration: 3500,
        close: true,
        gravity: "bottom",
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: color,
        },
      }).showToast();
    }
  }