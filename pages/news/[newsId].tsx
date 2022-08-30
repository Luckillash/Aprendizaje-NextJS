// our-domain.com/news/something-important
// AL AGREGAR [] AL FILE LA RUTA SE VUELVE DINÁMICA, Y ES ACCEDIDA POR EL ID newsId

import { useRouter } from 'next/router'

function DetailPage () {
    const router = useRouter()

    const newsId = router.query.newsId

    // fetch data con el newsId

    return (
        <h1>Detail page</h1>
    )
}

export default DetailPage