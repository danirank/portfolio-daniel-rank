import { getCurrentRoute } from './routes'

export function App() {
  const route = getCurrentRoute(window.location.pathname)
  return route.element
}
