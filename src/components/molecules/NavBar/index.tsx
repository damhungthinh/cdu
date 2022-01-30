import { memo } from 'react'
import { Avatar, Col, Menu, Row } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { MenuItems } from '@data/Menu'
import { toStyledModuleNames } from '@utils/styledModuleName'
import styles from './styles.module.scss'

const styledModule = toStyledModuleNames(styles)

export const NavBar = memo(() => (
  <Row className={styledModule`root`} justify='end' align='middle'>
    <Col style={{ height: '100%' }}>
      <Menu
        className={styledModule`menu-wrapper`}
        selectedKeys={[]}
        mode='horizontal'
      >
        {MenuItems.map((it) => (
          <Menu.Item className={styledModule`menu-item`} key={it.href}>
            {it.label}
          </Menu.Item>
        ))}
      </Menu>
    </Col>
    <Col>
      <Avatar className={styledModule`avatar`} icon={<UserOutlined />} />
    </Col>
  </Row>
))
