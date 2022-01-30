import { Card, Col, Image, Row, Typography } from 'antd'
import { v4 as uuidv4 } from 'uuid'

import { RightOutlined } from '@ant-design/icons'

import { Link } from 'react-router-dom'

import { CourseItems } from '@data/Course'

import { toStyledModuleNames } from '@utils/styledModuleName'
import styles from './styles.module.scss'

const styledModule = toStyledModuleNames(styles)

export const Courses = () => (
  <div className={styledModule`root`}>
    <Row gutter={[30, 30]}>
      {CourseItems.map((it) => (
        <Col key={uuidv4()} span={8}>
          <Card
            className={styledModule`course`}
            bodyStyle={{ height: '100%' }}
            cover={<Image height={300} preview={false} src={it.img} />}
          >
            <div className={styledModule`container`}>
              <div className={styledModule`content`}>
                <Typography.Title className={styledModule`title`} level={3}>
                  {it.title}
                </Typography.Title>
                <p
                  className={styledModule`description`}
                  dangerouslySetInnerHTML={{ __html: it.content }}
                />
              </div>
              <Link className={styledModule`action`} to='#'>
                Find out more <RightOutlined />
              </Link>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
)
