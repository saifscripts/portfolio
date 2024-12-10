import { IResponse } from './global.type';

export interface IProject {
  _id: string;
  name: string;
  slug: string;
  description: string;
  summary: string;
  content: string;
  images: string[];
  live: string;
  repos: [{ label: string; url: string }];
  techs: string[];
  isDeleted: boolean;
}

export type IProjectResponse = IResponse<IProject>;
