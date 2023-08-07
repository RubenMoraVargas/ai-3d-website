import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';
import CustomSpan from '../components/CustomSpan';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <div className="flex  items-center">

            <img 
              src='./logo.png'
              alt="logo"
              className="w-32 h-32 object-contain"
            />
            <span className="text-4xl dark:text-white ml-4">3D Shirts</span>
            </div>
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="xl:block hidden" /> 
                <CustomSpan>DO IT.</CustomSpan>
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal dark:text-gray-200 text-gray-600 text-base">
              Design your one-of-a-kind, exclusive shirt using our innovative 3D customization tool. 
              <strong>Let your creativity run wild as you shape</strong>{" "}  your distinctive fashion statement. 
              </p>

              <CustomButton 
                type="filled"
                title="Customize It"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home