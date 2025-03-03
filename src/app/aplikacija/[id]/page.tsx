import React from 'react'

export default async function AplikacijaPage({params}: {params: Promise<{id: string}>}) {
    const id = (await params).id
    
    return (
    <div></div>
    )
}
