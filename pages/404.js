import Link from 'next/link'
import {useEffect} from 'react'
import {useRouter} from 'next/router'

function NotFound() {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(() => {
            router.push('/');
        }, 3000);
    },[router])

    return (
        <div>
            <h3>Sorry page not found, go back to <Link href="/">Homepage</Link></h3>
        </div>
    )
}

export default NotFound
