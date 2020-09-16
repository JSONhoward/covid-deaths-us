import React from 'react'

import Layout from '../components/Layout/Layout'
import Spinner from '../components/Spinner'

const MainList = React.lazy(() => import('../components/MainList'))

const Home = () => {
    return (
        <Layout>
            <React.Suspense fallback={<Spinner />}>
                <MainList />
            </React.Suspense>
        </Layout>
    )
}

export default Home
