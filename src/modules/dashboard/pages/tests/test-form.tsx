import {
  Badge,
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components";
import { TTest } from "@/types";
import { Icon } from "@iconify/react";

type TTestFormProps = {
  test: TTest;
};

export const TestForm = ({ test }: TTestFormProps) => {
  const { name, assign, duration, question } = test;

  return (
    <div>
      <div className="flex gap-x-20">
        <div className="flex gap-x-2 ">
          <Icon icon="ph:timer" className="text-xl text-purple" />
          <span>Duration</span>
          {!!duration ? (
            <Badge
              variant="outline"
              className="bg-white  rounded-xl font-gilroy-medium text-xs gap-x-2"
            >
              {duration}
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
            {assign?.map((item, index) => (
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

      <Select>
        <SelectTrigger className="w-full mt-3 flex flex-row">
          <SelectValue className="flex flex-row" placeholder="Add question for the test" />
        </SelectTrigger>
        <SelectContent className="flex flex-row">
          <SelectItem value="multiple" className="flex flex-row">
            <Icon
              icon="mdi:checkbox-multiple-marked-circle-outline"
              className="text-purple text-2xl"
            />
            <span>Multiple choice</span>
          </SelectItem>
          <SelectItem value="label" className="flex flex-row">
            <Icon
              icon="mage:note-with-text"
              className="text-purple text-2xl"
            />
            <span>Label</span>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
