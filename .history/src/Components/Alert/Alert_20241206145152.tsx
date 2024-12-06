import { Alert } from '../ui/alert'
import { CloseButton } from '../ui/close-button'

const CustomAlert = (setAlert : func) => {
  return (
    <Alert status={'error'} 
           title = {'Invalid fields'}>
              Please check your phone number
             <CloseButton position = {'absolute'} 
                          right={0} top={0}
                          onClick={() => setAlert(false)}/>            
    </Alert>
  )
}

export default CustomAlert