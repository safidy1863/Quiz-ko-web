import { Avatar, AvatarFallback, AvatarImage, Button } from "@/components";
import { Icon } from "@iconify/react";
import { ProfileForm } from "./profile-form";

export const Profile = () => {
  return (
    <div className=" flex gap-x-10 bg-white p-5 pb-10">
      <div className="">
        <div className="h-40 w-40 relative">
          <Avatar className="h-40 w-40">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Button className="absolute right-2.5 bottom-3 h-7 w-7 p-1 rounded-full bg-purple hover:bg-purple">
            <Icon icon="pepicons-pencil:photo-camera" className="text-xl" />
            <label
              htmlFor="avatar"
              className="absolute h-full w-full cursor-pointer"
            ></label>
            <input id="avatar" type="file" className="hidden" />
          </Button>
        </div>

        <div className="text-center mt-3">
          <h3 className="font-gilroy-medium text-xl text-default-black">
            Mialy Rak
          </h3>
          <p className="font-gilroy-medium text-gray-6 text-sm">#ID25858</p>
        </div>
      </div>

      <div className="flex-1 ">
        <ProfileForm />
      </div>
    </div>
  );
};
