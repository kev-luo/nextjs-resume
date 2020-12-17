import Head from 'next/head'
import { useQuery, gql } from "@apollo/client";
import styles from '../styles/Home.module.css'

import Error from "../components/error";
import Loading from "../components/loading";

const RESUME_QUERY = gql`
  query ResumeQuery {
    bio {
      name
      tagline
      email
      github
      website
      linkedin
      objective
    }
    positions {
      id
      title
      company
      startDate
      endDate
      years
      months
      location
      achievements
    }
  }
`

export default function Home() {
  const { data, loading, error } = useQuery(RESUME_QUERY);

  if(error) {
    return <Error />
  }

  if(loading) {
    return <Loading />
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <pre>
        {JSON.stringify(data)}
      </pre>
    </div>
  )
}
