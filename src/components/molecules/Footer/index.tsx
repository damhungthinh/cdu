import { Descriptions, Divider, Space, Typography } from 'antd'
import {
  DingdingOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
} from '@ant-design/icons'
import { Copyright } from '@components/atoms/Copyright'
import { FooterItems } from '@data/Menu'

import { toStyledModuleNames } from '@utils/styledModuleName'
import styles from './styles.module.scss'

const styledModule = toStyledModuleNames(styles)

export const Footer = () => {
  return (
    <div className={styledModule`root`}>
      <Descriptions layout='vertical' column={4} colon={false}>
        {FooterItems.map((it) => (
          <Descriptions.Item
            label={
              <Typography.Link href={it.href}>
                <Typography.Title level={5}>{it.label}</Typography.Title>
              </Typography.Link>
            }
          >
            <Space direction='vertical'>
              {it.subs.map((s) => (
                <Typography.Link href={s.href}>{s.label}</Typography.Link>
              ))}
            </Space>
          </Descriptions.Item>
        ))}
      </Descriptions>
      <Space size='large' align='center' className={styledModule`refs`}>
        <Typography.Link className={styledModule`ref`}>
          <FacebookOutlined size={40} />
        </Typography.Link>
        <Typography.Link className={styledModule`ref`}>
          <InstagramOutlined size={40} />
        </Typography.Link>
        <Typography.Link className={styledModule`ref`}>
          <LinkedinOutlined size={40} />
        </Typography.Link>
        <Typography.Link className={styledModule`ref`}>
          <DingdingOutlined size={40} />
        </Typography.Link>
        <Typography.Link className={styledModule`ref`}>
          <YoutubeOutlined size={40} />
        </Typography.Link>
      </Space>
      <Typography.Paragraph className={styledModule`acknowledges`}>
        Charles Darwin University acknowledges the traditional custodians across
        the lands on which we live and work, and we pay our respects to Elders
        past, present and emerging.
        <br />
        CRICOS Provider No: 00300K (NT/VIC) 03286A (NSW) RTO Provider No: 0373
        TEQSA Provider ID PRV12069
        <br />
        ABN 54 093 513 649 | Privacy Statement | Copyright and Disclaimer |
        Feedback
      </Typography.Paragraph>
      <Divider
        style={{
          borderColor: 'var(--gray)',
          minWidth: '50%',
          width: '50%',
          margin: 'auto',
          marginTop: 24,
        }}
      />
      <div className={styledModule`copyright`}>
        <Copyright />
      </div>
    </div>
  )
}
