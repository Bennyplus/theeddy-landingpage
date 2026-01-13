
const API_KEY = "0Mb4Z0LIwZ8r49FKarUyVg";
// TODO: Replace with your actual ConvertKit Form ID which is required for the API.
// You can find this in your ConvertKit dashboard when viewing the form (it's in the URL or embed code).
const FORM_ID = "YOUR_FORM_ID"; 

const BASE_URL = "https://api.convertkit.com/v3";

export const subscribeToConvertKit = async (email: string, firstName: string) => {
  const url = `${BASE_URL}/forms/${FORM_ID}/subscribe`;

  const payload = {
    api_key: API_KEY,
    email: email,
    first_name: firstName,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to subscribe");
    }

    return data;
  } catch (error) {
    console.error("ConvertKit API Error:", error);
    throw error;
  }
};
