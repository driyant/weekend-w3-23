// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { method, body, query } = req;
  const { id } = query;

  switch (method) {
    case "DELETE":
      try {
        const result = await deleteNoteFromDatabase(id);
        res.status(200).json({ message: "Note deleted successfully", result });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong: " + error });
      }
      break;
    default:
      res.status(405).json({ message: "Method Not Allowed" });
  }
}

async function deleteNoteFromDatabase(noteId) {
  try {
    fetch(
      `https://paace-f178cafcae7b.nevacloud.io/api/notes/delete/${noteId}`,
      {
        method: "DELETE",
      }
    );
    return { status: "success" };
  } catch (error) {
    res.status(500).json({ message: `Something went wrong! ${error}` });
  }
}
