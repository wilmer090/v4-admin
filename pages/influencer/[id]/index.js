import React from 'react'
import Link from 'next/Link'
const influencer = ({influencer}) => {

    return (
        <div>
            <Link href="/">&larr; Back to list</Link>
            <h3>Profile page of influencer id #{influencer.id}</h3>

        </div>
    )
}

// getServerSideProps
export const getServerSideProps = async (context) => {
    const res = await fetch(`http://localhost:8000/influencers/${context.params.id}`)

    const influencer = await res.json()

    return {
        props: {
            influencer
        }
    }
}
// export const getStaticProps = async (context) => {
//     const res = await fetch(`http://localhost:8000/influencers/${context.params.id}`)

//     const influencer = await res.json()

//     return {
//         props: {
//             influencer
//         }
//     }
// }

// export const getStaticPaths = async () => {
//     const res = await fetch(`http://localhost:8000/influencers`)

//     const influencers = await res.json()
//     const ids = influencers.map(influencer => influencer.id)
//     const paths = ids.map(id => ({params: {id: id.toString()}}))
    
//     return {
//         paths,
//         fallback: false
//     }

// }
export default influencer