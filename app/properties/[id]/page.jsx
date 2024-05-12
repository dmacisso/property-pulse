'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const PropertyPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;
      try {
        const property = await fetch(`/api/properties/${id}`);
        const data = await property.json();
        setProperty(data);
      } catch (error) {
        console.error('Error fetching property data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (property === null) fetchPropertyData();
  }, [id, property]);
  return <div>Property Page</div>;
};

export default PropertyPage;
