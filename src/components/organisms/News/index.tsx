import { Button, Card, Carousel, Col, Row } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { NewItems } from '@data/News'
import { toStyledModuleNames } from '@utils/styledModuleName'
import { v4 as uuidv4 } from 'uuid'

import styles from './styles.module.scss'

const styledModule = toStyledModuleNames(styles)

export const News = () => (
  <div className={styledModule`root`}>
    <div className={styledModule`title`}>News & Events</div>
    <Row align='middle' wrap={false} gutter={10} style={{ width: '100%' }}>
      <Col flex='0 0 100px'>
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
          {NewItems.map((it) => (
            <div>
              <Row key={uuidv4()} wrap={false} gutter={20}>
                {it.news.map((n) => (
                  <Col key={uuidv4()} span={8}>
                    <Card
                      className={styledModule`new`}
                      cover={
                        <div
                          className={styledModule`img`}
                          style={{ backgroundImage: `url(${n.img})` }}
                        />
                      }
                      bordered={false}
                    >
                      <Card.Meta title={n.title} description={n.content} />
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Carousel>
      </Col>
      <Col flex='0 0 100px'>
        <Button shape='circle' type='ghost'>
          <RightOutlined />
        </Button>
      </Col>
    </Row>
  </div>
)
