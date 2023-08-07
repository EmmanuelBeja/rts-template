import React, { useState, useEffect } from "react";

import Card from "../../../components/Card";
import Verified from '@mui/icons-material/Verified';

import { useActions } from '../../../app/utils/hooks/useActions';

interface Person {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  address?: AddressInterface;
  verification?: Verification;
}
interface AddressInterface {
  id?: number;
  street?: string;
  suite?: string;
  city?: string;
  zipcode?: string;
}
interface Verification {
  id?: number;
  identity?: string;
  payment_method?: string;
  address?: string;
  phone?: string;
}
interface Props {
  person?: Person;
  loading?: boolean;
}

const Contact: React.FC<Props>  = ({ person, loading }) => {
  const [inputs, setInputs] = useState({ email: '' });
  const [edit, setEdit] = useState<boolean>(false);
  const { updatePerson } = useActions();

  useEffect(() => {
    if (person) {
      setInputs({ email: person.email || '' });
    }
  }, [person]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  const handleSubmit = () => {
    updatePerson({ ...person, email: inputs.email });
    setEdit(!edit);
  }

  const statusColor = {
    "verified": "#5fbb74",
    "pending": "yellow",
    "unverified": "red"
  }

  const title = (
    <div className="flex items-center">
      CONTACT INFO
      <Verified
        fontSize="small"
        sx={{
          color: statusColor[person?.verification?.phone as keyof typeof statusColor]
        }} />
    </div>
  );

  return (
  <Card title={title} handleClick={handleSubmit} clickText={edit ? "Cancel" : "Update"}>
    <div className="px-5 py-3">
      <div className="flex">
        <div className="w-1/3 text-slate-400">Email</div>
        <div>
          {edit ? (
            <div className="flex gap-2">
              <input
                className="border border-custom-primary bg-white text-primary rounded px-2 py-1"
                type="email"
                name="email"
                value={inputs.email}
                onChange={handleChange}
              />
              <button
                type="button"
                className="text-xs text-white bg-custom-primary px-2 rounded-lg py-0"
                onClick={() => handleSubmit()}
                disabled={loading}>
                  {loading ? 'Loading...' : 'SUBMIT'}
              </button>
            </div>
          ) : (
            <div>{person?.email}</div>
          )}
        </div>
      </div>
      <div className="flex">
        <div className="w-1/3 text-slate-400">Phone</div>
        <div>
          <div>+254 712991415</div>
        </div>
      </div>
    </div>
  </Card>
  );
}

export default Contact;