import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return <h1>페이지 찾을 수 없습니다</h1>;
}
