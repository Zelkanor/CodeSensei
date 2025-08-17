import Link from "next/link";
import React from "react";

import HomeFilter from "@/components/filter/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
const questions = [
  {
    _id: "1",
    title: "How to implement a responsive design?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: [
      {
        _id: "1",
        name: "css",
        questions: 120,
        showCount: true,
        compact: false,
      },
      {
        _id: "2",
        name: "html",
        questions: 80,
        showCount: true,
        compact: false,
      },
    ],
    author: { _id: "1", name: "John Doe" },
    createdAt: new Date().toISOString(),
    upvotes: 10,
    downvotes: 2,
    answers: 5,
    views: 100,
  },
  {
    _id: "2",
    title: "How to implement a responsive design?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: [
      {
        _id: "1",
        name: "css",
        questions: 120,
        showCount: true,
        compact: false,
      },
      {
        _id: "2",
        name: "html",
        questions: 80,
        showCount: true,
        compact: false,
      },
    ],
    author: { _id: "1", name: "John Doe" },
    createdAt: new Date().toISOString(),
    upvotes: 10,
    downvotes: 2,
    answers: 5,
    views: 100,
  },
];
interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "", filter = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <>
      <section
        className="flex w-full flex-col-reverse sm:flex-row
      justify-between gap-4 sm:items-center"
      >
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          className="primary-gradient min-h-[46px]
        px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION} className="max-sm:w-full">
            Ask a Question
          </Link>
        </Button>
      </section>
      <section className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search for questions..."
          otherClasses="flex-1"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <h1 key={question._id}>{question.title}</h1>
        ))}
      </div>
    </>
  );
};

export default Home;
