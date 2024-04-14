// searchTitle.tsx
'use client';

import { useRouter } from 'next/navigation';
import styles from './searchTitle.module.css';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

export default function SearchTitle() {
  const { register } = useForm();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      router.push(`/?title=${searchTerm}`);
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm, router]);

  const onSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      id={styles.searchTitle}
      type="text"
      {...register('searchTitle')}
      placeholder="제목을 입력하세요"
      onChange={onSearchChange}
    />
  );
}
