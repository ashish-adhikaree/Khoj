import {MdOutlineScreenSearchDesktop} from 'react-icons/md'
import Link from 'next/link'

const Logo = () => {
    return <Link href="/" className='flex items-center space-x-5 cursor-pointer'>
        <MdOutlineScreenSearchDesktop className="text-6xl text-purple-500" />
        <p className='font-bold text-3xl text-purple-500'>खोज</p>
    </Link>
}

export default Logo