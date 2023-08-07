import { useEffect } from 'react';

import Account from './components/Account';
import Contact from './components/Contact';
import Password from './components/Password';
import Address from './components/Address';
import Payment from './components/Payment';
import Tax from './components/Tax';

import { useActions } from '../../app/utils/hooks/useActions';
import { useTypedSelector } from '../../app/utils/hooks/useTypedSelector';

const Settings: React.FC  = () => {
  const { getPerson, getAddress, getVerification } = useActions();
  const { person, error, loading } = useTypedSelector(state => state.settings);
  const userId = '1';

  useEffect(() => {
    getPerson(userId);
    getAddress(userId);
    getVerification(userId);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) { return <div>Loading...</div>}
  if (error) { return <div>{error}</div> }

  return (
    <>
    <div className="px-14 py-5">
      <div className="font-bold text-custom-dark text-2xl">Settings</div>
      <div className="flex justify-between gap-4 mt-5">
        <div className="w-1/2">
          <Account person={person} />
          <Contact person={person} loading={loading} />
          <Password />
        </div>
        <div className="w-1/2">
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