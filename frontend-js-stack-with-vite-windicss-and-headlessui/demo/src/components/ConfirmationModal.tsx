import { Dialog } from "@headlessui/react";
import { Button } from "./Button";

type Props = {
  value: boolean;
  onClose: () => void;
  onProceed: () => void;
  onCancel: () => void;
}

export const ConfirmationModal = (props: Props) => {
  return (
    <Dialog
      open={props.value}
      onClose={props.onClose}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-lg rounded bg-white p-5">
          <Dialog.Title className="text-2xl font-bold mb-5">
            Are you sure the information you entered is correct?
          </Dialog.Title>
          <Dialog.Description className="text-lg mb-5">
            Are you double extra certain??
          </Dialog.Description>

          <div className="flex space-x-5 justify-end">
            <Button onClick={props.onProceed} variant="primary">Proceed</Button>
            <Button onClick={props.onCancel} variant="secondary">Cancel</Button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}