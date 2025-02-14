const NO_SPACE_DESCRIPTION = '(no space)';
const SummaryBoxes = ({ textAreaValue, isExcludedSpaces }: { textAreaValue: string; isExcludedSpaces: boolean }) => {
  const formattedValue = (value: number) => value.toLocaleString('number', { minimumIntegerDigits: 2 });
  return (
    <ul className="mt-[48px] flex flex-col gap-[16px] md:flex-row">
      {[
        {
          description: 'Total Characters',
          background: 'bg-[#D3A0FA]',
          pattern: 'bg-[url(../public/assets/images/pattern-character-count.svg)]',
          amount: formattedValue(textAreaValue.replace(/\s+/g, '').length),
          amount2: formattedValue(textAreaValue.length),
        },
        {
          description: 'Word Count',
          background: 'bg-[#FF9F00]',
          pattern: 'bg-[url(../public/assets/images/pattern-word-count.svg)]',
          amount: formattedValue(textAreaValue.trim().split(/\s+/).filter(Boolean).length),
        },
        {
          description: 'Sentence Count',
          background: 'bg-[#FE8159]',
          pattern: 'bg-[url(../public/assets/images/pattern-sentence-count.svg)]',
          amount: formattedValue(textAreaValue.split(/[.!?]+/).filter((sentence) => sentence.trim().length > 0).length),
        },
      ].map((item, index) => {
        return (
          <li
            className={`flex min-h-[150px] w-full flex-col rounded-[12px] bg-[calc(100%+1.9em)_center] bg-no-repeat ${item.pattern} ${item.background} relative justify-end px-[16px] py-[26.5px] text-[#12131A] [transition:opacity_300ms]`}
            key={item.background}
          >
            <>
              <h2
                className={`${isExcludedSpaces && index === 0 ? 'opacity-100' : index === 0 ? 'opacity-0' : 'opacity-100'} absolute top-[35px] text-[40px] font-bold leading-[100%] tracking-[-1px] [transition:opacity_300ms] md:top-[25px] md:text-[64px]`}
              >
                {item.amount.toString()}
              </h2>
              <h2
                className={`${isExcludedSpaces ? 'opacity-0' : 'opacity-100'} absolute top-[35px] text-[40px] font-bold leading-[100%] tracking-[-1px] [transition:opacity_300ms] md:top-[25px] md:text-[64px]`}
              >
                {item.amount2}
              </h2>
            </>
            {index === 0 ? (
              <div className="mb-1 flex items-center gap-1 md:mb-0">
                <p className="text-[20px] leading-[140%] tracking-[-0.6px]">{item.description}</p>
                <p
                  id="no-space-info"
                  className="bottom-4 leading-[130%] tracking-[-0.6px] opacity-0 [transition:opacity_300ms] md:absolute md:bottom-2 screen1024:relative screen1024:-bottom-px"
                >
                  {NO_SPACE_DESCRIPTION}
                </p>
              </div>
            ) : (
              <p className="mb-1 text-[20px] leading-[140%] tracking-[-0.6px] md:mb-0">{item.description}</p>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default SummaryBoxes;
