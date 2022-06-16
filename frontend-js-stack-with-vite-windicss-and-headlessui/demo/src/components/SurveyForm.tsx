import { useState } from "react";
import { Button } from "./Button";
import { SurveyFormRadioGroup, SurveyFormRadioGroupValue } from "./SurveyFormRadioGroup";

export const SurveyForm = () => {
  const [talkRating, setTalkRating] = useState<SurveyFormRadioGroupValue>()

  return (
    <form className="flex flex-col space-y-5">
      <SurveyFormRadioGroup value={talkRating} onChange={setTalkRating} />
      <div>
        <Button 
          variant="primary"
        >
          Submit Form
        </Button>
      </div>
    </form>
  )
}
