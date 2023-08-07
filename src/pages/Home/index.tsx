import { Link} from 'react-router-dom';

const Home: React.FC  = () => {
return (         
  <div className="px-5">
  <div className="flex flex-col justify-center items-center text-2xl font-bold mt-24 mb-10">
    <div className="">
      Hi, I am Emmanuel Chayu
    </div>
    <div className="">
      Senior Frontend Engineer
    </div>
  </div>
  <div className="flex justify-center items-center gap-2">
    <div className="border-2 border-custom-primary px-3 py-1 rounded-md text-custom-primary">
      <h1 className="text-lg">
        <Link to='https://www.linkedin.com/in/chayu-beja-634220aa/'>LEARN MORE</Link>
      </h1>
    </div>
    <div className="border-2 border-custom-warning bg-custom-warning px-3 py-1 rounded-md text-white">
      <h1 className="text-lg"><Link to='/settings'>SAMPLE WORK</Link></h1>
    </div>
  </div>
  </div>
);
}
export default Home;