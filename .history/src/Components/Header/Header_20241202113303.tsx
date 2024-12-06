import { Container, Flex } from '@chakra-ui/react'
import LoginAndMap from './Components/LoginAndMap'
import LogoAndSearch from './Components/LogoAndSearch'



const Header = () => {
  return (
    <Container height={{sm : '120px', md : '70px', lg : '400px'}}
               width={'1920px'}
               padding={'1rem'}
               margin={0}
               bgImage="url('https://yemak.uz/static/media/bg_image1.941827cc.jpg')"
               bgSize={'cover'}
               bgColor={'#000'}
               bgRepeat={'no-repeat'}
               bgPos={'50% center'}>

            <Flex height={'100%'}
                  width={'100%'}
                  paddingX={'1rem'}
                  boxSizing={'border-box'}>

                <Flex width={'100%'}
                      height={'100%'}
                      justify={'space-between'}
                      alignItems={'center'}>
                        
                     {/* yemak rasmiy logotipi va qidiruv inputi */}
                     <LogoAndSearch/>
                     {/* Kirish tugmasi va xarita */}
                     <LoginAndMap/>
                   

                </Flex>

            </Flex>

    </Container>
  )
}

export default Header