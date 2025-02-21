import { query } from "../../app/lib/db";

export default async function send(req, res) {
    if (req.method === "POST") {
        console.log("Request Body:", req.body);
        const { title, body, id } = req.body;

        try {
            const text = `INSERT INTO posts (title, body, user_id) VALUES($1,$2,$3) RETURNING *`;
            const values = [title, body, id]
            const result = await query(text, values);

            res.status(201).json(result.rows[0]);
        } catch (error) {
            console.error(`Error inserting post: ${error}`)
            res.status(500).json({ error: `Internal server error` })
        }
    } else {
        // Handle non-POST requests
        res.setHeader("Allow", ["POST"]);
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}