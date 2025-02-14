'use client';

import { useState } from 'react';

const DENSITY_TITLE = 'Letter Density';
const DENSITY_DESCRIPTION_EMPTY = 'No characters found. Start typing to see letter density.';

const calculateHeight = (isExpanded: boolean, calculationMap: Record<string, number>, isExcludedSpaces: boolean) => {
  const itemHeight = 20.8; // height of each item in px
  const gapHeight = 12; // gap between items in px
  const excludedSpaceHeight = isExcludedSpaces && calculationMap[' '] ? itemHeight + gapHeight : 0;

  if (isExpanded) {
    return `${(Object.keys(calculationMap).length * (itemHeight + gapHeight) - gapHeight - excludedSpaceHeight).toString()}px`;
  }
  return `${(150 - excludedSpaceHeight).toString()}px`;
};

const Density = ({ textAreaValue, isExcludedSpaces }: { textAreaValue: string; isExcludedSpaces: boolean }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const SEE_DESCRIPTION = `See ${isExpanded ? 'less' : 'more'}`;

  const calculationMap = {} as Record<string, number>;
  for (const item of textAreaValue.split('')) {
    if (calculationMap[item]) calculationMap[item]++;
    else calculationMap[item] = 1;
  }
  return (
    <div className="mt-[24px] flex flex-col gap-[20px] text-[#12131A] dark:text-[#E4E4EF]">
      <h2 className="text-[24px] font-semibold leading-[130#] tracking-[-1px] [transition:color_300ms]">
        {DENSITY_TITLE}
      </h2>
      {textAreaValue.length === 0 ? (
        <p className="[transition:color_300ms]">{DENSITY_DESCRIPTION_EMPTY}</p>
      ) : (
        <ul
          style={{
            height: calculateHeight(isExpanded, calculationMap, isExcludedSpaces),
          }}
          className="flex flex-col gap-[12px] [transition:150ms]"
        >
          {Object.keys(calculationMap).map((x, i) => (
            <li
              key={x}
              className={`${(x === ' ' && isExcludedSpaces) || (i >= 5 && !isExpanded) ? 'absolute opacity-0' : 'opacity-100 [animation:fade-in_300ms] [transition:opacity_300ms]'} flex items-center gap-[14px]`}
            >
              <div className="flex h-[12px] min-w-[16px] items-center">
                <p className="leading-[130%] tracking-[-0.6px] [transition:color_300ms]">{x.toUpperCase()}</p>
              </div>
              <div className="h-[12px] w-full max-w-[859px] rounded-[999px] bg-[#F2F2F7] [transition:background_300ms] dark:bg-[#21222C]">
                <div
                  style={{ width: `${((calculationMap[x] / textAreaValue.length) * 100).toString()}%` }}
                  className="min-h-full rounded-[999px] bg-[#D3A0FA] [transition:300ms]"
                />
              </div>
              <p className="ml-auto leading-[130%] tracking-[-0.6px] [transition:color_300ms]">
                {calculationMap[x].toString()}&nbsp;(
                {((calculationMap[x] / textAreaValue.length) * 100).toFixed(2)}%)
              </p>
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
        type="button"
        className={`flex w-fit items-center gap-[6px] ${Object.entries(calculationMap).length > 5 ? '[transition:opacity_300ms]' : 'opacity-0'}`}
      >
        <span className="[transition:color_300ms]">{SEE_DESCRIPTION}</span>
        <svg
          className={`${isExpanded ? 'scale-y-100' : '-scale-y-100'} fill-[#12131A] [transition:transform_100ms,fill_300ms] dark:fill-[#E4E4EF]`}
          role="img"
          aria-label="chevron"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
        >
          <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
        </svg>
      </button>
    </div>
  );
};

export default Density;
