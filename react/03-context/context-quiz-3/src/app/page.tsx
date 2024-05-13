"use client";

import { quest } from "@/api/quest";
import { Question } from "@/types/Question";
import { useState } from "react";
import { Menu } from "@/types/Menu";
import { MenuQuestionsBody, MenuQuestionsFooter } from "@/components/menus/MenuQuestions";
import { MenuConfirmBody, MenuConfirmFooter } from "@/components/menus/MenuConfirm";
import { MenuSubmitBody, MenuSubmitFooter } from "@/components/menus/MenuSubmit";
import { pageContext, PageContext } from "@/contexts/PageContext";
import { MenuInitialBody, MenuInitialFooter } from "@/components/menus/MenuInitial";
import { PageArea } from "@/components/PageArea";

export default function Home() {  
  return (
    <PageContext>
      <div className="h-screen w-screen flex justify-center">
        <PageArea />
      </div>
    </PageContext>
  );

}
