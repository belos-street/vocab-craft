import React from 'react'

type Page1Props = {
  article: string
}

const Page1: React.FC<Page1Props> = ({ article }) => {
  const parts = article.split(/(\[[^\]]+\])/)

  return (
    <div className="flex justify-center items-center">
      <div className="scene-content flex flex-wrap justify-center max-w-[420px] text-lg leading-relaxed text-indent-2ch h-[calc(100vh-110px)] overflow-y-auto pb-8 px-4 mt-6">
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
    </div>
  )
}

export default Page1
