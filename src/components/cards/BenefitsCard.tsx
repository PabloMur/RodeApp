const BenefitCard = ({ title, description, icon }: any) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md min-w-[300px] min-h-[200px] snap-center">
      <div className="text-center mb-4">
        <img src={icon} alt={title} className="w-16 h-16 mx-auto mb-2" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default BenefitCard;
