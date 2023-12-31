import { useLayoutEffect } from 'react';

import Account from './components/Account';
import Contact from './components/Contact';
import Password from './components/Password';
import Address from './components/Address';
import Payment from './components/Payment';
import Tax from './components/Tax';
import Preloader from '../../components/Preloader';

import { useActions } from '../../app/hooks/useActions';
import { useTypedSelector } from '../../app/hooks/useTypedSelector';

const Settings: React.FC  = () => {
  const { getPerson, getAddress, getVerification } = useActions();
  const { person, error, loading } = useTypedSelector(state => state.settings);
  const userId = '1';

  useLayoutEffect(() => {
    getPerson(userId);
    getAddress(userId);
    getVerification(userId);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) { return <Preloader />}
  if (error) { return <div>{error}</div> }

  return (
    <>
    <div className="px-14 py-5">
      <div className="font-bold text-custom-dark text-2xl">Settings</div>
      <div className="md:flex md:justify-between md:gap-4 mt-5">
        <div className="md:w-1/2 sm:w-full">
          <Account person={person} />
          <Contact person={person} loading={loading} />
          <Password />
        </div>
        <div className="md:w-1/2 sm:w-full">
          <Address person={person} />
          <Payment />
          <Tax />
        </div>
      </div>
    </div>
    </>
  );
}

export default Settings;