import { Book } from './books'

export default function Home() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-12 mt-4">
      <Book title="四级英语" subTitle="CET-4" color="orange" />
      <Book title="六级英语" subTitle="CET-6" color="green" />
      <Book title="考研英语" color="blue" />
    </div>
  )
}
