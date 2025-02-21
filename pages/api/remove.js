import { query } from "../../app/lib/db";

export default async function remove(req, res) {
    if (req.method === "DELETE") {
        console.log("Request Body:", req.body);
        const { id } = req.body;

        try {
            const text = `DELETE FROM posts WHERE id = $1 RETURNING *`;
            const values = [id]
            const result = await query(text, values);

            res.status(201).json(result.rows);
        } catch (error) {
            console.error(`Error deleting post: ${error}`)
            res.status(500).json({ error: `Internal server error` })
        }
    } else {
        // Handle non-POST requests
        res.setHeader("Allow", ["DELETE"]);
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}