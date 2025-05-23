   const menuToggle = document.querySelector('.menuToggle');
    const navMenu = document.querySelector('.navMenu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
    
document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const nomeInput = document.getElementById("nome");
  const emailInput = document.getElementById("email");
  const emailObrigatorioMsg = document.getElementById("obrigaEmail");
  const nomeObrigatorioMsg = document.getElementById("obrigaNome");
  const formatoEmailMsg = document.getElementById("formatoEmail");
  const nome = nomeInput.value.trim();
  const email = emailInput.value.trim();
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let formValido = true;

  nomeInput.classList.remove("erro");
  emailInput.classList.remove("erro");

  if (nome === "") {
    nomeInput.classList.add("erro");
    formValido = false;
    nomeObrigatorioMsg.style.display = "block"
  }

  if (email === "") {
    formatoEmailMsg.style.display = "none"
    emailInput.classList.add("erro");
    formValido = false;
    emailObrigatorioMsg.style.display = "block"
  } else if (!regexEmail.test(email)) {
    emailInput.classList.add("erro");
    formatoEmailMsg.style.display = "block"
    emailObrigatorioMsg.style.display = "none"
    formValido = false;
  }

  if (formValido) {
    alert("Formulário enviado com sucesso!");
    this.submit();
  }
});

  window.watsonAssistantChatOptions = {
    integrationID: "842fcf36-b187-484f-8d96-9f806af28425", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "06cae0f0-b964-4f1f-9c8b-78a25030e1c4", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
