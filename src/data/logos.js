export const cghData = async (filter) => {
  const url = "https://bpcghheadless.wpenginepowered.com";
  let filteredUrl = `${url}/wp-json/cgh/work/?total=-1`;

  if (filter === "home") {
    filteredUrl = `${url}/wp-json/cgh/work/?total=-1&home=true`;
  }

  if (filter === "curated") {
    filteredUrl = `${url}/wp-json/cgh/work/?total=-1&type=logo&sort=curated`;
  }

  if (filter === "alphabetical") {
    filteredUrl = `${url}/wp-json/cgh/work/?total=-1&type=logo&sort=az`;
  }

  if (filter === "newest") {
    filteredUrl = `${url}/wp-json/cgh/work/?total=-1&type=logo&sort=new`;
  }

  try {
    const response = await fetch(filteredUrl, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`Data not found: ${response.statusText}`);
    }
    const data = await response.json();
    const newData = structuredClone(data);
    console.log(newData);
    return data;
  } catch (error) {
    throw new Error(`Data not found: ${response.statusText}`);
  }
};
