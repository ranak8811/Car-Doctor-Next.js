"use server";
import bcrypt from "bcrypt";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  console.log(payload);
  const userCollection = dbConnect(collectionNamesObj.userCollection);

  //   //Validation
  const { email, password } = payload;
  if (!email || !password) return { success: false };
  if (!email || !password) return null;

  const user = await userCollection.findOne({ email: payload.email });

  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10);
    payload.password = hashedPassword;
    const result = await userCollection.insertOne(payload);
    // const { acknowledged, insertedId } = result;
    // return { acknowledged, insertedId };
    result.insertedId = result.insertedId.toString();
    return result;
  }
  // return { success: false };
  return null;
};
