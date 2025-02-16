'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import patternTicket from '../../public/assets/images/pattern-ticket.svg';
import logoIcon from '../../public/assets/images/logo-mark.svg';
import githubIcon from '../../public/assets/images/icon-github.svg';
const CONGRATS_TEXT = 'Congrats, ';
const TICKET_READY_TEXT = 'Your ticket is ready.';
const EMAIL_SENT_TEXT = "We've emailed your ticket to ";
const UPDATES_TEXT = ' and will send updates in the run up to the event.';

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
    <main className="mx-auto flex flex-col gap-[111px]">
      <div className="flex max-w-[814px] flex-col items-center justify-center gap-[32px] text-center">
        <h1 className="text-pretty text-[60px] font-extrabold leading-[110%] tracking-[-1px] text-white">
          {CONGRATS_TEXT}
          <span className="text-pretty bg-gradient-to-r from-[#F57463] to-white bg-clip-text text-transparent">
            {name?.concat('!')}
          </span>
          <br />
          {TICKET_READY_TEXT}
        </h1>
        <p className="max-w-[514px] text-[24px] font-medium tracking-[-0.5px] text-[#D1D0D5]">
          {EMAIL_SENT_TEXT} <span className="text-[#F57463]">{email}</span> {UPDATES_TEXT}
        </p>
      </div>
      <div className="flex h-[280px] w-[600px] items-center justify-between">
        <Image
          alt="background ticket image"
          className="absolute z-[-1] [backdrop-filter:blur(7px)]"
          src={patternTicket as string}
        />
        {avatarUrl && (
          <div className="flex size-full max-w-[390px] flex-col justify-between py-[24px] pl-[24px]">
            <div className="flex items-start gap-[20px]">
              <Image height={40} width={40} alt="coding conf logo" src={logoIcon as string} />
              <section className="flex flex-col gap-[8px] md:gap-[12px]">
                <h2 className="mt-[-6px] text-[40px] font-bold leading-[110%] tracking-[-1px] text-white">
                  Coding Conf
                </h2>
                <div className="flex gap-[8px] text-[18px] leading-[120%] text-[#D1D0D5] md:gap-[16px]">
                  <p>Jan 31, 2025</p>
                  <span>/</span>
                  <p>Austin, TX</p>
                </div>
              </section>
            </div>
            <div className="flex items-center gap-[16px]">
              <Image
                width={80}
                height={80}
                src={avatarUrl}
                alt="Uploaded Avatar"
                className="size-[80px] rounded-[12px]"
              />
              <div className="flex flex-col gap-[8px]">
                <h2 className="text-[30px] font-medium leading-[120%] tracking-[-1px] text-white">{name}</h2>
                <div className="flex items-center gap-[10px]">
                  <Image width={17} height={17} alt="github icon" src={githubIcon as string} />
                  <p className="text-[20px] font-medium leading-[120%] tracking-[-0.5px] text-[#D1D0D5]">{email}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        <span className="pr-[36px] text-[30px] font-medium leading-[110%] tracking-[-1px] text-[#8784A5] [writing-mode:vertical-rl]">
          #01609
        </span>
      </div>
    </main>
  );
}
