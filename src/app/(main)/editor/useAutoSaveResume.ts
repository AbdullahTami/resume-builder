import useDebounce from "@/hooks/useDebounce";
import { ResumeValues } from "@/lib/validation";
import { useEffect, useState } from "react";

export default function useAutoSaveResume(resumeData: ResumeValues) {
  const debounceResumeData = useDebounce(resumeData, 1500);

  const [lastSavedData, setLastSaveData] = useState(
    structuredClone(resumeData),
  );

  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    async function save() {
      setIsSaving(true);
      await new Promise((res) => setTimeout(res, 1500));
      setLastSaveData(structuredClone(debounceResumeData));
      setIsSaving(false);
    }

    const hasUnsavedChanges =
      JSON.stringify(debounceResumeData) !== JSON.stringify(lastSavedData);

    if (hasUnsavedChanges && debounceResumeData && !isSaving) {
      save();
    }
  }, [debounceResumeData, isSaving, lastSavedData]);

  return {
    isSaving,
    hasUnsavedChanges:
      JSON.stringify(resumeData) !== JSON.stringify(lastSavedData),
  };
}
