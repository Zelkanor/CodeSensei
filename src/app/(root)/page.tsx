import React from "react";

import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import { auth, signOut } from "@/lib/auth";

const Home = async () => {
  const session = await auth();
  console.log("Session:", session);
  return (
    <div>
      <h1 className="text-3xl font-inter">Welcome to Next.js</h1>
      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.LOGIN });
        }}
      >
        <Button type="submit">Log Out</Button>
      </form>
    </div>
  );
};

export default Home;
