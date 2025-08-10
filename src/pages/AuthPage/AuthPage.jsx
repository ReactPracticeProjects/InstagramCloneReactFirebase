import AuthForm from '@/AuthForm/AuthForm'
import { Box, Center, Container, Flex, Image} from '@chakra-ui/react'
import React from 'react'

const AuthPage = () => {
  return (
     <div className='h-screen'>
        <div className=' flex  justify-center items-center h-full'>
            <div className="left hidden sm:flex">
                  <div>
                    <img src="/auth.png" alt="" />
                  </div>
            </div>
            <div className="right">
                   <div>
                    <AuthForm/>
                   </div>
                   <Box marginTop={4}>
                    <Center>
                        <p>Get The App</p>
                    </Center>
                    <Flex gap={4} marginTop={2} justifyContent={"center"}>
                        <Image h={10}  src="/playstore.png"></Image>
                        <Image h={10}  src="/microsoft.png"></Image>
                    </Flex>
                   </Box>
            </div>
        </div>
      
     </div>
  )
}

export default AuthPage
