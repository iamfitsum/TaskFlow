import React from "react";
import ReusablePriority from "@/components/ReusablePriorityPage";
import { Priority } from "@/state/api";

const Urgent = () => {
  return <ReusablePriority priority={Priority.Low} />;
};

export default Urgent;