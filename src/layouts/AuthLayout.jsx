import { Flex } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/Header/Header';
// import Footer from '../components/Footer/Footer';

const AuthLayout = ({ children }) => {
    return (
        <Flex w={'full'} direction={'column'}>
            <Header />
            {children}
            {/* <Footer /> */}
        </Flex>
    );
}

export default AuthLayout;
