
import { Route, Routes } from 'react-router-dom'
import { Home } from './element/Home'
import { About } from './element/About'
import { NavBar } from './element/NavLink'
import { OrderDetails } from './element/OrderDetails'
import { NoMatchRoute } from './element/NoMatchRoute'
import { Product } from './element/nested/Product'
import { FeaturePage } from './element/nested/FeaturePage'
import { NewPage } from './element/nested/NewPage'
import { User } from './element/User'
import { UserDetailsPage } from './element/UserDetailsPage'
import { AdminPage } from './element/AdminPage'
import { AuthProvider } from './element/Auth/Auth'
import { Profile } from './element/Auth/Profile'
import { Login } from './element/Auth/Login'

export const AllRoutes = () => {
    return (
        <AuthProvider>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='profile' element={<Profile/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='order-details' element={<OrderDetails />} />
                <Route path='product' element={<Product />}>
                    <Route index element={<FeaturePage />} />
                    <Route path='feture-page' element={<FeaturePage />} />
                    <Route path='new-page' element={<NewPage />} />
                </Route>
                <Route path='user' element={<User />}>
                    <Route path=':userId' element={<UserDetailsPage />} />
                    <Route path='admin' element={<AdminPage />} />
                </Route>
                <Route path='*' element={<NoMatchRoute />} />
            </Routes>
        </AuthProvider>

    )
}
