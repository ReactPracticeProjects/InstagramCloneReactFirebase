import { Box } from "@chakra-ui/react";
import React from "react";

const GoogleAuth = () => {
  return (
    <>
      <Box marginTop={4}>
        <div className="flex items-center justify-center gap-2">
          <img src="/google.png" className="w-[20px]" alt="" />
          <button className="!text-blue-700 cursor-pointer">
            Log in with google
          </button>
        </div>
      </Box>
    </>
  );
};

export default GoogleAuth;
