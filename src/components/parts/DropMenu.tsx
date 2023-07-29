import React, { FC, PropsWithChildren, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface Props {
  title: string | undefined;
  chevron: boolean;
  width: number;
}
const DropMenu: FC<PropsWithChildren<Props>> = ({
  children,
  title,
  chevron,
  width,
}) => {
  return (
    <div className="z-10">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md  py-2 text-sm text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <span className="text-white overflow-hidden text-ellipsis line-clamp-1">
              {title}
            </span>
            {chevron && (
              <ChevronDownIcon
                className="ml-0.5 -mr-1 h-5 w-5 text-white hover:text-white"
                aria-hidden="true"
              />
            )}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`w-${width} mt-2 absolute origin-top-right divide-y divide-slate-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          >
            <div className="px-1 py-1 ">{children}</div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default DropMenu;
