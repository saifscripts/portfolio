import { IResponse } from './global.type';

interface IName {
  firstName: string;
  middleName: string;
  lastName: string;
}

export interface IProfile {
  _id: string;
  name: IName;
  designation: string;
  photo: string;
  description: string;
  about: string;
  phone: string;
  email: string;
  address: string;
  resume: string;
  github: string;
  linkedin: string;
  x: string;
}

export type IProfileResponse = IResponse<IProfile>;
