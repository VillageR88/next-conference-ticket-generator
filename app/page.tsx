'use client';
import Image from 'next/image';
import iconUpload from '../public/assets/images/icon-upload.svg';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

export default function Home(): JSX.Element {
  const router = useRouter();
  const [avatar, setAvatar] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInput = useRef<null | HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files?.[0]) {
      const file = event.target.files[0];
      if (file.size > 500 * 1024) {
        setErrorMessage('File too large. Please upload a photo under 500KB.');
        setAvatar(null);
      } else {
        setErrorMessage(null);
        setAvatar(file);
      }
      event.target.value = ''; // Reset the input value to allow re-upload
    }
  };

  const handleRemoveImage = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAvatar(null);
    setErrorMessage(null);
    event.preventDefault();
  };

  const handleChangeImage = (): void => {
    if (fileInput.current) fileInput.current.click();
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
            <div className="relative flex h-[126px] w-full flex-col items-center justify-center gap-[16px] overflow-hidden rounded-[12px] bg-[rgba(255,255,255,0.08)] bg-[url(../public/assets/images/dashed-border.svg)] outline-offset-4 [transition:outline_300ms,background-color_300ms] has-[input:focus-visible]:outline has-[input:focus-visible]:outline-[#8784A5] [&:hover>div]:border-[#8784A5] [&:not(:has(button:hover))]:hover:bg-[rgba(255,255,255,0.2)]">
              <input
                ref={fileInput}
                required={!avatar}
                id="file-input"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute z-[1] size-full cursor-pointer opacity-0"
              />
              <div
                className={`flex size-[50px] items-center justify-center rounded-[12px] bg-[rgba(255,255,255,0.1)] ${avatar ? '[border:1px_solid_#8784A5]' : '[border:1px_solid_#4B4869]'} [transition:border_300ms]`}
              >
                {avatar ? (
                  <Image
                    alt="uploaded avatar"
                    src={URL.createObjectURL(avatar)}
                    width={50}
                    height={50}
                    className="rounded-[12px]"
                  />
                ) : (
                  <Image alt="upload icon" src={iconUpload as string} />
                )}
              </div>
              {avatar ? (
                <div className="relative z-[2] flex gap-[12px]">
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="min-h-[22px] rounded-[4px] bg-[rgba(255,255,255,0.1)] px-[8px] py-[4px] text-[12px] leading-[120%] text-[#D1D0D5] underline decoration-[#D1D0D5] decoration-1 underline-offset-[3px] [transition:background-color_300ms] hover:bg-[rgba(255,255,255,0.2)]"
                  >
                    Remove image
                  </button>
                  <button
                    type="button"
                    onClick={handleChangeImage}
                    className="min-h-[22px] rounded-[4px] bg-[rgba(255,255,255,0.1)] px-[8px] py-[4px] text-[12px] leading-[120%] text-[#D1D0D5] [transition:background-color_300ms] hover:bg-[rgba(255,255,255,0.2)]"
                  >
                    Change image
                  </button>
                </div>
              ) : (
                <p className="text-[18px] leading-[120%] text-[#D1D0D5]">Drag and drop or click to upload</p>
              )}
            </div>
            <div className="flex items-center gap-[8px]">
              <svg
                aria-label="info icon"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  stroke={errorMessage ? '#F57463' : '#D1D0D5'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"
                />
                <path fill={errorMessage ? '#F57463' : '#D1D0D5'} d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
                <path
                  stroke={errorMessage ? '#F57463' : '#D1D0D5'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.004 10.462V7.596M8 5.569v-.042"
                />
              </svg>
              {errorMessage ? (
                <p className="text-[12px] leading-[120%] tracking-[-0.2px] text-[#F57463]">{errorMessage}</p>
              ) : (
                <p className="text-[12px] leading-[120%] tracking-[-0.2px] text-[#D1D0D5]">
                  Upload your photo (JPG or PNG, max size: 500KB).
                </p>
              )}
            </div>
          </label>
          <label className="flex flex-col gap-[12px] text-white">
            <h2>Full Name</h2>
            <input
              required
              id="name"
              autoComplete="name"
              type="text"
              className="h-[54px] w-full rounded-[12px] bg-[rgba(255,255,255,0.08)] px-[16px] text-[18px] leading-[120%] text-white outline-none [border:1px_solid_#8784A5] [transition:outline_300ms,background-color_300ms] hover:bg-[rgba(255,255,255,0.2)] focus:outline-offset-4 focus:outline-[#8784A5]"
            />
          </label>
          <label className="flex flex-col gap-[12px] text-white">
            <h2>Email Address</h2>
            <input
              required
              id="email"
              autoComplete="email"
              type="email"
              placeholder="example@email.com"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              className="h-[54px] w-full rounded-[12px] bg-[rgba(255,255,255,0.08)] px-[16px] text-[18px] leading-[120%] text-white outline-none [border:1px_solid_#8784A5] [transition:outline_300ms,background-color_300ms] hover:bg-[rgba(255,255,255,0.2)] focus:outline-offset-4 focus:outline-[#8784A5]"
            />
          </label>
          <label className="flex flex-col gap-[12px] text-white">
            <h2>GitHub Username</h2>
            <input
              required
              id="github"
              autoComplete="username"
              type="text"
              placeholder="@yourusername"
              className="h-[54px] w-full rounded-[12px] bg-[rgba(255,255,255,0.08)] px-[16px] text-[18px] leading-[120%] text-white outline-none [border:1px_solid_#8784A5] [transition:outline_300ms,background-color_300ms] hover:bg-[rgba(255,255,255,0.2)] focus:outline-offset-4 focus:outline-[#8784A5]"
            />
          </label>
          <button
            type="submit"
            className="flex min-h-[54px] w-full justify-center rounded-[12px] bg-[#F57463] align-top text-[20px] font-extrabold tracking-[-0.3px] text-[#0D082D] [transition:outline_300ms] focus:outline focus:outline-offset-4 focus:outline-white [&:hover>div]:bg-[#E1604F]"
          >
            <div className="flex h-[50px] w-full items-center justify-center rounded-[12px] bg-[#F57463] pt-[2px] [transition:background-color_300ms]">
              Generate My Ticket
            </div>
          </button>
        </form>
      </main>
    </>
  );
}
