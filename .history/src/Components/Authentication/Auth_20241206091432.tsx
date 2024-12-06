import { Input, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Auth = () => {

    const [phoneNumber, setPhoneNumber] = useState('')
    const handlePhoneNumber = (number : string) => {
          let phones : string = `+998${number}`
          setPhoneNumber(phones)
          console.log(phoneNumber)
    }
  return (
    <Stack height={'15vh'}
            width={'20vw'}
            border={'1px solid red'}
            marginTop={'5rem'}>
        <Input placeholder='+998'
               value={phoneNumber}
               onChange = {(e) => handlePhoneNumber(e.target.value)}
               />
    </Stack>
  )
}

export default Auth