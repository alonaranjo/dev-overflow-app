import HomeFilters from "@/components/home/HomeFilters";
import QuestionCard from "@/components/home/QuestionCard";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "Cascading Deletes in SQLAlchemy?",
    tags: [
      { _id: "1", name: "SQL" },
      { _id: "2", name: "Python" },
    ],
    author: { _id: "1", name: "John Doe", picture: "johnDoe.jpg" },
    upvotes: 150000,
    views: 100000000,
    answers: [],
    createdAt: new Date("2021-09-01T12:00:00.00z"),
  },
  {
    _id: "2",
    title: "Cascading Deletes in SQL Admin?",
    tags: [
      { _id: "1", name: "MS SQL" },
      { _id: "2", name: "C#" },
    ],
    author: { _id: "1", name: "Dora Boa", picture: "Doraboa.jpg" },
    upvotes: 3,
    views: 123,
    answers: [],
    createdAt: new Date("2022-09-01T12:00:00.00z"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:items-center sm:flex-row">
        <h1 className="h1-bold text-dark100_light900">Ask Questions</h1>
        <Link href="/ask-questions" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((item) => (
            <QuestionCard
              key={item._id}
              _id={item._id}
              title={item.title}
              tags={item.tags}
              author={item.author}
              upvotes={item.upvotes}
              views={item.views}
              answers={item.answers}
              createdAt={item.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There is no question to show"
            description="Be the first to break the silence! Ask a question and kickstart the
                        discussion. our query could be the next big thing others learn from. Get
                        involded!"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
