import Image from "next/image";
import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/routes";

import TagCard from "../cards/TagCard";

const hotQuestions = [
  // Example questions, replace with actual data
  { _id: "1", title: "How to implement a responsive design?" },
  { _id: "2", title: "What are the best practices for React?" },
  { _id: "3", title: "How to optimize performance in Next.js?" },
];

const popularTags = [
  { _id: "1", name: "react", questions: 120, showCount: true, compact: false },
  { _id: "2", name: "next.js", questions: 80, showCount: true, compact: false },
  {
    _id: "3",
    name: "javaScript",
    questions: 200,
    showCount: true,
    compact: false,
  },
  {
    _id: "4",
    name: "react-query",
    questions: 150,
    showCount: true,
    compact: false,
  },
];

const RightSidebar = () => {
  return (
    <section
      className="pt-36 custom-scrollbar background-light900_dark200
    light-border sticky right-0 top-0 h-screen flex w-[350px] flex-col gap-6
    overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden"
    >
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              href={ROUTES.PROFILE(_id)}
              key={_id}
              className="flex cursor-pointer items-center
              justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{title}</p>
              <Image
                src="/icons/chevron-right.svg"
                alt="Chevron"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
