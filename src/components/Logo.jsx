import { Box, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

function Logo(){
  return(
    <Box borderBottom={'2px'}  borderColor='gray.300'>
      <Link to='/'>
        <Heading as ='h2'size='lg' color='green.500' py={3} textAlign='center'>Tokopedia Play</Heading>    
      </Link>
    </Box>
  )
}

export default Logo;