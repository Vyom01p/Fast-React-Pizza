import { useSelector } from 'react-redux';
import CreateUser from '../faetures/user/CreateUser'
import Button from './Button';
function Home() {
  const username = useSelector(state=>state.user.username);
  return (
    <div className='h-full px-4 py-10 text-center sm:py-16'>
      <h1 className="text-xl font-semibold  mb-8 sm:px-6 md:text-xl px-4">
        The best pizza.
        <br />
       <span className="text-yellow-500"> Straight out of the oven, straight to you.</span>
      </h1>
      {username=== '' ?  <CreateUser/> :<Button type='primary' to='/menu'>Continue Ordering , {username}</Button>}
    </div>
  );
}

export default Home;
