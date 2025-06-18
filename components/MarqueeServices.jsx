import React from 'react'

function MarqueeServices() {
    const services = ["Wireframing", "Prototyping", "UI UX designing", "Web designing"];

    return (
        <div className='absolute bottom-[32px] py-6 border-y border-secondary overflow-hidden'>
            <div className='flex gap-6 animate-scroll whitespace-nowrap'>
                {/* First set of services */}
                {services.map((service, index) => (
                    <div className='flex gap-6 flex-shrink-0' key={`first-${index}`}>
                        <span className='whitespace-nowrap'>{service}</span>
                        <img src="/icons/divider.svg" alt="" className='w-[10px] aspect-square flex-shrink-0' />
                    </div>
                ))}
                
                {/* Second set of services for seamless loop */}
                {services.map((service, index) => (
                    <div className='flex gap-6 flex-shrink-0' key={`second-${index}`}>
                        <span className='whitespace-nowrap'>{service}</span>
                        <img src="/icons/divider.svg" alt="" className='w-[10px] aspect-square flex-shrink-0' />
                    </div>
                ))}
                
                {/* Third set of services for extra smoothness */}
                {services.map((service, index) => (
                    <div className='flex gap-6 flex-shrink-0' key={`third-${index}`}>
                        <span className='whitespace-nowrap'>{service}</span>
                        <img src="/icons/divider.svg" alt="" className='w-[10px] aspect-square flex-shrink-0' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MarqueeServices