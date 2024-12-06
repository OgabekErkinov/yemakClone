import { Provider } from "../Components/ui/provider"
import { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface Nodes {
    children : ReactNode
}

const queryClient = new QueryClient()


const Providers = ({children} : Nodes) => {
  return ( 
    <QueryClientProvider client={queryClient}>
    <Provider>
        {children}
    </Provider>
    </QueryClientProvider>
  )
}

export default Providers
