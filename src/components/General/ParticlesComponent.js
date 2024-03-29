import Particles from "react-tsparticles";


export default function ParticlesComponent() {
   return (
      <Particles
         params={{
               particles: {
                  number: {
                     value: 70,
                     density: {
                           enable: true,
                           value_area: 2000
                     }
                  },
                  color: {
                     value: "#ffffff"
                  },
                  shape: {
                     type: "star",
                     stroke: {
                           width: 0,
                           color: "#000000"
                     },
                     polygon: {
                           nb_sides: 5,
                     },
                     image: {
                           src: "img/github.svg",
                           width: 100,
                           height: 100
                     }
                  },
                  opacity: {
                     value: 0.5,
                     random: false,
                     anim: {
                           enable: false,
                           speed: 1,
                           opacity_min: 0.1,
                           sync: false
                     }
                  },
                  size: {
                     value: 3,
                     random: true,
                     anim: {
                           enable: false,
                           speed: 40,
                           size_min: 0.1,
                           sync: false
                     }
                  },
                  line_linked: {
                     enable: false,
                     distance: 150,
                     color: "#ffffff",
                     opacity: 0.4,
                     width: 1
                  },
                  move: {
                     enable: true,
                     speed: 1,
                     direction: "none",
                     random: false,
                     straight: false,
                     out_mode: "out",
                     bounce: false,
                     attract: {
                           enable: false,
                           rotateX: 600,
                           rotateY: 1200
                     }
                  }
               },
         }}
      />
   );
}