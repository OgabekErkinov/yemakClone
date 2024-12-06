import { Alert } from '../ui/alert'
import { CloseButton } from '../ui/close-button'

interface CustomAlertProps {
  setAlert: (value: boolean) => void;
}

const CustomAlert: <CustomAlertProps> = ({ setAlert }) => {
  return (
    <Alert status="error" title="Invalid fields">
      Please check your phone number
      <CloseButton
        position="absolute"
        right={0}
        top={0}
        onClick={() => setAlert(false)}
      />
    </Alert>
  );
};


export default CustomAlert