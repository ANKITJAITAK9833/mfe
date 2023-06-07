import { mount } from 'marketing/MarketingApp';
import React , {useRef, useEffect} from 'react';

console.log(mount);

export default () => {
    const ref = useRef(null);

    useEffect(() => {
     mount(ref.current);
    });

    return <div ref = {ref} />;
}

// We are writing this js file to execute the mount function as it is coming from other micro frontend.
// mount function is a function(not React component) that takes reference of an HTML element and displays content inside that element.
// mount is not a React component that can be directy used as <mount/>
// We are calling mount function with an element ref from userRef(null)  and it will return us the code from mount funtion and we will render it in a div usinf ref = {ref}