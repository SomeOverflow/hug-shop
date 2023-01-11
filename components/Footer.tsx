import { FaInfoCircle } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='flex items-center justify-center space-x-4'>
            <FaInfoCircle className='w-6 h-6 dark:text-white' />
            <p className="dark:text-white text-center">This is not a real shop. Just for learning purposes. I am sorry</p>
        </div>
    )
}