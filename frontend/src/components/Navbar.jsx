import { Button, Container, Flex, HStack,Text,useColorMode } from '@chakra-ui/react'
import { IoMoon } from 'react-icons/io5'
import { LuSun } from 'react-icons/lu'
import { PlusSquareIcon } from '@chakra-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const { colorMode,toggleColorMode } = useColorMode()
    return <Container maxW={"1140px"} px={4} py={{ base: 4, sm: 2 }}>
        <Flex
        //h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexDirection={{
            base: 'column',
            sm: 'row',
        }}
        >
            <Link to="/">
            <Text
            fontSize={{ base: "22px", sm: "28px" }}
            fontWeight="bold"
            textTransform="uppercase"
            textAlign="center"
            bgGradient="linear(to-r, teal.500, green.500)"
            bgClip="text"
            >
    Replace!!!
  </Text>
</Link>


            <HStack spacing={2} alignItems={"center"} mt={{base: 4, sm: 0}}>
                <Link to={"/create"}>
                <Button>
                    <PlusSquareIcon fontSize={"20px"}/>
                </Button>
                </Link>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <IoMoon/> : <LuSun size="20"/>}
                </Button>
            </HStack>
        </Flex>       
    </Container>
}

export default Navbar