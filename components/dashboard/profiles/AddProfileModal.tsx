"use client";
import Input from "@/components/Input";
import { IProfile } from "@/types/profile";
import React, { useState } from "react";

const AddProfileModal = ({
  openModal,
  setOpenModal,
  onOkHandler,
}: {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  onOkHandler: (newProfile: IProfile) => void;
}) => {
  const [activeTab, setActiveTab] = useState<"basic" | "social">("basic");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");


  const validate = () =>{
    let emailRgx = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if(name.length>3 && emailRgx.test(email) && phone.length>=10) return true;
    return false;
  }

  const handleSubmit = async () => {
    if(!validate()) return false;
    onOkHandler({
      name,
      email,
      phone,
      youtubeLink,
      instagramLink,
      createdOn: new Date(),
    });
  };


  return (
    <div className="fixed flex items-center justify-center w-screen h-screen bg-black bg-opacity-70 left-0 top-0">
      <div className="bg-white rounded-lg p-4 flex flex-col max-w-md ">
        <div className="mb-6">
          <h1 className="text-lg font-heading font-bold ">Add New Profile</h1>
        </div>

        <div className="w-full flex item-center font-heading gap-4 font-semibold text-sm mb-4">
          <h2
          onClick={()=>setActiveTab('basic')}
            className={`px-12 py-2 border-b-2 cursor-pointer transition-all ${
              activeTab == "basic" ? "border-blue-bg" : ""
            } text-center w-32 sm:w-56`}
          >
            Basic
          </h2>
          <h2
            className={`px-12 py-2 border-b-2 cursor-pointer transition-all ${
              activeTab == "social" ? "border-blue-bg" : ""
            } text-center w-32 sm:w-56`}
          >
            Social
          </h2>
        </div>

        <form className="flex flex-col gap-3">
          {activeTab == "basic" ? (
            <>
              <Input
                label="Enter Name*"
                value={name}
                onChange={setName}
                placeholder="Eg. John Dow"
              />
              <Input
                label="Enter Email*"
                placeholder="Eg. johndoe@email.com"
                type="email"
                value={email}
                onChange={setEmail}
              />
              <Input
                label="Enter Phone*"
                placeholder="+91 981XXX313"
                type="tel"
                value={phone}
                onChange={setPhone}
              />
            </>
          ) : (
            <>
              <Input
                label="Instagram Link"
                placeholder="instagram.com/username"
                value={instagramLink}
                onChange={setInstagramLink}
              />
              <Input
                label="Youtube Link"
                placeholder="Eg. youtube.com/username"
                value={youtubeLink}
                onChange={setYoutubeLink}
              />
            </>
          )}
        </form>

        <div className="flex justify-end items-center gap-3 text-sm">
          {activeTab == "basic" ? (
            <>
              <button
                onClick={() => setOpenModal && setOpenModal(false)}
                className="bg-gray-100 border-2 py-1 px-2 rounded-md "
              >
                Cancel
              </button>
              <button
                onClick={() => validate() && setActiveTab("social")}
                className="bg-blue-bg border-2 border-blue-bg py-1 px-2 rounded-md text-white"
              >
                Next
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setActiveTab("basic")}
                className="bg-gray-100 border-2 py-1 px-2 rounded-md "
              >
                Back
              </button>
              <button
                onClick={() => handleSubmit()}
                className="bg-blue-bg border-2 border-blue-bg py-1 px-2 rounded-md text-white"
              >
                Done
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddProfileModal;
