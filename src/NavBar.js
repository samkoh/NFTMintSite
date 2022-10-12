import React from 'react';
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react';
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow, PopoverCloseButton, } from '@chakra-ui/react'
import Github from "./assets/social-media-icons/github_32x32.png";
import Linkedin from "./assets/social-media-icons/linkedin_32x32.png";
import Email from "./assets/social-media-icons/email_32x32.png";

const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
        <Flex justify='space-between' align='center' padding='30px' >
            {/* Left Side - Social Media Icons */}
            <Flex justify='space-between' width='40%' padding='0 75px'>
                <Link href='https://github.com/samkoh'>
                    <Image src={Github} boxSize='42px' margin='0 15px' />
                </Link>
                <Link href='https://www.linkedin.com/in/samkoha81718123/'>
                    <Image src={Linkedin} boxSize='42px' margin='0 15px' />
                </Link>
                <Link href='mailto:samkoh0615@gmail.com?subject=I would like to reach to you'>
                    <Image src={Email} boxSize='42px' margin='0 15px' />
                </Link>
            </Flex>

            {/* Right Side - Sections and Connect */}
            <Flex justify='space-around' align='center' width='40%' padding='30px 30px 30px 30px' >
                {/* <Box margin='0 15px' >About</Box> */}

                <Popover>
                    <PopoverTrigger>
                        <Box margin='0 15px' >About</Box>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>About Us</PopoverHeader>
                        <PopoverBody>As a fan of transformer, I get the idea and created a OptimusPunkNFT where by user can mint it as your own collection.</PopoverBody>
                    </PopoverContent>
                </Popover>

                <Spacer />
                <Box margin='0 15px' >Mint</Box>
                <Spacer />
                {/* <Box margin='0 15px' >Team</Box>
                <Spacer /> */}


                {/* Connect */}
                {isConnected ? (
                    <Box>Connected</Box>
                ) : (
                    <Button
                        backgroundColor='#002E94' //D6517D
                        borderRadius='5px'
                        boxShadow='0px 2px 2px 1px #0F0F0F'
                        color='white'
                        cursor='pointer'
                        fontFamily='inherit'
                        padding='15px'
                        margin='0 15px'
                        onClick={connectAccount}>
                        Connect
                    </Button>
                )}

            </Flex>



        </Flex>
    );
};

export default NavBar;