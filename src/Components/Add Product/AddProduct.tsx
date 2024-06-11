import React from 'react';
import { GoXCircle } from "react-icons/go";

const AddProduct = () => {
  return (
    <section className='w-[1068px] h-[885px] bg-white justify-center  mx-auto p-20 gap-12 flex flex-col'>
      <div className='text-[#0E1422] text-lg '>Add Product</div>
      <div className='w-[1068px] flex text-[#E9E9EB] absolute z-50 border-b border-b-gray-500 top-[240px]' ></div>
      <div className='flex justify-between'>
        <div className='flex-col flex gap-5'>
          <div className='flex-col flex'>
            <label htmlFor="" className='text-[#474B57]'>Title</label>
            <input type="text" className='border w-[320px] h-[45px] rounded' />
          </div>
          <div className='flex-col flex'>
            <label htmlFor="" className='text-[#474B57]'>Price</label>
            <input type="text" className='border w-[320px] h-[45px] rounded my3' />
          </div>
          <div className='flex-col flex'>
            <label htmlFor="" className='text-[#474B57]'>Category</label>
            <input type="text" className='border w-[320px] h-[45px] rounded' />
          </div>
          <div className='flex-col flex'>
            <label htmlFor="" className='text-[#474B57]'>Slug</label>
            <input type="text" className='border w-[320px] h-[45px] rounded' />
          </div>
          <div className='flex-col flex'>
            <label htmlFor="" className='text-[#474B57]'>SKU</label>
            <input type="text" className='border w-[320px] h-[45px] rounded' />
          </div>
          <div className='flex-col flex'>
            <label htmlFor="" className='text-[#474B57]'>Description</label>
            <input type="text" className='border w-[320px] h-[128px] rounded' />
          </div>
        </div>
        <div className='flex-col flex gap-5'>
          <div className='flex-col flex'>
            <label htmlFor="" className='text-[#474B57]'>Stock status</label>
            <input type="text" className='border w-[320px] h-[45px] rounded' />
          </div>
          <div className='flex-col flex'>
            <label htmlFor="" className='text-[#474B57]'>Available quantity</label>
            <input type="text" className='border w-[320px] h-[45px] rounded' />
          </div>
          <div className='flex-col flex'>
            <label htmlFor="" className='text-[#474B57]'>Images</label>
            <input type="file" className='border w-[320px] h-[45px] rounded' />
          </div>
          <div className='relative flex space-x-4'>
            <div className='w-[56px] h-[56px] bg-[#F6F6F6] flex justify-center items-center my-3'><button><GoXCircle className='w-[20px] h-[20px] absolute top-0 right-0.125' /></button><img src={require("../../Images/qarakofta.png")} alt="" /></div>
            <div className='w-[56px] h-[56px] bg-[#F6F6F6] flex justify-center items-center my-3'><button><GoXCircle className='w-[20px] h-[20px] absolute top-0 right-0.125' /></button><img src={require("../../Images/qarakofta.png")} alt="" /></div>
            <div className='w-[56px] h-[56px] bg-[#F6F6F6] flex justify-center items-center mt-3'><button><GoXCircle className='w-[20px] h-[20px] absolute top-0 right-0.125' /></button><img src={require("../../Images/qarakofta.png")} alt="" /></div>
          </div>
          <div className='my-2 gap-2 flex flex-col'>
            <p>Colors</p>
            <div className='flex space-x-4'>
              <div className='w-[24px] h-[24px] rounded-full bg-[#A3BEF8]'></div>
              <div className='w-[24px] h-[24px] rounded-full bg-[#FFD58A]'></div>
              <div className='w-[24px] h-[24px] rounded-full bg-[#83B18B]'></div>
              <div className='w-[24px] h-[24px] rounded-full bg-[#4078FF]'></div>
            </div>
          </div>
          <div className='my-2 gap-2 flex flex-col'>
            <p >Sizes</p>
            <div className='flex space-x-2'>
              <div className='w-[40px] h-[40px] border border-t justify-center items-center flex rounded'>S</div>
              <div className='w-[40px] h-[40px] border border-t justify-center items-center flex rounded'>M</div>
              <div className='w-[40px] h-[40px] border border-t justify-center items-center flex rounded'>X</div>
              <div className='w-[40px] h-[40px] border border-t justify-center items-center flex rounded'>XL</div>
              <div className='w-[40px] h-[40px] border border-t justify-center items-center flex rounded'>XXL</div>
            </div>
          </div>
        </div>
      </div>
      <div><button className='w-36 h-11 bg-[#0E1422] text-[#E9E9EB]
        justify-center text-center items-center rounded'>Save Product</button></div>
    </section>
  )
}

export default AddProduct;