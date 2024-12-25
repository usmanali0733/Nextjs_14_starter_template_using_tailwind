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