import React from "react";
import { requireUser } from "../data/user/require-user";

const layout = async ({ children }: { children: React.ReactNode }) => {
  await requireUser();
  return <div>{children}</div>;
};

export default layout;
