// Importeer de benodigde modules
import axios from 'axios';
import { useEffect, useState } from 'react';

// Je Next.js-component
const CustomerList = () => {
  // API-token voor Basic Authentication
  //const [apiToken, setApiToken] = useState();
  const apiToken = 'bWF4dmFud2lqbmVuOjE3TUB1ZDgxOA==';

  
  console.log('apiToken: '+apiToken)

  // State om klantgegevens op te slaan
  const [customers, setCustomers] = useState([]);

  // Effect hook om gegevens op te halen bij het laden van de component
  useEffect(() => {
    // Functie om gegevens op te halen
    const fetchCustomers = async () => {
      try {
        // Maak een Axios-verzoek naar het API-endpoint met Basic Authentication-header
        const response = await axios.get('https://api.maxvanwijnen.nl/photos/customer/list/', {
          headers: {
            Authorization: `Basic ${apiToken}`
          }
        });

        // Sla de klantgegevens op in de staat
        setCustomers(response.data);
      } catch (error) {
        // Behandel fouten indien nodig
        console.error('Fout bij het ophalen van klantgegevens:', error);
      }
    };

    // Roep de functie aan om gegevens op te halen
    fetchCustomers();
  }, [apiToken]); // Voeg apiToken toe aan de afhankelijkheidsarray om ervoor te zorgen dat de hook opnieuw wordt uitgevoerd wanneer de token verandert
console.log(customers)
  return (
    <div>
      <h1>Klantenlijst</h1>
      <ul>
        {/* Toon de klantgegevens in een lijst */}
        {customers.map((customer) => (
          <li key={customer.id}>{customer.first_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
