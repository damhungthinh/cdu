import { About } from '@components/organisms/About'
import { Banner } from '@components/organisms/Banner'
import { Courses } from '@components/organisms/Courses'
import { News } from '@components/organisms/News'
import { Projects } from '@components/organisms/Projects'
import { toStyledModuleNames } from '@utils/styledModuleName'
import styles from './styles.module.scss'

const styledModule = toStyledModuleNames(styles)

export const Diversity = () => (
  <div className={styledModule`root`}>
    <Banner />
    <Courses />
    <Projects />
    <News />
    <About />
  </div>
)
