import { Instagram, Mail, Whatsapp, Youtube } from "@/assets/icons";
import { IProfile } from "@/types/profile";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileCard = ({ profile }: { profile: IProfile }) => {
  return (
    <div className="flex flex-col  py-8 px-4 sm:px-6  bg-white border-2 rounded-2xl shadow-md min-w-[20rem] ">
      <h2 className="text-xl mb-4 font-semibold font-heading">{profile.name}</h2>
      <div className=" group flex flex-row gap-4  h-full items-center">

        
        <div className="w-full flex flex-col gap-4">
          <div className="flex gap-2 items-center ">
            <Image className="w-6 h-6 p-1 rounded-full bg-green-100" src={Whatsapp} alt="whatsapp" />{" "}
            <Link href={`tel:${profile.phone}`}>{profile.phone}</Link>
          </div>

          <div className="flex gap-2 items-center   ">
            <Image className="w-6 h-6 p-1 rounded-full bg-purple-100" src={Mail} alt="email" />{" "}
            <Link href={`mailto:${profile.email} `} >{profile.email}</Link>
          </div>
        </div>

        <div className="w-full  flex flex-col gap-4">
          {profile.instagramLink && (
          <div className="flex gap-2 items-center ">
          <Image className="w-6 h-6 p-1 rounded-full bg-pink-100" src={Instagram} alt="instagram" />{" "}
              <Link href={profile.instagramLink}>{profile.instagramLink.split('/').at(-1)}</Link>
            </div>
          )}
          {profile.youtubeLink && (
          <div className="flex gap-2 items-center">
          <Image className="w-6 h-6 p-1 rounded-full bg-red-100" src={Youtube} alt="email" />{" "}
              <Link href={profile.youtubeLink}>{profile.youtubeLink.split('/').at(-1)}</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
