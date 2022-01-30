import { Button, Image, Typography } from 'antd'

import { toStyledModuleNames } from '@utils/styledModuleName'
import styles from './styles.module.scss'
import { RightOutlined } from '@ant-design/icons'

const styledModule = toStyledModuleNames(styles)

export const Banner = () => (
  <div className={styledModule`root`}>
    <Image src='/cdu/images/banner.jpeg' preview={false} />

    <div className={styledModule`wrapper`}>
      <div className={styledModule`title`}>Diversity and Inclusion</div>
      <Typography.Paragraph className={styledModule`description`}>
        Across Charles Darwin, we've strengthened our long-standing commitment
        making our university more inclusive and the world more trust where
        every idea can be heard and everybody belongs
      </Typography.Paragraph>
      <Button type='primary' size='large' className={styledModule`action`}>
        Read more <RightOutlined />
      </Button>
    </div>
  </div>
)
