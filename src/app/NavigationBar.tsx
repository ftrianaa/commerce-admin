import { Box, HStack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const NavigationBar = () => {
  return (
    <HStack align={'center'} justify={'space-between'} p={20} bgColor={'green'}>
     <Link href={"/"} className='mr-5'>Stores</Link>
     <Link href={"/products"}>Products</Link>
    </HStack>
  )
}

export default NavigationBar