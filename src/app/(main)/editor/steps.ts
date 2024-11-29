import GeneralInfoForm from "./_components/forms/GeneralInfoForm";
import PersonalInfoForm from "./_components/forms/PersonalInfoForm";

export const steps: {
  title: string;
  component: React.ComponentType;
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
];
