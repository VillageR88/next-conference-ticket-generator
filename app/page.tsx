'use client';
import Image from 'next/image';
import logoMark from '../public/assets/images/logo-mark.svg';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home(): JSX.Element {
  const router = useRouter();
  const [avatar, setAvatar] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files?.[0]) {
      setAvatar(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    if (avatar) {
      localStorage.setItem('avatar', URL.createObjectURL(avatar));
      router.push('/avatar-display');
    }
  };

  return (
    <>
      <header className="mx-auto flex items-center gap-[16px]">
        <Image height={30} width={30} alt="logo image" src={logoMark as string} />
        <h1 className="font-firaCode text-[24px] font-bold text-white">Coding Conf</h1>
      </header>
      <main className="mx-auto flex flex-col gap-[45px]">
        <section className="flex max-w-[891px] flex-col gap-[20px] text-center">
          <h2 className="text-[60px] font-extrabold leading-[110%] tracking-[-1px] text-white">
            Your Journey to Coding Conf 2025 Starts Here!
          </h2>
          <p className="text-[24px] font-medium leading-[120%] tracking-[-0.5px] text-[#D1D0D5]">
            Secure your spot at next year’s biggest coding conference.
          </p>
        </section>
        <form onSubmit={handleSubmit}>
          <label className="text-white">
            Upload Avatar
            <input type="file" accept="image/*" onChange={handleFileChange} className="mt-2 block" />
          </label>
          <button type="submit" className="mt-4 bg-blue-500 p-2 text-white">
            Submit
          </button>
        </form>
      </main>
    </>
  );
}
