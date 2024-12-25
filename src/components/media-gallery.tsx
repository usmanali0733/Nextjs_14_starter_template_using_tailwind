'use client';
import doc from '@/assets/images/doc.svg';
import headphone from '@/assets/logos/logo.png';
import { Option, OptionWithIcon } from '@/types';
import { AttachmentTypes } from '@/utils/constants';
import { mergeClasses } from '@/utils/helpers';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { RxCaretDown } from 'react-icons/rx';
import DetailsDropdown from './details-dropdown';

export type MediaList = {
  url: string;
  name: string;
  date: string;
  thumbnail: string;
  options: OptionWithIcon[];
  type: AttachmentTypes;
};

type MediaGalleryProps = {
  title: string;
  mediaList: MediaList[];
  onClick: (option: Option, index: number) => void;
  defaultOpen?: boolean;
};

const MediaGallery: React.FC<MediaGalleryProps> = ({
  title,
  mediaList,
  onClick,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

  const toggleIsOpen = () => setIsOpen((prev) => !prev);

  return (
    <Disclosure as="div" className="relative w-full" defaultOpen={defaultOpen}>
      <DisclosureButton
        className="flex w-full justify-between border-b pb-2 text-left"
        onClick={toggleIsOpen}
      >
        <h1 className="text-lg font-semibold">{title}</h1>
        <RxCaretDown
          size={30}
          className={mergeClasses('transition duration-200', !isOpen ? 'rotate-180' : '')}
        />
      </DisclosureButton>
      <div
        className={mergeClasses('pr-3', mediaList?.length > 3 ? 'h-[460px] overflow-y-scroll' : '')}
      >
        <DisclosurePanel
          transition
          className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
        >
          {mediaList?.length
            ? mediaList.map((el: MediaList, index: number) => (
                <div key={el.name + index} className="flex justify-between py-5">
                  <div className="flex gap-3">
                    <div className="relative h-[60px] w-[60px]">
                      <Image
                        className="rounded"
                        src={
                          el.type === AttachmentTypes.MEDIA
                            ? el.url || el.thumbnail || headphone
                            : doc
                        }
                        alt={el.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="flex flex-col justify-evenly text-xl">
                      <h1>{el.name}</h1>
                      <p className="text-gray-400">{el.date}</p>
                    </div>
                  </div>
                  <DetailsDropdown
                    pClassName="flex items-center text-gray-500"
                    pOptions={el.options}
                    pSize={25}
                    pOnClick={(value: Option) => onClick(value, index)}
                  />
                </div>
              ))
            : null}
        </DisclosurePanel>
      </div>
    </Disclosure>
  );
};

export default MediaGallery;
