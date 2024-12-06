import { Box, Heading, Image, Stack } from '@chakra-ui/react'
import { CategoryItem } from './Interfaces/CategoryItem'

const CategoryItem = ({url, text} : CategoryItems) => {
  return (
    <Stack height={'5rem'}
           width={'5rem'}
           padding={'10px'}>
        <Image src={url}/>
        <Heading>{text}</Heading>
    </Stack>
  )
}

export default CategoryItem
