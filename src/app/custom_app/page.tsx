import { api } from "~/trpc/server";
import CustomApp from "../_components/custom_app"; import { unstable_noStore as noStore } from "next/cache";

export default async function Page() {
    noStore();
    return (<div>
        <CustomApp />
    </div>)
}