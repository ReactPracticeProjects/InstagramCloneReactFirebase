import { VStack, Box, Center, Text, Flex } from "@chakra-ui/react";

import React, { useState } from "react";

import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
  const [isLogin, setLogin] = useState(true);

  return (
    <VStack>
      <Box borderWidth="1px" rounded="sm" padding={5}>
        <div className="flex items-center justify-center">
          <img src="/logo.png" className="w-[60%]" alt="" />
        </div>
        {isLogin ? <LoginForm /> : <SignUpForm />}
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          gap={1}
          my={4}
          w={"full"}
        >
          <Box h="1px" bg={"gray.400"} flex={2}></Box>
          <Text>OR</Text>
          <Box h="1px" bg={"gray.400"} flex={2}></Box>
        </Flex>

        <GoogleAuth prefix={isLogin ? "Log In" : "Sign In"} />
      </Box>

      <Box borderWidth="1px" rounded="sm" width="full" padding={5}>
        <Center>
          {isLogin ? (
            <p>
              Don't Have an Account?{" "}
              <button
                className="cursor-pointer !text-blue-700 underline"
                onClick={() => setLogin(!isLogin)}
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Have an account ?{" "}
              <button
                className="cursor-pointer !text-blue-700 underline"
                onClick={() => setLogin(!isLogin)}
              >
                Log In
              </button>
            </p>
          )}
        </Center>
      </Box>
    </VStack>
  );
};

export default AuthForm;
