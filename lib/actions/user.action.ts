"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import {
  CreateUserParams,
  DeleteUserParams,
  GetAllUsersParams,
  UpdateUserParams,
  getUserByIdParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";
import Question from "@/database/questions.model";

export async function getUserByIdxd(params: getUserByIdParams) {
  try {
    connectToDatabase();
    const { userId } = params;
    return await User.findOne({ clerkId: userId });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAllUsersxd(params: GetAllUsersParams) {
  try {
    connectToDatabase();
    const { page = 1, pageSize = 20, filter, searchQuery } = params;
    const users = await User.find({}).sort({ createdAt: -1 });
    return { users };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createUserxd(userData: CreateUserParams) {
  try {
    connectToDatabase();
    return await User.create(userData);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateUserxd(userData: UpdateUserParams) {
  try {
    connectToDatabase();
    const { clerkId, updateData, path } = userData;
    const userUpdated = await User.findOneAndUpdate({ clerkId }, updateData, {
      new: true,
    });
    revalidatePath(path);
    return userUpdated;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteUserxd(userData: DeleteUserParams) {
  try {
    connectToDatabase();
    const { clerkId } = userData;
    const user = await User.findOneAndDelete({ clerkId });
    if (!user) {
      throw new Error("User not found");
    }

    const userQuestionIds = await Question.find({ author: user._id }).distinct(
      "_id"
    );

    await Question.deleteMany({ author: user._id });
    return user;
    //Think next line it´s not required, will test it
    //return await User.findByIdAndDelete(user._id);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
