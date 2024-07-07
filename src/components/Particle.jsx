import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const Particle = () => {
    const [ init, setInit ] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            await loadFull(engine);
            // await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
      <>
        { init && 
        <div style={{position:"absolute", zIndex:"-1",height:"100%",width:"100%"}}>

          <Particles 
            id="tsparticles" 
            init={init}
            particlesLoaded={particlesLoaded}
            options={{
                fullScreen:{
                  enable:true,
                  zIndex:-1,
                  },
                  background: {
                    color: "#1B2430",
                    repeat: "no-repeat",
                    size: "40%",
                    position: "60% 50%",
                  },
                  interactivity: {
                    detectsOn:"canvas",
                    events: {
                      // onClick: {
                      //   enable: true,
                      //   mode: "repulse"
                      // },
                      onHover: {
                        enable: true,
                        mode: "bubble"
                      }
                    },
                    modes: {
                      bubble: {
                        distance: 200,
                        duration: 2,
                        opacity: 0,
                        size: 0,
                        speed: 3
                      },
                      repulse: {
                        distance: 400,
                        duration: 0.4
                      }
                    }
                  },
                  particles: {
                    // zIndex:-1,
                    // color: { value: "#FFC947" },
                    color: { value: "#fff" },
                    move: {
                      direction: "none",
                      enable: true,
                      outModes: "out",
                      random: true,
                      speed: 0.2
                    },
                    number: {
                      density: {
                        enable: true
                      },
                      value: 500
                    },
                    opacity: {
                      animation: {
                        enable: true,
                        speed: 2
                      },
                      value: { min: 0.3, max: 0.6 }
                    },
                    shape: {
                      type: "triangle"
                    },
                    size: {
                      value: 1
                    }
                  }
                }}
        />
        </div>
}
        </>
)
}
export default Particle


// const cofig = const config = {
//   background: {
//     color: {
//       value: "#111827",
//     },
//   },
//   fullScreen: {
//     enable: true,
//     zIndex: -1,
//   },
//   fpsLimit: 120,
//   interactivity: {
//     events: {
//       onClick: {
//         enable: true,
//         mode: "push",
//       },
//       onHover: {
//         enable: true,
//         mode: "repulse",
//       },
//       resize: true,
//     },
//     modes: {
//       push: {
//         quantity: 5,
//       },
//       repulse: {
//         distance: 100,
//         duration: 1.4,
//       },
//     },
//   },
//   particles: {
//     color: {
//       value: "#ffffff",
//     },
//     links: {
//       color: "#ffffff",
//       distance: 180,
//       enable: true,
//       opacity: 0.5,
//       width: 1,
//     },
//     collisions: {
//       enable: true,
//     },
//     move: {
//       directions: "none",
//       enable: true,
//       outModes: {
//         default: "bounce",
//       },
//       random: false,
//       speed: { min: 1, max: 2 },
//       straight: false,
//     },
//     number: {
//       density: {
//         enable: true,
//         area: 800,
//       },
//       value: 40,
//     },
//     opacity: {
//       value: 0.5,
//     },
//     shape: {
//       type: "circle",
//     },
//     size: {
//       value: { min: 1, max: 5 },
//     },
//   },
//   detectRetina: true,
// };

// export default config;



// import React, { useCallback } from "react";
// import Particles from "@tsparticles/react";
// import { loadFull } from "tsparticles";
// // import config from "../particle-config";

// function Particle() {
//    const config = {
//       background: {
//         color: {
//           value: "#111827",
//         },
//       },
//       fullScreen: {
//         enable: true,
//         zIndex: -1,
//       },
//       fpsLimit: 120,
//       interactivity: {
//         events: {
//           onClick: {
//             enable: true,
//             mode: "push",
//           },
//           onHover: {
//             enable: true,
//             mode: "repulse",
//           },
//           resize: true,
//         },
//         modes: {
//           push: {
//             quantity: 5,
//           },
//           repulse: {
//             distance: 100,
//             duration: 1.4,
//           },
//         },
//       },
//       particles: {
//         color: {
//           value: "#ffffff",
//         },
//         links: {
//           color: "#ffffff",
//           distance: 180,
//           enable: true,
//           opacity: 0.5,
//           width: 1,
//         },
//         collisions: {
//           enable: true,
//         },
//         move: {
//           directions: "none",
//           enable: true,
//           outModes: {
//             default: "bounce",
//           },
//           random: false,
//           speed: { min: 1, max: 2 },
//           straight: false,
//         },
//         number: {
//           density: {
//             enable: true,
//             area: 800,
//           },
//           value: 40,
//         },
//         opacity: {
//           value: 0.5,
//         },
//         shape: {
//           type: "circle",
//         },
//         size: {
//           value: { min: 1, max: 5 },
//         },
//       },
//       detectRetina: true,
//     };
//   const particlesInit = useCallback(async (engine) => {
//     console.log(engine);
//     // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//     // starting from v2 you can add only the features you need reducing the bundle size
//     await loadFull(engine);
//   }, []);

//   const particlesLoaded = useCallback(async (container) => {
//     await console.log(container);
//   }, []);
//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       loaded={particlesLoaded}
//       options={config}
//     />
//   );
// }

// export default Particle;