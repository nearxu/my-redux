import React from 'react'
import Link from './Link'
import { FilterType } from '@/constants/filterType'

import './index.css'

function Filters () {

  return (
    <div className="filter">
      <Link type={FilterType.ALL}>{FilterType.ALL}</Link>
      <Link type={FilterType.COMPLETED}>{FilterType.COMPLETED}</Link>
      <Link type={FilterType.UNCOMPLETED}>{FilterType.UNCOMPLETED}</Link>
    </div>
  )

}

export default Filters