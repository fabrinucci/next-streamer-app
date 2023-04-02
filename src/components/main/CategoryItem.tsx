import { Category } from 'interfaces';
import Image from 'next/image';

interface Props {
  category: Category;
}

export const CategoryItem = ({ category }: Props) => {
  const { image, tags, title, viewers } = category;
  return (
    <div>
      <div className='cursor-pointer bg-emerald-600'>
        <Image
          className='duration-300 ease-in-out hover:translate-x-2 hover:-translate-y-2'
          src={image}
          alt={title}
          height={250}
          width={180}
        />
      </div>
      <div>
        <h3 className='mt-2 cursor-pointer font-semibold hover:text-emerald-500 hover:duration-200 hover:ease-in'>
          {title}
        </h3>
        <p className='cursor-pointer text-[.9rem] text-zinc-400 hover:text-emerald-500'>
          {viewers}K viewers
        </p>
        <ul className='mt-2 flex gap-2'>
          {tags.map((tag, index) => (
            <li
              className='cursor-pointer rounded-full bg-zinc-800 py-[.1rem] px-3 text-[.8rem] font-bold text-zinc-300 hover:bg-zinc-700 hover:transition-all'
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
