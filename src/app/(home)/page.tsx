import Author from '@/components/home/Author';
import CardHorizontal from '@/components/home/CardHorizontal';
import CardPopular from '@/components/home/CardPopular';
import CardVertical from '@/components/home/CardVertical';
import Carousel from '@/components/home/Carousel';
import Category from '@/components/home/Category';
import CategoryPopular from '@/components/home/CategoryPopular';
import Commercial from '@/components/home/Commercial';
import Panigation from '@/components/home/Panigation';
import Link from 'next/link';

export default async function Home() {
  return (
    <>
      <Carousel />
      <div className="mx-auto w-full max-w-screen-xl py-8">
        <div className="mb-4 flex items-center justify-between gap-4 md:mb-8 ">
          <h2 className="text-2xl font-semibold dark:text-white uppercase">danh mục phổ biến</h2>
          <div className="flex items-center gap-2 text-sm">
            <Link href="#" className="dark:text-white">
              Xem thêm
            </Link>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
            </svg>
          </div>
        </div>
        <CategoryPopular />
      </div>
      <div className="mx-auto w-full max-w-screen-xl py-8">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white uppercase">Phổ biến trên S-BLOG</h2>
        <CardPopular />
        <Commercial />
      </div>
      {/* abc */}
      <div className="mx-auto w-full max-w-screen-xl py-6">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white uppercase">nổi bật trong tháng</h2>
        <CardVertical />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto w-full max-w-screen-xl py-8">
        <div className="col-span-2 md:mr-7">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white uppercase">Dành cho bạn</h2>
          <CardHorizontal />
          <Panigation />
        </div>
        <div className="hidden md:block">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white uppercase">Chủ đề</h2>
              <Category />
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold dark:text-white uppercase ">Tác giả nổi bật</h2>
                <Link href="#" className="text-sm hover:text-gray-500 dark:text-white dark:hover:text-gray-300">
                  Xem thêm
                </Link>
              </div>
              <Author />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
