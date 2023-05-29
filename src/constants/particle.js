export const Hexagon =
{
    background: {
      color: {
        value: "transparent"
      }
    },
    fpsLimit: 120,
    interactivity: {
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40
        },
        push: {
          quantity: 1
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: "#777"
      },
      links: {
        color: "#777777",
        distance: 80,
        enable: true,
        opacity: 0.5,
        width: 1
      },
      collisions: {
        enable: true
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 1,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 90
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: "char",
        character: {
            fill: true,
            style: "",
            value: ["<>","</>"],
            weight: "500"
          },
      },
      size: {
        random: true,
        value: 5
      }
    },
    themes: [
      {
        name: "light",
        default: {
          value: true,
          mode: "light"
        },
        options: {
          background: {
            color: "transparent"
          },
          particles: {
            color: {
              value: "#000"
            }
          }
        }
      },
      {
        name: "dark",
        default: {
          value: true,
          mode: "dark"
        },
        options: {
          background: {
            color: "transparent"
          },
          particles: {
            color: {
              value: "#fff"
            }
          }
        }
      }
    ],
    detectRetina: true,
    fullScreen: { enable: false }
  }