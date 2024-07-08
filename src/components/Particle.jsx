import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import Loader from "./Loader";

const Particle = () => {
    const [ init, setInit ] = useState(false);
    
    const load = async (engine) => {
      await loadFull(engine);
      setInit(true);
  }

    useEffect(() => {
        initParticlesEngine(load)
    }, []);
  
    const particlesLoaded = (container) => {
      console.log(container);
    };
    return (
      <>
        { init ? 
        <div style={{position:"absolute", zIndex:"-1",height:"100%",width:"100%"}}>

          <Particles 
            id="tsparticles" 
            init={init}
            // init={particlesInit}
            particlesLoaded={particlesLoaded}
            options={{
                fpsLimit: 60,
                collions:{
                  enable:false
                },
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
        </div>:
        <Loader/>
}
        </>
)
}
export default Particle

