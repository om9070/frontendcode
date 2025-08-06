import dynamic from 'next/dynamic';

const LeftModule = dynamic(() => import('@/components/home/technology/leftModule'), {
  loading: () => <p>Loading...</p>,
});


const Technology = () => {
  return (
    <>
      <h1 className="text-center my-5 HeadingAction color">TECHNOLOGY</h1>
      <LeftModule />
    </>
  );
};
export default Technology;
