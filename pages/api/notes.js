// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  try {
    const request = await fetch(
      "https://paace-f178cafcae7b.nevacloud.io/api/notes"
    );
    const notes = await request.json();
    res.status(200).json(notes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
}
