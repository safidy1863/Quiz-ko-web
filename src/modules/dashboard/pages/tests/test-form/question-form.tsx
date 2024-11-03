import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { questionFormSchema } from "./question-form-schema";
import { EQuestionType, TQuestionPayload } from "@/types";
import { useCreateQuestion } from "@/hooks";

type TQuestionFormProps = {
  subjectId?: string;
};

export const QuestionForm = ({ subjectId }: TQuestionFormProps) => {
  const form = useForm<TQuestionPayload>({
    mode: "onChange",
    resolver: zodResolver(questionFormSchema),
  });

  const { mutate } = useCreateQuestion({});

  const handleSubmit = () => {
    form.handleSubmit((value) => {        
      mutate({
        ...value,
        subjectId,
      });
    })();
  };

  return (
    <Form {...form}>
      <div className="flex flex-col gap-y-1">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="w-full">
              <Select onValueChange={field.onChange} defaultValue={field.value ?? EQuestionType.SINGLE}>
                <FormControl>
                  <SelectTrigger className="w-full mt-3 flex flex-row">
                    <SelectValue
                      className="flex flex-row"
                      placeholder="Add question for the test"
                    />
                  </SelectTrigger>
                </FormControl>

                <SelectContent className="flex flex-row">
                  <SelectItem value={EQuestionType.MULTIPLE} className="flex flex-row">
                    <Icon
                      icon="mdi:checkbox-multiple-marked-circle-outline"
                      className="text-purple text-2xl"
                    />
                    <span>Multiple choice</span>
                  </SelectItem>
                  <SelectItem value={EQuestionType.SINGLE} className="flex flex-row">
                    <Icon
                      icon="mage:note-with-text"
                      className="text-purple text-2xl"
                    />
                    <span>Label</span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input type="text" placeholder="Titre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  type="text"
                  placeholder="Description de la question"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="point"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input type="number" placeholder="Point" min={0} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button onClick={handleSubmit}>Ajouter</Button>
      </div>
    </Form>
  );
};
