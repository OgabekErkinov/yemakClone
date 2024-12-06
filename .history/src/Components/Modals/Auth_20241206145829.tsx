import { Button, Flex, Input, Stack } from '@chakra-ui/react'

import { useState } from 'react'
import CustomAlert from '../Alert/CustomAlert'


const Auth = () => {

    const [alert, setAlert] = useState(false)

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

            {/* Submit phone number button */}
            <Button bgColor={'yellow.400'}
                    >Tasdiqlash</Button>

           {/* Alert Component */}
           {alert && <CustomAlert set/>}

    </Stack>
  )
}

export default Auth