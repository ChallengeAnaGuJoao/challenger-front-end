   const menuToggle = document.querySelector('.menuToggle');
    const navMenu = document.querySelector('.navMenu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
    
document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const nomeInput = document.getElementById("nome");
  const emailInput = document.getElementById("email");
  const nome = nomeInput.value.trim();
  const email = emailInput.value.trim();
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let formValido = true;

  nomeInput.classList.remove("erro");
  emailInput.classList.remove("erro");

  if (nome === "") {
    nomeInput.classList.add("erro");
    alert("Campo nome é obrigatorio");
    formValido = false;
  }

  if (email === "") {
    emailInput.classList.add("erro");
    alert("Campo email é obrigatorio");
    formValido = false;
  } else if (!regexEmail.test(email)) {
    emailInput.classList.add("erro");
    alert("Por favor, insira um e-mail válido.")
    formValido = false;
  }

  if (formValido) {
    alert("Formulário enviado com sucesso!");
    this.submit();
  }
});
