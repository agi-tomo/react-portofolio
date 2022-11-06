import { useRouter } from "next/router";

export default function userDetail() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div>
            <h2>Hallo {id}</h2>
        </div>
    );
}
