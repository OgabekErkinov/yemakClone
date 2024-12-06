import { Box, Input, Link, Stack } from '@chakra-ui/react'
import YemakIcon from './YemakIcon'

const LogoAndSearch = () => {
  return (
    <Stack width={{sm : '100%', md : '100%', lg : '40%'}}
           height='100%'
           >
          <Link href='/' height={'45%'}>
               <YemakIcon/>
          </Link>
         <Box width={'100%'}
              height={'auto'}
              border={'none'}
              borderRadius={'5px'}
              bgColor={'#ffff'}>
             <Input border={'none'}
                    color={'rgba(110, 110, 110, 0.5)'}
                    placeholder='Restoran yoki taom nomi'/>
        </Box>
    </Stack>
  )
}

export default LogoAndSearch
