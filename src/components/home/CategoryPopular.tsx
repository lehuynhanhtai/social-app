import Link from 'next/link';

export const CategoryPopular = async () => {
  return (
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
          <Link href="{`/category/${category?.slug}-${category?.id}.html`}" className="text-sm font-medium text-gray-900 dark:text-white">
            abc
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryPopular;
