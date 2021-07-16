import Link from 'next/link'

function Navbar() {
    return (
        <nav>
            <ul className="navilist">
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/aboutus"><a>About</a></Link>
                </li>
                <li>
                    <Link href="/news"><a>News</a></Link>
                </li>
                <li>
                    <Link href="/netninjas/list"><a>Users list | StaticProps</a></Link>
                </li>
                <li>
                    <Link href="/netninjas/listprops"><a>Users link | ServersideProps</a></Link>
                </li>
                <li>
                    <Link href="/netninjas/pages"><a>Ninja link | Pages</a></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
