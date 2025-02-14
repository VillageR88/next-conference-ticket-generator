import { useRef, type Dispatch, type SetStateAction } from 'react';
import LabelCheckbox from '../components/LabelCheckbox';

const mainSettings = {
  exclude: {
    id: 'exclude-spaces',
    description: 'Exclude Spaces',
  },
  limit: {
    id: 'character-limit',
    description: 'Set Character Limit',
  },
};
const CHARACTERS_PER_MINUTE = 1000;
const calculateReadTime = (text: string) => {
  const characters = text.length;
  const minutes = characters / CHARACTERS_PER_MINUTE;
  return Math.floor(minutes);
};

const MainCheckboxArea = ({
  textAreaValue,
  setIsExcludedSpace,
  setIsCharacterLimit,
  passRefLimitValue,
}: {
  textAreaValue: string;
  setIsExcludedSpace: Dispatch<SetStateAction<boolean>>;
  setIsCharacterLimit: Dispatch<SetStateAction<boolean>>;
  passRefLimitValue: (arg0: number) => void;
}) => {
  const limitInputRef = useRef<HTMLInputElement | null>(null);
  const calculateReadTimeValue = calculateReadTime(textAreaValue);
  const APPROX_DESCRIPTION = `Approx. reading time: ${!textAreaValue ? '0' : calculateReadTimeValue < 1 ? '< 1' : calculateReadTimeValue.toString()} minute${Number(calculateReadTimeValue) < 2 && textAreaValue ? '' : 's'}`;

  return (
    <div className="mt-[16px] flex flex-col justify-between gap-[12px] md:flex-row md:items-center">
      <div className="flex flex-col gap-[12px] md:flex-row md:items-center md:gap-[24px]">
        <LabelCheckbox
          passReference={(value) => {
            setIsExcludedSpace(value);
          }}
          id={mainSettings.exclude.id}
          description={mainSettings.exclude.description}
        />
        <div id="character-div" className="flex items-center gap-[10px]">
          <LabelCheckbox
            passReference={(value) => {
              setIsCharacterLimit(value);
            }}
            id={mainSettings.limit.id}
            description={mainSettings.limit.description}
          />
          <label
            htmlFor="max-char-input"
            className="pointer-events-none select-none opacity-0 [transition:opacity_300ms]"
            id="max-char-container"
          >
            <input
              ref={limitInputRef}
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                if (Number(e.currentTarget.value) < 1 && e.currentTarget.value !== '') e.currentTarget.value = '1';
                passRefLimitValue(Number(limitInputRef.current?.value));
              }}
              id="max-char-input"
              className="pointer-events-none flex min-h-[29px] w-[55px] select-none rounded-[6px] border border-[#404254] bg-[unset] text-center text-[#12131A] outline-none [transition:color_300ms] dark:text-[#FFFFFF]"
              type="number"
            />
          </label>
        </div>
      </div>
      <p className="text-[#12131A] [transition:color_300ms] dark:text-[#E4E4EF]">{APPROX_DESCRIPTION}</p>
    </div>
  );
};

export default MainCheckboxArea;
