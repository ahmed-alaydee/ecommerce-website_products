import React from "react";

function Catd() {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Apple",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Samasung",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Oppo",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Vivo",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Redimi",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Sony",
    },
  ];

  return (
    <>
      <div className="category">
        <div className="chead d_flex">
          <h1>Brandes</h1>
          <h1>Shops</h1>
        </div>
        {
            data.map((value,index)=>{
              return(
                <div className="box f_flex" key={index}>
                    <img src={value.cateImg} alt="" />
                    <span className="span">{value.cateName}</span>
                </div>
              )
            })
        }
        <div className="box box2">
          <button>View All Barandes</button>
        </div>
      </div>
    </>
  );
}

export default Catd;
