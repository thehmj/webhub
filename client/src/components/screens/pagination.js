import React from 'react'

const Pagination = ({ postsPerPage, totalposts, paginate, currentPage }) => {
    const pageNumbers = [];
    // console.log(totalposts);
    // console.log(postsPerPage);
    for(let i = 1; i <= Math.ceil(totalposts / postsPerPage); i++){
        pageNumbers.push(i);
    }

    // console.log(pageNumbers);

  return (
      
    <>
        <div className='pagenumber'  style={{textAlign:'center'}}>
            <span><div className='pageno' onClick={() =>paginate(currentPage - 1)}>&nbsp;&nbsp;Previous&nbsp;&nbsp;</div></span>
            {pageNumbers.map(number =>(
                <span>
                
                <span key={number}>
                    <div className='pageno' onClick={() =>paginate(number)}>&nbsp;&nbsp;{number}&nbsp;&nbsp;</div>
                </span>
                
                </span>
            ))}
            <span><div className='pageno'  onClick={() =>paginate(currentPage + 1)}>&nbsp;&nbsp;Next&nbsp;&nbsp;</div></span>

        </div>
    
    </>
  )
}

export default Pagination