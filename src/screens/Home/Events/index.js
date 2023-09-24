import React from 'react'
import CarouselEvent from '../_components/CarouselEvent'
import CarouselEventContent from '../_components/CarouselEventContent'
import EventCreators from '../_components/EventCreator'
import EventSponsor from '../_components/EventSponsor'

export default function Eventpage() {
    return (
        <div>
            <CarouselEvent/>
            <CarouselEventContent/>
            <EventCreators/>
            <EventSponsor/>
        </div>
    )
};
