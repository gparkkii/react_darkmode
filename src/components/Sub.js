import React from 'react'
import AppLayout from './AppLayout'
import { Link } from 'react-router-dom';

const Sub = () => {
  return (
    <AppLayout>
      <h2> ...SubPage </h2>
      <button>
        <Link to='/'>
          Go back to Home
        </Link>
      </button>
    </AppLayout>
  )
}

export default Sub
