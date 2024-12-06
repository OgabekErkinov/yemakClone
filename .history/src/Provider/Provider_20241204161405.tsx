import { Provider } from "../Components/ui/provider"
import { ReactNode } from "react"


interface Nodes {
    children : ReactNode
}


const Providers = ({children} : Nodes) => {
  return ( 
    <Provider>
        {children}
    </Provider>
  )
}

export default Providers
