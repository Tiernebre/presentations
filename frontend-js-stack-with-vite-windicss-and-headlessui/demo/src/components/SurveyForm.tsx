import { useState } from "react";
import { SurveyFormRadioGroup, SurveyFormRadioGroupValue } from "./SurveyFormRadioGroup";

export const SurveyForm = () => {
  const [talkRating, setTalkRating] = useState<SurveyFormRadioGroupValue>()

  return (
    <form>
      <SurveyFormRadioGroup value={talkRating} onChange={setTalkRating} />
    </form>
  )
}
