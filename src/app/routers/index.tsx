import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { MainLayout } from '@components/templates/MainLayout'
import { Diversity } from '@components/pages/Diversity'

export const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='cdu' element={<Diversity />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
