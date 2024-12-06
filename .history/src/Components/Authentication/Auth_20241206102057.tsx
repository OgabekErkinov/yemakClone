import { Input, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Auth = () => {

    const [phoneNumber, setPhoneNumber] = useState('')
    const handlePhoneNumber = (number : string) => {
          if(number){
            if(number.length > 9){
                return `+998${number.slice(0,9)}`
            }else{
                return `+998${number}`
            }
          }
    }

    const handleChangeNumber = (e : React.ChangeEvent<HTMLInputElement>) => {
        const changeValue  = e.target.value

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