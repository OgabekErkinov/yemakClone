import { Container } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '@/Apis/Requests/Service.Api';
import CategoryItem from './CategoryItem';


const Category = () => {

  const {data, isPending, isError} = useQuery({queryKey : ['categories'], queryFn : getCategories})

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

                {data?.map((item) => <SwiperSlide key={item?.id}>
                                        <CategoryItem url={item?.icon} te/>
                                     </SwiperSlide>)}



              </Swiper>
            

    </Container>
  )
}

export default Category
