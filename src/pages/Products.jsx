import { Button, Pagination, Typography } from '@mui/material'
import React from 'react'
import { products } from '../assets/assets'
import Card from '../components/Card'


const Products = () => {

    const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <section id='productsPage'>
        <div className='max-w-7xl mx-auto flex'>
            <div className='w-2/12 border-r border-gray-400'>
                <div className='mt-8 ml-4'>
                    <p className='font-poppins font-normal text-sm text-text-2/50'>home   /  shop</p>
                </div>
                <div className="flex flex-col gap-1 items-start py-10">

                    <h2 className='font-poppins font-bold text-xl text-[#262626] mb-2'>Shop by Color</h2>

                  <Button sx={"color: black;"}>
                    <li className="list-none font-poppins font-normal text-base text-black">
                      Woman’s Fashion
                    </li>
                  </Button>
                  <Button sx={"color: black;"}>
                    <li className="list-none font-poppins font-normal text-base text-black">
                      Men’s Fashion
                    </li>
                  </Button>
                  <Button sx={"color: black;"}>
                    <li className="list-none font-poppins font-normal text-base text-black">
                      Electronics
                    </li>
                  </Button>
                  <Button sx={"color: black;"}>
                    <li className="list-none font-poppins font-normal text-base text-black">
                      Home & Lifestyle
                    </li>
                  </Button>
                  <Button sx={"color: black;"}>
                    <li className="list-none font-poppins font-normal text-base text-black">
                      Medicine
                    </li>
                  </Button>
                  <Button sx={"color: black;"}>
                    <li className="list-none font-poppins font-normal text-base text-black">
                      Sports & Outdoor
                    </li>
                  </Button>
                  <Button sx={"color: black;"}>
                    <li className="list-none font-poppins font-normal text-base text-black">
                      Baby’s & Toys
                    </li>
                  </Button>
                  <Button sx={"color: black;"}>
                    <li className="list-none font-poppins font-normal text-base text-black">
                      Groceries & Pets
                    </li>
                  </Button>
                  <Button sx={"color: black;"}>
                    <li className="list-none font-poppins font-normal text-base text-black">
                      Health & Beauty
                    </li>
                  </Button>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='font-poppins font-bold text-xl text-[#262626]'>Shop by Color</h2>
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center gap-3'>
                            <div className='w-4 h-4 bg-black rounded-full'></div>
                            <p className='font-poppins font-normal text-base text-[#767676]'>Color 1</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='w-4 h-4 bg-[#FF0000] rounded-full'></div>
                            <p className='font-poppins font-normal text-base text-[#767676]'>Color 2</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='w-4 h-4 bg-[#00FF38] rounded-full'></div>
                            <p className='font-poppins font-normal text-base text-[#767676]'>Color 3</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-10/12'>
                <div className='w-full flex justify-end'>
                    <div className='flex items-center gap-2 my-6'>
                        <p className='font-poppins font-normal text-base text-black/90'>Show :</p>
                        <input className='w-20 h-7.5 border-2 border-gray-400 px-4 text-gray-700 rounded-sm focus:outline-none mr-6' type="text" value={6} />
                    </div>
                </div>
                <div className='w-full flex justify-between flex-wrap gap-4 p-12'>
                    {
                        products.map((item) => (
                            <div key={item.id}>
                                <Card productImg={item.image} productName={item.name} newProductPrice={`$${item.price - (item.price * (item.discount / 100)).toFixed(2)}`} productPrice={`$${item.price}`} rating={item.rating} />
                            </div>
                        ))
                    }
                    <div className='flex items-center gap-6 py-4'>
                        <Typography>Page: {page}</Typography>
                        <Pagination count={10} page={page} onChange={handleChange} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Products
