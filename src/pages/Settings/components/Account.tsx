import Card from "../../../components/Card";
import Verified from '@mui/icons-material/Verified';

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
}

const Account: React.FC<Props>  = ({ person }) => {
  const statusColor = {
    "verified": "#5fbb74",
    "pending": "yellow",
    "unverified": "red"
  }

  return (
    <Card title="ACCOUNT INFO">
      <div className="px-5 py-3">
        {person && (
          <div className="flex gap-2">
            <div className="">
              <div className="rounded-full bg-custom-primary text-white font-semibold text-lg w-[70px] h-[70px] flex items-center justify-center">
                {person?.name ? person?.name.charAt(0) : ':('}
              </div>
            </div>
            <div>
              <div>{person?.name}</div>
              <div>10/23/1990</div>
              <div>Italian</div>
            </div>
          </div>
        )}
        <hr className="my-2" />
        <div>
          <div className="flex">
            <div className="w-1/2 text-slate-400">Identity Check</div>
            <div className="text-custom-dark font-semibold flex items-center">
              Verified
              <Verified
                sx={{
                  color: statusColor[person?.verification?.identity as keyof typeof statusColor]
                }}
                fontSize="small" />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 text-slate-400">Accreditation Check</div>
            <div className="text-custom-dark font-semibold flex items-center">
              Accredited
              <Verified
                sx={{
                  color: statusColor[person?.verification?.phone as keyof typeof statusColor]
                }}
                fontSize="small" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Account;