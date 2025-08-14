import SuggestedContent from "@/components/ui/suggestedContent/SuggestedContent";

import PageLayout from "@/Layout/PageLayout/PageLayout";



const HomePage = () => {
  
  
 
  
  return (
    <div className="!border !border-red-500 min-[1200px]:gap-5 xl:gap-20 w-full h-screen grid grid-cols-8 !px-20  !pt-10">
      <div className="col-span-5 !border !border-blue-500">
        {/* User's Posts */}
       <button >CLick here</button>
      </div>
      <div className="col-span-3   hidden min-[1200px]:block">
        {/* Suggested Content */}
        <SuggestedContent />
      </div>
    </div>
  );
};

export default HomePage;
