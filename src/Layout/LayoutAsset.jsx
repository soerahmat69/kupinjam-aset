import React from 'react'
export const LayoutAsset = ({children}) => {
  return (
    <React.Fragment>
   
         <div className="flex   py-7 gap-[40px] h-screen px-7 w-full">
      
{children}
    </div>
    </React.Fragment>
  )
}
export const LayoutAssetDetail = ({children}) => {
  return (
    <React.Fragment>
    <div className="flex py-7 gap-[40px] h-screen px-7 w-full">
{children}
</div>
</React.Fragment>
  )
}
