import Image from 'next/image';
import logoMark from '../public/assets/images/logo-mark.svg';

export default function Home() {
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
        <form></form>
      </main>
    </>
  );
}
