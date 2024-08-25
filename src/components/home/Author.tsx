import Image from 'next/image';
import Link from 'next/link';

const Author = () => {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex items-center gap-2">
        <div className="relative w-14 h-14">
          <Image src="/book1.jpg" alt="" fill sizes="(max-width: 600px) 100vw, 33vw" priority className="object-cover rounded-full" />
        </div>
        <div>
          <div className="text-[18px] dark:text-white">Lehuynhanhtai</div>
          <div className="text-black dark:text-white normal-case italic font-light">Yêu bao lâu cho nắm tay</div>
        </div>
      </div>
      <div className="border rounded-full px-3 py-1">
        <span className="text-sm dark:text-white">Đang Theo dõi</span>
      </div>
    </div>
  );
};

export default Author;
