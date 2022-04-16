import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Home from '../components/Home';
import { Education } from '../types/Education';
import { Experience } from '../types/Experience';
import { Info } from '../types/Info';

type UserInfo = {
  info: Info[];
  experience: Experience[];
  education: Education[];
}

const Index: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  return (
    <>
      <Home data={data} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<any> = async () => {
  const res = await fetch('http://localhost:3000/api/info');
  const data: UserInfo = await res.json();
  return {
      props: {
          data
      }
  }
}

export default Index
