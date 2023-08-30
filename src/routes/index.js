import {Route} from 'react-router-dom';
import {lazy} from 'react';

const routes = [
    {
        path: "",
        element: lazy(()=> import("../screens/Home/")),
        nested: [
            {
                path: "",
                element: lazy(() => import("../screens/Home/Homepage"))
            },
            {
                path: "home",
                element: lazy(() => import("../screens/Home/Homepage"))
            },
            {
                path: "danhmuc",
                element: lazy(() => import("../screens/Home/Danhmuc"))
            },
            {
                path: "khoahoc",
                element: lazy(() => import("../screens/Home/Course"))
            },
            {
                path: "blog",
                element: lazy(() => import("../screens/Home/Blog"))
            },
            {
                path: "sukien",
                element: lazy(() => import("../screens/Home/Events"))
            },
            {
                path: "thongtin",
                element: lazy(() => import("../screens/Home/Informations"))
            },
        ]
    },
];

const renderRoutes = () => {
    return routes.map((route) => {
        if (route.nested) {
            return (
                <Route key={route.path} path={route.path} element={<route.element />}>
                    {route.nested.map((item) => {
                        return <Route key={item.path} path={item.path} element={< item.element />} />
                    })}
                </Route>
            )
        } else {
            return <Route key={route.path} path={route.path} element={< route.element />} />
        }
    })
}
export default renderRoutes;