import { gsap } from "gsap";
import glaze from "glazejs";
//import SplitType from 'split-type'
import ScrollTrigger from "gsap/ScrollTrigger";
export function SetupAnimations(){
    gsap.registerPlugin(ScrollTrigger); 
    glaze({
      lib: {
        gsap: {
          core: gsap,
        },
      },
    });
}
