import { query } from "../../app/lib/db.js";

export default async function posts(req, res) {
    try {
        const result = await query('SELECT * FROM posts');
        res.status(200).json(result.rows)
    } catch (error) {
        console.error(`Error fetching users: ${error}`);
        res.status(500).json({ error: `Internal Server Error` });
    }
}

