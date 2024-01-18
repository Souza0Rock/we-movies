import { getMovies } from "@/services/fetch/getMovies"

export default async function Home() {

  const data = await getMovies()

  // console.log(data, 'data')

  return (
   <div style={{ color: '#fff' }}>{data.map((i) => <p key={i.id}>{i.title}</p>)}</div>
  )
}
