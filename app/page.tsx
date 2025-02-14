'use client';
import Logo from './components/Logo';
import MainCheckboxArea from './components/MainCheckboxArea';
import SummaryBoxes from './components/SummaryBoxes';
import ThemeButton from './components/ThemeButton';
import MainTextarea from './components/MainTextarea';
import Density from './components/Density';
import { useState } from 'react';
const HEAD_TITLE = 'Analyze your text\nin real-time.';

export default function Home() {
  const [textAreaValue, setTextAreaValue] = useState<string>('');
  const [isExcludedSpaces, setIsExcludedSpace] = useState<boolean>(false);
  const [isCharacterLimit, setIsCharacterLimit] = useState<boolean>(false);
  const [limitValue, setLimitValue] = useState<number>(0);
  return (
    <>
      <nav className="mx-auto flex w-full max-w-[990px] justify-between">
        <Logo />
        <ThemeButton />
      </nav>
      <main className="mx-auto flex w-full max-w-[990px] flex-col">
        <h1 className="mx-auto w-fit text-center text-[#12131A] [transition:color_300ms] dark:text-[#F2F2F7]">
          {HEAD_TITLE}
        </h1>
        <MainTextarea
          passRef={(value) => {
            setTextAreaValue(value);
          }}
          isCharacterLimit={isCharacterLimit}
          limitValue={limitValue}
        />
        <MainCheckboxArea
          textAreaValue={textAreaValue}
          setIsExcludedSpace={setIsExcludedSpace}
          setIsCharacterLimit={setIsCharacterLimit}
          passRefLimitValue={(value) => {
            setLimitValue(value);
          }}
        />
        <SummaryBoxes textAreaValue={textAreaValue} isExcludedSpaces={isExcludedSpaces} />
        <Density textAreaValue={textAreaValue} isExcludedSpaces={isExcludedSpaces} />
      </main>
    </>
  );
}
