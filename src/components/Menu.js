import React from 'react'
import { useState } from 'react'

function Menu() {
    const [ShowOnlyAll, setShowOnlyAll] = useState("block");
    const [allColor, setAllColor] = useState("white");
    const [allBgColor, setAllBgColor] = useState("slate-800");

    const [ShowOnlyBurger, setShowOnlyBurger] = useState("hidden");
    const [burgerColor, setBurgerColor] = useState("black");
    const [burgerBgColor, setBurgerBgColor] = useState("white");

    const [ShowOnlyPizza, setShowOnlyPizza] = useState("hidden");
    const [pizzaColor, setPizzaColor] = useState("black");
    const [pizzaBgColor, setPizzaBgColor] = useState("white");

    const [ShowOnlyPasta, setShowOnlyPasta] = useState("hidden");
    const [pastaColor, setPastaColor] = useState("black");
    const [pastaBgColor, setPastaBgColor] = useState("white");

    const [ShowOnlyFries, setShowOnlyFries] = useState("hidden");
    const [friesColor, setFriesColor] = useState("black");
    const [friesBgColor, setFriesBgColor] = useState("white");

    const clickAll = () => {
        setAllColor("white")
        setAllBgColor("slate-800")
        setBurgerColor("black")
        setBurgerBgColor("white")
        setPizzaColor("black")
        setPizzaBgColor("white")
        setPastaColor("black")
        setPastaBgColor("white")
        setFriesColor("black")
        setFriesBgColor("white")
        setShowOnlyAll("block")
        setShowOnlyPizza("hidden")
        setShowOnlyPasta("hidden")
        setShowOnlyBurger("hidden")
        setShowOnlyFries("hidden")

    }
    const clickBurger = () => {
        setBurgerColor("white")
        setBurgerBgColor("slate-800")
        setAllColor("black")
        setAllBgColor("white")
        setPizzaColor("black")
        setPizzaBgColor("white")
        setPastaColor("black")
        setPastaBgColor("white")
        setFriesColor("black")
        setFriesBgColor("white")
        setShowOnlyAll("hidden")
        setShowOnlyBurger("block")
        setShowOnlyPizza("hidden")
        setShowOnlyPasta("hidden")
    }

    const clickPizza = () => {
        setPizzaColor("white")
        setPizzaBgColor("slate-800")
        setBurgerColor("black")
        setBurgerBgColor("white")
        setAllColor("black")
        setAllBgColor("white")
        setPastaColor("black")
        setPastaBgColor("white")
        setFriesColor("black")
        setFriesBgColor("white")
        setShowOnlyBurger("hidden")
        setShowOnlyAll('hidden')
        setShowOnlyPizza("block")
        setShowOnlyPasta("hidden")
        setShowOnlyFries("hidden")


    }
    const clickPasta = () => {
        setPastaColor("white")
        setPastaBgColor("slate-800")
        setPizzaColor("black")
        setPizzaBgColor("white")
        setBurgerColor("black")
        setBurgerBgColor("white")
        setAllColor("black")
        setAllBgColor("white")
        setShowOnlyBurger("hidden")
        setShowOnlyAll('hidden')
        setShowOnlyPizza("hidden")
        setShowOnlyFries("hidden")
        setShowOnlyPasta("block")
        setFriesColor("black")
        setFriesBgColor("white")


    }
    const clickFries = () => {
        setFriesColor("white")
        setFriesBgColor("slate-800")
        setPastaColor("black")
        setPastaBgColor("white")
        setPizzaColor("black")
        setPizzaBgColor("white")
        setBurgerColor("black")
        setBurgerBgColor("white")
        setAllColor("black")
        setAllBgColor("white")
        setShowOnlyBurger("hidden")
        setShowOnlyAll('hidden')
        setShowOnlyPizza("hidden")
        setShowOnlyPasta("hidden")
        setShowOnlyFries("block")


    }


    return (


        <div className='w-full h-auto mb-20 bg-white '>
            <div className="w-full h-auto bg-white flex flex-col items-center  ">

                <h1 className="font-bold text-4xl italic text-slate-800">Our Menu</h1>
                <div className="border-b-4 rounded-lg border-yellow-500 w-20 my-1">

                </div>
            </div>
            <div className='w-full flex justify-center items-center my-20'>
                <ul className='w-full flex justify-center items-center  text-lg '>
                    <li className={`text-${allColor} bg-${allBgColor} px-6 py-1 rounded-3xl  hover:cursor-pointer`} onClick={clickAll}>All</li>
                    <li className={`text-${burgerColor} bg-${burgerBgColor}  px-6 py-1 rounded-3xl hover:cursor-pointer`} onClick={clickBurger} >Burger</li>
                    <li className={`text-${pizzaColor} bg-${pizzaBgColor}  px-6 py-1 rounded-3xl hover:cursor-pointer`} onClick={clickPizza}>Pizza</li>
                    <li className={`text-${pastaColor} bg-${pastaBgColor}  px-6 py-1 rounded-3xl hover:cursor-pointer`} onClick={clickPasta}>Pasta</li>
                    <li className={`text-${friesColor} bg-${friesBgColor}  px-6 py-1 rounded-3xl hover:cursor-pointer`} onClick={clickFries}>Fries</li>
                </ul>
            </div>
            {/* all menu */}
            <div className={`${ShowOnlyAll}`}>
                {/* <!-- our menu --> */}
                <div className="bg-white w-full h-auto ">
                    <div className="flex justify-evenly w-full mt-10 flex-wrap gap-8  ">
                        <div className="w-[23rem] h-[26rem] bg-slate-800 rounded-xl flex flex-col items-center overflow-hidden
                hover:shadow-2xl shadow-black transition delay-150 duration-300 ease-in-out ">
                            <div className="bg-gray-200 w-full h-[50%] flex flex-col items-center justify-center rounded-bl-3xl ">
                                <img className="h-40  " src="/images/f1.png" alt="" />
                            </div>
                            <div className="text-white flex  flex-col flex-wrap my-6 mx-5 ">
                                <h1 className="text-3xl my-2 font-bold">Delicious Pizza</h1>
                                <p>This mouth-watering pizza is topped with fresh tomatoes, mozzarella cheese, and basil, all on
                                    a crispy crust. Perfect for any occasion!</p>
                                <div className="font-semibold text-lg flex justify-between items-center mt-8">
                                    <p className="">₹300</p>
                                    <button className="w-10 h-10 bg-yellow-500 rounded-full self-end hover:bg-orange-500 "> <i
                                        className="fa-solid fa-cart-shopping mx-1"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="w-[23rem] h-[26rem] bg-slate-800 rounded-xl flex flex-col items-center overflow-hidden
                hover:shadow-2xl shadow-black ">
                            <div className="bg-gray-200 w-full h-[50%] flex flex-col items-center justify-center rounded-bl-3xl ">
                                <img className="h-32  " src="/images/f2.png" alt="" />
                            </div>
                            <div className="text-white flex  flex-col flex-wrap my-6 mx-5 ">
                                <h1 className="text-3xl my-2 font-bold">Delicious Burger</h1>
                                <p className="">This juicy burger is topped with fresh lettuce, tomato, cheese, and a special
                                    sauce, all
                                    sandwiched between a toasted sesame bun! </p>

                                <div className="font-semibold text-lg flex justify-between items-center mt-8">
                                    <p className="">₹350</p>
                                    <button className="w-10 h-10 bg-yellow-500 rounded-full self-end hover:bg-orange-500 "> <i
                                        className="fa-solid fa-cart-shopping mx-1"></i></button>
                                </div>
                            </div>
                        </div>

                        <div className="w-[23rem] h-[26rem] bg-slate-800 rounded-xl flex flex-col items-center overflow-hidden
                hover:shadow-2xl shadow-black ">
                            <div className="bg-gray-200 w-full h-[50%] flex flex-col items-center justify-center rounded-bl-3xl ">
                                <img className="h-36  " src="/images/f3.png" alt="" />
                            </div>
                            <div className="text-white flex  flex-col flex-wrap my-6 mx-5 ">
                                <h1 className="text-3xl my-2 font-bold">Delicious Pizza</h1>
                                <p>This mouth-watering pizza is topped with fresh tomatoes, mozzarella cheese, and basil, all on
                                    a crispy crust. Perfect for any occasion!</p>
                                <div className="font-semibold text-lg flex justify-between items-center mt-8">
                                    <p className="">₹500</p>
                                    <button className="w-10 h-10 bg-yellow-500 rounded-full self-end hover:bg-orange-500 "> <i
                                        className="fa-solid fa-cart-shopping mx-1"></i></button>
                                </div>
                            </div>
                        </div>


                        <div className="w-[23rem] h-[26rem] bg-slate-800 rounded-xl flex flex-col items-center overflow-hidden
                hover:shadow-2xl shadow-black ">
                            <div className="bg-gray-200 w-full h-[50%] flex flex-col items-center justify-center rounded-bl-3xl ">
                                <img className="h-32  " src="/images/f4.png" alt="" />
                            </div>
                            <div className="text-white flex  flex-col flex-wrap my-6 mx-5 ">
                                <h1 className="text-3xl my-2 font-bold">Delicious Pasta</h1>
                                <p>This delightful pasta is tossed with a rich and creamy Alfredo sauce, garnished with freshly
                                    grated Parmesan cheese and parsley!</p>

                                <div className="font-semibold text-lg flex justify-between items-center mt-8">
                                    <p className="">₹370</p>
                                    <button className="w-10 h-10 bg-yellow-500 rounded-full self-end  hover:bg-orange-500"> <i
                                        className="fa-solid fa-cart-shopping mx-1"></i></button>
                                </div>
                            </div>
                        </div>

                        <div className="w-[23rem] h-[26rem] bg-slate-800 rounded-xl flex flex-col items-center overflow-hidden
                hover:shadow-2xl shadow-black ">
                            <div className="bg-gray-200 w-full h-[50%] flex flex-col items-center justify-center rounded-bl-3xl ">
                                <img className="h-40  " src="/images/f5.png" alt="" />
                            </div>
                            <div className="text-white flex  flex-col flex-wrap my-6 mx-5 ">
                                <h1 className="text-3xl my-2 font-bold">French Fries</h1>
                                <p>These crispy golden French fries are perfectly seasoned and cooked to perfection, making them
                                    the ideal side dish or snack!</p>

                                <div className="font-semibold text-lg flex justify-between items-center mt-8">
                                    <p className="">₹200</p>
                                    <button className="w-10 h-10 bg-yellow-500 rounded-full self-end hover:bg-orange-500 "> <i
                                        className="fa-solid fa-cart-shopping mx-1"></i></button>
                                </div>
                            </div>
                        </div>

                        <div className="w-[23rem] h-[26rem] bg-slate-800 rounded-xl flex flex-col items-center overflow-hidden
                hover:shadow-2xl shadow-black ">
                            <div className="bg-gray-200 w-full h-[50%] flex flex-col items-center justify-center rounded-bl-3xl ">
                                <img className="h-36  " src="/images/f6.png" alt="" />
                            </div>
                            <div className="text-white flex  flex-col flex-wrap my-6 mx-5 ">
                                <h1 className="text-3xl my-2 font-bold">Delicious Pizza</h1>
                                <p>This mouth-watering pizza is topped with fresh tomatoes, mozzarella cheese, and basil, all on
                                    a crispy crust. Perfect for any occasion!</p>
                                <div className="font-semibold text-lg flex justify-between items-center mt-8">
                                    <p className="">₹300</p>
                                    <button className="w-10 h-10 bg-yellow-500 rounded-full self-end hover:bg-orange-500"> <i
                                        className="fa-solid fa-cart-shopping mx-1"></i></button>
                                </div>
                            </div>
                        </div>

                        <div className="w-[23rem] h-[26rem] bg-slate-800 rounded-xl flex flex-col items-center overflow-hidden
                hover:shadow-2xl shadow-black ">
                            <div className="bg-gray-200 w-full h-[50%] flex flex-col items-center justify-center rounded-bl-3xl ">
                                <img className="h-40  " src="/images/f7.png" alt="" />
                            </div>
                            <div className="text-white flex  flex-col flex-wrap my-6 mx-5 ">
                                <h1 className="text-3xl my-2 font-bold">Tasty Burger</h1>
                                <p>This tasty burger features a juicy beef patty topped with melted cheese, crisp lettuce, fresh
                                    tomato,, all nestled in a soft, toasted bun.!</p>

                                <div className="font-semibold text-lg flex justify-between items-center mt-8">
                                    <p className="">₹250</p>
                                    <button className="w-10 h-10 bg-yellow-500 rounded-full self-end hover:bg-orange-500"> <i
                                        className="fa-solid fa-cart-shopping mx-1"></i></button>
                                </div>
                            </div>
                        </div>

                        <div className="w-[23rem] h-[26rem] bg-slate-800 rounded-xl flex flex-col items-center overflow-hidden
                hover:shadow-2xl shadow-black ">
                            <div className="bg-gray-200 w-full h-[50%] flex flex-col items-center justify-center rounded-bl-3xl ">
                                <img className="h-40  " src="/images/f8.png" alt="" />
                            </div>
                            <div className="text-white flex  flex-col flex-wrap my-6 mx-5 ">
                                <h1 className="text-3xl my-2 font-bold">Tasty Burger</h1>
                                <p>This tasty burger features a juicy beef patty topped with melted cheese, crisp lettuce, fresh
                                    tomato,, all nestled in a soft, toasted bun.!</p>
                                <div className="font-semibold text-lg flex justify-between items-center mt-8">
                                    <p className="">₹199</p>
                                    <button className="w-10 h-10 bg-yellow-500 rounded-full self-end hover:bg-orange-500"> <i
                                        className="fa-solid fa-cart-shopping mx-1"></i></button>
                                </div>
                            </div>
                        </div>

                        <div className="w-[23rem] h-[26rem] bg-slate-800 rounded-xl flex flex-col items-center overflow-hidden
                hover:shadow-2xl shadow-black ">
                            <div className="bg-gray-200 w-full h-[50%] flex flex-col items-center justify-center rounded-bl-3xl ">
                                <img className="h-40  " src="/images/f9.png" alt="" />
                            </div>
                            <div className="text-white flex  flex-col flex-wrap my-6 mx-5 ">
                                <h1 className="text-3xl my-2 font-bold">Delicious Pasta</h1>
                                <p>This delightful pasta is tossed with a rich and creamy Alfredo sauce, garnished with freshly
                                    grated Parmesan cheese and parsley!</p>
                                <div className="font-semibold text-lg flex justify-between items-center mt-8">
                                    <p className="">₹399</p>
                                    <button className="w-10 h-10 bg-yellow-500 rounded-full self-end hover:bg-orange-500"> <i
                                        className="fa-solid fa-cart-shopping mx-1"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* burger menu */}
            <div className={`bg-white w-full min-h-[62vh] ${ShowOnlyBurger} `}>
                <div className="flex justify-evenly w-full mt-10 flex-wrap gap-8 ">
                    <div className="w-[23rem] h-[26rem] bg-slate-800 rounded-xl flex flex-col items-center overflow-hidden
                hover:shadow-2xl shadow-black ">
                        <div className="bg-gray-200 w-full h-[50%] flex flex-col items-center justify-center rounded-bl-3xl ">
                            <img className="h-32  " src="/images/f2.png" alt="" />
                        </div>
                        <div className="text-white flex  flex-col flex-wrap my-6 mx-5 ">
                            <h1 className="text-3xl my-2 font-bold">Delicious Burger</h1>
                            <p className="">This juicy burger is topped with fresh lettuce, tomato, cheese, and a special
                                sauce, all
                                sandwiched between a toasted sesame bun! </p>

                            <div className="font-semibold text-lg flex justify-between items-center mt-8">
                                <p className="">₹350</p>
                                <button className="w-10 h-10 bg-yellow-500 rounded-full self-end hover:bg-orange-500 "> <i
                                    className="fa-solid fa-cart-shopping mx-1"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="w-[23rem] h-[26rem] bg-slate-800 rounded-xl flex flex-col items-center overflow-hidden
                hover:shadow-2xl shadow-black ">
                        <div className="bg-gray-200 w-full h-[50%] flex flex-col items-center justify-center rounded-bl-3xl ">
                            <img className="h-40  " src="/images/f7.png" alt="" />
                        </div>
                        <div className="text-white flex  flex-col flex-wrap my-6 mx-5 ">
                            <h1 className="text-3xl my-2 font-bold">Tasty Burger</h1>
                            <p>This tasty burger features a juicy beef patty topped with melted cheese, crisp lettuce, fresh
                                tomato,, all nestled in a soft, toasted bun.!</p>

                            <div className="font-semibold text-lg flex justify-between items-center mt-8">
                                <p className="">₹250</p>
                                <button className="w-10 h-10 bg-yellow-500 rounded-full self-end hover:bg-orange-500"> <i
                                    className="fa-solid fa-cart-shopping mx-1"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="w-[23rem] h-[26rem] bg-slate-800 rounded-xl flex flex-col items-center overflow-hidden
                hover:shadow-2xl shadow-black ">
                        <div className="bg-gray-200 w-full h-[50%] flex flex-col items-center justify-center rounded-bl-3xl ">
                            <img className="h-40  " src="/images/f8.png" alt="" />
                        </div>
                        <div className="text-white flex  flex-col flex-wrap my-6 mx-5 ">
                            <h1 className="text-3xl my-2 font-bold">Tasty Burger</h1>
                            <p>This tasty burger features a juicy beef patty topped with melted cheese, crisp lettuce, fresh
                                tomato,, all nestled in a soft, toasted bun.!</p>
                            <div className="font-semibold text-lg flex justify-between items-center mt-8">
                                <p className="">₹199</p>
                                <button className="w-10 h-10 bg-yellow-500 rounded-full self-end hover:bg-orange-500"> <i
                                    className="fa-solid fa-cart-shopping mx-1"></i></button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            {/* pizza menu */}
            <div className={`bg-white w-full min-h-[62vh] ${ShowOnlyPizza} `}>
                <div className="flex justify-evenly w-full mt-10 flex-wrap gap-8 ">
                    <div className="w-[23rem] h-[26rem] bg-slate-800 rounded-xl flex flex-col items-center overflow-hidden
                hover:shadow-2xl shadow-black ">
                        <div className="bg-gray-200 w-full h-[50%] flex flex-col items-center justify-center rounded-bl-3xl ">
                            <img className="h-40  " src="/images/f1.png" alt="" />
                        </div>
                        <div className="text-white flex  flex-col flex-wrap my-6 mx-5 ">
                            <h1 className="text-3xl my-2 font-bold">Delicious Pizza</h1>
                            <p>This mouth-watering pizza is topped with fresh tomatoes, mozzarella cheese, and basil, all on
                                a crispy crust. Perfect for any occasion!</p>
                            <div className="font-semibold text-lg flex justify-between items-center mt-8">
                                <p className="">₹300</p>
                                <button className="w-10 h-10 bg-yellow-500 rounded-full self-end hover:bg-orange-500 "> <i
                                    className="fa-solid fa-cart-shopping mx-1"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="w-[23rem] h-[26rem] bg-slate-800 rounded-xl flex flex-col items-center overflow-hidden
                hover:shadow-2xl shadow-black ">
                        <div className="bg-gray-200 w-full h-[50%] flex flex-col items-center justify-center rounded-bl-3xl ">
                            <img className="h-36  " src="/images/f3.png" alt="" />
                        </div>
                        <div className="text-white flex  flex-col flex-wrap my-6 mx-5 ">
                            <h1 className="text-3xl my-2 font-bold">Delicious Pizza</h1>
                            <p>This mouth-watering pizza is topped with fresh tomatoes, mozzarella cheese, and basil, all on
                                a crispy crust. Perfect for any occasion!</p>
                            <div className="font-semibold text-lg flex justify-between items-center mt-8">
                                <p className="">₹500</p>
                                <button className="w-10 h-10 bg-yellow-500 rounded-full self-end hover:bg-orange-500 "> <i
                                    className="fa-solid fa-cart-shopping mx-1"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="w-[23rem] h-[26rem] bg-slate-800 rounded-xl flex flex-col items-center overflow-hidden
                hover:shadow-2xl shadow-black ">
                        <div className="bg-gray-200 w-full h-[50%] flex flex-col items-center justify-center rounded-bl-3xl ">
                            <img className="h-36  " src="/images/f6.png" alt="" />
                        </div>
                        <div className="text-white flex  flex-col flex-wrap my-6 mx-5 ">
                            <h1 className="text-3xl my-2 font-bold">Delicious Pizza</h1>
                            <p>This mouth-watering pizza is topped with fresh tomatoes, mozzarella cheese, and basil, all on
                                a crispy crust. Perfect for any occasion!</p>
                            <div className="font-semibold text-lg flex justify-between items-center mt-8">
                                <p className="">₹300</p>
                                <button className="w-10 h-10 bg-yellow-500 rounded-full self-end hover:bg-orange-500"> <i
                                    className="fa-solid fa-cart-shopping mx-1"></i></button>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            {/* pasta menu */}
            <div className={`bg-white w-full min-h-[62vh] ${ShowOnlyPasta} `}>
                <div className="flex justify-center w-full mt-10 flex-wrap gap-8 ">
                    <div className="w-[23rem] h-[26rem] bg-slate-800 rounded-xl flex flex-col items-center overflow-hidden
                hover:shadow-2xl shadow-black ">
                        <div className="bg-gray-200 w-full h-[50%] flex flex-col items-center justify-center rounded-bl-3xl ">
                            <img className="h-32  " src="/images/f4.png" alt="" />
                        </div>
                        <div className="text-white flex  flex-col flex-wrap my-6 mx-5 ">
                            <h1 className="text-3xl my-2 font-bold">Delicious Pasta</h1>
                            <p>This delightful pasta is tossed with a rich and creamy Alfredo sauce, garnished with freshly
                                grated Parmesan cheese and parsley!</p>

                            <div className="font-semibold text-lg flex justify-between items-center mt-8">
                                <p className="">₹370</p>
                                <button className="w-10 h-10 bg-yellow-500 rounded-full self-end  hover:bg-orange-500"> <i
                                    className="fa-solid fa-cart-shopping mx-1"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="w-[23rem] h-[26rem] bg-slate-800 rounded-xl flex flex-col items-center overflow-hidden
                hover:shadow-2xl shadow-black ">
                        <div className="bg-gray-200 w-full h-[50%] flex flex-col items-center justify-center rounded-bl-3xl ">
                            <img className="h-40  " src="/images/f9.png" alt="" />
                        </div>
                        <div className="text-white flex  flex-col flex-wrap my-6 mx-5 ">
                            <h1 className="text-3xl my-2 font-bold">Delicious Pasta</h1>
                            <p>This delightful pasta is tossed with a rich and creamy Alfredo sauce, garnished with freshly
                                grated Parmesan cheese and parsley!</p>
                            <div className="font-semibold text-lg flex justify-between items-center mt-8">
                                <p className="">₹399</p>
                                <button className="w-10 h-10 bg-yellow-500 rounded-full self-end hover:bg-orange-500"> <i
                                    className="fa-solid fa-cart-shopping mx-1"></i></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* fries */}
            <div className={`bg-white w-full min-h-[62vh] ${ShowOnlyFries} `}>
                <div className="flex justify-center w-full mt-10 flex-wrap gap-8 ">
                    <div className="w-[23rem] h-[26rem] bg-slate-800 rounded-xl flex flex-col items-center overflow-hidden
                hover:shadow-2xl shadow-black ">
                        <div className="bg-gray-200 w-full h-[50%] flex flex-col items-center justify-center rounded-bl-3xl ">
                            <img className="h-40  " src="/images/f5.png" alt="" />
                        </div>
                        <div className="text-white flex  flex-col flex-wrap my-6 mx-5 ">
                            <h1 className="text-3xl my-2 font-bold">French Fries</h1>
                            <p>These crispy golden French fries are perfectly seasoned and cooked to perfection, making them
                                the ideal side dish or snack!</p>

                            <div className="font-semibold text-lg flex justify-between items-center mt-8">
                                <p className="">₹200</p>
                                <button className="w-10 h-10 bg-yellow-500 rounded-full self-end hover:bg-orange-500 "> <i
                                    className="fa-solid fa-cart-shopping mx-1"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Menu