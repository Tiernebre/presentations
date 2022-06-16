import { useState } from "react";
import { SurveyFormRadioGroup, SurveyFormRadioGroupValue } from "./SurveyFormRadioGroup";

export const SurveyForm = () => {
  const [talkRating, setTalkRating] = useState<SurveyFormRadioGroupValue>()

  return (
    <form>
      <label>On a rating from 1-5, how would you rate this talk?</label>
      <SurveyFormRadioGroup value={talkRating} onChange={setTalkRating} />
    </form>
  )
}
