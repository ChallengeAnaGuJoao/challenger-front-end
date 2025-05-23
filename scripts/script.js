   const menuToggle = document.querySelector('.menuToggle');
    const navMenu = document.querySelector('.navMenu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
    
document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nome.trim() === "") {
    alert("Campo nome é obrigatorio");
    return;
  }

  if (email === "") {
    alert("Campo email é obrigatorio");
    return;
  }

  if (!regexEmail.test(email)) {
    alert("Por favor, insira um e-mail válido.")
    return;
  }

  alert("Formulário enviado com sucesso!");

  this.submit();
  
});
