import { Button, Input, Stack } from '@chakra-ui/react'
import React from 'react'

const Auth = () => {
  return (
    <Stack  height={'10rem'}
            width={'40%'}
            alignItems={'center'}
            justifyContent={'space-evenly'}
            padding={'5px'}
            borderRadius={'10px'}
            bgColor={'rgba(38, 38, 38, 0.6)'}
            position={'absolute'}
            zIndex={2}
            top={'30%'}
            >
            <Typogra
            <Input width={'70%'}/>
            <Button bgColor={'yellow.400'}>Tasdiqlash</Button>

    </Stack>
  )
}

export default Auth