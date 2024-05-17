import { FormData } from '@/components/contact';

export const sendEmail = async (data: FormData) => {
  const apiEndpoint = '/api/email';

  try {
    console.log(data)
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    // Handle responseData appropriately, e.g., display in UI
  } catch (error) {
    // Handle errors gracefully, e.g., display in UI or log to console
    const errorMessage = typeof error === 'string' ? error : JSON.stringify(error);

    console.error('Error:', errorMessage);
    alert('An error occurred. Please try again later.');
  }
};
