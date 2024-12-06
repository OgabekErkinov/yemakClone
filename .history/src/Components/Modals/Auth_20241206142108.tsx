import { Button, Flex, Input, Stack } from '@chakra-ui/react'


const Auth = () => {

    const handleNumber
 

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

    </Stack>
  )
}

export default Auth