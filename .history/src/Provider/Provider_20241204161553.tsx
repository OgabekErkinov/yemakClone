import { Provider } from "../Components/ui/provider"
import { ReactNode } from "react"
import { QueryClientProvider } from '@tanstack/react-query'

interface Nodes {
    children : ReactNode
}

const queryClient


const Providers = ({children} : Nodes) => {
  return ( 
    <QueryClientProvider>
    <Provider>
        {children}
    </Provider>
    </QueryClientProvider>
  )
}

export default Providers
