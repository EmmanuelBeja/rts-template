import Card from "../../../components/Card";

const Tax: React.FC  = () => {
  return (
  <Card title="TAX FORM" clickText="View">
    <div className="px-5 py-3 flex">
      <div className="w-1/3 text-slate-400">Status</div>
      <div>Signed</div>
    </div>
  </Card>
  )
};

export default Tax;