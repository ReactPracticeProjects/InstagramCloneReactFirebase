import React from "react";
import { Button, Field, Input, Box } from "@chakra-ui/react";
import { PasswordInput } from "@/components/ui/password-input";
import { useForm } from "react-hook-form";
import useSignUpWithEmailAndPassword from "@/hooks/useSignUpWithEmailAndPassword";

const SignUpForm = () => {
  const { register, handleSubmit } = useForm();
  const [handleSingUp, , loading] = useSignUpWithEmailAndPassword();
  

  const handleAuth = async (signupData) => {
    const { email, password, username, fullName } = signupData;
    await handleSingUp(email, password, username, fullName);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleAuth)}>
        <div className="grid gap-4">
          <Field.Root required>
            <Input
              {...register("fullName")}
              type="text"
              placeholder="Enter your full name"
            />
          </Field.Root>
          <Field.Root required>
            <Input
              {...register("username")}
              type="text"
              placeholder="Enter your username"
            />
          </Field.Root>
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
            {loading ? "Creating Account..." : "Sign up"}
          </Button>
        </Box>
      </form>
    </>
  );
};

export default SignUpForm;
