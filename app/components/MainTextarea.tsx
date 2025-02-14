'use client';
import { useRef } from 'react';

const MAIN_INPUT_PLACEHOLDER = 'Start typing here… (or paste your text)';

const MainTextarea = ({
  passRef,
  isCharacterLimit,
  limitValue,
}: {
  passRef: (arg0: string) => void;
  isCharacterLimit: boolean;
  limitValue: number;
}) => {
  const mainRef = useRef<null | HTMLTextAreaElement>(null);
  const isWarning =
    isCharacterLimit &&
    mainRef.current &&
    mainRef.current.value.length > limitValue &&
    limitValue &&
    mainRef.current.value.length !== 0;
  const LIMIT_DESCRIPTION = `Limit reached!\nYour text exceeds ${limitValue.toString()} characters.`;
  return (
    <label
      className={`${isWarning ? 'h-[260px] sm:h-[236px]' : 'h-[200px]'} relative mt-[48px] flex flex-col gap-[12px] [transition:height_300ms]`}
    >
      <textarea
        onInput={() => {
          passRef(mainRef.current?.value ?? '');
        }}
        ref={mainRef}
        id="main-text"
        className={`min-h-[200px] w-full resize-none rounded-[12px] border-2 bg-[#F2F2F7] p-[12px] text-[20px] leading-[140%] tracking-[-0.6px] text-[#2A2B37] outline-none [transition:background-color_300ms,color_300ms,border_300ms,box-shadow_300ms] dark:bg-[#2A2B37] dark:text-[#E4E4EF] md:p-[20px] ${isWarning ? 'border-[#DA3701] drop-shadow-[0_0_4px_rgba(218,55,1,0.75)] dark:border-[#FE8159] dark:drop-shadow-[0_0_4px_#FE8159]' : 'border-[#E4E4EF] focus:border-[#C27CF8] focus:drop-shadow-[0_0_4px_#C27CF8] dark:border-[#404254] dark:focus:border-[#C27CF8] dark:focus:drop-shadow-[0_0_4px_#C27CF8]'}`}
        placeholder={MAIN_INPUT_PLACEHOLDER}
      />
      <div
        className={`flex items-center gap-[8px] text-[#DA3701] [transition:color_300ms] dark:text-[#FE8159] ${isWarning ? 'opacity-100 [transition:opacity_300ms]' : 'absolute bottom-0 opacity-0'} [transition:opacity_150ms]`}
      >
        <svg
          role="img"
          aria-label="warning icon"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="15"
          fill="none"
          viewBox="0 0 14 15"
        >
          <path
            className="fill-[#DA3701] [transition:fill_300ms] dark:fill-[#FE8159]"
            d="M7 1.344A5.899 5.899 0 0 0 1.094 7.25 5.882 5.882 0 0 0 7 13.156a5.899 5.899 0 0 0 5.906-5.906c0-3.254-2.68-5.906-5.906-5.906Zm0-.875c3.719 0 6.781 3.062 6.781 6.781 0 3.746-3.062 6.781-6.781 6.781A6.78 6.78 0 0 1 .219 7.25C.219 3.531 3.254.469 7 .469Zm-.984 9.406h.328V6.594h-.328a.316.316 0 0 1-.329-.328v-.22c0-.163.137-.327.329-.327h1.312c.164 0 .328.164.328.328v3.828h.328c.164 0 .329.164.329.328v.219a.332.332 0 0 1-.329.328H6.016a.316.316 0 0 1-.329-.328v-.219c0-.164.137-.328.329-.328ZM7 3.312a.9.9 0 0 1 .875.876c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875Z"
          />
        </svg>
        <p className="whitespace-pre-wrap sm:whitespace-normal">{LIMIT_DESCRIPTION}</p>
      </div>
    </label>
  );
};

export default MainTextarea;
