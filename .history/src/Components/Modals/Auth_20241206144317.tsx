import { Button, Flex, Icon, IconButton, Input, Stack } from '@chakra-ui/react'
import { Alert } from '../ui/alert'
import { CloseButton } from '../ui/close-button'


const Auth = () => {

    const handleNumber = (text : string) => {
        if(text){
            const value = text.replace(/\D/g,'')
            console.log(value)
        }else{
           
        }

    }
 

  return (
    <Stack  height={'20vh'}
            width={'30vw'}
            alignItems={'center'}
            justifyContent={'space-evenly'}
            padding={'5px'}
            borderRadius={'10px'}
            bgColor={'rgba(38, 38, 38, 0.8)'}
            position={'absolute'}
            zIndex={2}
            top={'30%'}
            >
            <Flex width={'80%'}
                   justify={'center'}>
                <Button bgColor={'yellow.400'}
                        width={'10%'}>+998</Button>
                <Input width={'60%'}
                       color={'whiteAlpha.800'}
                       fontWeight={'700'}
                       placeholder='your phone number'
                       />
            </Flex>
            <Button bgColor={'yellow.400'}
                    >Tasdiqlash</Button>

              {/* Alert Component */}
           <Alert status={'error'} 
                  title = {'Invalid fields'}
                  >
                    Please check your phone number
                   <CloseButton position = {'absolute'} right={0} top={0}/>            
           </Alert>

    </Stack>
  )
}

export default Auth