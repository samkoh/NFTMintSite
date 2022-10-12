import { useState } from 'react';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import { ethers, BigNumber } from 'ethers';
import optimusPunksNFT from './OptimusPunksNFT.json';

const optimusPunksNFTAddress = "0x46f9E9DdfC7183D6e1362C071c26CD931da850D5";

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                optimusPunksNFTAddress,
                optimusPunksNFT.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.01 * mintAmount).toString()),
                });
                console.log('response: ', response);
            } catch (err) {
                console.log('error: ', err);
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    };

    return (        
        <Flex justify='center' aligh='center' height='100vh' paddingBottom='150px' >
            <Box width='520px'>
                <div>
                    <Text fontSize='48px' textShadow='0 5px #000000' >Optimus Punks 2049</Text>
                    <Text
                        fontSize='30px'
                        letterSpacing='-5.5%'
                        fontFamily='VT323'
                        textShadow='0 2px 2px #000000'
                    >
                        The fate of humanity is at stake when two races of robots, the good Autobots and the villainous Decepticons, bring their war to Earth.
                    </Text>
                </div>

                {isConnected ? (
                    <div>
                        <Flex align='center' justify='center' >
                            <Button
                                backgroundColor='#002E94' //D6517D
                                borderRadius='5px'
                                boxShadow='0px 2px 2px 1px #0f0f0f'
                                color='white'
                                cursor='pointer'
                                fontFamily='inherit'
                                padding='15px'
                                marginTop='10px'
                                onClick={handleDecrement}
                            >
                                -
                            </Button>
                            <Input
                                readOnly
                                fontFamily='inherit'
                                width='100px'
                                height='40px'
                                textAlign='center'
                                paddingLeft='19px'
                                marginTop='10px'
                                type='number'
                                value={mintAmount} />
                            <Button
                                backgroundColor='#002E94' //D6517D
                                borderRadius='5px'
                                boxShadow='0px 2px 2px 1px #0f0f0f'
                                color='white'
                                cursor='pointer'
                                fontFamily='inherit'
                                padding='15px'
                                marginTop='10px'
                                onClick={handleIncrement}
                            >
                                +
                            </Button>
                        </Flex>
                        <Button
                            backgroundColor='#002E94' //D6517D
                            borderRadius='5px'
                            boxShadow='0px 2px 2px 1px #0f0f0f'
                            color='white'
                            cursor='pointer'
                            fontFamily='inherit'
                            padding='15px'
                            marginTop='10px'
                            onClick={handleMint}
                        >
                            Mint Now
                        </Button>
                    </div>
                ) : (
                    <Text
                        marginTop='70px'
                        fontSize='30px'
                        letterSpacing='-5.5%'
                        fontFamily='VT323'
                        textShadow='0 3px #000000'
                        color='#C4DDFF'
                    >
                        You must be connected to Mint.
                    </Text>
                )}
            </Box>
        </Flex>
          
    );
};

export default MainMint;