import React from 'react'


function Banner() {
    return (
        <div className="banner-section">
            <div className="px-4 py-5 my-5 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="80" fill="currentColor" class="bi bi-lightbulb-fill text-warning" viewBox="0 0 16 16">
                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <h1 className="display-5 fw-bold mt-3">Light Ups Your Idea's</h1>
                <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" className="btn btn-warning btn-lg px-4 gap-3 text-white">Add your Idea's here</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;