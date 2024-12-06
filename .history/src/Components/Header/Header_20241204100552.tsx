import { Box, Container, Flex, Stack } from '@chakra-ui/react'
import LoginAndMap from './Components/LoginAndMap'
import LogoAndSearch from './Components/LogoAndSearch'



const Header = () => {
  return (
<Box
  height={{ sm: '120px', md: '70px', lg: '25rem' }}
  width="100%" /* Kenglikni to‘liq qoplash */
  padding='1.5rem'
  display='flex'
  alignItems='center'
  justifyContent='center'
  margin= '0px'
  bgImage="url('https://yemak.uz/static/media/bg_image1.941827cc.jpg')"
  bgSize="105%"
  bgColor="#000"
  bgRepeat="no-repeat"
  bgPos="50% center"
>
  <Flex
      height="60%"
      width="60%"
      justifyContent= 'space-between'
      paddingX="1rem"
      boxSizing="border-box"
  >
    <LogoAndSearch/>
    <LoginAndMap/>
     
  </Flex>
</Box>

  )
}

export default Header
