"use client"; // This marks the component as a Client Component

import { useState } from 'react';
import { useParams } from 'next/navigation'; // Import useParams

const MenuPage = () => {
  const { id } = useParams(); // Get the dynamic 'id' from the route

  // Mock data for food items including image URLs
  const menuItems = [
    {
      name: 'Jollof rice',
      description: 'Red bell peppers, curry powder, chicken broth, long grain rice',
      price: 3000,
      image: 'https://via.placeholder.com/150', // Replace with your image URL
    },
    {
      name: 'Fried rice',
      description: 'Beef liver, green beans, curry powder, cooked rice, cayenne',
      price: 2500,
      image: 'https://via.placeholder.com/150', // Replace with your image URL
    },
    {
      name: 'Spaghetti',
      description: 'Red wine, fish sauce, leftover anchovy paste, tomato paste',
      price: 2000,
      image: 'https://via.placeholder.com/150', // Replace with your image URL
    },
    {
      name: 'Afang soup',
      description: 'Dried fish, palm oil, frozen spinach, roasted turkey, pre',
      price: 3000,
      image: 'https://via.placeholder.com/150', // Replace with your image URL
    },
    {
      name: 'Rice and beans',
      description: 'Beans, scotch bonnet, fresh tomatoes, cooked rice',
      price: 2500,
      image: 'https://via.placeholder.com/150', // Replace with your image URL
    },
  ];

  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered menu items based on the search query
  const filteredMenuItems = menuItems.filter(item => {
    const itemNameMatch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const itemPriceMatch = item.price.toString().includes(searchQuery);
    return itemNameMatch || itemPriceMatch; // Match by name or price
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Table {id}</h1>
          {/* Search Input */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search food..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
        </div>
      </header>

      <div className="mt-8 max-w-4xl mx-auto px-4">
        {filteredMenuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow-md"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div className="ml-4 flex-1">
              <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
              <p className="text-sm text-gray-500">{item.description}</p>
              <p className="text-orange-500 font-bold mt-1">₦{item.price}</p>
            </div>
            <button className="ml-4 bg-orange-500 text-white px-4 py-2 rounded-lg">
              Order
            </button>
          </div>
        ))}

        {filteredMenuItems.length === 0 && (
          <div className="text-center text-gray-500 mt-4">
            No items found.
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
