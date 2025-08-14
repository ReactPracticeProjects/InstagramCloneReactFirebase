import { auth } from "@/firebase/firebaseConfig";
import useSignOutHandle from "@/hooks/useSignOutHandle";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { RiLogoutBoxLine } from "react-icons/ri";

const SuggestedHeader = () => {
  const [user, , ] = useAuthState(auth);
  const [handleSignOut, , ] = useSignOutHandle();
  return (
    <div>
      <div className="grid grid-cols-6 gap-5 items-center !p-2">
        <div className="col-span-1">
          <div className="lg:w-16 lg:h-16  xl:w-18 xl:h-18 rounded-full overflow-hidden ">
            <img src={user?.photoURL} className="w-full h-full" alt="" />
          </div>
        </div>
        <div className="!text-sm col-span-3 !px-2  !ml-5 ">
          <h1 className="truncate">{user?.displayName}</h1>
          <h1 className="truncate !text-gray-500">{user?.email}</h1>
        </div>
        <button onClick={handleSignOut} className="!text-sm flex items-center gap-2 col-span-2 cursor-pointer !text-blue-500 "><RiLogoutBoxLine/>Logout</button>
      </div>
    </div>
  );
};

export default SuggestedHeader;
