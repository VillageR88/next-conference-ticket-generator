'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
const CONGRATS_TEXT = 'Congrats, ';
const TICKET_READY_TEXT = '! Your ticket is ready.';
const EMAIL_SENT_TEXT = "We've emailed your ticket to ";
const UPDATES_TEXT = ' and will send updates in the run up to the event.';
const NO_AVATAR_TEXT = 'No avatar uploaded.';

export default function AvatarDisplay(): JSX.Element {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const storedAvatar = localStorage.getItem('avatar');
    const storedName = localStorage.getItem('name');
    const storedEmail = localStorage.getItem('email');
    if (storedAvatar) {
      setAvatarUrl(storedAvatar);
    }
    if (storedName) {
      setName(storedName);
    }
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  return (
    <main className="mx-auto flex flex-col gap-[45px]">
      return (
      <div className="flex max-w-[814px] flex-col items-center justify-center text-center">
        {name && (
          <h1 className="text-pretty text-[60px] font-extrabold leading-[110%] tracking-[-1px] text-white">
            {CONGRATS_TEXT}
            <span className="text-pretty bg-gradient-to-r from-[#F57463] to-white bg-clip-text text-transparent">
              {name}
            </span>
            {TICKET_READY_TEXT}
          </h1>
        )}
        {email && (
          <p className="max-w-[514px] text-[24px] font-medium tracking-[-0.5px] text-[#D1D0D5]">
            {EMAIL_SENT_TEXT} <span className="text-[#F57463]">{email}</span> {UPDATES_TEXT}
          </p>
        )}
        {avatarUrl ? (
          <Image width={32} height={32} src={avatarUrl} alt="Uploaded Avatar" className="size-32 rounded-full" />
        ) : (
          <p className="text-white">{NO_AVATAR_TEXT}</p>
        )}
      </div>
      );
    </main>
  );
}
