import { TAnswerPayload, TQuestion } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { answerFormSchema } from "./answer-form-schema";
import { useCreateAnswer } from "@/hooks";
import { Icon } from "@iconify/react";

type TAnswerFormProps = {
  question: TQuestion & {
    answers: string[];
  };
};

export const AnswerForm = ({ question }: TAnswerFormProps) => {
  const form = useForm<TAnswerPayload>({
    mode: "onChange",
    resolver: zodResolver(answerFormSchema),
  });

  const { mutate } = useCreateAnswer({});

  const handleSubmit = () => {
    form.handleSubmit((value) => {
      mutate({
        ...value,
        questionId: question.id,
      });
    })();
  };

  return (
    <div>
      <div className="flex gap-x-3 text-default-black">
        <Icon icon="tabler:drag-drop-2" />
        <Icon icon="tabler:caret-right-filled" />
        <h3 className="font-gilroy">{question.title}</h3>
      </div>

      <div>

      </div>
    </div>
  );
};
