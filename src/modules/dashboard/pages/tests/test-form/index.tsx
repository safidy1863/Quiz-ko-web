import { Badge, Button } from "@/components";
import { TTest } from "@/types";
import { Icon } from "@iconify/react";
import { QuestionForm } from "./question-form";
import { useGetTestById } from "@/hooks";
import { AnswerForm } from "./answer-form";

type TTestFormProps = {
  test?: TTest;
};

export const TestForm = ({ test }: TTestFormProps) => {
  const { data } = useGetTestById({ testId: test?.id ?? "" });

  return (
    <div>
      <div className="flex gap-x-20">
        <div className="flex gap-x-2 ">
          <Icon icon="ph:timer" className="text-xl text-purple" />
          <span>Duration</span>
          {data?.duration ? (
            <Badge
              variant="outline"
              className="bg-white  rounded-xl font-gilroy-medium text-xs gap-x-2"
            >
              {data?.duration}
              <Button className="p-0 h-4 w-4 rounded-full bg-gray-5 text-gray-1">
                <Icon icon="material-symbols:close" className="text-xs" />
              </Button>
            </Badge>
          ) : (
            <Button className="p-0 h-6 w-6 rounded-full bg-gray-5 text-gray-1">
              <Icon icon="ic:baseline-add" className="text-base" />
            </Button>
          )}
        </div>

        <div className="flex gap-x-2">
          <Icon
            icon="fluent:people-team-24-regular"
            className="text-xl text-purple"
          />
          <span>Assign to</span>
          <div className="flex gap-x-1 items-center">
            {test?.assign?.map((item, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-white font-gilroy-medium rounded-xl text-xs gap-x-2"
              >
                <span className="">Level {item}</span>
                <Button className="p-0 h-4 w-4 rounded-full bg-gray-5 text-gray-1">
                  <Icon icon="material-symbols:close" className="text-xs" />
                </Button>
              </Badge>
            ))}

            <Button className="p-0 h-6 w-6 rounded-full bg-gray-5 text-gray-1">
              <Icon icon="ic:baseline-add" className="text-base" />
            </Button>
          </div>
        </div>
      </div>

      <p className="font-gilroy-bold mt-5">Add question</p>
      <div className="flex flex-col gap-y-5">
        {data?.subjectQuestion.map((questions) => (
          <AnswerForm question={questions.question} />
        ))}
        <QuestionForm subjectId={test?.subjectId} />
      </div>
    </div>
  );
};
