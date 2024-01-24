"use client";

import { FC, Fragment, PropsWithChildren, useState } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface Props {
  children: React.ReactNode;
}
const OverlayContainer: FC<PropsWithChildren<Props>> = ({ children }) => {
  let [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  function onClose() {
    setIsOpen(false);
    router.back();
  }
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50 w-screen pr-[15px]"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="transition ease-out duration-1000 transform"
              enterFrom="opacity-0 translate-y-16"
              enterTo="opacity-100 translate-y-0"
            >
              <Dialog.Panel
                style={{ maxHeight: "90vh" }}
                className="mt-10 w-full max-w-6xl"
              >
                <div className="relative flex flex-col rounded-xl ">
                  <div
                    className="min-h-screen w-full px-4 md:px-6 py-10 overflow-y-auto
                    before:absolute before:-top-10 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element-dark.svg')] before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2"
                  >
                    {children}
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="mx-auto p-1.5 bg-white/20 hover:scale-110 transition-all flex justify-center items-center hover:bg-white/40 rounded-full stroke-2"
                >
                  <XMarkIcon className="w-7 h-7" />
                </button>
                <div className="mt-40 sr-only" />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default OverlayContainer;
