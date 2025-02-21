import Link from "next/link";

export default function posts(props) {
    return (<div>
        {props.messages.map((message) => (
            <div className="mx-auto rounded-md w-1/2 my-6 p-5 bg-slate-200" key={message.id}>
                <small className="bg-white rounded-sm">{message.user_id}</small>
                <h2 className="text-xl text-slate-700 font-bold my-1">{message.title}</h2>
                <p className="text-base">{message.body}</p>
                <div className="flex justify-end space-x-3 mt-3">
                    <Link href={'/edit'}><button
                        className="p-4 rounded-md bg-slate-400">EDIT</button></Link>
                    <button onClick={() => {
                        props.delFunc(message.id);
                    }} className="p-4 rounded-md bg-red-400">DELETE</button>
                </div>
            </div>
        ))}
    </div>)
}