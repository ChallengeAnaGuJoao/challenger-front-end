   const menuToggle = document.querySelector('.menuToggle');
    const navMenu = document.querySelector('.navMenu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
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
