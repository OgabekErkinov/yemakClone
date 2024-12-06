import { Container } from '@chakra-ui/react'
import { Swiper } from 'swiper/react'
import 'swiper/css';
import { useQuery } from '@tanstack/react-query';


const Category = () => {

  const {data, isPending, isError} = useQuery({})

  return (
    <Container width={'100%'}
               height={'5rem'}
               boxSizing={'border-box'}
               padding={'1rem'}
               marginY={'1rem'}
               borderBottom={'0.5px solid grey'}
               >
              <Swiper
              spaceBetween={50}
              slidesPerView={3}
              navigation>



              </Swiper>
            

    </Container>
  )
}

export default Category
