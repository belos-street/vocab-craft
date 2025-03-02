export default function Home() {
  return (
    <div className="flex flex-row gap-12">
      <div className="flex flex-col rounded-md bg-orange-800 cursor-pointer">
        <div className="px-2 py-1 mb-2">
          <div className="text-lg">英语四级</div>
          <div className="text-xs">CET-4</div>
        </div>
        <div className="flex flex-col gap-2 bg-orange-600 p-2  rounded-md">
          <div className="h-2 bg-white" />
          <div className="h-2 bg-orange-200" />
          <div className="h-2  bg-orange-400" />
        </div>
      </div>
      <div>考研英语</div>
      <div>六级英语</div>
    </div>
  )
}
