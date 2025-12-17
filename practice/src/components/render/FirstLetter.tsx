

export const FirstLetter = () => {
    const members = [
        { name: "soumitra" },
        { name: "Arun" },
        { name: "Rajkumar" },
        {name:" Varun"},
        {name: "zenia"},
        {name:"Kaju"},
        {name: "chottu"}
    ]
    return (
        <div className="flex relative gap-3">
            {
                members.slice(0,3).map((m, i) => (
                    <div key={i} className=" flex justify-center items-center w-8 h-8 rounded-full text-white font-bold border bg-blue-400">
                        {m.name[0].toUpperCase()}
                    </div>
                ))
            }
            {members.length > 3 &&(
                <div className="text-white font-bold"> +{members.length-3}</div>
            )}
        </div>
    )
}
