import React from 'react';

const UsPage = () => {
    const data = [
        {
            name: 'Marcelo Torres',
            image: 'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5af1544c5cafe8075d4da80a/elefante.jpg'
        },
        {
            name: 'Cristian Gonzalez',
            image: 'https://dam.ngenespanol.com/wp-content/uploads/2021/02/GettyImages-1033902830.jpg'
        },
        {
            name: 'Graciela Gimenez',
            image: 'https://www.ngenespanol.com/wp-content/uploads/2018/08/El-secreto-de-los-animales-que-miran-el-mundo-al-rev%C3%A9s-1280x720.jpg'
        },
        {
            name: 'Ivan Caceres',
            image: 'https://www.hogarmania.com/archivos/201704/madres-reino-animal-leona-XxXx80.jpg'
        },
        {
            name: 'Mabel Toledo',
            image: 'https://i2.wp.com/valor-compartido.com/wp-content/uploads/2021/02/panda-3875289_1280.jpg?fit=1280%2C883&ssl=1'
        },
        {
            name: 'Iris Moreira',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk920MB01xGrgNN4A0goI3FL4qL2el6NmW8g&usqp=CAU'
        },
    ]
    return (
        <div className="container">
            <h1 className="text-center my-4">Miembros</h1>
            <div id="carouselExampleControls" className="carousel carousel-dark slide my-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <div className="d-flex justify-content-center">
                            {data.slice(0,3).map((item) => (
                                <div className="col-3 text-center">
                                    <div className="mx-2">
                                        <img src={item.image} width="200" height="200" className="rounded-circle shadow mx-auto" alt="..."/>
                                        <h5 className="mt-4 text-uppercase">{item.name}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex justify-content-center">
                            {data.slice(3,6).map((item) => (
                                <div className="col-3 text-center">
                                    <div className=" mx-2">
                                        <img src={item.image} width="200" height="200" className="rounded-circle shadow mx-auto" alt="..."/>
                                        <h5 className="mt-4 text-uppercase">{item.name}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
        </div>
    )
}

export default UsPage;