import { Button, Flex, Stack } from '@chakra-ui/react'
import { GrMap } from 'react-icons/gr'

const LoginAndMap = () => {
  return (
    <Stack width={{sm : '100%', md : '100%', lg : '40%'}}
           height={'100%'}>
                  <Button height={'2rem'}
                          bgColor={'#ffdd59'}
                          color={'black'}
                          borderRadius={'8px'}>
                          <GrMap />
                  </Button>
                  <Button height={'100%'}
                          width={'70%'}
                          bgColor={'#ffdd59'}
                          color={'black'}
                          borderRadius={'8px'}>
                          Kirish
                  </Button>
      </Stack>
  )
}

export default LoginAndMap
