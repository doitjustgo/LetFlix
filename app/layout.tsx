import '../styles/global.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | LetFlix',
    default: 'LetFlix',
  },
  icons: {
    icon: '/favicon.ico',
  },
  description: '영화를 위한 최고의 사이트! LetFlix! 예고편 감상도 한번에~',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="kr">
        <body>{children}</body>
      </html>
    </>
  );
}
