import { RadioGroup } from '@headlessui/react'
import classNames from 'classnames'

export type SurveyFormRadioGroupValue = '1' | '2' | '3' | '4' | '5'

type RadioGroupOptionProps = {
  value: SurveyFormRadioGroupValue;
}

const SurveyFormRadioGroupOption = ({ value }: RadioGroupOptionProps) => {
  return (
    <RadioGroup.Option value={value}>
      {({ checked }) => (
        <div className={classNames('bg-green-100 hover:bg-green-50 w-30 h-15 rounded-lg flex items-center justify-center font-bold cursor-pointer', {
          'bg-green-400': checked
        })}>
          {value}
        </div>
      )}
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
      <RadioGroup.Label>On a rating from 1-5, how would you rate this talk?</RadioGroup.Label>
      <div className="flex items-center justify-center space-x-5 mt-5">
        <SurveyFormRadioGroupOption value="1" />
        <SurveyFormRadioGroupOption value="2" />
        <SurveyFormRadioGroupOption value="3" />
        <SurveyFormRadioGroupOption value="4" />
        <SurveyFormRadioGroupOption value="5" />
      </div>
    </RadioGroup>
  )
}