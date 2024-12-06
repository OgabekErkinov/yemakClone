import { Button, Flex, Stack } from '@chakra-ui/react'
import { GrMap } from 'react-icons/gr'

const LoginAndMap = () => {
  return (
    <Stack width={'20%'}
           height={'30%'}>
            <Flex width={'100%'}
                  justify={'space-between'}
                  height={'3rem'}>
                  <Button height={'100%'}
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
                        </Flex>
      </Stack>
  )
}

export default LoginAndMap
