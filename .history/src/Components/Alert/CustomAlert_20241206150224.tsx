interface CustomAlertProps {
  setAlert: (value: boolean) => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ setAlert }) => {
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
