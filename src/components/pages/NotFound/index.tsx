import { useNavigate, useNavigationType } from 'react-router-dom'

import { Button, Result, Space } from 'antd'
import { HomeFilled } from '@ant-design/icons'

import { toStyledModuleNames } from '@utils/styledModuleName'
import styles from './styles.module.scss'

const styledModule = toStyledModuleNames(styles)

export const NotFoundPage = () => {
  const navigate = useNavigate()
  const navigationType = useNavigationType()
  return (
    <Result
      className={styledModule`root`}
      status={404}
      title='404'
      subTitle="Oops, the page you're looking for doesn't exist..."
      extra={
        <Space>
          <Button type='primary' onClick={() => navigate('/')}>
            Back to <HomeFilled />
          </Button>
          {navigationType === 'PUSH' && (
            <Button type='link' onClick={() => navigate(-1)}>
              Go Back
            </Button>
          )}
        </Space>
      }
    />
  )
}
