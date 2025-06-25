export default function dayForecast({day, temperature, condition}) {
    return (
        <>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div class="p-5">
                    <p>{day}</p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{temperature}</p>
                    <p>{condition}</p>
                </div>
            </div>
        </>
    );
}