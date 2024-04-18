
import { Route,  Routes } from 'react-router-dom'

import { ROUTER } from './shared/constant/router'
import HomePage from './page/Home'
import NotFound from './page/Home/NotFound'
import Detail from './page/Detail'
import DetailSetting from './page/DetailSetting'
import About from './page/About'



function App() {


  return (
 
    <Routes>
<Route path={ROUTER.HOME} element={<HomePage/>} />

<Route path={ROUTER.DETAIL} element={<Detail/>} />
<Route path={ROUTER.DETAIL_SETTING} element={<DetailSetting/>} />

<Route path={ROUTER.ABOUT} element={<About/>} />

<Route path="*" element={<NotFound/>} />




    </Routes>
  )
}

export default App
