import {
  Button,
  VStack,
  Field,
  Input,
  Box,
  Center,
  Text,
  Flex,
} from "@chakra-ui/react";
import {
  PasswordInput,
  PasswordStrengthMeter,
} from "@/components/ui/password-input";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setLogin] = useState(false);
  const { handleSubmit, register, setValue } = useForm();
  const navigate = useNavigate();

  const handleAuth = (authData) => {
    console.log(authData);
    navigate("/");
  };

  return (
    <VStack>
      <Box borderWidth="1px" rounded="sm" padding={5}>
        <div className="flex items-center justify-center">
          <img src="/logo.png" className="w-[60%]" alt="" />
        </div>
        <form onSubmit={handleSubmit(handleAuth)}>
          <div className="grid gap-4">
            <Field.Root required>
              <Input
                {...register("email")}
                type="email"
                placeholder="Enter your email"
              />
            </Field.Root>

            <Field.Root required>
              <PasswordInput
                {...register("password")}
                placeholder="Enter your password"
              />
            </Field.Root>
            {isLogin ? (
              <Field.Root required>
                <PasswordInput
                  {...register("confirmPassword")}
                  placeholder="Confirm password"
                />
              </Field.Root>
            ) : (
              ""
            )}
          </div>
          <Box marginTop={4}>
            <Button type="submit" colorPalette="blue" width={"full"}>
              {isLogin ? "Sign Up" : "Log In"}
            </Button>
          </Box>
        </form>
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

        <Box marginTop={4}>
          <div className="flex items-center justify-center gap-2">
            <img src="/google.png" className="w-[20px]" alt="" />
            <button className="!text-blue-700 cursor-pointer">
              Log in with google
            </button>
          </div>
        </Box>
      </Box>

      <Box borderWidth="1px" rounded="sm" width="full" padding={5}>
        <Center>
          {isLogin ? (
            <p>
              Have an account ?{" "}
              <button
                className="cursor-pointer !text-blue-700 underline"
                onClick={() => setLogin(!isLogin)}
              >
                Log In
              </button>
            </p>
          ) : (
            <p>
              Don't Have an Account?{" "}
              <button
                className="cursor-pointer !text-blue-700 underline"
                onClick={() => setLogin(!isLogin)}
              >
                Sign Up
              </button>
            </p>
          )}
        </Center>
      </Box>
    </VStack>
  );
};

export default AuthForm;
