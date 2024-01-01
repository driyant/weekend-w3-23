// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { method, body, query } = req;

  switch (method) {
    case "GET":
      try {
        const request = await fetch(
          "https://paace-f178cafcae7b.nevacloud.io/api/notes"
        );
        const notes = await request.json();
        res.status(200).json(notes);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong!" });
      }
      break;

    case "POST":
      try {
        const requestData = await body;
        const result = await saveNoteToDatabase(requestData);
        res.status(201).json({ message: "Note added successfully", result });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to process the request" });
      }
      break;
    default:
      res.status(405).json({ message: "Method Not Allowed" });
  }
}

async function saveNoteToDatabase(data) {
  try {
    fetch("https://paace-f178cafcae7b.nevacloud.io/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return { status: "success" };
  } catch (error) {
    res.status(500).json({ message: `Something went wrong! ${error}` });
  }
}
