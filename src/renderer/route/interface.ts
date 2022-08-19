import { ReactNode } from 'react';

interface RouteParams {
  name: string;
  page: ReactNode;
}

interface PageSettings {
  route: RouteParams[];
  icon: string;
  projectName: string;
}

export { RouteParams, PageSettings };
