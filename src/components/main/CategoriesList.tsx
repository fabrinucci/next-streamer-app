import categories from 'data/categories.json';
import { CategoryItem } from './';

export const CategoriesList = () => {
  return (
    <section className='mx-auto w-full'>
      <h2 className='my-3 text-xl font-semibold'>
        <span className='text-emerald-500'>Categories</span> we think you&apos;ll like
      </h2>
      <div className='grid justify-items-center gap-3 min-[420px]:grid-cols-2 min-[600px]:grid-cols-3 md:grid-cols-4 xl:grid-cols-6'>
        {categories.map((category) => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </div>
    </section>
  );
};
