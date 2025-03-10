import React from 'react'

type Page1Props = {
  article: string
}

const Page1: React.FC<Page1Props> = ({ article }) => {
  const parts = article.split(/(\[[^\]]+\])/)

  return (
    <div className="scene-content flex flex-wrap justify-center self-center max-w-[420px] text-lg leading-relaxed text-indent-2ch pb-6">
      <p className="text-i">
        {parts.map((part, index) => {
          if (part.startsWith('[') && part.endsWith(']')) {
            return (
              <span key={index} className="text-blue-500 font-semibold underline px-1">
                {part.slice(1, -1)}
              </span>
            )
          }
          return <span key={index}>{part}</span>
        })}
      </p>
    </div>
  )
}

export default Page1
