import { EditorFormProps } from "@/lib/types";
import GeneralInfoForm from "./_components/forms/GeneralInfoForm";
import PersonalInfoForm from "./_components/forms/PersonalInfoForm";
import WorkExperienceForm from "./_components/forms/WorkExperienceForm";
import EducationForm from "./_components/forms/EducationForm";

export const steps: {
  title: string;
  component: React.ComponentType<EditorFormProps>;
  key: string;
}[] = [
  {
    title: "General info",
    component: GeneralInfoForm,
    key: "general-info",
  },
  {
    title: "Personal info",
    component: PersonalInfoForm,
    key: "personal-info",
  },
  {
    title: "Work experience",
    component: WorkExperienceForm,
    key: "work-experience",
  },
  {
    title: "Education",
    component: EducationForm,
    key: "education",
  },
];
