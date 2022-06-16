import { RadioGroup } from '@headlessui/react'

export type SurveyFormRadioGroupValue = '1' | '2' | '3' | '4' | '5'

type RadioGroupOptionProps = {
  value: SurveyFormRadioGroupValue;
}

const SurveyFormRadioGroupOption = ({ value }: RadioGroupOptionProps) => {
  return (
    <RadioGroup.Option value={value}>
      <div className='bg-green-100'>
        hi
      </div>
    </RadioGroup.Option>
  )
}

type RadioGroupProps = {
  value: SurveyFormRadioGroupValue | undefined;
  onChange: (newValue: SurveyFormRadioGroupValue) => void;
}

export const SurveyFormRadioGroup = ({ value, onChange }: RadioGroupProps) => {
  return (
    <RadioGroup value={value} onChange={onChange}>
      <RadioGroup.Label>Plan</RadioGroup.Label>
      <SurveyFormRadioGroupOption value="1" />
    </RadioGroup>
  )
}