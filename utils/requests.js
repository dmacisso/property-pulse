const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
//*MARK: Fetch all  properties

async function fetchProperties() {
  try {
    //* Handle missing API domain
    if (!apiDomain) {
      console.log('Missing API domain');
      return [];
    }
    const res = await fetch(`${apiDomain}/properties`, {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch properties');
    return await res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

//* Fetch single property
async function fetchProperty(id) {
  try {
    //* Handle missing API domain
    if (!apiDomain) {
      console.log('Missing API domain');
      return null;
    }
    const res = await fetch(`${apiDomain}/properties/${id}`);
    if (!res.ok) throw new Error('Failed to fetch properties');
    return await res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { fetchProperties, fetchProperty };
