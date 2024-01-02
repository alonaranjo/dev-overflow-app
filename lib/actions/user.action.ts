"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { getUserByIdParams } from "./shared.types";

export async function getUserById(params: getUserByIdParams) {
  try {
    connectToDatabase();
    const { userId } = params;
    return await User.findOne({ clerkId: userId });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
