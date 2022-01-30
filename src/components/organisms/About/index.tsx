import { Button, Card, Carousel, Col, Row } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

import { PersonItems } from '@data/About'
import { toStyledModuleNames } from '@utils/styledModuleName'
import { v4 as uuidv4 } from 'uuid'

import styles from './styles.module.scss'

const styledModule = toStyledModuleNames(styles)

export const About = () => (
  <div className={styledModule`root`}>
    <div className={styledModule`title`}>Who are we?</div>
    <div className={styledModule`sub-title`}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
    <Row align='middle' wrap={false} gutter={10} style={{ width: '100%' }}>
      <Col className={styledModule`actions`} flex='0 0 100px'>
        <Button shape='circle' type='ghost'>
          <LeftOutlined />
        </Button>
      </Col>
      <Col flex='1 1 auto'>
        <Carousel
          style={{ width: 'calc(100vw - 320px)' }}
          autoplay
          dots={false}
        >
          {PersonItems.map((it) => (
            <div>
              <Row key={uuidv4()} wrap={false} gutter={20}>
                {it.news.map((n) => (
                  <Col key={uuidv4()} span={8}>
                    <Card
                      className={styledModule`new`}
                      style={{ backgroundImage: `url(${n.img})` }}
                      bordered={false}
                    >
                      <Card.Meta title={n.name} description={n.content} />
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Carousel>
      </Col>
      <Col className={styledModule`actions`} flex='0 0 100px'>
        <Button shape='circle' type='ghost'>
          <RightOutlined />
        </Button>
      </Col>
    </Row>
  </div>
)
