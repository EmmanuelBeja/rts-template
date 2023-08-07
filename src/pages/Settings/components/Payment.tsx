import Card from "../../../components/Card";

const Payment: React.FC  = () => {
  return (
  <Card title="PAYMENT METHODS" clickText="Manage">
    <div className="px-5 py-3">
      <div className="">
        <div className="flex gap-2">
          <div className="text-custom-dark">ACH</div>
          <div className="bg-custom-warning px-2 rounded-xl text-white text-xs font-semibold flex items-center justify-center">DEFAULT</div>
        </div>
        <div>Chase Bank</div>
        <div>Savings Account</div>
        <div><span className="text-custom-dark">****</span> 1225</div>
      </div>
      <hr className="my-2"/>
      <div className="">
        <div className="text-md font-semibold">PAYOUT METHOD</div>
        <div>Your ACH payment method will be used for payout.</div>
      </div>
    </div>
  </Card>
  )
};

export default Payment;