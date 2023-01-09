// Initialize
const baseUrl = 'https://mocki.io/v1/52c41978-6e31-4ea3-b917-01899e3ed373';
// End initialize

// Functions

// GET
export async function AllProducts() {
  try {
    const response = await fetch(`${baseUrl}`);
    const results = await response.json();

    return results;
  } catch (err) {
    return err;
  }
}
// End Functions
