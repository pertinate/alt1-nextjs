"use client"

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { api } from "~/trpc/react";

export default () => {
    const [query, setQuery] = useState('from tRPC')
    const hello = api.post.hello.useQuery({ text: query })
    return <><p>hello rs3</p>
        <p>API result: {hello.data?.greeting}</p>
        <button onClick={() => setQuery('world')}>test</button></>
}