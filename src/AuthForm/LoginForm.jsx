import React from "react";
import { useForm } from "react-hook-form";
import { Button, Field, Input, Box } from "@chakra-ui/react";
import { PasswordInput } from "@/components/ui/password-input";
import useLoginWithEmailAndPassoword from "@/hooks/useLoginWithEmailAndPassoword";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const [handleLogin, user, loginloading, loginerror] =
    useLoginWithEmailAndPassoword();

  const onSubmit = async (data) => {
    const { email, password } = data;
    await handleLogin(email, password);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        </div>
        <Box marginTop={4}>
          <Button type="submit" colorPalette="blue" width={"full"}>
            Log In
          </Button>
        </Box>
      </form>
    </>
  );
};

export default LoginForm;
