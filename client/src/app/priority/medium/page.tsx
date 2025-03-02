import React from "react";
import ReusablePriority from "@/components/ReusablePriority";
import { Priority } from "@/state/api";

const Urgent = () => {
  return <ReusablePriority priority={Priority.Medium} />;
};

export default Urgent;