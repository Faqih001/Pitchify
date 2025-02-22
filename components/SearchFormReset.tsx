"use client"

import Link from "next/link";
import {X} from "lucide-react";

// The SearchFormReset component is a wrapper around the button element
const SearchFormReset = () => {

    // The reset function is used to reset the form
    const reset = () => {

        // The form element is selected using the querySelector method
        const form = document.querySelector('.search-form') as HTMLFormElement;

        // The reset method is called on the form element
        if(form) form.reset();
    }

    // The SearchFormReset component returns the button element
    return (
        <button type="reset" onClick={reset} title="Reset Search Form">
            <Link href="/" className="search-btn text-white">
                <X className="size-5" />
            </Link>
        </button>
    )
}
export default SearchFormReset
