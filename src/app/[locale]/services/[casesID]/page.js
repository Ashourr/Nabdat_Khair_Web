import CsaesService from '@/components/services/servicePage/csaesService/CsaesService'
import React from 'react'

export default function page({params}) {
  let {casesID} = params
  return (
    <div>
      <CsaesService casesID={casesID}/>
    </div>
  )
}
