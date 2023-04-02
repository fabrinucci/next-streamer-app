import Image from 'next/image';
import icons from 'data/icons.json';

export const IconBar = () => {
  return (
    <section className='py-2 md:py-4'>
      <div className='grid gap-x-3 gap-y-5 border-t border-[#2e2e35] pt-8 min-[460px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-5'>
        {icons.map((icon) => (
          <div
            className='flex h-12 w-full cursor-pointer items-center justify-between rounded bg-emerald-600 px-4 transition-all hover:bg-emerald-700'
            key={icon.id}
          >
            <h3 className='text-xl font-semibold sm:text-2xl'>{icon.title}</h3>
            <Image src={icon.image} alt={icon.title} height={65} width={65} />
          </div>
        ))}
      </div>
    </section>
  );
};
