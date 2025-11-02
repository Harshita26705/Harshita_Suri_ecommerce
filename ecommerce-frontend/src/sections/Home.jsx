import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import './Home.css'; // Optional: add styling if needed

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5293/api/products')
      .then(res => {
        console.log('Fetched products:', res.data);
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-heading">Our Services</h1>

      {loading ? (
        <p>Loading services...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>Unable to load services. Is your backend running?</p>
      ) : products.length === 0 ? (
        <p>No services available at the moment.</p>
      ) : (
        <div className="product-grid">
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
