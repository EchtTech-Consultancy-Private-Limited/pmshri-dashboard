import Sqafbanner from 'src/components/SQAF/sqafbanner';
import Sqafabout from 'src/components/SQAF/sqafabout';
import Sqafcategory from 'src/components/SQAF/sqafcategory';
import '../components/SQAF/sqaf.css';
import React from 'react'

export default function Sqaf() {
    return (
        <>
        <Sqafbanner />
        <Sqafabout />
        <Sqafcategory />
        </>
    )
}