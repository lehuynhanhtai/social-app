import Link from 'next/link';

export const Category = async () => {
  return (
    <div className="flex flex-wrap gap-2 dark:text-white font-light">
      <Link href="{`/category/${category.slug}-${category.id}.html`}" className="text-md border rounded-full px-3 py-2 max-w-fit">
        abc
      </Link>
    </div>
  );
};

export default Category;
