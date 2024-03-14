'use client';

import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LinkIcon from '@mui/icons-material/Link';
import styles from './menu.module.css';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '../app/public/logo.png';
import { Alert } from '@mui/material';
import { useState } from 'react';

export default function Menu() {
  const router = usePathname();
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  function onUrlCopy() {
    navigator.clipboard.writeText(`letflix-brown.vercel.app/${router}`);
    setShowCopyMessage(true);
    setTimeout(() => setShowCopyMessage(false), 3000);
  }

  return (
    <div className={styles.container}>
      <Link href="/">
        <ArrowBackIcon className={styles.button} />
      </Link>
      <Link href="/">
        <Image src={logo} alt="로고" className="logo" />
      </Link>
      <LinkIcon className={styles.button} onClick={onUrlCopy} />
      {showCopyMessage && (
        <Alert className={styles.copy} severity="success">
          현재 URL이 복사됐습니다.
        </Alert>
      )}
    </div>
  );
}
