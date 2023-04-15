import React from 'react'
import {Link} from 'react-router-dom'
import { Box, Text,Flex, Spacer } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Box borderBottom='2px solid teal' p="10px">
    <Flex fontSize="25px" pl='30%' pr='30%' color='teal'>
    <Link to='/'>Home</Link>
      <Spacer/>
      <Link to='/dashboard'> Dashboard </Link>
    </Flex>
    </Box>
  )
}

export default Navbar