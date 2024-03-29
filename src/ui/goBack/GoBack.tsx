"use client";

import React from "react";
import { ArrowBigLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const GoBack = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div>
      <ArrowBigLeft onClick={goBack} className="cursor:pointer" />
    </div>
  );
};

export default GoBack;
