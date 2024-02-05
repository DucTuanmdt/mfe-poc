import { Provider } from "react-redux"
import { store } from "@/redux"
import Home from "@/pages/Home"


const UserAppShared = () => {
  return (
    <Provider store={store}>
        <Home />
    </Provider>
  )
}

export default UserAppShared