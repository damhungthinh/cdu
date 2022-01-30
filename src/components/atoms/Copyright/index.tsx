import { memo } from 'react'

import { Space, Typography } from 'antd'
import { HeartFilled } from '@ant-design/icons'

import { toStyledModuleNames } from '@utils/styledModuleName'
import style from './styles.module.scss'

const styledModule = toStyledModuleNames(style)

export const Copyright = memo(() => (
  <Space className={styledModule`root`}>
    Copyright ©2022 All rights reserved | This website is made with
    <Typography.Text type='danger'>
      <HeartFilled />
    </Typography.Text>
    by
    <span className={styledModule`name`}>Ed</span>
  </Space>
))
