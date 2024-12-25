import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import React from 'react';
import { FaCaretDown } from 'react-icons/fa6';

type MenuOption = {
  name: string;
  icon: React.ReactElement | null;
  onClick: () => void;
};

type ProfileMenuProps = {
  pImageUrl: string;
  pName: string;
  pIsDisabled?: boolean;
  pOptions: MenuOption[];
};

const ProfileMenu: React.FC<ProfileMenuProps> = ({
  pImageUrl,
  pName,
  pIsDisabled = false,
  pOptions,
}) => {
  return (
    <Menu>
      <div className="flex">
        <MenuButton className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm/6 font-semibold">
          <img className="me-2 h-8 w-8 rounded-full" src={pImageUrl} alt="Rounded avatar" />
          <p className="font-bold">{pName}</p>
          {!pIsDisabled && <FaCaretDown className="text-black" />}
        </MenuButton>
      </div>
      {!pIsDisabled && (
        <MenuItems anchor="bottom" className="rounded border border-border">
          {pOptions.map((el: MenuOption) => (
            <MenuItem key={el?.name}>
              <div
                className="flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-secondary-bg"
                onClick={el.onClick}
              >
                {el.icon && <span className="inline-block">{el.icon}</span>}
                <p> {el?.name} </p>
              </div>
            </MenuItem>
          ))}
        </MenuItems>
      )}
    </Menu>
  );
};
export default ProfileMenu;
