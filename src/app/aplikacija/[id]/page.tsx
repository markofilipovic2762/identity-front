import { AppTable } from "@/components/table-app";
import { getAppAuth, getAppById } from "@/lib/functions"

export default async function AplikacijaPage({params}: {params: Promise<{id: string}>}) {
    const id = (await params).id
    const aplikacija = await getAppById(parseInt(id));

    const aplikacijaList = await getAppAuth(parseInt(id));

    //console.log(aplikacija);
    
    return (
    <div>
        <h1 className="text-2xl font-bold">Aplikacija {aplikacija.name}</h1>
        <AppTable aplikacijaList={aplikacijaList} />
    </div>
    )
}
