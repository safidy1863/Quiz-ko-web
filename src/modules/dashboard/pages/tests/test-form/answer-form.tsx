import { TAnswer, TAnswerPayload, TQuestion } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { answerFormSchema } from "./answer-form-schema";
import { useCreateMultipleAnswer } from "@/hooks";
import { Icon } from "@iconify/react";
import {
  Button,
  Checkbox,
  Form,
  FormControl,
  FormField,
  FormItem,
  Input,
} from "@/components";

type TAnswerFormProps = {
  question: TQuestion & {
    answers: TAnswer[];
  };
};

export const AnswerForm = ({ question }: TAnswerFormProps) => {
  const form = useForm<{ answers: TAnswerPayload[] }>({
    mode: "onChange",
    resolver: zodResolver(answerFormSchema),
    defaultValues: {
      answers:
        question.answers.length > 0
          ? question.answers
          : [
              {
                isCorrect: false,
                label: "",
                questionId: "",
              },
            ],
    },
  });

  const {
    control,
    formState: { isValid, isDirty },
  } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "answers",
  });

  const { mutate } = useCreateMultipleAnswer({});

  const handleSubmit = () => {
    form.handleSubmit((value) => {
      mutate({
        questionId: question.id,
        data: [
          ...value.answers.map((answer) => ({
            ...answer,
            answerId: answer.id,
          })),
        ],
      });
    })();
  };

  return (
    <div className="mt-3">
      <div className="flex gap-x-3 text-default-black">
        <Icon icon="tabler:drag-drop-2" />
        <Icon icon="tabler:caret-right-filled" />
        <h3 className="font-gilroy">{question.title}</h3>
      </div>

      <Form {...form}>
        <div className="pl-14 flex flex-col gap-y-3">
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center gap-x-3">
              <FormField
                control={form.control}
                name={`answers.${index}.isCorrect`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`answers.${index}.label`}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input type="text" placeholder="Your answer" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                onClick={() => remove(index)}
                variant="ghost"
                className="p-0 text-3xl"
              >
                <Icon
                  icon="fluent:delete-48-filled"
                  className="text-red text-opacity-25 hover:text-opacity-100 cursor-pointer"
                />
              </Button>
            </div>
          ))}

          {isValid && (
            <div className="flex gap-x-5">
              <Button
                onClick={() => {
                  append({
                    isCorrect: false,
                    label: "",
                    questionId: "",
                  });
                }}
                variant="link"
                className="w-min p-0 gap-x-1"
              >
                {" "}
                <Icon icon="ic:outline-plus" />
                More answer
              </Button>

              {isDirty && (
                <Button
                  onClick={handleSubmit}
                  variant="link"
                  className="w-min p-0 gap-x-1"
                >
                  {" "}
                  <Icon icon="material-symbols:check" />
                  Terminer{" "}
                </Button>
              )}
            </div>
          )}
        </div>
      </Form>
    </div>
  );
};
