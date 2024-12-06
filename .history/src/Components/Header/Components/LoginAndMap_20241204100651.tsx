import { Button, Flex, Stack } from '@chakra-ui/react'
import { GrMap } from 'react-icons/gr'

const LoginAndMap = () => {
  return (
    <Stack width={{sm : '100%', md : '100%', lg : '30%'}}
           height={'100%'}
           direction='row'>
                  <Button height='50%'
                          width='3rem'
                          bgColor={'#ffdd59'}
                          color={'black'}
                          borderRadius={'8px'}>
                          <GrMap />
                  </Button>
                  <Button height={'50%'}
                          width={'50%'}
                          bgColor={'#ffdd59'}
                          color={'black'}
                          borderRadius={'8px'}>
                          Kirish
                  </Button>
      </Stack>
  )
}

export default LoginAndMap
