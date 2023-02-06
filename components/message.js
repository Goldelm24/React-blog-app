export default function Message({ children, avatar, username, description }){
    return(
        <div className="bg-white border p-8 rounded-lg shadow-lg mt-1 hover:bg-slate-100">
            <div className="flex items-center gap-2">
                <img src={avatar} className="w-10 rounded-full" />
                <h2 className="font-bold">{username}</h2>
            </div>
            <div className="py-4">
                <p>{description}</p>
            </div>
            {children}
        </div>
    )
}