import React,{useState} from 'react'
import MedicineCard from '../../components/MedicineCard'
import data from "../../data/medicines/Ayurveda.json";
import SearchBar from '../../components/SearchBar';

const Ayurveda = () => {
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (query) => {
    const filtered = data.filter((medicine) =>
      medicine.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <SearchBar placeholder="Search Ayurveda medicines..." onSearch={handleSearch} />
      <div className="flex flex-wrap justify-center">
        {filteredData.map((medicine, index) => (
          <MedicineCard
            key={index}
            name={medicine.name}
            price={medicine.price}
            description={medicine.description}
            image={medicine.image}
          />
        ))}
      </div>
    </div>
  );
};


export default Ayurveda
