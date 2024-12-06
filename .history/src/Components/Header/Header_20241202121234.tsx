import { Container, Flex } from '@chakra-ui/react'
import LoginAndMap from './Components/LoginAndMap'
import LogoAndSearch from './Components/LogoAndSearch'



const Header = () => {
  return (
<Box
  height={{ sm: '120px', md: '70px', lg: '400px' }}
  width="100%" /* Kenglikni to‘liq qoplash */
  padding="1rem"
  margin={0}
  bgImage="url('https://yemak.uz/static/media/bg_image1.941827cc.jpg')"
  bgSize="cover"
  bgColor="#000"
  bgRepeat="no-repeat"
  bgPos="50% center"
>
  <Flex
    height="100%"
    width="100%"
    paddingX="1rem"
    boxSizing="border-box"
  >
    <Flex
      width="100%"
      height="100%"
      justify="space-between"
      alignItems="center"
    >
      <LogoAndSearch />
      <LoginAndMap />
    </Flex>
  </Flex>
</Box>

  )
}

export default Header
