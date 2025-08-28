document.getElementById('y').textContent = new Date().getFullYear();

    // Cargar partículas en el hero (basado en tu config funcional, adaptado al contenedor)
    tsParticles.load("tsparticles", {
      fpsLimit: 120,
      fullScreen: { enable: false },                 // limitado al hero
      background: { color: "transparent" },          // transparente para ver el fondo del hero
      interactivity: {
        events: {
          resize: true
        },
      },
      particles: {
        // Blanco para máximo contraste; si quieres tu paleta: ["#00B8B0","#008366"]
        color: { value: "#ffffff" },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "out" },
          random: false,
          speed: 2,                                   // baja a 0.7 para más suave
          straight: false
        },
        number: {
          density: { enable: true, area: 800 },
          value: 80
        },
        opacity: {
          animation: {
            enable: true,
            speed: 0.05,
            sync: true,
            startValue: "max",
            count: 1,
            destroy: "min"
          },
          value: { min: 0, max: 0.5 }                 // aspecto difuso/opaco
        },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } }
      }
    });