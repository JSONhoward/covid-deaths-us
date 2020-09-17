import React from 'react'

import Layout from '../components/Layout/Layout'
import Spinner from '../components/Spinner'

const Graph = React.lazy(() => import('../components/Graph'))

const Home = () => {
    return (
        <Layout>
            <React.Suspense fallback={<Spinner />}>
                <Graph />
            </React.Suspense>
        </Layout>
    )
}

export default Home
