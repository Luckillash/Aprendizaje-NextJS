// our-domain.com/news
// CARPETAS TAMBIÉN SIRVEN COMO PATH SEGMENTS

// a REALIZA LA PETICIÓN DE UNA NUEVA PÁGINA HTML POR MEDIO DE HTTP, CAUSANDO QUE SE PIERDAN LOS ESTADOS Y DEJE DE SER UNA SINGLE PAGE APPLICATION
import Link from 'next/link'
import { Fragment } from "react"

function NewsPage() {
    return (
        <Fragment>
            <h1>News Page</h1>
            <ul>
                <li>
                    <Link href="/news/nextjs-es-un-buen-framework">
                        NextJS es un buen framework
                    </Link>
                </li>
                <li>Otra noticia</li>
            </ul>
        </Fragment>
    )
}

export default NewsPage