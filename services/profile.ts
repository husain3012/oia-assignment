import { IProfile, UserInfo } from "@/types/profile";
import { db } from "../firebase/firebase";

import {
    doc,
    getDoc,
    getDocs,
    collection,
    addDoc,
    where,
    query,
    Timestamp,
    limit,
} from "firebase/firestore";


export const getUserInfo = async (email: string): Promise<UserInfo> => {
    const userCOl = collection(db, "user");
    // get posts where example is true
    const userQuery = query(userCOl, where("email", "==", email), limit(1));
    const userSnapshot = await getDocs(userQuery);

    const exampleList = userSnapshot.docs
    console.log(exampleList)
    if (exampleList.length > 0) {
        console.log(exampleList[0].data())
    }
    return ({
        ...exampleList[0].data(), id: exampleList[0].id
    }) as UserInfo
};

export const addProfile = async (profile: IProfile) => {
    const profilesCols = collection(db, "profiles");
    const docRef = await addDoc(profilesCols, {
        ...profile,
        createdAt: Timestamp.now(),
    });
    return docRef.id;
};