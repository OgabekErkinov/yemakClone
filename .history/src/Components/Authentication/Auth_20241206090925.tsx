import { Input, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Auth = () => {

    const [phoneNumber, setPhoneNumber] = useState('998')
    const handlePhoneNumber = (phoneNumber : string) => {
          setPhoneNumber()
    }
  return (
    <Stack height={'15vh'}
            width={'20vw'}
            border={'1px solid red'}
            marginTop={'5rem'}>
        <Input placeholder='enter your phone'
               />
    </Stack>
  )
}

export default Auth