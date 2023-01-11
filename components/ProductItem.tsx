import { FaArrowRight } from 'react-icons/fa'

export default function ProductItem({ data }: any) {
  return (
    <div className="p-4 bg-gray-300 dark:bg-gray-700 rounded-3xl group cursor-pointer space-y-4 hover:brightness-75 transition-all delay-75 shadow-xl">
      <div className="flex items-center justify-between space-x-4">
        <div>
          <h5 className="font-semibold text-lg line-clamp-1 ">{data.name}</h5>
          <p className="text-gray-500 text-base dark:text-white">{data.type}</p>
          <p className="text-gray-500 text-sm dark:text-white">~ {data.price}€</p>
        </div>
        <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0 dark:text-white" />
      </div>
    </div>
  );
}
