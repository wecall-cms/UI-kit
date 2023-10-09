import React from 'react'
import "./Typography.scss"

const Typography = () => {
    return (
        <div>
            <h1>Typography Example</h1>
            <div className='container'>
                <div className='cms__flex'>
                    <div>

                        <h2>Medium Headings</h2>
                        <h1 className='cms__medium__h1'>Heading Title</h1>
                        <h2 className='cms__medium__h2'>Heading Title</h2>
                        <h3 className='cms__medium__h3'>Heading Title</h3>
                        <h4 className='cms__medium__h4'>Heading Title</h4>
                        <h5 className='cms__medium__h5'>Heading Title</h5>
                        <h6 className='cms__medium__h6'>Heading Title</h6>
                    </div>

                    <div>

                        <h2>Semi-Bold Headings</h2>
                        <h1 className='cms__bold__h1'>Heading Title</h1>
                        <h2 className='cms__bold__h2'>Heading Title</h2>
                        <h3 className='cms__bold__h3'>Heading Title</h3>
                        <h4 className='cms__bold__h4'>Heading Title</h4>
                        <h5 className='cms__bold__h5'>Heading Title</h5>
                        <h6 className='cms__bold__h6'>Heading Title</h6>
                    </div>
                </div>
                <h2>Body Text</h2>
                <p className='cms__body__p'>
                    In ultricies fermentum aliquet. Pellentesque dui magna, condimentum non ullamcorper at, cursus in sem. Nunc condimentum, purus ac sagittis ultricies, metus leo pharetra mi, non vehicula felis elit et nisi. Etiam venenatis commodo libero, vel ullamcorper nibh lobortis vel. Aliquam auctor porta tortor, nec consequat nibh finibus a. Sed ultrices risus eget iaculis luctus. Mauris vel gravida magna.
                </p>


                <h2 style={{marginTop:100}}>Lead Text</h2>
                <p className='cms__lead__p'>
                    In ultricies fermentum aliquet. Pellentesque dui magna, condimentum non ullamcorper at, cursus in sem. Nunc condimentum, purus ac sagittis ultricies, metus leo pharetra mi, non vehicula felis elit et nisi. Etiam venenatis commodo libero, vel ullamcorper nibh lobortis vel. Aliquam auctor porta tortor, nec consequat nibh finibus a. Sed ultrices risus eget iaculis luctus. Mauris vel gravida magna.
                </p>
            </div>

        </div>
    )
}

export default Typography