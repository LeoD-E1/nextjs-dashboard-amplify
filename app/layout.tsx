import type { Metadata } from 'next';
import '@/app/ui/globals.css';

import '@aws-amplify/ui-react/styles.css';

export const metadata: Metadata = {
  title: 'NPC Dashboard ',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
