"use server";

import Question from "@/database/questions.model";
import { connectToDatabase } from "../mongoose";
import { ViewQuestionParams } from "./shared.types";
import Interaction from "@/database/interaction.model";

export async function viewQuestion(params: ViewQuestionParams) {
  try {
    connectToDatabase();
    const { questionId, userId } = params;
    await Question.findByIdAndUpdate(questionId, { $inc: { views: 1 } });
    if (userId) {
      const data = {
        user: userId,
        action: "view",
        question: questionId,
      };
      const existingInteraction = await Interaction.findOne(data);
      if (existingInteraction) {
        return console.log("User has already viewed.");
      }
      await Interaction.create(data);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
