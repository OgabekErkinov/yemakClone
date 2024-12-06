import { Box, Input, Link, Stack } from '@chakra-ui/react'
import YemakIcon from './YemakIcon'

const LogoAndSearch = () => {
  return (
    <Stack width={{sm : '100%', md : '100%', lg : '40%'}}
           height={'40%'}
           gapY={'auto'}>
          <Link href='/' height={'45%'}>
               <YemakIcon/>
          </Link>
         <Box width={'100%'}
              height={'auto'}
              border={'none'}
              borderRadius={'5px'}
              bgColor={'#ffff'}>
             <Input border={'none'}
                    placeholder='Restoran yoki taom nomi'/>
 </Box>
</Stack>
  )
}

export default LogoAndSearch
