"use client"

import ProjectHeader from "@/components/ProjectHeader";
import { useState } from "react";

type Props = {
  params: {
    id: string;
  };
};

const Project: React.FC<Props> = ({ params }: Props) => {
  const { id } = params;
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);
  
  
  return (
    <div>
    {/* Modal New Task */}
    <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
    {/* {activeTab === "Board" && <Board />} */}
    </div>
  );
};

export default Project;
