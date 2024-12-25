import React from 'react';

export type BaseModel = {
  id: number;
  createdAt: string;
  updatedAt: string;
};

export type User = BaseModel & {
  email: string;
  name: string;
  imgUrl: string;
};

export type Option = {
  value: string;
  name: string;
};


export type OptionWithIcon = Option & {
  icon?: React.ReactElement | null;
};
