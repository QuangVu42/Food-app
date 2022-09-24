import RoutesConfig from '../config/RoutesConfig'

import Home from '../page/Home/Home'
import Shop from '../page/Shop/Shop'
import Login from '../page/Login/login'

const publicRoutes = [
    {path: RoutesConfig.home, component: Home},
    {path: RoutesConfig.shop, component: Shop},
    {path: RoutesConfig.login, component: Login}
]
export default publicRoutes