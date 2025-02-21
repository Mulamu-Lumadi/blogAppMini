import { query } from "../../app/lib/db";

export default async function edit(req, res) {
    if (req.method === "PATCH") {
        console.log("Request Body:", req.body);
        const { title, body, index } = req.body;

        try {
            const text = `UPDATE posts SET title = $1 body = $2 WHERE id = $3 RETURNING *`;
            const values = [title, body, index]
            const result = await query(text, values);

            res.status(201).json(result.rows);
        } catch (error) {
            console.error(`Error modifying post: ${error}`)
            res.status(500).json({ error: `Internal server error` })
        }
    } else {
        // Handle non-POST requests
        res.setHeader("Allow", ["PATCH"]);
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}