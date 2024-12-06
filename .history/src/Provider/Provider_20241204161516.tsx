import { Provider } from "../Components/ui/provider"
import { ReactNode } from "react"
import { QueryClientProvider } from '@tanstack/react-query'

interface Nodes {
    children : ReactNode
}


const Providers = ({children} : Nodes) => {
  return ( 
    <Query
    <Provider>
        {children}
    </Provider>
  )
}

export default Providers