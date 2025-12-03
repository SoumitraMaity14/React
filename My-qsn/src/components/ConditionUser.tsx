



export const ConditionUser = ({
    isOnline,
    name,
    hideOffline,
    isPremium,
    isNewUser,
    role }: {
        isOnline: boolean,
        name: string,
        hideOffline?: boolean,
        isPremium?: string,
        isNewUser?: string,
        role: string
    }) => {


    if (!isOnline && !hideOffline) { return }
    let specfiedrole = null;


    if (role === "admin") {
        specfiedrole = <div>🔑Admin</div>
    }
    else if (role === "moderate") {
        specfiedrole = <div>👮Moderate</div>
    }
    else if (role === "boss") {
        specfiedrole = <div>💎Boss</div>
    }

    return (
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
            {name}
            {isNewUser && <span>⭐</span>}
            {isPremium && <span>👌</span>}
            {specfiedrole}
            <span>{isOnline ? "🟢Available" : "offline"} </span>
            <p>{isOnline ? "available for chat" : "not available"}</p>
            {
                isOnline ? (
                    <button className="p-2 border shadow-sm">send message</button>
                ) :
                    (<small>check back letter</small>)
            }
        </div>
    )
}
