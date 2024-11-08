'use client';

import SideNav from '@/app/ui/dashboard/sidenav';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '@/amplify_outputs.json';
Amplify.configure(outputs);
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Authenticator>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </div>
    </Authenticator>
  );
};

export default Layout;
