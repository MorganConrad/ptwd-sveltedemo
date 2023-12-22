
export async function load() {

  console.log("layout.js");

  let status = {
    userName: "John Doe",
    language: "fr",
    prefersDark: false
  }

  return { status };
}
