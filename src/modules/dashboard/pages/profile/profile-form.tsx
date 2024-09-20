import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/components";
import { useForm } from "react-hook-form";

export const ProfileForm = () => {
  const form = useForm();

  return (
    <Form {...form}>
      <div className="">
        <h2 className="font-gilroy-bold text-purple-opacity-2 text-2xl">
          Profile Informations
        </h2>
        <p className="text-gray-7 font-gilroy-medium text-sm">
          Update your account's profile information and email address.
        </p>

        <div className="grid grid-cols-2 gap-x-5 max-w-[1000px] mt-3">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Mialy Rak" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="mirakmello@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-gilroy-bold text-purple-opacity-2 text-2xl">
          Security & password
        </h2>
        <p className="text-gray-7 font-gilroy-medium text-sm">
          Ensure your account is using a long, random password to stay secure.
        </p>

        <div className="grid grid-cols-2 gap-5 max-w-[1000px] mt-3">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Current password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="******************"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <br />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>New password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="New Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Confirm password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="mt-10">
        <Button className="bg-purple hover:bg-purple text-white w-32">Save</Button>
        <Button variant="outline" className="text-purple hover:bg-white w-32 border-none shadow-none">Cancel</Button>
      </div>
    </Form>
  );
};
