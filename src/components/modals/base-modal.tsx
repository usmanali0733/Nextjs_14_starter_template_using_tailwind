import { mergeClasses } from '@/utils/helpers';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { FC, Fragment, ReactNode } from 'react';
import { RxCross2 } from 'react-icons/rx';

type BaseModalProps = {
  isOpen: boolean;
  onClose: () => void;
  isCloseOnBlur?: boolean;
  className?: string;
  children: ReactNode;
};

type BaseModalHeaderProps = {
  isShowBreakLine?: boolean;
  children: ReactNode;
  onClose: () => void;
};

type BaseModalContentProps = {
  children: ReactNode;
};

type BaseModalExtended = {
  Header: FC<BaseModalHeaderProps>;
  Content: FC<BaseModalContentProps>;
};

const BaseModal: FC<BaseModalProps> & BaseModalExtended = ({
  isOpen,
  onClose,
  isCloseOnBlur = false,
  className,
  children,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={isCloseOnBlur ? () => {} : onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel
                className={mergeClasses(
                  'h-[100vh] w-[100%] transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all',
                  className
                )}
              >
                {children}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

BaseModal.Header = ({ isShowBreakLine, children, onClose }) => {
  return (
    <>
      <div className="flex items-center justify-between p-6">
        <DialogTitle as="h3" className="text-lg font-medium leading-6 text-gray-900">
          {children}
        </DialogTitle>
        <RxCross2 size={20} className="cursor-pointer text-black" onClick={onClose} />
      </div>
      {isShowBreakLine && <hr />}
    </>
  );
};

BaseModal.Content = ({ children }) => {
  return children;
};

BaseModal.displayName = 'BaseModal';
BaseModal.Header.displayName = 'BaseModal.Header';
BaseModal.Content.displayName = 'BaseModal.Content';

export default BaseModal;
