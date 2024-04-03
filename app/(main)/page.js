"use client";

import BannerCard from "@/components/cards/bannerCard";
import ContainerCard from "@/components/cards/containerCard";
import SearchInput from "@/components/searchInput";
import { useSelector } from "react-redux";

export default function Home() {
  const currentUser = useSelector((state) => state.currentUser.currentUser);

  return (
    <div className="h-[calc(100vh-98px)] flex flex-col items-center justify-center gap-6 my-4">
      <div className="flex flex-col gap-4 items-center">
        <h4 className="font-bold text-2xl">Get your preferred jobs here</h4>
        <p className="font-semibold text-md">Over 1 Lakh+ Jobs to search</p>
      </div>
      <ContainerCard>
        <SearchInput />
      </ContainerCard>
      <div className="flex items-center justify-center gap-4 md:w-[60%] w-full">
        <BannerCard
          para1="Create/Update your profile"
          para2="Get better response from recruiters"
          btnText="Update"
        />
        <BannerCard
          para1="Post your Jobs"
          para2="Connect with multiple candidates"
          btnText="Post"
        />
      </div>
    </div>
  );
}
