"use client"
import {BeatLoader, PropagateLoader, PulseLoader, SyncLoader} from "react-spinners"


export default function Loaders() {
return<div className="h-screen w-screen absolute flex items-center justify-center bg-white">
    <BeatLoader color="grey" size={15} margin={5} />
    </div>
}

