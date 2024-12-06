import { Input, Stack } from '@chakra-ui/react'
import React from 'react'

const Auth = () => {
  return (
    <Stack  height={'15rem'}
            width={'40%'}
            alignItems={'center'}
            
            borderRadius={'10px'}
            bgColor={'rgba(38, 38, 38, 0.6)'}
            position={'absolute'}
            zIndex={2}
            top={'30%'}
            >
            <Input width={'70%'}/>

    </Stack>
  )
}

export default Auth