const CategoriesSection = ({ categories }) => {
    return (
      <div className="overflow-x-auto">
        <div className="flex space-x-4 px-4 py-6 lg:grid lg:grid-cols-5 lg:gap-6 lg:px-0">
          {categories.map((category) => (
            <div
              key={category.id}
              className="min-w-[150px] sm:min-w-[200px] lg:w-full bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              {/* Imagen de la categoría */}
              <div className="relative w-full h-32">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                {/* Overlay en la imagen */}
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
  
              {/* Texto de la categoría */}
              <div className="p-4 text-center">
                <h3 className="text-lg text-gray-800 font-semibold hover:text-blue-600">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CategoriesSection;
  