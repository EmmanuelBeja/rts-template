import Card from "../../../components/Card";

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

const Address: React.FC<Props> = ({ person }) => {
  return (
    <Card title="ADDRESS" clickText="Update">
      <div className="px-5 py-3">
        {person?.address ? (
          <>
          <div>{person?.address?.zipcode} {person?.address?.street}</div>
          <div>{person?.address?.city}{person?.address?.suite ? `, ${person?.address?.suite}` : ''}</div>
          <div>United States</div>
          </>
        ) : (
          <div className="text-slate-400">No address.</div>
        )}
      </div>
    </Card>
  );
};

export default Address;