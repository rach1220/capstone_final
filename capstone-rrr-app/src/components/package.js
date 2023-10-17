import React, { useState } from 'react';
import '../assets/css/packages.css';

function GroomingForm() {
  // Define state variables for selected packages and total amount
  const [selectedPackages, setSelectedPackages] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // Grooming packages data
  const groomingPackages = [
    {
      id: 1,
      name: 'Full Grooming - Small Breed (10kg below)',
      price: 550,
    },
    {
      id: 2,
      name: 'Full Grooming - Medium Breed (11-30kg below)',
      price: 750,
    },
    {
      id: 3,
      name: 'Full Grooming - Large Breed (31-40kg below)',
      price: 950,
    },
    {
      id: 4,
      name: 'Full Grooming - Giant Size (41-50kg above)',
      price: 1250,
    },
    {
      id: 6,
      name: 'Full Grooming - Cat',
      price: 750,
    },
   
    {
      id: 8,
      name: 'Shampoo & Blow Dry for Small Breed',
      price: 250,
    },
    {
      id: 9,
      name: 'Bath & Blow Dry - Small Breed (10kg below)',
      price: 250,
    },
    {
      id: 10,
      name: 'Bath & Blow Dry - Medium-Large (11kg and up)',
      price: 450,
    },
    {
      id: 11,
      name: 'Medicated Bath & Blow Dry - Small Breed (10kg below)',
      price: 250,
    },
  
  ];

  // Function to handle package selection
  const handlePackageSelection = (packageId) => {
    const packageIndex = selectedPackages.indexOf(packageId);
    const updatedPackages = [...selectedPackages];

    if (packageIndex === -1) {
      // Add the package to the selected packages list
      updatedPackages.push(packageId);
    } else {
      // Remove the package from the selected packages list
      updatedPackages.splice(packageIndex, 1);
    }

    // Update the selected packages and calculate the total amount
    setSelectedPackages(updatedPackages);
    const total = updatedPackages.reduce((sum, packageId) => {
      const selectedPackage = groomingPackages.find((pkg) => pkg.id === packageId);
      return sum + (selectedPackage ? selectedPackage.price : 0);
    }, 0);

    setTotalAmount(total);
  };

  return (
    <div>
      <div className="package-card">
        <form>
        <h2 className="h2-grooming">Grooming Packages</h2>
          {groomingPackages.map((pkg) => (
            <div key={pkg.id} className="package-card-body">
              <label>
                <input
                  type="checkbox"
                  checked={selectedPackages.includes(pkg.id)}
                  onChange={() => handlePackageSelection(pkg.id)}
                />
                {pkg.name} - ₱{pkg.price.toFixed(2)}
              </label>
            </div>
          ))}
                <div className="total-amount">
                  <h3>Total Amount: ₱{totalAmount.toFixed(2)}</h3>
                </div>
        </form>
      </div>
    </div>
  );
}

export default GroomingForm;