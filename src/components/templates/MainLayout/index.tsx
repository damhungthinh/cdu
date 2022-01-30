import { useEffect } from 'react'
import { useLocation, Outlet } from 'react-router-dom'

import { Layout } from 'antd'

import { Logo } from '@components/atoms/Logo'
import { NavBar } from '@components/molecules/NavBar'
import { Footer as AppFooter } from '@components/molecules/Footer'

import { toStyledModuleNames } from '@utils/styledModuleName'
import style from './styles.module.scss'

const styledModule = toStyledModuleNames(style)

const { Content, Header, Footer } = Layout

export const MainLayout = () => {
  const location = useLocation()

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <Layout className={styledModule`root`}>
      <Header className={styledModule`header`}>
        <Logo clickable />
        <NavBar />
      </Header>
      <Content className={styledModule`content`}>
        <Outlet />
      </Content>
      <Footer className={styledModule`footer`}>
        <AppFooter />
      </Footer>
    </Layout>
  )
}
