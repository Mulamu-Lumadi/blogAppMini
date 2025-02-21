export default function form(props) {
    return (
        <div className="mx-auto mt-5 shadow-slate-400 border-slate-300 bg-lime-100 p-6 w-1/2 rounded-md">
            <form action={props.sub}>
                <input
                    className="w-full h-9 bg-slate-50 rounded-sm mb-4 text-base"
                    type="text"
                    name="title"
                    placeholder="Enter title"
                    value={props.title}
                    required />
                <input
                    className="w-full h-9 bg-slate-50 rounded-sm mb-4 text-base"
                    type="number"
                    name="user_id"
                    placeholder="Your ID here"
                    value={props.id}
                    required />
                <textarea
                    className="w-full h-28 bg-slate-50 rounded-sm mb-4 text-base"
                    type="text"
                    name="body"
                    placeholder="Content..."
                    value={props.body}
                    required></textarea>
                <div className="flex justify-end">
                    <button
                        className="p-3 bg-slate-400 text-zinc-700 rounded-md"
                        type="submit"
                    >SUBMIT</button>
                </div>
            </form>
        </div>
    )
}