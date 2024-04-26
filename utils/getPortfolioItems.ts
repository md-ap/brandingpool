const getPortfolioItems = async () => {
  const apiEndpoint = '/api/portfolio';

  try {
    const response = await fetch(apiEndpoint);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    // Handle responseData appropriately, e.g., update state
    return responseData;
  } catch (error) {
    // Handle errors gracefully, e.g., display in UI or log to console
    const errorMessage = typeof error === 'string' ? error : JSON.stringify(error);
    console.error('Error:', errorMessage);
    // You may return a default value or an empty array if needed
    return [];
  }
};

export default getPortfolioItems;
