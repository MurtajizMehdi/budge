function Showpswd() {
    const checkbox = document.querySelector("show>input");
    const pswd = document.querySelector("input[type=password]");
    checkbox.addEventListener("input", (e) => {
      checkbox.checked ? (pswd.type = "text") : (pswd.type = "password");
    });
  }
  Showpswd();
  
  function Waves() {
    const waves = document.querySelectorAll(".wave");
    waves.forEach((wave) => {
      for (let i = 0; i < wave.children.length; i++)
        wave.children[i].style.transitionDelay = `${i * 0.1}s`;
    });
  }
  