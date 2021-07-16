import styles from '../../styles/list.module.css'
import Link from 'next/link'

export async function getStaticProps(context) {
    const res = await fetch('https://dhhomes-api.herokuapp.com/api/users/');
    const data = await res.json();
  return {
    props: {users_list:data}, // will be passed to the page component as props
    revalidate:80
  }
}


function list({users_list}) {
    console.log(users_list);
    return (
        <div>
            <h1 className="page_title"> Users Listing - getStaticProps</h1>

            {users_list.map(item => (
                <Link href={'/netninjas/'+item.id} key={item.id}>
                    <div className={styles.list_item}>{item.name} - {item.username}</div>
                </Link>
            ))}
        </div>
    )
}

export default list
