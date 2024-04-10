import { FormData } from '@/components/contact';

export const sendEmail = async(data: FormData) => {
  const apiEndpoint = '/api/email';

  await fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}
