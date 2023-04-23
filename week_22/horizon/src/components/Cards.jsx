import React from 'react'

function Cards() {
  return (
    <div>
        <div className="container my-5">
        <div className="row">
            <div className="col-md-3">
                <div className="card text-center">
                    <img src={require('../images/p2.avif')} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">VIP ROOMS</h5>
                      <p className="card-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse ullam perspiciatis ipsa. A, magni.
                        Itaque inventore excepturi molestiae dolores nobis ut quod porro cumque nihil ducimus. Inventore, perferendis rem?
                        Vel fugiat magnam incidunt optio
                        
                      </p>
                    </div>
                  </div>
            </div>

            <div className="col-md-3 text-center">
                <div className="card">
                    <img src={require('../images/p4.jpeg')} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">EXECUTIVE ROOMS</h5>
                      <p className="card-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse ullam perspiciatis ipsa. A, magni.
                        Itaque inventore excepturi molestiae dolores nobis ut quod porro cumque nihil ducimus. Inventore, perferendis rem?
                        Vel fugiat magnam incidunt optio
                      </p>
                    </div>
                  </div>
            </div>

            <div className="col-md-3">
                <div className="card text-center">
                    <img src={require('../images/p5.jpeg')} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">CONFERENCE ROOM</h5>
                      <p className="card-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse ullam perspiciatis ipsa. A, magni.
                        Itaque inventore excepturi molestiae dolores nobis ut quod porro cumque nihil ducimus. Inventore, perferendis rem?
                        Vel fugiat magnam incidunt optio
                      </p>
                    </div>
                  </div>
            </div>

            <div className="col-md-3 text-center">
                <div className="card">
                    <img src={require('../images/p6.jpeg')} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">NORMAL ROOM</h5>
                      <p className="card-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse ullam perspiciatis ipsa. A, magni.
                        Itaque inventore excepturi molestiae dolores nobis ut quod porro cumque nihil ducimus. Inventore, perferendis rem?
                        Vel fugiat magnam incidunt optio
                      </p>
                    </div>
                  </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Cards