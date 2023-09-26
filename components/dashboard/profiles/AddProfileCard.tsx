"use client";
import { Plus } from "@/assets/icons";
import Image from "next/image";
import React, { useState } from "react";
import AddProfileModal from "./AddProfileModal";
import { IProfile } from "@/types/profile";

const AddProfileCard = ({
  userProfiles,
  setUserProfiles,
}: {
  userProfiles: IProfile[];
  setUserProfiles: React.Dispatch<React.SetStateAction<IProfile[]>>;
}) => {
  const [openModal, setOpenModal] = useState(false);
  const onSubmit = (newProfile: IProfile) => {
    console.log(newProfile)
    setUserProfiles((prev) => [ ...prev, newProfile]);
    setOpenModal(false);
  };

  
  return (
    <>
      <div className="flex items-center justify-center py-4  w-80   bg-white border-2 rounded-2xl shadow-md  m-2 ml-0 h-56">
        <div
          onClick={() => setOpenModal(true)}
          className="cursor-pointer group flex flex-col gap-4"
        >
          <div className="rounded-full p-3 bg-gray-100 group-hover:bg-gray-200 transition-colors">
            <Image src={Plus} alt="Add Nea" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500">Add Profile</h3>
          </div>
        </div>
      </div>
      {openModal && (
        <AddProfileModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          onOkHandler={onSubmit}
        />
      )}
    </>
  );
};

export default AddProfileCard;
