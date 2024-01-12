import { useState } from "react";
import { regions } from "./regions";
import RegionPopup from "./RegionPopup";

export default function Province() {
  //   const [province, setProvince] = useState();
  const province = regions;
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [name, setname] = useState("");

  const openPopup = (name) => {
    setname(name);
    setIsPopupOpen(true);
    // setItemId(itemId);
  };
  console.log("name :>> ", name);

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div>
      <div className="mt-12 justify-items-center container grid grid-cols-1 gap-6  mx-auto md:grid-cols-3 md:mt-12 ">
        {province.map((item) => {
          return (
            <button onClick={() => openPopup(item.name_en)} key={item.code}>
              <div className="mt-3">
                <h3 className="text-xl font-bold">{item.name_en}</h3>
              </div>

              <img
                src={item.image}
                alt={item.name_en}
                className="hover:scale-110 w-auto h-32 object-cover rounded-lg"
              />
            </button>
          );
        })}
      </div>
      <RegionPopup isOpen={isPopupOpen} onClose={closePopup} name={name} />
    </div>
  );
}
