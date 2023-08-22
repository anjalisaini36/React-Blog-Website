import React from 'react';
import moment from 'moment'
import { Link } from "react-router-dom";


function Home(props) {
    const{blogData,handleDelete}=props;
  return (
    <div>
      <div className="container">
          <div className=" row blog-card-class row-cols-3 g-5 mb-5">
            {blogData.map((item, index) => {
              return (
                <div className="col" key={index}>
                  <div className="blog-div-class px-2 py-3 mt-5">
                    <img src={item.file} alt="" height={200} width={270} />
                    <div className=" mt-4 card-body">
                      <h6>{item.title}</h6>
                      <p>by <span className='spanClass '>{item.name}</span></p>
                     <p>{moment(item.date).format('MMMM Do YYYY, h:mm:ss a')}</p>
                      <p className="blogSummary">{item.summary}</p>
                      <p>{item.content}</p>
                      <div className="mt-2">
                        <Link to={item._id} ><button className='btn btn-primary'>Full Detail</button></Link>
                        <Link to={`/update/${item._id}`} className='m-3'><button className='btn btn-primary'>Edit Blog</button></Link>
                        {/* <Link to={item._id}><button onClick={handleDelete}>delete</button></Link> */}
                        <button className='btn btn-primary' onClick={()=>handleDelete(item._id)}>delete</button>
                    
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
      </div>
    </div>
  )
}

export default Home
