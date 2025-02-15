'use client';
import Image from 'next/image';
import logoMark from '../public/assets/images/logo-mark.svg';
import iconUpload from '../public/assets/images/icon-upload.svg';
import iconInfo from '../public/assets/images/icon-info.svg';
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
      router.push('success/');
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
        <form className="mx-auto flex w-full max-w-[460px] flex-col gap-[24px]" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-[12px] text-white">
            <h2>Upload Avatar</h2>
            <div className="relative flex h-[126px] w-full flex-col items-center justify-center gap-[16px] overflow-hidden rounded-[12px] bg-[rgba(255,255,255,0.08)] bg-[url(../public/assets/images/dashed-border.svg)]">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute z-10 size-full cursor-pointer opacity-0"
              />
              <div className="flex size-[50px] items-center justify-center rounded-[12px] bg-[rgba(255,255,255,0.1)] [border:1px_solid_#4B4869]">
                <Image alt="upload icon" src={iconUpload as string} />
              </div>
              <p className="text-[18px] leading-[120%] text-[#D1D0D5]">Drag and drop or click to upload</p>
            </div>
            <div className="flex items-center gap-[8px]">
              <Image alt="info icon" src={iconInfo as string} />
              <p className="text-[12px] leading-[120%] tracking-[-0.2px] text-[#D1D0D5]">
                Upload your photo (JPG or PNG, max size: 500KB).
              </p>
            </div>
          </label>
          <button
            type="submit"
            className="min-h-[54px] w-full rounded-[12px] bg-[#F57463] text-[20px] font-extrabold tracking-[-0.3px] text-[#0D082D]"
          >
            GENERATE MY TICKET
          </button>
        </form>
      </main>
    </>
  );
}
