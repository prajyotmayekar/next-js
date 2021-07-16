export async function getStaticPaths() {
    const res = await fetch('https://dhhomes-api.herokuapp.com/api/users/');
    const data = await res.json();

    const paths = data.map(ninja=>{
        return{
            params:{id:ninja.id.toString()}
        }
    })

  return {
    paths,
    fallback: false // See the "fallback" section below
  };
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const res = await fetch('https://dhhomes-api.herokuapp.com/api/users/'+id)
    const data = await res.json();
  return {
    props: {data:data}, // will be passed to the page component as props
  }
}


function details({data}) {
    return (
        <div>
            <h1 className="page_title">Details page</h1>
            <h3 className="details_list">{data.name}</h3>
            <h3 className="details_list">{data.address.city}</h3>
        </div>
    )
}

export default details
