



// Max Width for website
export default function MaxWidthWrapper({children}) {
return(
    <div className="max-w-6xl mx-auto mt-[15px] px-4 sm:px-6 lg:px-8">
        {children}
    </div>
)
}