import React from 'react'

type WordMeaning = {
  partOfSpeech: string
  definition: string
}

type WordData = {
  word: string
  pronunciation: string
  meanings: WordMeaning[]
}

type Page2Props = {
  wordData: WordData[]
}

const Page2: React.FC<Page2Props> = ({ wordData }) => {
  return (
    <div className="scene-content flex flex-wrap justify-center self-center max-w-[420px] text-lg pb-6">
      <ul className="list-disc pl-6">
        {wordData.map((item, index) => (
          <li key={index} className="mb-4">
            <strong>{item.word}</strong> ({item.pronunciation})
            <ul className="pl-4 mt-1">
              {item.meanings.map((meaning, idx) => (
                <li key={idx}>
                  {meaning.partOfSpeech}: {meaning.definition}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Page2
