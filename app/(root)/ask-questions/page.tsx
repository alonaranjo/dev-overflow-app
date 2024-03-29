import Question from "@/components/Forms/Question";
import { getUserById } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";

const AskQuestions = async () => {
  //const { userId } = auth();
  const userId = "123456789";
  if (!userId) redirect("/sign-in");
  const mongoUser = await getUserById({ userId });
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
      <div className="mt-9">
        <Question mongoUserId={JSON.stringify(mongoUser._id)} />
      </div>
    </div>
  );
};

export default AskQuestions;
