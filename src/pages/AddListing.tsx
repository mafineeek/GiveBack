import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useState } from "react";

export const AddListing = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [reason, setReason] = useState("");
  const [transactionType, setTransactionType] = useState("Oddam za darmo");
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description, reason, transactionType, images });
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl w-full mx-auto mt-10 px-4">
        <h1 className="text-3xl mb-6 text-center">Dodaj Ogłoszenie</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">Tytuł ogłoszenia</label>
            <input
              type="text"
              className="p-2 border rounded-md w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Opis</label>
            <textarea
              className="p-2 border rounded-md w-full h-24"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Dlaczego oddajesz</label>
            <textarea
              className="p-2 border rounded-md w-full h-24"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Zdjęcia</label>
            <div className="border border-dashed border-gray-400 px-4 py-14 rounded-lg text-center">
              <input
                type="file"
                multiple
                className="hidden"
                id="imageUpload"
                onChange={handleImageUpload}
              />
              <label htmlFor="imageUpload" className="cursor-pointer text-blue-600 hover:text-blue-800">
                Kliknij tutaj, aby dodać zdjęcia
              </label>
              <div className="mt-2 flex flex-wrap gap-2">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt={`Dodane zdjęcie ${index + 1}`}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Rodzaj ogłoszenia</label>
            <select
              className="p-2 border rounded-md w-full"
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
              required
            >
              <option value="Oddam za darmo">Oddam za darmo</option>
              <option value="Wymiana">Wymiana</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-primary text-white font-bold rounded-md hover:bg-primary-dark"
          >
            Dodaj ogłoszenie
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AddListing;
