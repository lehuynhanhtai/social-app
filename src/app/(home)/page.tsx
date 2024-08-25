import Carousel from '@/components/home/Carousel';

export default async function Home() {
  return (
    <>
      <Carousel />
      {/* <CategoryPopular /> */}
      <div className="mx-auto w-full max-w-screen-xl py-8">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white uppercase">Phổ biến trên S-BLOG</h2>
        {/* <CardPopular /> */}abc
        {/* <Commercial /> */}abc
      </div>
      <div className="w-full dark:bg-slate-600 bg-slate-100">{/* <TopPostMonth /> */}abc</div>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto w-full max-w-screen-xl py-8">
        <div className="col-span-2 md:mr-7">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white uppercase">Dành cho bạn</h2>
          {/* <CardPost /> */}abc
          {/* <Panigation /> */}abc
        </div>
        <div className="hidden md:block">
          <div className="flex flex-col gap-6">
            {/* <Category /> */}abc
            {/* <Author /> */}abc
          </div>
        </div>
      </div>
    </>
  );
}
