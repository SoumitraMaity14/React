import { useSearchParams } from "react-router-dom"

const tabItems = [
    { id: 1, tab: "Overview" },
    { id: 2, tab: "Content" },
    { id: 3, tab: "Profile" }
]

export const TabSearchParams = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const tabFilter = searchParams.get("tab") || "Overview"
    const handaleTabItem = (id: any) => {
        setSearchParams({ tab: id })
    }
    return (
        <div>
            {tabItems.map(tab => (
                <div
                    key={tab.id}
                    className="flex flex-col gap-4 p-4 bg-blue-50"
                    onClick={() => handaleTabItem(tab.tab)}
                >
                    {tab.tab}
                </div>
            ))}
            {
                tabFilter === "Overview" && (
                    <>
                        <h2 className="text-lg">Overview Content</h2>
                    </>
                )
            }
            {
                tabFilter === "Content" && (
                    <>
                        <h2 className="text-lg">Content Content</h2>
                    </>
                )
            }

            {
                tabFilter === "Profile" && (
                    <>
                        <h2 className="text-lg">Profile Content</h2>
                    </>
                )
            }


        </div>
    )
}
