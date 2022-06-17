import { FormEvent, useState } from "react";
import { Button } from "./Button";
import { ConfirmationModal } from "./ConfirmationModal";
import {
  SurveyFormRadioGroup,
  SurveyFormRadioGroupValue,
} from "./SurveyFormRadioGroup";

export const SurveyForm = () => {
  const [talkRating, setTalkRating] = useState<SurveyFormRadioGroupValue>();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setModalIsOpen(true)
  }

  const onProceed = () => {
    setModalIsOpen(false)
    setSubmitted(true)
  }

  return (
    <form 
      className="flex flex-col space-y-5"
      onSubmit={onSubmit}
    >
      <ConfirmationModal 
        value={modalIsOpen}
        onCancel={() => setModalIsOpen(false)}
        onClose={() => setModalIsOpen(false)}
        onProceed={onProceed}
      />
      <SurveyFormRadioGroup value={talkRating} onChange={setTalkRating} />
      <div>
        <Button variant="primary">Submit Form</Button>
      </div>
      {submitted && <p className="mt-5">Thank you for your submission!</p>}
    </form>
  );
};
