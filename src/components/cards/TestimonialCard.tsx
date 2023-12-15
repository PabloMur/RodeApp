const TestimonialCard = ({
  name,
  location,
  rating,
  testimonial,
  date,
  avatar,
}: any) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md m-2">
      <div className="flex items-center mb-4">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-gray-500">{location}</p>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <span className="text-yellow-500">★</span>
          <span className="text-gray-700 ml-2">{rating}</span>
        </div>
        <p className="text-gray-800">{testimonial}</p>
      </div>
      <div className="text-gray-500 text-sm">{date}</div>
    </div>
  );
};

export default TestimonialCard;
