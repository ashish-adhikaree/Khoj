import { useRouter } from "next/router"

const SearchPage = () => {
    const router = useRouter()
    console.log(router.query)
    return <div>{router.query.q}</div>
}

export default SearchPage
