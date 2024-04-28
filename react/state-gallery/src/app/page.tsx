"use client"

import { photoList } from "@/data/photoList";
import { useState } from "react";


export default function Home() {
    const [showModal, setShowModal] = useState(true);
    const [modalImage, setModalImage] = useState('');

    function handleImageClick(url: string){
        setShowModal(true) 
        setModalImage(`/images/${url}`)
    }

    function closeModal(){
        setShowModal(false);
    }

    return (
        
        <main>
            <h1>Photos Gallery</h1>

            <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

                {
                    photoList.map(item => (
                        <img 
                            src={`/images/${item.url}`}
                            alt="image photolist" 
                            id={String(item.id)}
                            className="w-80 h-40 object-cover hover:brightness-50 transition-all hover:scale-105 cursor-pointer"
                            onClick={e => handleImageClick(item.url)}
                        />
                    ))
                    
                }

                {showModal && 
                    
                    <div className="absolute top-0 left-0 h-screen w-screen flex justify-center items-center ">

                        <div className=" bg-white rounded  relative " style={{width: '48rem', height: '30rem'}}>
                            <img 
                                src={`${modalImage}`} 
                                alt="modalImage" 
                                
                                className="absolute w-full  h-full -left-0 bottom-0 object-cover z-0"
                            />

                            <button className="z-10 absolute top-2 right-2 h-8 w-8" onClick={closeModal}>
                                <img 
                                    src="/assets/close.svg"
                                    alt="close"

                                />
                            </button>
                        </div>

                    </div>

                }

            </section>
        </main>


        );
}
