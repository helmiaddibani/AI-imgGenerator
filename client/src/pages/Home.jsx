import React, { useState, useEffect } from 'react'
import { Loader, Card, FormField} from '../components'


const Home = () => {
    const [loading, setLoading] = useState(false) // USESTATE HOOK: 
    const [allPosts, setAllPosts] = useState(null)

    const [searchText, setSearchText] = useState('')

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>The community showcase</h1>
        <p className='mt-2 text-[#666e75] text-[14px] max-w[500px]'>Browse through the collection generated by Dall-E</p>        
      </div>
      <div className='mt-16'>
        <FormField />
      </div>

      <div className='mt-10'>
        {loading ? (  /* if it is loading */
          <div className='flex justify-center items-center'>
            <Loader />
          </div>

        ) : (

          <>
            {searchText && (
              <h2 className='font-medium text-[#666e75] text-xl mb-3'>
                Showing Result for <span className='text-[#222328]'>{searchText</span>
              </h2>
            )}
          </>

        )
      }
      </div>
    
    </section>
  )
}

export default Home