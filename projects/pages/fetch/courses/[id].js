import { useRouter } from 'next/router';

const Courses = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Course: {id}</p>
}

export default Courses;