import { Button, Carousel, Col, Image, Row, Typography } from 'antd'
import { v4 as uuidv4 } from 'uuid'

import { ProjectItems } from '@data/Project'
import { toStyledModuleNames } from '@utils/styledModuleName'
import styles from './styles.module.scss'

const styledModule = toStyledModuleNames(styles)

export const Projects = () => (
  <div className={styledModule`root`}>
    <div className={styledModule`title`}>Accept Projects</div>
    <div className={styledModule`description`}>
      There's a lot in the works. <br /> And much more work to do.
    </div>
    <Carousel style={{ width: 'calc(100vw - 100px)' }} autoplay>
      {ProjectItems.map((it) => (
        <div key={uuidv4()} className={styledModule`carousel-item`}>
          <Row wrap={false}>
            <Col flex='auto' style={{ height: '100%' }}>
              <Image src={it.img} preview={false} height={700} width='100%' />
            </Col>
            <Col span={6} className={styledModule`content`}>
              <Typography.Paragraph className={styledModule`text`}>
                {it.content}
              </Typography.Paragraph>
              <Button className={styledModule`action`} type='primary'>
                Read more
              </Button>
            </Col>
          </Row>
        </div>
      ))}
    </Carousel>
  </div>
)
