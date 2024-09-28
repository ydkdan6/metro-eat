"use client"; // This marks the component as a Client Component

import { useParams } from 'next/navigation'; // Import useParams
import { useEffect, useState } from 'react'; // Import useEffect and useState for state management

// Define an interface for the menu items
interface MenuItem {
  name: string;
  description: string;
  price: number;
  image: string; // Add image field to the interface
}

const MenuPage: React.FC = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>(); // Get the dynamic 'restaurantId' from the route
  const [table, setTable] = useState<string | null>(null); // State for 'table'

  // Mock menu data (hardcoded for now)
  const menuItems: MenuItem[] = [
    { name: 'Jollof Rice', description: 'Delicious jollof rice', price: 3000, image: 'https://via.placeholder.com/150' },
    { name: 'Fried Rice', description: 'Tasty fried rice', price: 2500, image: 'https://via.placeholder.com/150' },
    { name: 'Spaghetti', description: 'Italian spaghetti', price: 2000, image: 'https://via.placeholder.com/150' },
    { name: 'Afang Soup', description: 'Traditional soup', price: 3000, image: 'https://via.placeholder.com/150' },
  ];

  const [searchQuery, setSearchQuery] = useState<string>(''); // State for search query

  useEffect(() => {
    // Get 'table' from the query parameters on the client side
    if (typeof window !== 'undefined') {
      const tableFromUrl = new URLSearchParams(window.location.search).get('table');
      setTable(tableFromUrl);
    }
  }, []); // Empty dependency array to ensure it runs only once on the client side

  // Filter menu items based on the search query
  const filteredMenuItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Restaurant {restaurantId}, Table {table}
          </h1>
          {/* Search Input */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search food..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
        </div>
      </header>

      <div className="mt-8 max-w-4xl mx-auto px-4">
        {filteredMenuItems.length > 0 ? (
          filteredMenuItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow-md">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
              <div className="ml-4 flex-1">
                <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-orange-500 font-bold mt-1">₦{item.price}</p>
              </div>
              <button className="ml-4 bg-orange-500 text-white px-4 py-2 rounded-lg">
                Order
              </button>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 mt-4">No items found.</div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
