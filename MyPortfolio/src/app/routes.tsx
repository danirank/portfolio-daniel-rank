import type { ReactElement } from 'react'
import { HomePage } from '../pages/HomePage'

type RouteConfig = {
  path: string
  element: ReactElement
}

const routes: RouteConfig[] = [{ path: '/', element: <HomePage /> }]

export function getCurrentRoute(pathname: string): RouteConfig {
  return routes.find((route) => route.path === pathname) ?? routes[0]
}
