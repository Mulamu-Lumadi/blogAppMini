'use client'

import Form from "../components/form";

export default function Edit() {

    async function edit(formData) {
        const title = formData.get("title");
        const body = formData.get("body");

        try {
            const response = await fetch("/api/edit", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, body, index }),
            });
            if (!response.ok) throw new Error("Failed to edit post");
            const modPost = await response.json();
            console.log(`MODIFIED POST: ${JSON.stringify(modPost)}`);
            setPosts([...posts, modPost]);
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    return (
        <Form sub={edit} />
    )
}