/* eslint-disable */
/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
"use client"
import React, { useState } from "react";
// import { Link } from "react-router-dom";
// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import { HSeparator } from "../components/separator/Separator";
import DefaultAuth from "../components/layouts/auth/Default";
// Assets
import illustration from "../../../public/assets/img/auth/auth.png";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import Link from "next/link";

function LoginPage() {
  // Chakra color mode
  // const  textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  // const  textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  // const textColorBrand = useColorModeValue("brand.500", "white");
  // const brandStars = useColorModeValue("brand.500", "brand.400");
  // const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
  // const googleText = useColorModeValue("navy.700", "white");
  // const googleHover = useColorModeValue(
  //   { bg: "gray.200" },
  //   { bg: "whiteAlpha.300" }
  // );
  // const googleActive = useColorModeValue(
  //   { bg: "secondaryGray.300" },
  //   { bg: "whiteAlpha.200" }
  // );
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <DefaultAuth>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w='100%'
        mx={{ base: "auto", lg: "0px" }}
        me='auto'
        h='100%'
        alignItems='start'
        justifyContent='center'
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection='column'>
        <Box me='auto'>
          <Heading color={ useColorModeValue("navy.700", "white")} fontSize='36px' mb='10px'>
            Sign In
          </Heading>
          <Text
            mb='36px'
            ms='4px'
            color={textColorSecondary}
            fontWeight='400'
            fontSize='md'>
            Enter your email and password to sign in!
          </Text>
        </Box>
        <Flex
          zIndex='2'
          direction='column'
          w={{ base: "100%", md: "420px" }}
          maxW='100%'
          background='transparent'
          borderRadius='15px'
          mx={{ base: "auto", lg: "unset" }}
          me='auto'
          mb={{ base: "20px", md: "auto" }}>
          <Button
            fontSize='sm'
            me='0px'
            mb='26px'
            py='15px'
            h='50px'
            borderRadius='16px'
            bg={useColorModeValue("secondaryGray.300", "whiteAlpha.200")}
            color={useColorModeValue("navy.700", "white")}
            fontWeight='500'
            _hover={useColorModeValue(
                  { bg: "gray.200" },
                  { bg: "whiteAlpha.300" }
                )}
                          _active={useColorModeValue(
                  { bg: "secondaryGray.300" },
                  { bg: "whiteAlpha.200" }
                )}
                          _focus={useColorModeValue(
                  { bg: "secondaryGray.300" },
                  { bg: "whiteAlpha.200" }
                )}>
            <Icon as={FcGoogle} w='20px' h='20px' me='10px' />
            Sign in with Google
          </Button>
          <Flex align='center' mb='25px'>
            <HSeparator />
            <Text color='gray.400' mx='14px'>
              or
            </Text>
            <HSeparator />
          </Flex>
          <FormControl>
            <FormLabel
              display='flex'
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              color={ useColorModeValue("navy.700", "white")}
              mb='8px'>
              Email<Text color={ useColorModeValue("brand.500", "brand.400")}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              variant='auth'
              fontSize='sm'
              ms={{ base: "0px", md: "0px" }}
              type='email'
              placeholder='mail@simmmple.com'
              mb='24px'
              fontWeight='500'
              size='lg'
            />
            <FormLabel
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              color={ useColorModeValue("navy.700", "white")}
              display='flex'>
              Password<Text color={ useColorModeValue("brand.500", "brand.400")}>*</Text>
            </FormLabel>
            <InputGroup size='md'>
              <Input
                isRequired={true}
                fontSize='sm'
                placeholder='Min. 8 characters'
                mb='24px'
                size='lg'
                type={show ? "text" : "password"}
                variant='auth'
              />
              <InputRightElement display='flex' alignItems='center' mt='4px'>
                <Icon
                  color={textColorSecondary}
                  _hover={{ cursor: "pointer" }}
                  as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
            <Flex justifyContent='space-between' align='center' mb='24px'>
              <FormControl display='flex' alignItems='center'>
                <Checkbox
                  id='remember-login'
                  colorScheme='brandScheme'
                  me='10px'
                />
                <FormLabel
                  htmlFor='remember-login'
                  mb='0'
                  fontWeight='normal'
                  color={ useColorModeValue("navy.700", "white")}
                  fontSize='sm'>
                  Keep me logged in
                </FormLabel>
              </FormControl>
              <Link href='/auth/forgot-password'>
                <Text
                  color={ useColorModeValue("brand.500", "white")}
                  fontSize='sm'
                  w='124px'
                  fontWeight='500'>
                  Forgot password?
                </Text>
              </Link>
            </Flex>
            <Button
              fontSize='sm'
              variant='brand'
              fontWeight='500'
              w='100%'
              h='50'
              mb='24px'>
              Sign In
            </Button>
          </FormControl>
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='start'
            maxW='100%'
            mt='0px'>
            <Text color={ useColorModeValue("navy.700", "secondaryGray.600")} fontWeight='400' fontSize='14px'>
              Not registered yet?
              <Link href='/auth/sign-up'>
                <Text
                  color={ useColorModeValue("brand.500", "white")}
                  as='span'
                  ms='5px'
                  fontWeight='500'>
                  Create an Account
                </Text>
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </DefaultAuth>
  );
}

export default LoginPage;
